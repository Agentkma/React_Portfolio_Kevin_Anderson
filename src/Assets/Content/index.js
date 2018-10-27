export const content = {
    home: {
        header: {
            mainHeading: "My name is Kevin Anderson",
            subHeading: [
                "I'm a Software Developer.",
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
                "css-frameworks",
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
                    worksFilter: ["all", "css-frameworks", "front-end"],
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
                    worksFilter: ["all", "css-frameworks"],
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
                    worksFilter: ["all", "css-frameworks", "front-end"],
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
                    worksFilter: ["all", "pure-css", "front-end"],
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
                    worksFilter: ["all", "pure-css", "front-end"],
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
                    worksFilter: ["all", "css-frameworks", "full-stack"],
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
                    worksFilter: ["all", "css-frameworks", "full-stack", "SPA"],
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
                    worksFilter: ["all", "css-frameworks", "SPA"],
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
                    worksFilter: ["all", "css-frameworks", "SPA"],
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
                    worksFilter: ["all", "mobile", "SPA", "full-stack"],
                    to: "/project10"
                }
            ]
        }
    },
    projects: [
        {
            url: "project1",
            id: "100",
            title: {
                name: "Galvanize Eats",
                categories: "Front End & CSS Framework"
            },
            bannerImg: [
                {
                    alt: "alt",
                    title: "title",
                    srcSet: [
                        "Assets/Images/project/project01/gEats6-1200x700.png"
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
            id: "200",
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
                    src: "Assets/Images/project/project02/macroPal6-800x600.png"
                },
                {
                    alt: "macroPal Tablet view",
                    title: "tablet view",
                    src: "Assets/Images/project/project02/macroPal7-800x600.png"
                }
            ]
        },
        {
            url: "project3",
            id: "300",
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
                        "Assets/Images/project/project03/safeNav3-800x600.png"
                    ],
                    src: "Assets/Images/project/project03/safeNav3-800x600.png"
                }
            ],
            img: {
                alt: "Safe Nave Home Page",
                title: "Safe Nav App",
                srcSet: ["Assets/Images/works/safeNav1100x650.webp"],
                src: "Assets/Images/works/safeNav1100x650.png"
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
                    alt: "alt text",
                    title: "home page",
                    src: "Assets/Images/project/project03/safeNav1-1200x700.png"
                },
                {
                    alt: "alt text",
                    title: "title text",
                    src: "Assets/Images/project/project03/safeNav2-1200x700.png"
                },
                {
                    alt: "alt text",
                    title: "title text",
                    src: "Assets/Images/project/project03/safeNav3-800x600.png"
                },
                {
                    alt: "alt text",
                    title: "title text",
                    src: "Assets/Images/project/project03/safeNav4-800x600.png"
                },
                {
                    alt: "alt text",
                    title: "title text",
                    src: "Assets/Images/project/project03/safeNav5-800x600.png"
                },
                {
                    alt: "alt text",
                    title: "title text",
                    src: "Assets/Images/project/project03/safeNav6-800x600.png"
                }
            ]
        },
        {
            url: "project4",
            id: "400",
            title: {
                name: "gRecipes",
                categories: "Full Stack"
            },
            bannerImg: [
                {
                    alt: "alt",
                    title: "Full Stack & CSS Framework",
                    srcSet: [
                        "Assets/Images/project/project04/gRecipe1-1200x700.png"
                    ],
                    src:
                        "Assets/Images/project/project04/gRecipe1-1200x700.png",
                    overLay: "Full Stack & CSS Framework"
                },
                {
                    alt: "alt",
                    title: "Mobile First",
                    srcSet: [
                        "Assets/Images/project/project04/gRecipe2-1200x700.png"
                    ],
                    src:
                        "Assets/Images/project/project04/gRecipe2-1200x700.png",
                    overLay: "Mobile First"
                },
                {
                    alt: "alt",
                    title: "Material Design",
                    srcSet: [
                        "Assets/Images/project/project04/gRecipe3-1200x700.png"
                    ],
                    src:
                        "Assets/Images/project/project04/gRecipe3-1200x700.png",
                    overLay: "Material Design"
                }
            ],
            img: {
                alt: "gRecipes Home Page",
                title: "gRecipes App",
                srcSet: ["Assets/Images/works/gRecipes1100x650.webp"],
                src: "Assets/Images/works/gRecipes1100x650.png"
            },
            description: {
                taglineHeading: "Good design and clean coding",
                taglineSubHeading: "That is a Principle",
                projectDescription: [
                    "gRecipes is a demo app modeled after allrecipes.com.",
                    "It is a Full Stack CRUD decoupled app. The front end is deployed with Firebase while the back end is deployed with Heroku.",
                    "Other tech includes HTML, CSS, JavaScript, jQuery, Materialize CSS, Node.js, Express.js, and Knex."
                ],
                categories: "Full Stack & CSS Framework",
                delivered: "2017 September",
                liveSiteLink: "https://grecipes-2be24.firebaseapp.com/"
            },
            imgContainer: [
                {
                    alt: "alt text",
                    title: "home page",
                    src: "Assets/Images/project/project04/gRecipe1-1200x700.png"
                },
                {
                    alt: "alt text",
                    title: "title text",
                    src: "Assets/Images/project/project04/gRecipe2-1200x700.png"
                },
                {
                    alt: "alt text",
                    title: "title text",
                    src: "Assets/Images/project/project04/gRecipe3-1200x700.png"
                },
                {
                    alt: "alt text",
                    title: "title text",
                    src: "Assets/Images/project/project04/gRecipe4-1200x700.png"
                },
                {
                    alt: "alt text",
                    title: "title text",
                    src: "Assets/Images/project/project04/gRecipe5-1200x700.png"
                },
                {
                    alt: "alt text",
                    title: "title text",
                    src: "Assets/Images/project/project04/gRecipe6-800x600.png"
                }
            ]
        },
        {
            url: "project5",
            id: "500",
            title: {
                name: "AngularJS Projects",
                categories: "SPA & CSS Framework"
            },
            bannerImg: [
                {
                    alt: "alt",
                    title: "SPA & CSS Framework",
                    srcSet: [
                        "Assets/Images/project/project05/angularToDo1-1200x700.png"
                    ],
                    src:
                        "Assets/Images/project/project05/angularToDo1-1200x700.png",
                    overLay: "SPA"
                },
                {
                    alt: "alt",
                    title: "Mobile First",
                    srcSet: [
                        "Assets/Images/project/project05/angularToDo2-1200x700.png"
                    ],
                    src:
                        "Assets/Images/project/project05/angularToDo2-1200x700.png",
                    overLay: "Bootstrap CSS"
                },
                {
                    alt: "alt",
                    title: "jQuery",
                    srcSet: [
                        "Assets/Images/project/project05/angularWeather1-1200x700.png"
                    ],
                    src:
                        "Assets/Images/project/project05/angularWeather1-1200x700.png",
                    overLay: "API Integration"
                },
                {
                    alt: "alt text",
                    title: "title text",
                    srcSet: [
                        "Assets/Images/project/project05/angularToDo3-1200x700.png"
                    ],
                    src:
                        "Assets/Images/project/project05/angularToDo3-1200x700.png",
                    overLay: "Angular JS"
                },

                {
                    alt: "alt text",
                    title: "title text",
                    srcSet: [
                        "Assets/Images/project/project05/angularToDo4-1200x700.png"
                    ],
                    src:
                        "Assets/Images/project/project05/angularToDo4-1200x700.png",
                    overLay: "Semantic HTML"
                },
                {
                    alt: "alt text",
                    title: "title text",
                    srcSet: [
                        "Assets/Images/project/project05/angularWeather2-1200x700.png"
                    ],
                    src:
                        "Assets/Images/project/project05/angularWeather2-1200x700.png",
                    overLay: "Mobile First"
                }
            ],
            img: {
                alt: "Weather Now App",
                title: "Weather Now App",
                srcSet: ["Assets/Images/works/angularWeather2-1200x700.png"],
                src: "Assets/Images/works//angularWeather2-1200x700.png"
            },
            description: {
                taglineHeading: "Good design and clean coding",
                taglineSubHeading: "That is a Principle",
                projectDescription: [
                    "These Single Page Apps are built with AngularJS.",
                    "The apps also use Bootstrap CSS framework, HTML, CSS, JavaScript, and jQuery."
                ],
                categories: "SPA & CSS Framework",
                delivered: "2017 October",
                liveSiteLink: "NA"
            },
            imgContainer: [
                {
                    alt: "alt text",
                    title: "home page",
                    src:
                        "Assets/Images/project/project05/angularToDo1-1200x700.png"
                },
                {
                    alt: "alt text",
                    title: "title text",
                    src:
                        "Assets/Images/project/project05/angularToDo2-1200x700.png"
                },
                {
                    alt: "alt text",
                    title: "title text",
                    src:
                        "Assets/Images/project/project05/angularToDo3-1200x700.png"
                },
                {
                    alt: "alt text",
                    title: "title text",
                    src:
                        "Assets/Images/project/project05/angularToDo4-1200x700.png"
                },
                {
                    alt: "alt text",
                    title: "title text",
                    src:
                        "Assets/Images/project/project05/angularWeather1-1200x700.png"
                },
                {
                    alt: "alt text",
                    title: "title text",
                    src:
                        "Assets/Images/project/project05/angularWeather2-1200x700.png"
                }
            ]
        }
    ],
    about: {
        header: { intro: "Welcome to my portfolio site." },
        main: {
            gridItems: [
                {
                    type: "value image",
                    value: {
                        img: "Assets/Images/about/about-coding.jpg",
                        alt: "laptop computer",
                        title: "coding"
                    }
                },
                {
                    type: "value text",
                    value: {
                        txt: {
                            primary: "I like solving challenging problems",
                            secondary: "And Building Creative Solutions."
                        }
                    }
                },
                {
                    type: "value text",
                    value: {
                        txt: {
                            primary: "I love to learn and grow",
                            secondary: "That is My Passion."
                        }
                    }
                },
                {
                    type: "value image",
                    value: {
                        img: "Assets/Images/about/about-learn.jpg",
                        alt:
                            "human face profile view with universe inside the head",
                        title: "learning"
                    }
                },

                {
                    type: "story image",
                    story: {
                        img: "Assets/Images/about/about-story1.jpg"
                    }
                },
                {
                    type: "story text",
                    story: {
                        txt: {
                            primary: "My Story",
                            secondary: [
                                "My first career was in construction management.",
                                "Managing different teams and employees while solving the problems of custom building was challenging. I enjoyed finding improvements in our product and process through continous process improvement.",
                                "I decided to apply my love for problem solving and solution building to the world of technology which I had become more and more interested in.",
                                "My technical education has been primarily through project based course education with Treehouse, Galvanize, and Udemy. In addition I've learned from working with others in person, many other web based education sources, and of course documentation.",
                                "I also love to laugh, read, hike, bike, and spending time with my family and dogs."
                            ]
                        }
                    }
                },

                {
                    type: "story text",
                    story: {
                        txt: {
                            primary: "My Goals",
                            secondary: [
                                "My goals are to continue to learn about life, reality, and grow my abilities to create solutions through code as part of a team.",
                                "I want to share my knowledge and learn from others.",
                                "I want to make the most of my time on earth and continue to learn, grow, and contribute as long as I'm here."
                            ]
                        }
                    }
                },
                {
                    type: "story image",
                    story: {
                        img: "Assets/Images/about/about-goals.jpg"
                    }
                }
            ],

            profile: {
                img: {
                    src: "Assets/Images/team/kevin.jpg",
                    alt: "profile pic of kevin anderson",
                    title: "profile / view of head and torso of Kevin Anderson"
                },
                name: "Kevin Anderson",
                title: "Software Developer",
                details:
                    "Lifelong Learner. Humanist. Realist. Rational Optimist. Husband. Coder."
            },

            stats: [
                {
                    title: "Projects",
                    value: "dynamic fetch in component"
                },
                {
                    title: "Education Pts",
                    value: "dynamic fetch in component"
                },
                {
                    title: "Skills",
                    value: 45
                },
                {
                    title: "Degrees & Certs",
                    value: 5
                }
            ],
            values: [
                {
                    icon: "Ssun",
                    title: "Live",
                    text: "to enjoy family, friends, and this wonderful planet."
                },
                {
                    icon: "Sschool",
                    title: "Learn",
                    text: "about the world, people, and creative coding."
                },
                {
                    icon: "Sperson",
                    title: "Grow",
                    text: "as a human, husband, and team member."
                },
                {
                    icon: "Screate",
                    title: "Create",
                    text:
                        "solutions to challenging problems and interesting apps that imrove people's lives."
                }
            ],
            contact: {
                header: "Interested in working together?",
                main: "Let's talk"
            }
        }
    },
    contact: {
        header: {
            email: "kevin@kevinanderson.codes",
            location: "Denver, CO"
        },
        form: {
            submit: "Send Message"
        }
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
                link: "/contact",
                img: {
                    alt: "a weblink to Kevin Anderson email",
                    title: "email Icon",
                    src: "Assets/Images/social/email.png"
                }
            }
        ]
    }
};
