/* =========================================================
   PORTFOLIO — JAVASCRIPT
   ========================================================= */

"use strict";

/* =========================================================
   PROJECT DATA
   ========================================================= */

const projects = [
    {
        id: "personal-dashboard",

        title: "Personal Dashboard",

        description:
            "A responsive productivity dashboard for managing tasks, notes, statistics, and daily activity.",

        image: "images/personal-dashboard.png",

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "LocalStorage"
        ],

        features: [
            "Responsive dashboard layout",
            "Task management",
            "Task statistics",
            "Notes and activity",
            "LocalStorage persistence",
            "Responsive mobile navigation"
        ],

        github:
            "https://github.com/hansoinner/personal-dashboard",

        live:
            "https://hansoinner.github.io/personal-dashboard/"
    },

    {
        id: "weather-app",

        title: "Weather App",

        description:
            "A responsive weather application that retrieves live weather data and presents it through a clean interface.",

        image: "images/weather-app.png",

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Fetch API"
        ],

        features: [
            "City search",
            "Current weather",
            "Temperature and feels-like temperature",
            "Humidity and wind speed",
            "Weather conditions",
            "Loading and error states",
            "Responsive design"
        ],

        github:
            "https://github.com/hansoinner/weather-app",

        live:
            "https://hansoinner.github.io/weather-app/"
    },

    {
        id: "todo-list",

        title: "Todo List",

        description:
            "A feature-rich task management application focused on CRUD operations, filtering, persistence, and usability.",

        image: "images/todo-list.png",

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "LocalStorage"
        ],

        features: [
            "Create tasks",
            "Edit tasks",
            "Delete tasks",
            "Complete tasks",
            "Task filtering",
            "Priority and category statistics",
            "LocalStorage persistence"
        ],

        github:
            "https://github.com/hansoinner/todo-list",

        live:
            "https://hansoinner.github.io/todo-list/"
    },

    {
        id: "calculator",

        title: "Calculator",

        description:
            "A responsive calculator built from scratch with Vanilla JavaScript and a focus on interaction and clean UI design.",

        image: "images/calculator.png",

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript"
        ],

        features: [
            "Basic arithmetic",
            "Keyboard support",
            "Clear and delete controls",
            "Responsive interface",
            "Interactive button states"
        ],

        github: "#",

        live: "#"
    },

    {
        id: "portfolio",

        title: "Developer Portfolio",

        description:
            "A professional responsive portfolio website showcasing projects, technical skills, and front-end development experience.",

        image: "images/portfolio.png",

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "GitHub Pages"
        ],

        features: [
            "Responsive design",
            "Dark/light theme",
            "Project modal",
            "Mobile navigation",
            "Accessible navigation",
            "Dynamic project rendering"
        ],

        github:
            "https://github.com/hansoinner/portfolio",

        live:
            "https://hansoinner.github.io/portfolio/"
    },

    {
        id: "ecommerce",

        title: "E-Commerce Store",

        description:
            "A responsive front-end e-commerce experience demonstrating product rendering, filtering, cart interactions, and client-side state.",

        image: "images/ecommerce.png",

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "LocalStorage"
        ],

        features: [
            "Product catalogue",
            "Search",
            "Category filtering",
            "Shopping cart",
            "Quantity controls",
            "Persistent cart state",
            "Responsive layout"
        ],

        github: "#",

        live: "#"
    }
];


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const body = document.body;

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");

const navItems =
    document.querySelectorAll(".nav-link");

const themeToggle =
    document.querySelector(".theme-toggle");

const themeIcon =
    document.querySelector(".theme-icon");

const projectsGrid =
    document.querySelector("#projectsGrid");

const projectsStatus =
    document.querySelector("#projectsStatus");

const projectModal =
    document.querySelector("#projectModal");

const modalContent =
    document.querySelector("#modalContent");

const modalClose =
    document.querySelector(".modal-close");

const currentYear =
    document.querySelector("#currentYear");


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeTheme();

    renderProjects();

    updateCurrentYear();

    initializeNavigation();

    initializeModal();

});


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

function initializeNavigation() {

    if (!menuToggle || !navLinks) {
        return;
    }

    menuToggle.addEventListener(
        "click",
        toggleMobileMenu
    );

    navItems.forEach((link) => {

        link.addEventListener(
            "click",
            closeMobileMenu
        );

    });

    document.addEventListener(
        "click",
        (event) => {

            const clickedInsideNavigation =
                navLinks.contains(event.target);

            const clickedMenuButton =
                menuToggle.contains(event.target);

            if (
                !clickedInsideNavigation &&
                !clickedMenuButton &&
                navLinks.classList.contains("is-open")
            ) {
                closeMobileMenu();
            }

        }
    );

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {
                closeMobileMenu();
            }

        }
    );

}


function toggleMobileMenu() {

    const isOpen =
        navLinks.classList.toggle("is-open");

    menuToggle.classList.toggle(
        "is-open",
        isOpen
    );

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    body.classList.toggle(
        "menu-open",
        isOpen
    );

}


function closeMobileMenu() {

    if (!navLinks || !menuToggle) {
        return;
    }

    navLinks.classList.remove("is-open");

    menuToggle.classList.remove("is-open");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

    body.classList.remove("menu-open");

}


/* =========================================================
   THEME
   ========================================================= */

function initializeTheme() {

    if (!themeToggle) {
        return;
    }

    const savedTheme =
        localStorage.getItem("portfolio-theme");

    if (savedTheme === "light") {

        enableLightTheme();

    } else {

        enableDarkTheme();

    }

    themeToggle.addEventListener(
        "click",
        toggleTheme
    );

}


function toggleTheme() {

    const isLight =
        body.classList.contains("light-theme");

    if (isLight) {

        enableDarkTheme();

    } else {

        enableLightTheme();

    }

}


function enableLightTheme() {

    body.classList.add("light-theme");

    localStorage.setItem(
        "portfolio-theme",
        "light"
    );

    updateThemeButton(true);

}


function enableDarkTheme() {

    body.classList.remove("light-theme");

    localStorage.setItem(
        "portfolio-theme",
        "dark"
    );

    updateThemeButton(false);

}


function updateThemeButton(isLightTheme) {

    if (!themeToggle || !themeIcon) {
        return;
    }

    if (isLightTheme) {

        themeIcon.textContent = "☾";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

    } else {

        themeIcon.textContent = "☀";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

    }

}


/* =========================================================
   PROJECT RENDERING
   ========================================================= */

function renderProjects() {

    if (!projectsGrid) {
        return;
    }

    if (!projects.length) {

        showProjectsMessage(
            "No projects available right now."
        );

        return;
    }

    projectsGrid.innerHTML = "";

    projects.forEach((project) => {

        const projectCard =
            createProjectCard(project);

        projectsGrid.appendChild(
            projectCard
        );

    });

    if (projectsStatus) {

        projectsStatus.textContent =
            `${projects.length} projects showcased`;

    }

}


/* =========================================================
   CREATE PROJECT CARD
   ========================================================= */

function createProjectCard(project) {

    const article =
        document.createElement("article");

    article.className =
        "project-card";

    article.dataset.projectId =
        project.id;


    /* -----------------------------------------------------
       IMAGE
       ----------------------------------------------------- */

    const imageWrapper =
        document.createElement("div");

    imageWrapper.className =
        "project-image";


    const image =
        document.createElement("img");

    image.alt =
        `${project.title} project screenshot`;

    image.loading = "lazy";


    /*
     * If an image path exists, try loading it.
     * If it fails, replace it with our placeholder.
     */

    if (project.image) {

        image.src =
            project.image;

        image.addEventListener(
            "error",
            () => {

                createImagePlaceholder(
                    imageWrapper,
                    project
                );

            },
            {
                once: true
            }
        );

    } else {

        createImagePlaceholder(
            imageWrapper,
            project
        );

    }


    /*
     * Only append the image when an image
     * has actually been provided.
     */

    if (project.image) {

        imageWrapper.appendChild(
            image
        );

    }


    /* -----------------------------------------------------
       CONTENT
       ----------------------------------------------------- */

    const content =
        document.createElement("div");

    content.className =
        "project-content";


    const title =
        document.createElement("h3");

    title.textContent =
        project.title;


    const description =
        document.createElement("p");

    description.textContent =
        project.description;


    /* -----------------------------------------------------
       TECHNOLOGIES
       ----------------------------------------------------- */

    const technologies =
        document.createElement("div");

    technologies.className =
        "project-technologies";

    technologies.setAttribute(
        "aria-label",
        "Technologies used"
    );


    project.technologies.forEach(
        (technology) => {

            const technologyElement =
                document.createElement("span");

            technologyElement.textContent =
                technology;

            technologies.appendChild(
                technologyElement
            );

        }
    );


    /* -----------------------------------------------------
       ACTIONS
       ----------------------------------------------------- */

    const actions =
        document.createElement("div");

    actions.className =
        "project-actions";


    const detailsButton =
        document.createElement("button");

    detailsButton.type =
        "button";

    detailsButton.className =
        "btn btn-secondary";

    detailsButton.textContent =
        "View Details";


    detailsButton.addEventListener(
        "click",
        () => {

            openProjectModal(
                project.id
            );

        }
    );


    actions.appendChild(
        detailsButton
    );


    if (
        isValidExternalLink(
            project.github
        )
    ) {

        const githubLink =
            createProjectLink(
                project.github,
                "GitHub"
            );

        actions.appendChild(
            githubLink
        );

    }


    if (
        isValidExternalLink(
            project.live
        )
    ) {

        const liveLink =
            createProjectLink(
                project.live,
                "Live Demo"
            );

        liveLink.classList.remove(
            "btn-secondary"
        );

        liveLink.classList.add(
            "btn-primary"
        );

        actions.appendChild(
            liveLink
        );

    }


    /* -----------------------------------------------------
       BUILD CARD
       ----------------------------------------------------- */

    content.appendChild(
        title
    );

    content.appendChild(
        description
    );

    content.appendChild(
        technologies
    );

    content.appendChild(
        actions
    );


    article.appendChild(
        imageWrapper
    );

    article.appendChild(
        content
    );


    return article;

}


/* =========================================================
   PROFESSIONAL IMAGE PLACEHOLDER
   ========================================================= */

function createImagePlaceholder(
    container,
    project
) {

    /*
     * Prevent duplicate placeholders.
     */

    if (
        container.dataset.placeholderCreated ===
        "true"
    ) {
        return;
    }

    container.dataset.placeholderCreated =
        "true";


    /*
     * Remove any broken image.
     */

    const brokenImage =
        container.querySelector("img");

    if (brokenImage) {
        brokenImage.remove();
    }


    /*
     * Create placeholder.
     */

    const placeholder =
        document.createElement("div");

    placeholder.className =
        "project-placeholder";

    placeholder.setAttribute(
        "aria-label",
        `${project.title} project preview`
    );


    /* Code icon */

    const icon =
        document.createElement("div");

    icon.className =
        "placeholder-icon";

    icon.setAttribute(
        "aria-hidden",
        "true"
    );

    icon.textContent =
        "</>";


    /* Project title */

    const title =
        document.createElement("strong");

    title.className =
        "placeholder-title";

    title.textContent =
        project.title;


    /* Subtitle */

    const subtitle =
        document.createElement("span");

    subtitle.className =
        "placeholder-subtitle";

    subtitle.textContent =
        "Project Preview";


    /* Decorative code lines */

    const codeLines =
        document.createElement("div");

    codeLines.className =
        "placeholder-code";


    for (let i = 0; i < 4; i++) {

        const line =
            document.createElement("span");

        line.style.width =
            `${45 + Math.random() * 40}%`;

        codeLines.appendChild(
            line
        );

    }


    placeholder.appendChild(
        icon
    );

    placeholder.appendChild(
        title
    );

    placeholder.appendChild(
        subtitle
    );

    placeholder.appendChild(
        codeLines
    );


    container.appendChild(
        placeholder
    );

}


/* =========================================================
   PROJECT LINKS
   ========================================================= */

function createProjectLink(
    url,
    text
) {

    const link =
        document.createElement("a");

    link.href =
        url;

    link.textContent =
        text;

    link.className =
        "btn btn-secondary";

    link.target =
        "_blank";

    link.rel =
        "noopener noreferrer";

    return link;

}


function isValidExternalLink(url) {

    return (
        typeof url === "string" &&
        /^https?:\/\//i.test(url)
    );

}


/* =========================================================
   PROJECT STATUS
   ========================================================= */

function showProjectsMessage(message) {

    if (!projectsStatus) {
        return;
    }

    projectsStatus.textContent =
        message;

}


/* =========================================================
   PROJECT MODAL
   ========================================================= */

function initializeModal() {

    if (!projectModal) {
        return;
    }


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeProjectModal
        );

    }


    /*
     * Clicking the backdrop closes the modal.
     */

    projectModal.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                projectModal
            ) {

                closeProjectModal();

            }

        }
    );


    /*
     * Handle Escape.
     */

    projectModal.addEventListener(
        "cancel",
        (event) => {

            event.preventDefault();

            closeProjectModal();

        }
    );

}


function openProjectModal(projectId) {

    const project =
        projects.find(
            (item) =>
                item.id === projectId
        );


    if (
        !project ||
        !projectModal
    ) {
        return;
    }


    renderModalContent(
        project
    );


    projectModal.showModal();

    document.body.classList.add(
        "modal-open"
    );


    if (modalClose) {

        modalClose.focus();

    }

}


function renderModalContent(project) {

    if (!modalContent) {
        return;
    }

    modalContent.innerHTML = "";


    /* -----------------------------------------------------
       IMAGE / PLACEHOLDER
       ----------------------------------------------------- */

    const imageWrapper =
        document.createElement("div");

    imageWrapper.className =
        "modal-image-wrapper";


    if (project.image) {

        const image =
            document.createElement("img");

        image.src =
            project.image;

        image.alt =
            `${project.title} screenshot`;

        image.loading =
            "eager";


        image.addEventListener(
            "error",
            () => {

                createImagePlaceholder(
                    imageWrapper,
                    project
                );

            },
            {
                once: true
            }
        );


        imageWrapper.appendChild(
            image
        );

    } else {

        createImagePlaceholder(
            imageWrapper,
            project
        );

    }


    /* -----------------------------------------------------
       TITLE
       ----------------------------------------------------- */

    const title =
        document.createElement("h2");

    title.id =
        "modalTitle";

    title.textContent =
        project.title;


    /* -----------------------------------------------------
       DESCRIPTION
       ----------------------------------------------------- */

    const description =
        document.createElement("p");

    description.textContent =
        project.description;


    /* -----------------------------------------------------
       FEATURES
       ----------------------------------------------------- */

    const featuresHeading =
        document.createElement("h3");

    featuresHeading.textContent =
        "Key Features";


    const featuresList =
        document.createElement("ul");


    project.features.forEach(
        (feature) => {

            const item =
                document.createElement("li");

            item.textContent =
                feature;

            featuresList.appendChild(
                item
            );

        }
    );


    /* -----------------------------------------------------
       TECHNOLOGIES
       ----------------------------------------------------- */

    const technologyHeading =
        document.createElement("h3");

    technologyHeading.textContent =
        "Technologies";


    const technologyList =
        document.createElement("ul");


    project.technologies.forEach(
        (technology) => {

            const item =
                document.createElement("li");

            item.textContent =
                technology;

            technologyList.appendChild(
                item
            );

        }
    );


    /* -----------------------------------------------------
       ACTIONS
       ----------------------------------------------------- */

    const actions =
        document.createElement("div");

    actions.className =
        "modal-actions";


    if (
        isValidExternalLink(
            project.github
        )
    ) {

        actions.appendChild(
            createProjectLink(
                project.github,
                "View on GitHub"
            )
        );

    }


    if (
        isValidExternalLink(
            project.live
        )
    ) {

        const liveLink =
            createProjectLink(
                project.live,
                "View Live Project"
            );


        liveLink.classList.remove(
            "btn-secondary"
        );

        liveLink.classList.add(
            "btn-primary"
        );


        actions.appendChild(
            liveLink
        );

    }


    /* -----------------------------------------------------
       BUILD MODAL
       ----------------------------------------------------- */

    modalContent.appendChild(
        imageWrapper
    );

    modalContent.appendChild(
        title
    );

    modalContent.appendChild(
        description
    );

    modalContent.appendChild(
        featuresHeading
    );

    modalContent.appendChild(
        featuresList
    );

    modalContent.appendChild(
        technologyHeading
    );

    modalContent.appendChild(
        technologyList
    );


    if (actions.children.length) {

        modalContent.appendChild(
            actions
        );

    }

}


function closeProjectModal() {

    if (!projectModal) {
        return;
    }

    projectModal.close();

    document.body.classList.remove(
        "modal-open"
    );

}


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


if (sections.length) {

    const sectionObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        const currentSection =
                            entry.target.id;


                        updateActiveNavigation(
                            currentSection
                        );

                    }
                );

            },
            {
                root: null,

                rootMargin:
                    "-35% 0px -55% 0px",

                threshold: 0
            }
        );


    sections.forEach(
        (section) => {

            sectionObserver.observe(
                section
            );

        }
    );

}


function updateActiveNavigation(
    sectionId
) {

    navItems.forEach(
        (link) => {

            const target =
                link.getAttribute(
                    "href"
                );


            const isActive =
                target ===
                `#${sectionId}`;


            link.classList.toggle(
                "active",
                isActive
            );

        }
    );

}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

function updateCurrentYear() {

    if (!currentYear) {
        return;
    }

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   RESIZE HANDLING
   ========================================================= */

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 800
        ) {

            closeMobileMenu();

        }

    }
);