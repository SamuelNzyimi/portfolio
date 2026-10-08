document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const intro = document.getElementById('intro-screen');
    const nav = document.getElementById('main-nav');
    const progress = document.getElementById('loader-progress');
    const percentage = document.getElementById('loader-percentage');
    const role = document.getElementById('loader-role');
    const title = document.getElementById('loader-title');

    const roles = [
        { limit: 25, text: "WEB/APP DEV" },
        { limit: 50, text: "EXCEL MODELS" },
        { limit: 75, text: "AI INTEGRATION" },
        { limit: 100, text: "PRODUCT DESIGN" }
    ];

    let count = 0;
    const loaderInterval = setInterval(() => {
        count += 1;
        percentage.textContent = `${count}%`;
        gsap.to(progress, { scaleX: count / 100, duration: 0.1, ease: 'none' });

        const currentRole = roles.find(r => count <= r.limit) || roles[roles.length - 1];
        if (role.textContent !== currentRole.text) {
            gsap.to(role, { opacity: 0, y: 5, duration: 0.1, onComplete: () => {
                role.textContent = currentRole.text;
                gsap.to(role, { opacity: 1, y: 0, duration: 0.1 });
            }});
        }

        if (count >= 100) {
            clearInterval(loaderInterval);
            finishLoading();
        }
    }, 30);

    // ── Magnetic Text Effect ──────────────────────────────────────────
    // Per-letter cursor distortion effect where characters move elastically
    // based on cursor proximity, following the implementation spec from
    // the research paper.

    // Split each magnetic-text element into individual character spans
    const chars = [];
    document.querySelectorAll('.magnetic-text').forEach(textEl => {
        const originalHTML = textEl.innerHTML;
        const lines = originalHTML.split(/<br\s*\/?>/i); // Split on any form of <br> tag

        textEl.innerHTML = '';

        lines.forEach((line, lineIndex) => {
            const lineSpan = document.createElement('span');
            lineSpan.className = `line line-${lineIndex + 1}`;
            lineSpan.style.display = 'block';
            lineSpan.style.whiteSpace = 'nowrap';

            // Decode HTML entities first
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = line.trim();
            const decodedText = tempDiv.textContent || tempDiv.innerText || '';

            [...decodedText].forEach(ch => {
                const charSpan = document.createElement('span');
                charSpan.className = 'char';
                charSpan.textContent = ch === ' ' ? '\u00A0' : ch;
                charSpan.style.display = 'inline-block';
                charSpan.style.willChange = 'transform';

                lineSpan.appendChild(charSpan);
                chars.push({ el: charSpan, tx: 0, ty: 0 });
            });

            textEl.appendChild(lineSpan);
        });
    });

    // Track the pointer
    const mouse = { x: -9999, y: -9999 };
    window.addEventListener('mousemove', e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    window.addEventListener('mouseleave', () => {
        mouse.x = -9999;
        mouse.y = -9999;
    });

    // Tunables
    const RADIUS = 160;   // px — influence radius around the cursor
    const STRENGTH = 26;  // px — max displacement at dead center
    const EASE = 0.15;    // 0-1 — lerp speed (higher = snappier)

    // Animation loop
    function tick() {
        chars.forEach(c => {
            const rect = c.el.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = cx - mouse.x;
            const dy = cy - mouse.y;
            const dist = Math.hypot(dx, dy);

            let targetX = 0, targetY = 0;
            if (dist < RADIUS) {
                const falloff = 1 - dist / RADIUS;
                const push = falloff * falloff * STRENGTH; // quadratic falloff
                const angle = Math.atan2(dy, dx);
                targetX = Math.cos(angle) * push; // letters push AWAY from cursor
                targetY = Math.sin(angle) * push;
            }

            c.tx += (targetX - c.tx) * EASE;
            c.ty += (targetY - c.ty) * EASE;
            c.el.style.transform = `translate(${c.tx.toFixed(2)}px, ${c.ty.toFixed(2)}px)`;
        });
        requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    // ── End Magnetic Text Effect ───────────────────────────────────────

    function revealHeroWords() {
        document.querySelectorAll('.hero-word').forEach(word => {
            const delay = parseInt(word.getAttribute('data-delay') || '0', 10);
            setTimeout(() => {
                word.style.animation = 'word-appear 0.8s ease-out forwards';
            }, delay);
        });
        document.querySelectorAll('.floating-element').forEach((el, index) => {
            setTimeout(() => {
                el.style.animationPlayState = 'running';
            }, 1000 + index * 200);
        });
    }

    function finishLoading() {
        const tl = gsap.timeline();
        tl.to(title, { y: 0, duration: 0.8, ease: "power4.out" })
          .to(intro, { yPercent: -100, duration: 1, ease: "power4.inOut", delay: 0.5 })
          .fromTo(nav, { opacity: 0, y: -32 }, { opacity: 1, y: 0, pointerEvents: 'auto', duration: 0.7, ease: "power3.out" }, "-=0.2")
          .to('#fab-container', { opacity: 1, pointerEvents: 'auto', duration: 0.7, ease: "power3.out" }, "-=0.2")
          .add(() => revealHeroWords(), "-=0.3");
    }

    // Scroll Reveal Animations
    gsap.utils.toArray('.reveal-text').forEach(text => {
        gsap.from(text, {
            scrollTrigger: {
                trigger: text,
                start: "top 85%",
            },
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    });

    gsap.utils.toArray('.work-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
            },
            y: 60,
            opacity: 0,
            duration: 1.2,
            ease: "expo.out"
        });
    });

    // ── Floating pill nav: glass state on scroll, scrollspy, sliding indicator ──
    const navIndicator = document.getElementById('nav-indicator');
    const navAnchors = Array.from(document.querySelectorAll('[data-nav-link]'));
    const spySections = navAnchors.map(a => document.querySelector(a.getAttribute('href')));

    const moveIndicator = (link) => {
        if (!link) {
            navIndicator.style.opacity = '0';
            return;
        }
        navIndicator.style.opacity = '1';
        navIndicator.style.left = link.offsetLeft + 'px';
        navIndicator.style.width = link.offsetWidth + 'px';
    };

    const setActiveLink = (link) => {
        navAnchors.forEach(a => a.classList.toggle('is-active', a === link));
        moveIndicator(link);
    };

    navAnchors.forEach(a => {
        a.addEventListener('click', () => setActiveLink(a));
    });

    const updatePillState = () => {
        nav.classList.toggle('is-scrolled', window.scrollY > 50);

        // Scrollspy: highlight the section currently in view
        const probe = window.scrollY + window.innerHeight * 0.4;
        let current = navAnchors[0];
        spySections.forEach((sec, i) => {
            if (sec && sec.offsetTop <= probe) current = navAnchors[i];
        });
        if (!current.classList.contains('is-active')) setActiveLink(current);
    };

    window.addEventListener('scroll', updatePillState, { passive: true });
    window.addEventListener('resize', () => {
        moveIndicator(navAnchors.find(a => a.classList.contains('is-active')));
    });
    // Recalculate once fonts/icons have loaded so widths are exact
    window.addEventListener('load', () => {
        moveIndicator(navAnchors.find(a => a.classList.contains('is-active')));
    });
    updatePillState();

    // Ambient mouse-follow gradient (dark background accent)
    const mouseGradient = document.getElementById('mouse-gradient');
    document.addEventListener('mousemove', (e) => {
        mouseGradient.style.left = (e.clientX - 192) + 'px';
        mouseGradient.style.top = (e.clientY - 192) + 'px';
        mouseGradient.style.opacity = '1';
    });
    document.addEventListener('mouseleave', () => {
        mouseGradient.style.opacity = '0';
    });

    // Testimonial feature from brief 3
    const testimonials = [
        {
            quote: "Told Sam what I needed, and he delivered exactly that - a custom billing system that just works. No more chasing numbers, no more errors.",
            author: "Joseph Nguta",
            role: "Landlord",
            company: "Rent Billing System"
        },
        {
            quote: "The brand identity he crafted captures our startup's ethos perfectly: functional, bold, and entirely modern.",
            author: "Kanas Hub",
            role: "Founder",
            company: "Brand Identity"
        },
        {
            quote: "Samuel turns rough ideas into polished systems with the calm precision you want in a product partner.",
            author: "Product Client",
            role: "Web App Build",
            company: "Full Stack Development"
        }
    ];
    const testimonialShell = document.getElementById('testimonials');
    const testimonialStage = document.getElementById('testimonial-stage');
    const testimonialIndex = document.getElementById('testimonial-index');
    const testimonialQuote = document.getElementById('testimonial-quote');
    const testimonialAuthor = document.getElementById('testimonial-author');
    const testimonialRole = document.getElementById('testimonial-role');
    const testimonialCompany = document.getElementById('testimonial-company');
    const testimonialProgress = document.getElementById('testimonial-progress-fill');
    const testimonialTicker = document.getElementById('testimonial-ticker-track');
    const testimonialPrev = document.getElementById('testimonial-prev');
    const testimonialNext = document.getElementById('testimonial-next');
    let testimonialActive = 0;
    let testimonialTimer;

    const renderTestimonial = () => {
        const current = testimonials[testimonialActive];
        testimonialShell.classList.remove('is-visible');
        testimonialIndex.style.opacity = '0';
        testimonialIndex.style.filter = 'blur(10px)';

        setTimeout(() => {
            testimonialIndex.textContent = String(testimonialActive + 1).padStart(2, '0');
            testimonialIndex.style.opacity = '1';
            testimonialIndex.style.filter = 'blur(0)';
            testimonialIndex.style.transform = window.matchMedia('(max-width: 767px)').matches ? 'none' : 'translateY(-50%)';
            testimonialCompany.innerHTML = `<span class="testimonial-badge-dot" aria-hidden="true"></span><span>${current.company}</span>`;
            testimonialAuthor.textContent = current.author;
            testimonialRole.textContent = current.role;
            testimonialQuote.innerHTML = current.quote.split(' ').map((word, index) => {
                return `<span class="testimonial-word" style="transition-delay:${index * 45}ms">${word}</span>`;
            }).join(' ');

            const progressValue = ((testimonialActive + 1) / testimonials.length) * 100;
            if (window.matchMedia('(max-width: 767px)').matches) {
                testimonialProgress.style.width = `${progressValue}%`;
                testimonialProgress.style.height = '100%';
            } else {
                testimonialProgress.style.height = `${progressValue}%`;
                testimonialProgress.style.width = '100%';
            }

            requestAnimationFrame(() => testimonialShell.classList.add('is-visible'));
        }, 180);
    };

    const setTestimonial = (index) => {
        testimonialActive = (index + testimonials.length) % testimonials.length;
        renderTestimonial();
    };

    const startTestimonialTimer = () => {
        clearInterval(testimonialTimer);
        testimonialTimer = setInterval(() => setTestimonial(testimonialActive + 1), 6000);
    };

    testimonialPrev.addEventListener('click', () => {
        setTestimonial(testimonialActive - 1);
        startTestimonialTimer();
    });
    testimonialNext.addEventListener('click', () => {
        setTestimonial(testimonialActive + 1);
        startTestimonialTimer();
    });
    testimonialStage.addEventListener('mousemove', (event) => {
        if (window.matchMedia('(max-width: 767px)').matches) return;
        const rect = testimonialStage.getBoundingClientRect();
        const offsetX = event.clientX - (rect.left + rect.width / 2);
        const offsetY = event.clientY - (rect.top + rect.height / 2);
        testimonialIndex.style.transform = `translate(${offsetX * 0.035}px, calc(-50% + ${offsetY * 0.025}px))`;
    });
    testimonialStage.addEventListener('mouseleave', () => {
        testimonialIndex.style.transform = window.matchMedia('(max-width: 767px)').matches ? 'none' : 'translateY(-50%)';
    });
    window.addEventListener('resize', renderTestimonial);
    testimonialTicker.innerHTML = Array.from({ length: 8 }, () => {
        return `<span>${testimonials.map(item => item.company).join(' / ')} /</span>`;
    }).join('');
    renderTestimonial();
    startTestimonialTimer();
});
