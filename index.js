/**
 * GALERÍA DE ARTE ÁNGELA MARÍA - LÓGICA DE LA APLICACIÓN (ES6+)
 * Incluye filtros optimizados, lightbox accesible y validación de seguridad.
 */

// Base de Datos Estática de Obras de Arte (Datos Seguros)
const ARTWORKS_DATABASE = {
    "1": {
        title: "Cumbre Dorada",
        category: "Óleo sobre Lienzo",
        medium: "Óleo Profesional",
        size: "100 x 80 cm",
        support: "Bastidor de Madera de Pino",
        year: "2025",
        status: "Disponible",
        image: "assets/obra_1.png",
        description: "Una exploración dramática de los picos de las montañas durante el atardecer. Utiliza espátula cargada con pigmentos densos de oro y violeta para simular el relieve rocoso y la luz reflejada en la cumbre."
    },
    "2": {
        title: "Torrente Oceánico",
        category: "Acrílico Impasto",
        medium: "Acrílico y Hoja de Oro",
        size: "120 x 90 cm",
        support: "Lienzo de Algodón Tensorizado",
        year: "2026",
        status: "Disponible",
        image: "assets/obra_2.png",
        description: "Pintura abstracta inspirada en las mareas profundas del océano. Las capas superpuestas de azul cobalto, turquesa y esmeralda chocan contra vetas texturizadas de oro brillante, creando una sensación de movimiento infinito."
    },
    "3": {
        title: "Susurros de Eucalipto",
        category: "Acuarela sobre Papel",
        medium: "Acuarela Winsor & Newton",
        size: "50 x 40 cm",
        support: "Papel Arches 300g 100% Algodón",
        year: "2025",
        status: "Colección Privada",
        image: "assets/obra_3.png",
        description: "Estudio botánico de hojas de eucalipto realizado mediante veladuras transparentes. Destaca la sutileza de los tonos verdes apagados y rosas terrosos, ideal para generar espacios de serenidad y contemplación."
    },
    "4": {
        title: "Naturaleza Silente",
        category: "Óleo sobre Madera",
        medium: "Óleo y Cera de Abejas",
        size: "60 x 50 cm",
        support: "Tabla de Nogal Preparada",
        year: "2024",
        status: "Disponible",
        image: "assets/obra_4.png",
        description: "Bodegón de frutas en atmósfera de claroscuro clásico. El tratamiento de las texturas de la fruta madura y la tela de terciopelo rinde homenaje a los maestros clásicos, adaptado a una mirada contemporánea."
    }
};

document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    initGalleryFilters();
    initLightbox();
    initContactForm();
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
}

/* ==========================================================================
   2. FILTROS DE LA GALERÍA
   ========================================================================== */
function initGalleryFilters() {
    const filtersContainer = document.getElementById("gallery-filters");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const artCards = document.querySelectorAll(".art-card");

    if (!filtersContainer) return;

    filtersContainer.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-btn");
        if (!btn) return;

        const filterValue = btn.getAttribute("data-filter");

        // Cambiar estados activos en botones (Accesibilidad ARIA)
        filterButtons.forEach(button => {
            button.classList.remove("active");
            button.setAttribute("aria-selected", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");

        // Filtrar tarjetas con transición suave
        artCards.forEach(card => {
            const cardCategory = card.getAttribute("data-category");
            if (filterValue === "all" || cardCategory === filterValue) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }
        });
    });
}

/* ==========================================================================
   3. LIGHTBOX ACCESIBLE (DETALLE DE OBRA)
   ========================================================================== */
function initLightbox() {
    const galleryGrid = document.getElementById("gallery-grid");
    const modal = document.getElementById("lightbox-modal");
    const modalImg = document.getElementById("modal-art-image");
    const modalTitle = document.getElementById("modal-art-title");
    const modalCategory = document.getElementById("modal-art-category");
    const modalSize = document.getElementById("modal-art-size");
    const modalSupport = document.getElementById("modal-art-support");
    const modalYear = document.getElementById("modal-art-year");
    const modalStatus = document.getElementById("modal-art-status");
    const modalDescription = document.getElementById("modal-art-description");
    const modalInquireBtn = document.getElementById("modal-btn-inquire");
    const closeBtn = document.getElementById("lightbox-close");
    const overlay = document.getElementById("lightbox-overlay");

    let lastActiveElement = null; // Para retornar el foco al cerrar

    if (!galleryGrid || !modal) return;

    const openModal = (id) => {
        const artwork = ARTWORKS_DATABASE[id];
        if (!artwork) return;

        // Rellenar contenido con sanitización (datos estáticos controlados)
        modalImg.src = artwork.image;
        modalImg.alt = `Exhibición detallada del cuadro ${artwork.title} de Ángela María`;
        modalTitle.textContent = artwork.title;
        modalCategory.textContent = artwork.category;
        modalSize.textContent = artwork.size;
        modalSupport.textContent = artwork.support;
        modalYear.textContent = artwork.year;
        modalStatus.textContent = artwork.status;
        modalDescription.textContent = artwork.description;

        // Configurar botón de consulta (Redirección segura a WhatsApp)
        const encodedText = encodeURIComponent(`Hola Ángela María, me gustaría recibir más información y asesoría sobre tu obra "${artwork.title}" (${artwork.category}).`);
        modalInquireBtn.onclick = () => {
            window.open(`https://wa.me/573000000000?text=${encodedText}`, "_blank", "noopener,noreferrer");
        };

        // Mostrar Modal (Accesibilidad ARIA)
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden"; // Desactivar scroll de fondo

        // Gestionar Foco
        lastActiveElement = document.activeElement;
        closeBtn.focus();
    };

    const closeModal = () => {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = ""; // Reactivar scroll

        // Retornar Foco
        if (lastActiveElement) {
            lastActiveElement.focus();
        }
    };

    // Escuchador de clic en las tarjetas de arte
    galleryGrid.addEventListener("click", (e) => {
        const card = e.target.closest(".art-card");
        if (!card) return;

        const artId = card.getAttribute("data-id");
        openModal(artId);
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

        // Tabulación Circular Accesible
        if (e.key === "Tab") {
            const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex="0"]');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey) { // Shift + Tab
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else { // Tab
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

/* ==========================================================================
   4. FORMULARIO SEGURO Y SANITIZACIÓN (CIBERSEGURIDAD)
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("form-name");
    const emailInput = document.getElementById("form-email");
    const messageInput = document.getElementById("form-message");
    const statusDiv = document.getElementById("form-status");

    if (!form) return;

    // Función de Sanitización para prevenir Inyección HTML y XSS (Defensa en Profundidad)
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

    // Limpieza de estados de error individuales
    const clearError = (input, errorSpan) => {
        input.classList.remove("invalid");
        errorSpan.textContent = "";
        errorSpan.classList.remove("visible");
    };

    // Mostrar error individual
    const showError = (input, errorSpan, message) => {
        input.classList.add("invalid");
        errorSpan.textContent = message;
        errorSpan.classList.add("visible");
    };

    // Validar en tiempo real al perder el foco (blur)
    nameInput.addEventListener("blur", () => {
        const span = document.getElementById("error-name");
        if (nameInput.value.trim() === "") {
            showError(nameInput, span, "El nombre completo es requerido.");
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

        // Obtener spans de error
        const nameError = document.getElementById("error-name");
        const emailError = document.getElementById("error-email");
        const messageError = document.getElementById("error-message");

        // Validar todo antes de procesar
        let isFormValid = true;

        if (nameInput.value.trim() === "" || nameInput.value.trim().length < 3) {
            showError(nameInput, nameError, "Nombre completo inválido.");
            isFormValid = false;
        }

        if (emailInput.value.trim() === "" || !isValidEmail(emailInput.value.trim())) {
            showError(emailInput, emailError, "Correo electrónico inválido.");
            isFormValid = false;
        }

        if (messageInput.value.trim() === "" || messageInput.value.trim().length < 10) {
            showError(messageInput, messageError, "Mensaje demasiado corto.");
            isFormValid = false;
        }

        if (!isFormValid) {
            statusDiv.className = "form-status error";
            statusDiv.textContent = "Por favor, corrige los campos con errores en el formulario.";
            return;
        }

        // Sanitización de datos de entrada (Defensa contra XSS e inyecciones de scripting)
        const sanitizedData = {
            name: sanitizeHTML(nameInput.value.trim()),
            email: sanitizeHTML(emailInput.value.trim()),
            artwork: sanitizeHTML(document.getElementById("form-artwork").value),
            message: sanitizeHTML(messageInput.value.trim())
        };

        // Mostrar estado de carga visual sin bloquear el hilo principal
        statusDiv.className = "form-status success";
        statusDiv.textContent = "Procesando su consulta de forma segura...";
        statusDiv.style.display = "block";

        // Enviar a través de fetch a Formspree (sin recargar la página)
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
                statusDiv.innerHTML = `<strong>¡Mensaje enviado con éxito!</strong> Ángela María se pondrá en contacto pronto.`;
                form.reset();
            } else {
                return response.json().then(data => {
                    if (Object.hasOwnProperty.call(data, 'errors')) {
                        throw new Error(data.errors.map(err => err.message).join(", "));
                    } else {
                        throw new Error("Ocurrió un problema al procesar el mensaje.");
                    }
                });
            }
        })
        .catch(error => {
            statusDiv.className = "form-status error";
            statusDiv.textContent = "Error de envío: El endpoint no está configurado o es inválido.";
            console.error("Error al enviar formulario:", error);
        })
        .finally(() => {
            // Ocultar mensaje tras 6 segundos
            setTimeout(() => {
                statusDiv.style.display = "none";
            }, 6000);
        });
    });
}
