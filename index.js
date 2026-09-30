/**
 * ==========================================================================
 * GALERÍA DE ARTE ÁNGELA MARÍA - LÓGICA Y EXPERIENCIA INTERACTIVA
 * Catálogo Curatorial Completo, Filtros Multicriterio, Modo "Ver en Sala"
 * y Validación Segura (OWASP Compliant).
 * ==========================================================================
 */

// Base de Datos Curatorial Completa (11 Obras Reales de Ángela María)
// Base de Datos Curatorial Completa (12 Obras Reales de Ángela María organizadas por Series)
const ARTWORKS_DATABASE = {
    // -------------------------------------------------------------
    // SERIE: SER-ES (Colección 1)
    // -------------------------------------------------------------
    "sirena": {
        id: "sirena",
        title: "Sirena",
        subtitle: "Serie: Ser-Es",
        category: "Serie: Ser-Es",
        categoryKey: "ser-es",
        techniqueKey: "mixta",
        medium: "Técnica Mixta, Óleo & Carboncillo",
        size: "85 x 65 cm",
        support: "Papel Kraft Especial sobre Bastidor",
        year: "2026",
        status: "Disponible",
        isAvailable: true,
        image: "multimedia/Sirena.jpg",
        description: "Obra insignia de la colección 'Serie: Ser-Es'. A través del dibujo orgánico al carboncillo y veladuras sobre papel kraft crudo, la artista desvela una criatura mitológica que emerge de la penumbra acuática. El soporte de tono tierra evoca pergaminos renacentistas mientras que la intensidad penetrante de la mirada desafía al espectador con un magnetismo poético ineludible."
    },
    "satiro": {
        id: "satiro",
        title: "Sátiro",
        subtitle: "Serie: Ser-Es",
        category: "Serie: Ser-Es",
        categoryKey: "ser-es",
        techniqueKey: "mixta",
        medium: "Técnica Mixta, Grafito & Óleo",
        size: "80 x 60 cm",
        support: "Papel Tono Kraft Tratado",
        year: "2026",
        status: "Disponible",
        isAvailable: true,
        image: "multimedia/Sátiro.jpg",
        description: "Pieza de la colección 'Serie: Ser-Es'. Un estudio psicológico profundo sobre la dualidad humana y animal. La figura caprina sostiene la máscara en un gesto de vulnerabilidad y renuncia. Con un trazo enérgico y expresivo, Ángela María explora los mitos como espejos de los dilemas íntimos y emocionales del ser contemporáneo."
    },
    "lechuza": {
        id: "lechuza",
        title: "Lechuza",
        subtitle: "Serie: Ser-Es",
        category: "Serie: Ser-Es",
        categoryKey: "ser-es",
        techniqueKey: "mixta",
        medium: "Técnica Mixta, Óleo & Pastel",
        size: "90 x 70 cm",
        support: "Lienzo Texturizado",
        year: "2026",
        status: "Disponible",
        isAvailable: true,
        image: "multimedia/Lechuza.jpg",
        description: "Composición de la colección 'Serie: Ser-Es' donde la presencia alada y la anatomía rapaz se funden en una sola esencia vigía. Las texturas vibrantes y la paleta crepuscular de ocres, sepias y blancos nacarados transportan a una atmósfera ritual impregnada de silencio, enigma y sabiduría ancestral."
    },

    // -------------------------------------------------------------
    // SERIE: CICLO FEMENINO (Colección 2)
    // -------------------------------------------------------------
    "fluvia": {
        id: "fluvia",
        title: "1. Fluvia - Menarquía",
        subtitle: "Serie: Ciclo Femenino",
        category: "Serie: Ciclo Femenino",
        categoryKey: "ciclo-femenino",
        techniqueKey: "oleo",
        medium: "Óleo sobre Lienzo",
        size: "75 x 90 cm",
        support: "Bastidor de Algodón Profesional",
        year: "2025",
        status: "Disponible",
        isAvailable: true,
        image: "multimedia/Fluvia.jpg",
        description: "Primera obra de la 'Serie: Ciclo Femenino'. La ingravidez acuática y el despertar biológico se funden en la sensualidad botánica. Las aletas vaporosas de un pez betta bermellón flotan entre pétalos de rosas y un fondo azul de matices aterciopelados, representando la menarquía como rito sagrado del ciclo vital."
    },
    "renovacion": {
        id: "renovacion",
        title: "2. Renovación - Fase Folicular",
        subtitle: "Serie: Ciclo Femenino",
        category: "Serie: Ciclo Femenino",
        categoryKey: "ciclo-femenino",
        techniqueKey: "oleo",
        medium: "Óleo & Pátina sobre Lienzo",
        size: "70 x 70 cm",
        support: "Lienzo de Algodón Tensorizado",
        year: "2025",
        status: "Disponible",
        isAvailable: true,
        image: "multimedia/Renovación.jpg",
        description: "Segunda obra de la 'Serie: Ciclo Femenino'. Símbolo milenario de renacimiento, intuición y vitalidad ascendente. La liebre es capturada en un momento de quietud expectante entre la hojarasca, encarnando la energía renovadora y fecunda de la fase folicular."
    },
    "plenitud": {
        id: "plenitud",
        title: "3. Plenitud - Ovulación",
        subtitle: "Serie: Ciclo Femenino",
        category: "Serie: Ciclo Femenino",
        categoryKey: "ciclo-femenino",
        techniqueKey: "oleo",
        medium: "Óleo sobre Lienzo",
        size: "80 x 80 cm",
        support: "Lienzo Tensorizado Profesional",
        year: "2026",
        status: "Disponible",
        isAvailable: true,
        image: "multimedia/Plenitud.jpg",
        description: "Tercera obra y cumbre de la 'Serie: Ciclo Femenino'. Representa el momento de máxima expansión, luminosidad y plenitud creativa y biológica de la mujer: la ovulación como instante sagrado de creación y poder vital."
    },

    // -------------------------------------------------------------
    // FAUNA & VIDA MARINA (Colección 3)
    // -------------------------------------------------------------
    "leon": {
        id: "leon",
        title: "León",
        subtitle: "Fauna & Fuerza",
        category: "Fauna & Vida Marina",
        categoryKey: "fauna-marina",
        techniqueKey: "oleo",
        medium: "Óleo con Espátula (Impasto Pesado)",
        size: "100 x 80 cm",
        support: "Lienzo de Lino Tensorizado",
        year: "2026",
        status: "Disponible",
        isAvailable: true,
        image: "multimedia/LEON.jpg",
        description: "Un derroche de materia y empaste escultórico al óleo con espátula. Cada enérgico trazo carga la melena con destellos de ocre, siena tostada y dorados volcánicos, construyendo una mirada frontal de soberbia serenidad. La textura tangible genera un juego de sombras vivas con la iluminación del espacio."
    },
    "pez-leon": {
        id: "pez-leon",
        title: "Pez León",
        subtitle: "Sinfonía Marina",
        category: "Fauna & Vida Marina",
        categoryKey: "fauna-marina",
        techniqueKey: "oleo",
        medium: "Óleo Texturizado con Pincel y Espátula",
        size: "80 x 100 cm",
        support: "Lienzo sobre Bastidor Doble",
        year: "2026",
        status: "Disponible",
        isAvailable: true,
        image: "multimedia/PEZ LEON.jpg",
        description: "La geometría de las aguas cristalinas se disuelve en pinceladas en mosaico de azules cobalto y turquesas caribeños. El pez león despliega sus espinas radiantes en un baile majestuoso y armónico, celebrando la exuberancia indómita del fondo marino."
    },
    "duplo": {
        id: "duplo",
        title: "Duplo",
        subtitle: "Sinfonía Marina",
        category: "Fauna & Vida Marina",
        categoryKey: "fauna-marina",
        techniqueKey: "oleo",
        medium: "Óleo Estilo Mosaico sobre Lienzo",
        size: "70 x 95 cm",
        support: "Lienzo Tensorizado de Galería",
        year: "2025",
        status: "Colección Privada",
        isAvailable: false,
        image: "multimedia/DUPLO.jpg",
        description: "Una danza sincronizada de dos peces tropicales que surcan aguas iluminadas por el sol. La técnica de micro-pinceladas facetadas crea un efecto de vitral o mosaico impresionista, donde el agua parece titilar con vida propia ante los ojos del espectador."
    },

    // -------------------------------------------------------------
    // RETRATOS (Colección 4)
    // -------------------------------------------------------------
    "levi-carlo": {
        id: "levi-carlo",
        title: "Levi Carlo",
        subtitle: "Retrato al Óleo",
        category: "Retratos",
        categoryKey: "retratos",
        techniqueKey: "oleo",
        medium: "Óleo Tradicional sobre Lienzo",
        size: "60 x 50 cm",
        support: "Lienzo de Algodón Fino",
        year: "2025",
        status: "Colección Privada",
        isAvailable: false,
        image: "multimedia/Levi Carlo.jpg",
        description: "Retrato infantil cargado de ternura y frescura cromática. Con una pincelada directa, suelta y luminosa, Ángela María inmortaliza la chispa de asombro en la mirada del niño, enmarcada por un fondo dinámico que celebra la espontaneidad y la alegría de los primeros años."
    },
    "luan": {
        id: "luan",
        title: "Luan",
        subtitle: "Retrato al Óleo y Acrílico",
        category: "Retratos",
        categoryKey: "retratos",
        techniqueKey: "acrilico",
        medium: "Óleo & Acrílico sobre Lienzo",
        size: "65 x 50 cm",
        support: "Lienzo sobre Bastidor de Madera",
        year: "2026",
        status: "Colección Privada",
        isAvailable: false,
        image: "multimedia/Luan.jpg",
        description: "Una mirada serena y contemplativa envuelta en un aura luminosa de tonos menta y aguamarina. El modelado sutil del rostro captura la juventud, los anhelos y el silencio interior, logrando una presencia viva que trasciende los límites del bastidor."
    },
    "william": {
        id: "william",
        title: "William",
        subtitle: "Retrato al Óleo",
        category: "Retratos",
        categoryKey: "retratos",
        techniqueKey: "oleo",
        medium: "Óleo sobre Lienzo",
        size: "70 x 55 cm",
        support: "Lienzo de Grano Medio",
        year: "2025",
        status: "Colección Privada",
        isAvailable: false,
        image: "multimedia/William.jpg",
        description: "Un retrato de atmósfera íntima que conjuga la figura humana con el entorno costero. El sombrero de paja, la camisa blanca y el rumor visual de las olas capturan la calma de una tarde tropical junto al mar, donde la luz acaricia los volúmenes con maestría y serenidad."
    }
};

document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    initGalleryFilters();
    initLightbox();
    initContactForm();
    initCardSpotlightTracking();
});

/* ==========================================================================
   1. NAVEGACIÓN Y MENÚ MÓVIL
   ========================================================================== */
function initMobileMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (!menuToggle || !navMenu) return;

    const toggleMenu = () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", !isExpanded);
        menuToggle.classList.toggle("active");
        navMenu.classList.toggle("active");
    };

    menuToggle.addEventListener("click", toggleMenu);

    // Cerrar menú al hacer clic en cualquier enlace
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navMenu.classList.contains("active")) {
                toggleMenu();
            }
        });
    });

    // Añadir sombra suave a la barra de navegación al hacer scroll
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 40) {
                navbar.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.7)";
                navbar.style.borderBottomColor = "rgba(207, 168, 89, 0.2)";
            } else {
                navbar.style.boxShadow = "none";
                navbar.style.borderBottomColor = "rgba(255, 255, 255, 0.08)";
            }
        }, { passive: true });
    }
}

/* ==========================================================================
   2. FILTROS MULTICRITERIO DE LA GALERÍA (Colecciones + Técnica)
   ========================================================================== */
function initGalleryFilters() {
    const filtersContainer = document.getElementById("gallery-filters");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const techniqueSelect = document.getElementById("technique-select");
    const artCards = document.querySelectorAll(".art-card");

    if (!filtersContainer && !techniqueSelect) return;

    let activeCategory = "all";
    let activeTechnique = "all";

    const applyFilters = () => {
        let visibleCount = 0;

        artCards.forEach(card => {
            const cardCategory = card.getAttribute("data-category");
            const cardTechnique = card.getAttribute("data-technique");

            const matchesCategory = (activeCategory === "all" || cardCategory === activeCategory);
            const matchesTechnique = (activeTechnique === "all" || cardTechnique === activeTechnique);

            if (matchesCategory && matchesTechnique) {
                card.classList.remove("hide");
                // Animar reaparición suave
                card.style.opacity = "0";
                card.style.transform = "translateY(12px)";
                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                }, 40 + (visibleCount * 25));
                visibleCount++;
            } else {
                card.classList.add("hide");
            }
        });
    };

    // Filtros de Categoría / Colección
    if (filtersContainer) {
        filtersContainer.addEventListener("click", (e) => {
            const btn = e.target.closest(".filter-btn");
            if (!btn) return;

            activeCategory = btn.getAttribute("data-filter") || "all";

            filterButtons.forEach(button => {
                button.classList.remove("active");
                button.setAttribute("aria-selected", "false");
            });
            btn.classList.add("active");
            btn.setAttribute("aria-selected", "true");

            applyFilters();
        });
    }

    // Filtro por Técnica Artística
    if (techniqueSelect) {
        techniqueSelect.addEventListener("change", (e) => {
            activeTechnique = e.target.value;
            applyFilters();
        });
    }

    // Interacción desde las tarjetas de Colecciones superiores
    document.querySelectorAll("[data-filter-trigger]").forEach(trigger => {
        trigger.addEventListener("click", () => {
            const targetFilter = trigger.getAttribute("data-filter-trigger");
            if (!targetFilter) return;

            activeCategory = targetFilter;

            filterButtons.forEach(button => {
                const isSelected = button.getAttribute("data-filter") === targetFilter;
                button.classList.toggle("active", isSelected);
                button.setAttribute("aria-selected", isSelected ? "true" : "false");
            });

            applyFilters();
        });
    });
}

/* ==========================================================================
   3. LIGHTBOX DE ALTA DEFINICIÓN & MODO "VER EN SALA / ESPACIO"
   ========================================================================== */
function initLightbox() {
    const galleryGrid = document.getElementById("gallery-grid");
    const modal = document.getElementById("lightbox-modal");
    const modalImg = document.getElementById("modal-art-image");
    const modalTitle = document.getElementById("modal-art-title");
    const modalSubtitle = document.getElementById("modal-art-subtitle");
    const modalCategory = document.getElementById("modal-art-category");
    const modalSize = document.getElementById("modal-art-size");
    const modalMedium = document.getElementById("modal-art-medium");
    const modalSupport = document.getElementById("modal-art-support");
    const modalYear = document.getElementById("modal-art-year");
    const modalStatus = document.getElementById("modal-art-status");
    const modalDescription = document.getElementById("modal-art-description");
    const modalInquireBtn = document.getElementById("modal-btn-inquire");
    const closeBtn = document.getElementById("lightbox-close");
    const overlay = document.getElementById("lightbox-overlay");
    const btnToggleWall = document.getElementById("btn-toggle-wall");
    const wallBtnText = document.getElementById("wall-btn-text");
    const lightboxStage = document.getElementById("lightbox-stage");

    let lastActiveElement = null;
    let isWallMode = false;

    if (!galleryGrid || !modal) return;

    // Resetear modo de pared
    const resetWallMode = () => {
        isWallMode = false;
        if (lightboxStage) lightboxStage.classList.remove("wall-mode");
        if (btnToggleWall) btnToggleWall.classList.remove("active");
        if (wallBtnText) wallBtnText.textContent = "Ver en Sala / Espacio";
    };

    // Alternar modo de pared (Room Simulation)
    if (btnToggleWall && lightboxStage) {
        btnToggleWall.addEventListener("click", () => {
            isWallMode = !isWallMode;
            lightboxStage.classList.toggle("wall-mode", isWallMode);
            btnToggleWall.classList.toggle("active", isWallMode);
            if (wallBtnText) {
                wallBtnText.textContent = isWallMode ? "Ver en Primer Plano" : "Ver en Sala / Espacio";
            }
        });
    }

    const openModal = (id) => {
        const artwork = ARTWORKS_DATABASE[id];
        if (!artwork) return;

        resetWallMode();

        // Rellenar contenido curatorial
        modalImg.src = artwork.image;
        modalImg.alt = `Exhibición de la obra "${artwork.title}" de Ángela María`;
        modalTitle.textContent = artwork.title;
        if (modalSubtitle) modalSubtitle.textContent = artwork.subtitle;
        if (modalCategory) modalCategory.textContent = artwork.category;
        if (modalSize) modalSize.textContent = artwork.size;
        if (modalMedium) modalMedium.textContent = artwork.medium;
        if (modalSupport) modalSupport.textContent = artwork.support;
        if (modalYear) modalYear.textContent = artwork.year;

        if (modalStatus) {
            modalStatus.textContent = artwork.status;
            modalStatus.className = `detail-val status-pill ${artwork.isAvailable ? 'available' : 'sold'}`;
        }

        if (modalDescription) modalDescription.textContent = artwork.description;

        // Configurar botón de consulta directa por WhatsApp
        if (modalInquireBtn) {
            const statusNotice = artwork.isAvailable 
                ? "Conocer Disponibilidad y Valor de Inversión"
                : "Consultar Comisión o Pieza Similar";
            
            const whatsappMsg = encodeURIComponent(
                `Hola Ángela María, tengo un gran interés en tu obra "${artwork.title}" (${artwork.medium}, ${artwork.size}) de la serie "${artwork.category}". Me gustaría solicitar información sobre ${artwork.isAvailable ? 'su valor de inversión y opciones de adquisición' : 'la posibilidad de encargar una obra similar por comisión'}.`
            );

            modalInquireBtn.onclick = () => {
                window.open(`https://wa.me/573000000000?text=${whatsappMsg}`, "_blank", "noopener,noreferrer");
            };

            const btnTextSpan = modalInquireBtn.querySelector("span");
            if (btnTextSpan) {
                btnTextSpan.textContent = `${statusNotice} vía WhatsApp`;
            }
        }

        // Mostrar Modal (Accesibilidad ARIA)
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";

        // Gestionar foco accesible
        lastActiveElement = document.activeElement;
        closeBtn.focus();
    };

    const closeModal = () => {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
        resetWallMode();

        if (lastActiveElement) {
            lastActiveElement.focus();
        }
    };

    // Apertura desde la cuadrícula de la galería
    galleryGrid.addEventListener("click", (e) => {
        const card = e.target.closest(".art-card");
        if (!card) return;

        const artId = card.getAttribute("data-id");
        if (artId) openModal(artId);
    });

    // Cerrar eventos
    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);

    // Eventos de teclado (Escape para cerrar, Tab circular)
    document.addEventListener("keydown", (e) => {
        if (!modal.classList.contains("active")) return;

        if (e.key === "Escape") {
            closeModal();
        }

        if (e.key === "Tab") {
            const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex="0"]');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

/* ==========================================================================
   4. EFECTO DINÁMICO DE SPOTLIGHT EN TARJETAS DE ARTE
   ========================================================================== */
function initCardSpotlightTracking() {
    const cards = document.querySelectorAll(".art-card");

    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            const spotlight = card.querySelector(".art-lamp-spotlight");
            if (spotlight) {
                spotlight.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(207, 168, 89, 0.28) 0%, transparent 60%)`;
            }
        });

        card.addEventListener("mouseleave", () => {
            const spotlight = card.querySelector(".art-lamp-spotlight");
            if (spotlight) {
                spotlight.style.background = "radial-gradient(circle at 50% 15%, rgba(207, 168, 89, 0.18) 0%, transparent 65%)";
            }
        });
    });
}

/* ==========================================================================
   5. FORMULARIO SEGURO Y SANITIZACIÓN (CIBERSEGURIDAD OWASP)
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("form-name");
    const emailInput = document.getElementById("form-email");
    const artworkSelect = document.getElementById("form-artwork");
    const messageInput = document.getElementById("form-message");
    const statusDiv = document.getElementById("form-status");

    if (!form) return;

    // Sanitización exhaustiva contra XSS y manipulación de etiquetas
    const sanitizeHTML = (str) => {
        if (!str) return "";
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#x27;")
            .replace(/\//g, "&#x2F;");
    };

    // Validación Regex de Correo Electrónico Estricto (RFC 5322)
    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return emailRegex.test(email);
    };

    const clearError = (input, errorSpan) => {
        input.classList.remove("invalid");
        if (errorSpan) {
            errorSpan.textContent = "";
            errorSpan.classList.remove("visible");
        }
    };

    const showError = (input, errorSpan, message) => {
        input.classList.add("invalid");
        if (errorSpan) {
            errorSpan.textContent = message;
            errorSpan.classList.add("visible");
        }
    };

    // Validar en tiempo real al perder el foco (blur)
    nameInput.addEventListener("blur", () => {
        const span = document.getElementById("error-name");
        if (nameInput.value.trim() === "") {
            showError(nameInput, span, "El nombre completo es requerido para formalizar la consulta.");
        } else if (nameInput.value.trim().length < 3) {
            showError(nameInput, span, "El nombre debe tener al menos 3 caracteres.");
        } else {
            clearError(nameInput, span);
        }
    });

    emailInput.addEventListener("blur", () => {
        const span = document.getElementById("error-email");
        if (emailInput.value.trim() === "") {
            showError(emailInput, span, "El correo electrónico es requerido.");
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, span, "Por favor, ingresa un correo electrónico válido.");
        } else {
            clearError(emailInput, span);
        }
    });

    messageInput.addEventListener("blur", () => {
        const span = document.getElementById("error-message");
        if (messageInput.value.trim() === "") {
            showError(messageInput, span, "El mensaje de consulta no puede estar vacío.");
        } else if (messageInput.value.trim().length < 10) {
            showError(messageInput, span, "El mensaje debe ser más descriptivo (mínimo 10 caracteres).");
        } else {
            clearError(messageInput, span);
        }
    });

    // Envío del Formulario
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nameError = document.getElementById("error-name");
        const emailError = document.getElementById("error-email");
        const messageError = document.getElementById("error-message");

        let isFormValid = true;

        if (nameInput.value.trim() === "" || nameInput.value.trim().length < 3) {
            showError(nameInput, nameError, "Por favor, introduce tu nombre completo.");
            isFormValid = false;
        }

        if (emailInput.value.trim() === "" || !isValidEmail(emailInput.value.trim())) {
            showError(emailInput, emailError, "Introduce un correo electrónico institucional o personal válido.");
            isFormValid = false;
        }

        if (messageInput.value.trim() === "" || messageInput.value.trim().length < 10) {
            showError(messageInput, messageError, "Por favor incluye más detalles sobre tu consulta o la obra de interés (mínimo 10 caracteres).");
            isFormValid = false;
        }

        if (!isFormValid) {
            statusDiv.className = "form-status error";
            statusDiv.textContent = "Por favor, revisa y corrige los campos marcados antes de enviar.";
            statusDiv.style.display = "block";
            return;
        }

        // Sanitización de datos de entrada
        const sanitizedData = {
            name: sanitizeHTML(nameInput.value.trim()),
            email: sanitizeHTML(emailInput.value.trim()),
            artwork: sanitizeHTML(artworkSelect ? artworkSelect.value : ""),
            message: sanitizeHTML(messageInput.value.trim())
        };

        statusDiv.className = "form-status success";
        statusDiv.textContent = "Transmitiendo su mensaje al taller de la artista...";
        statusDiv.style.display = "block";

        const formAction = form.getAttribute("action");

        fetch(formAction, {
            method: "POST",
            body: JSON.stringify(sanitizedData),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                statusDiv.className = "form-status success";
                statusDiv.innerHTML = `<strong>¡Mensaje recibido con éxito!</strong> Ángela María responderá a tu solicitud a la mayor brevedad.`;
                form.reset();
            } else {
                return response.json().then(data => {
                    if (data && data.errors) {
                        throw new Error(data.errors.map(err => err.message).join(", "));
                    } else {
                        throw new Error("Ocurrió un problema al procesar la solicitud.");
                    }
                });
            }
        })
        .catch(error => {
            statusDiv.className = "form-status error";
            statusDiv.textContent = "No fue posible conectar con el servicio de correo. También puedes contactar directamente a la artista vía WhatsApp.";
            console.warn("Información de envío:", error);
        })
        .finally(() => {
            setTimeout(() => {
                statusDiv.style.display = "none";
            }, 7000);
        });
    });
}
