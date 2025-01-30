window.addEventListener("load", function() {
    iniciaAnimacoes();
});

function iniciaAnimacoes() {
    animaDados();
    animaGrupos();
    animaSazonalidade();
    animaSintomas();
    animaCuidados();
    animaCTA();
}

const duration = 1;
const ease = "expo.inOut";

function animaDados() {
    const timelineDados = gsap.timeline({
        scrollTrigger: {
            trigger: "#dados",
            start: "top 80%",
            // markers: true,
        }
    });
    
    timelineDados
        .from("#dados .section-tagline", {
            y: 100,
            opacity: 0,
            duration: duration,
            ease: ease,
        })

        .from("#dados .section-title", {
            x: 100,
            opacity: 0,
            duration: duration,
            ease: ease,
        },"-=0.6")

        .from("#dados .section-items > *", {
            y: 100,
            opacity: 0,
            stagger: 0.2,
            duration: duration,
            ease: ease,
        },"-=0.6")
}

function animaGrupos() {
    const timelineGrupos = gsap.timeline({
        scrollTrigger: {
            trigger: "#grupos-de-risco",
            start: "top 80%",
            // markers: true,
        }
    });
    
    timelineGrupos
        .from("#grupos-de-risco .section-tagline", {
            y: 100,
            opacity: 0,
            duration: duration,
            ease: ease,
        })

        .from("#grupos-de-risco .section-title", {
            x: 100,
            opacity: 0,
            duration: duration,
            ease: ease,
        },"-=0.6")

        .from("#grupos-de-risco .content-text", {
            x: 100,
            opacity: 0,
            duration: duration,
            ease: ease,
        },"-=0.6")

        .from("#grupos-de-risco #myMask path", {
            opacity: 0,
            x: 200,
            duration: duration,
            ease: ease,
        },"-=0.6")

        .from("#grupos-de-risco .forma", {
            y: -140,
            rotate: 360,
            scale: 0.2,
            opacity: 0,
            duration: duration,
            ease: ease,
        },"-=0.6");
}

function animaSazonalidade() {
    const timelineSazonalidade = gsap.timeline({
        scrollTrigger: {
            trigger: "#sazonalidade",
            start: "top 80%",
            // markers: true,
        }
    });

    timelineSazonalidade
        .from("#sazonalidade .section-tagline", {
            y: 100,
            opacity: 0,
            duration: duration,
            ease: ease,
        })

        .from("#sazonalidade .section-title", {
            x: 100,
            opacity: 0,
            duration: duration,
            ease: ease,
        },"-=0.6")

        .from("#sazonalidade .content-text", {
            x: 100,
            opacity: 0,
            duration: duration,
            ease: ease,
        },"-=0.6")

        .from("#sazonalidade .tab-map-items", {
            scale: 0.5,
            opacity: 0,
            duration: duration,
            ease: ease,
        },"-=1")

        .from("#sazonalidade .tab-map-nav-items", {
            y: 100,
            opacity: 0,
            stagger: 0.2,
            duration: duration,
            ease: ease,
        },"-=0.8");
}

function animaSintomas() {
    const timelineSintomas = gsap.timeline({
        scrollTrigger: {
            trigger: "#sintomas",
            start: "top 80%",
            // markers: true,
        }
    });

    timelineSintomas
        .from("#sintomas .section-tagline", {
            y: 100,
            opacity: 0,
            duration: duration,
            ease: ease,
        })

        .from("#sintomas .section-title", {
            y: 100,
            opacity: 0,
            duration: duration,
            ease: ease,
        },"-=0.8")

        .from("#sintomas .content-text", {
            y: 100,
            opacity: 0,
            duration: duration,
            ease: ease,
        },"-=0.8")

        .from("#sintomas .section-subtitle", {
            y: 100,
            opacity: 0,
            duration: duration,
            ease: ease,
        },"-=0.8")

        .from("#sintomas .grid > *", {
            y: 100,
            scale: 0.5,
            opacity: 0,
            stagger: 0.2,
            duration: duration,
            ease: ease,
        },"-=0.8")
}

function animaCuidados() {
    const timelineCuidados = gsap.timeline({
        scrollTrigger: {
            trigger: "#cuidados",
            start: "top 60%",
            // markers: true,
        }
    });

    timelineCuidados
        .from("#cuidados .section-tagline", {
            y: 100,
            opacity: 0,
            duration: duration,
            ease: ease,
        })

        .from("#cuidados .section-title", {
            y: 100,
            opacity: 0,
            duration: duration,
            ease: ease,
        },"-=0.8")

        .from("#cuidados .content-text", {
            y: 100,
            opacity: 0,
            duration: duration,
            ease: ease,
        },"-=0.8")

        .from("#cuidados .check-list-1 > *", {
            y: 100,
            scale: 0.5,
            opacity: 0,
            stagger: 0.4,
            duration: duration,
            ease: ease,
        },"-=0.8")
}

function animaCTA() {
    const timelineCTA = gsap.timeline({
        scrollTrigger: {
            trigger: "#cta",
            start: "top 80%",
            // markers: true,
        }
    });

    timelineCTA
        .from("#cta .section-title > div:first-child > img", {
            scale: 0,
            rotate: 360,
            opacity: 0,
            duration: duration,
            ease: ease,
        })

        .from("#cta .section-title > div:first-child > span", {
            x: 100,
            opacity: 0,
            duration: duration,
            ease: ease,
        },"-=0.6")

        .from("#cta .section-title > div:last-child > span", {
            x: -100,
            opacity: 0,
            duration: duration,
            ease: ease,
        },"-=0.6")

        .from("#cta .section-title > div:last-child > img", {
            scale: 0,
            rotate: 360,
            opacity: 0,
            duration: duration,
            ease: ease,
        },"-=0.6")

        .from("#cta .cards > *", {
            y: 100,
            opacity: 0,
            stagger: 0.2,
            duration: duration,
            ease: ease,
        },"-=0.6")
}