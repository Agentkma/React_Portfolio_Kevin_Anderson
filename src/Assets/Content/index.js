export const content = {
    home: {
        header: {
            mainHeading: "My name is Kevin Anderson",
            subHeading: [
                "I'm a Software Engineer.",
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
                    to: "/project1"
                },
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
                    to: "/project2"
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
                    to: "/project3"
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
                    to: "/project4"
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
                    to: "/project5"
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
                    to: "/project6"
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
                    to: "/project7"
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
                    to: "/project8"
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
                    to: "/project9"
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

    projects: [
        {
            url: "project1",
            title: {
                name: "Galvanize Eats",
                categories: "Front End & CSS Framework"
            },
            bannerImg: [
                {
                    alt: "alt",
                    title: "title",
                    srcSet: [
                        "Assets/Images/project/project01/macroPal1-1200x700.png"
                    ],
                    src: "Assets/Images/project/project01/gEats6-1200x700.png"
                },
                {
                    alt: "alt",
                    title: "title",
                    srcSet: [
                        "Assets/Images/project/project01/gEats2-1200x700.png"
                    ],
                    src: "Assets/Images/project/project01/gEats2-1200x700.png"
                },
                {
                    alt: "alt",
                    title: "title",
                    srcSet: [
                        "Assets/Images/project/project01/gEats3-1200x700.png"
                    ],
                    src: "Assets/Images/project/project01/gEats3-1200x700.png"
                }
            ],
            img: {
                alt: "pic of home page of macro pal app",
                title: "macro pal app",
                srcSet: ["Assets/Images/works/macroPal1100x650.webp"],
                src: "Assets/Images/works/macroPal1100x650.png"
            },
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
            imgContainer: [
                {
                    alt: "galvanize eats order form and shopping cart",
                    title: "order form & cart",
                    src: "Assets/Images/project/project01/gEats1-1200x700.png"
                },
                {
                    alt: "galvanize eats landing page hero image screen shot",
                    title: "home page",
                    src: "Assets/Images/project/project01/gEats6-1200x700.png"
                },
                {
                    alt: "galvanize eats order confirmation modal",
                    title: "order confirmation",
                    src: "Assets/Images/project/project01/gEats2-1200x700.png"
                },
                {
                    alt: "galvanize eats home page about section",
                    title: "home page about section",
                    src: "Assets/Images/project/project01/gEats3-1200x700.png"
                },
                {
                    alt: "galvanize eats landing page mobile phone view",
                    title: "home page on mobile",
                    src: "Assets/Images/project/project01/gEats4-1200x700.png"
                },
                {
                    alt: "galvanize eats landing page tablet view",
                    title: "home page on tablet",
                    src: "Assets/Images/project/project01/gEats5-1200x700.png"
                }
            ]
        },
        {
            url: "project2",
            title: {
                name: "Macro Pal",
                categories: "Front End & CSS Framework"
            },
            bannerImg: [
                {
                    alt: "alt",
                    title: "title",
                    srcSet: [
                        "Assets/Images/project/project02/macroPal1-1200x700.png"
                    ],
                    src:
                        "Assets/Images/project/project02/macroPal1-1200x700.png"
                },
                {
                    alt: "alt",
                    title: "title",
                    srcSet: [
                        "Assets/Images/project/project02/macroPal2-1200x700.png"
                    ],
                    src:
                        "Assets/Images/project/project02/macroPal2-1200x700.png"
                },
                {
                    alt: "alt",
                    title: "title",
                    srcSet: [
                        "Assets/Images/project/project02/macroPal3-1200x700.png"
                    ],
                    src:
                        "Assets/Images/project/project02/macroPal3-1200x700.png"
                }
            ],
            img: {
                alt: "pic of home page of macro pal app",
                title: "macro pal app",
                srcSet: ["Assets/Images/works/macroPal1100x650.webp"],
                src: "Assets/Images/works/macroPal1100x650.png"
            },
            description: {
                taglineHeading: "Good design and clean coding",
                taglineSubHeading: "That is a Principle",
                projectDescription: [
                    "MacroPal is an app that uses form user input to calculate how many calories and macros you need daily.",
                    "You can use this info to build a weekly grocery list. You can also search foods to find their calories and macros.",
                    "Technology used is HTML, CSS, JavaScript, SASS, jQuery, an API, and Materialize CSS Framework."
                ],
                categories: "Front End & CSS Framework",
                delivered: "2017 August",
                liveSiteLink: "https://agentkma.github.io/MacroPal2.0/"
            },
            imgContainer: [
                {
                    alt: "macroPal homepage screen shot",
                    title: "home page",
                    src:
                        "Assets/Images/project/project02/macroPal1-1200x700.png"
                },
                {
                    alt: "macroPal build section screenshot",
                    title: "build section",
                    src:
                        "Assets/Images/project/project02/macroPal3-1200x700.png"
                },
                {
                    alt: "macropal choose food section",
                    title: "choose foods",
                    src:
                        "Assets/Images/project/project02/macroPal4-1200x700.png"
                },
                {
                    alt: "macroPal Search Food Section",
                    title: "search food",
                    src:
                        "Assets/Images/project/project02/macroPal5-1200x700.png"
                },
                {
                    alt: "macroPal mobile phone view",
                    title: "mobile view",
                    src:
                        "Assets/Images/project/project02/macroPal6-1200x700.png"
                },
                {
                    alt: "macroPal Tablet view",
                    title: "tablet view",
                    src:
                        "Assets/Images/project/project02/macroPal7-1200x700.png"
                }
            ]
        },
        {
            url: "project3",
            title: {
                name: "Safe Nav",
                categories: "Front End & CSS Framework"
            },
            bannerImg: [
                {
                    alt: "alt",
                    title: "title",
                    srcSet: [
                        "Assets/Images/project/project03/safeNav1-1200x700.png"
                    ],
                    src: "Assets/Images/project/project03/safeNav1-1200x700.png"
                },
                {
                    alt: "alt",
                    title: "title",
                    srcSet: [
                        "Assets/Images/project/project03/safeNav2-1200x700.png"
                    ],
                    src: "Assets/Images/project/project03/safeNav2-1200x700.png"
                },
                {
                    alt: "alt",
                    title: "title",
                    srcSet: [
                        "Assets/Images/project/project03/safeNav3-1200x700.png"
                    ],
                    src: "Assets/Images/project/project03/safeNav3-1200x700.png"
                }
            ],
            img: {
                alt: "THIS SECTION NEEDS UPDATE TO SAFENAV",
                title: "macro pal app",
                srcSet: ["Assets/Images/works/macroPal1100x650.webp"],
                src: "Assets/Images/works/macroPal1100x650.png"
            },
            description: {
                taglineHeading: "Good design and clean coding",
                taglineSubHeading: "That is a Principle",
                projectDescription: [
                    "SafeNav is an app demonstrating a basic product info site.",
                    "Tech used is HTML, CSS, JavaScript, jQuery, and Bootstrap CSS Framework."
                ],
                categories: "Front End & CSS Framework",
                delivered: "2017 July",
                liveSiteLink: "https://agentkma.github.io/Safenav/"
            },
            imgContainer: [
                {
                    alt: "THIS SECTION NEEDS UPDAT TO SAFENAV",
                    title: "home page",
                    src:
                        "Assets/Images/project/project02/macroPal1-1200x700.png"
                },
                {
                    alt: "macroPal build section screenshot",
                    title: "build section",
                    src:
                        "Assets/Images/project/project02/macroPal3-1200x700.png"
                },
                {
                    alt: "macropal choose food section",
                    title: "choose foods",
                    src:
                        "Assets/Images/project/project02/macroPal4-1200x700.png"
                },
                {
                    alt: "macroPal Search Food Section",
                    title: "search food",
                    src:
                        "Assets/Images/project/project02/macroPal5-1200x700.png"
                },
                {
                    alt: "macroPal mobile phone view",
                    title: "mobile view",
                    src:
                        "Assets/Images/project/project02/macroPal6-1200x700.png"
                },
                {
                    alt: "macroPal Tablet view",
                    title: "tablet view",
                    src:
                        "Assets/Images/project/project02/macroPal7-1200x700.png"
                }
            ]
        }
    ],
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
