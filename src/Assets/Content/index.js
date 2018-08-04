export const content = {
    home: {
        header: {
            mainHeading: "My name is Kevin Anderson",
            subHeading: [
                "I'm a UI Engineer.",
                "I work in Denver, CO.",
                "I create web apps.",
                "I'm a solution builder.",
                "I'm a lifelong learner.",
                "I'm a rational optimist.",
                "I'm a humanist."
            ]
        },
        main: {
            worksFilter: [
                "all",
                "cSS-frameworks",
                "front-end",
                "full-stack",
                "SPA",
                "pure-css",
                "mobile"
            ],
            projects: [
                {
                    img: {
                        alt: "pic of home page of macro pal app",
                        title: "macro pal app",
                        srcSet: ["Assets/Images/works/macroPal1100x650.webp"],
                        src: "Assets/Images/works/macroPal1100x650.png"
                    },
                    name: "MacroPal",
                    description:
                        "A health app that calculates calories  macros, and builds grocery lists.",
                    worksFilter: ["css-frameworks"],
                    to: "/project01"
                },
                {
                    img: {
                        alt: "pic of galvanize eats app home page",
                        title: "galvanize eats app",
                        srcSet: [
                            "Assets/Images/works/galvanizeEats1100x650.webp"
                        ],
                        src: "Assets/Images/works/galvanizeEats1100x650.png"
                    },
                    name: "Galvanize Eats",
                    description: "A food ordering app.",
                    worksFilter: ["css-frameworks", "front-end"],
                    to: "/project02"
                },
                {
                    img: {
                        alt: "pic of safe nav app home page",
                        title: "safe nav app",
                        srcSet: ["Assets/Images/works/safeNav1100x650.webp"],
                        src: "Assets/Images/works/safeNav1100x650.png"
                    },
                    name: "Safe Nav",
                    description:
                        "A product site for the Safe Nav wearable technology.",
                    worksFilter: ["css-frameworks", "front-end"],
                    to: "/project03"
                },
                {
                    img: {
                        alt: "gif of custom video player",
                        title: "custom video player",
                        srcSet: ["Assets/Images/works/customVP-550x325.gif"],
                        src: "Assets/Images/works/customVP-550x325.gif"
                    },
                    name: "Custom Video Player",
                    description:
                        "Pure HTML:Custom controls, CC, & text highlighting.",
                    worksFilter: ["pure-css", "front-end"],
                    to: "/project04"
                },
                {
                    img: {
                        alt: "pic of Kev App home page",
                        title: "Kev App",
                        srcSet: ["Assets/Images/works/webapp1100x650.webp"],
                        src: "Assets/Images/works/webapp1100x650.png"
                    },
                    name: "KevApp",
                    description:
                        "A simple project simulating a web app using Chart.js plugin.",
                    worksFilter: ["pure-css", "front-end"],
                    to: "/project05"
                },
                {
                    img: {
                        alt: "pic of gRecipes app home page",
                        title: "gRecipes App",
                        srcSet: ["Assets/Images/works/gRecipes1100x650.webp"],
                        src: "Assets/Images/works/gRecipes1100x650.png"
                    },
                    name: "gRecipes",
                    description:
                        "A web app modeled after AllRecipes.com. Full Stack CRUD app.",
                    worksFilter: ["css-frameworks", "full-stack"],
                    to: "/project06"
                },
                {
                    img: {
                        alt: "pic of AngularJS Weather App home page",
                        title: "AngularJS App",
                        srcSet: [
                            "Assets/Images/works/angularWeatherApp550x325.gif"
                        ],
                        src: "Assets/Images/works/angularWeatherApp550x325.gif"
                    },
                    name: "AngularJS Weather App",
                    description: "Single Page Apps.",
                    worksFilter: ["css-frameworks", "full-stack", "SPA"],
                    to: "/project07"
                },
                {
                    img: {
                        alt: "pic of React RSVP home page",
                        title: "React App",
                        srcSet: ["Assets/Images/works/ReactRSVP01100x650.png"],
                        src: "Assets/Images/works/ReactRSVP01100x650.png"
                    },
                    name: "React Apps",
                    description: "Single Page Apps.",
                    worksFilter: ["css-frameworks", "SPA"],
                    to: "/project08"
                },
                {
                    img: {
                        alt: "pic of Angular Photo Log home page",
                        title: "Angular App",
                        srcSet: [
                            "Assets/Images/works/AngularPhotoLog6-1100x650.png"
                        ],
                        src: "Assets/Images/works/AngularPhotoLog6-1100x650.png"
                    },
                    name: "Angular Apps",
                    description: "Single Page Apps.",
                    worksFilter: ["css-frameworks", "SPA"],
                    to: "/project09"
                },
                {
                    img: {
                        alt: "pic of Angular Photo Log home page",
                        title: "terraGo App",
                        srcSet: [
                            "Assets/Images/works/terraGoSplash-1100x650.png"
                        ],
                        src: "Assets/Images/works/terraGoSplash-1100x650.png"
                    },
                    name: "React-Native",
                    description: "Mobile Apps.",
                    worksFilter: ["mobile", "SPA", "full-stack"],
                    to: "/project10"
                }
            ]
        }
    },

    projects: {
        project01: {
            banner: {},
            description: {
                taglineHeading: "Good design and clean coding",
                taglineSubHeading: "That is a Principle",
                projectDescription: [
                    "Galvanize Eats is a simple app demonstrating the use of forms and dynamic menu items received from an API.",
                    " The order data is organized into an order object and sent to an API.",
                    "The app uses Materialize CSS framework, HTML, CSS, JavaScript, and jQuery."
                ],
                categories: "Front End & CSS Framework",
                delivered: "2017 September",
                liveSiteLink: "https://agentkma.github.io/MacroPal2.0/"
            },
            imgContainer: {}
        }
    },
    about: {
        header: {},
        main: {}
    },
    contact: {
        header: {},
        main: {}
    },
    error: {
        header: {},
        main: {}
    },
    footer: {
        social: [
            {
                link: "https://github.com/Agentkma",
                img: {
                    alt: "weblink to Kevin Anderson github page",
                    title: "github icon",
                    src: "Assets/Images/social/github.png"
                }
            },
            {
                link: "https://www.linkedin.com/in/kevinandersondeveloper/",
                img: {
                    alt: "weblink to Kevin Anderson linkedIn page",
                    title: "linkedIn Icon",
                    src: "Assets/Images/social/linkedin.png"
                }
            },
            {
                link: "images/Resume_Kevin_Anderson_Web.pdf",
                img: {
                    alt: "weblink to Kevin Anderson resume pdf file",
                    title: "resume Icon",
                    src: "Assets/Images/social/resumeDL.png"
                }
            },
            {
                link: "contact.html",
                img: {
                    alt: "a weblink to Kevin Anderson email",
                    title: "email Icon",
                    src: "Assets/Images/social/email.png"
                }
            }
        ]
    }
};
