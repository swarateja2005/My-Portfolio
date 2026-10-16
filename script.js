
document.addEventListener("DOMContentLoaded", function () {
    // Automatically display the current year in the footer
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Mobile navigation menu
    const menuButton = document.getElementById("menu-button");
    const navLinks = document.getElementById("nav-links");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", function () {
            const isOpen = navLinks.classList.toggle("active");

            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );
            menuButton.textContent = isOpen ? "✕" : "☰";
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.setAttribute("aria-label", "Open navigation");
                menuButton.textContent = "☰";
            });
        });
    }

    // Contact form validation
    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                event.preventDefault();

                if (formStatus) {
                    formStatus.textContent =
                        "Please complete all fields before sending.";
                }

                return;
            }

            // Let the browser submit the form to FormSubmit.
            // Successful delivery depends on FormSubmit's configuration.
            if (formStatus) {
                formStatus.textContent = "Submitting your message...";
            }
        });
    }
});
