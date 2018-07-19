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
                "css-frameworks",
                "front-end",
                "full-stack",
                "SPA",
                "pure-css",
                "mobile"
            ],
            projects: [
                {
                    project1: {
                        img: {
                            alt: "pic of home page of macro pal app",
                            title: "macro pal app",
                            srcSet: [
                                "Assets/Images/works/macroPal1100x650.webp"
                            ],
                            src: "Assets/Images/works/macroPal1100x650.png"
                        },
                        name: "MacroPal",
                        description:
                            "A health app that calculates calories  macros, and builds grocery lists.",
                        worksFilter: ["css-frameworks"]
                    }
                },
                { project2: {} }
            ]
        }
    },

    projects: {
        header: {},
        main: {}
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
