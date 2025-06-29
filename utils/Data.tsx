import { DiMongodb, DiMysql, DiPostgresql } from "react-icons/di";
import { FaAws, FaDocker, FaGithub, FaGitAlt, FaNodeJs, FaReact, FaJava, FaAngular } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiFirebase, SiPostman, SiRedux, SiSocketdotio, SiWebrtc, SiSupabase, SiTailwindcss, SiTypescript, SiFramer, SiPrisma, SiPuppeteer, SiGrafana, SiPhp } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const links = [
    {
        name: "Home",
        hash: "#",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
];

export const techData = [
  { icon: <FaJava />, key: 1, desc: "Java" },
  { icon: <IoLogoJavascript />, key: 2, desc: "JavaScript" },
  { icon: <SiTypescript />, key: 3, desc: "TypeScript" },
  { icon: <FaReact />, key: 4, desc: "React" },
  { icon: <TbBrandNextjs />, key: 5, desc: "Next.js" },
  { icon: <FaAngular />, key: 6, desc: "Angular" },
  { icon: <FaGitAlt />, key: 7, desc: "Git" },
  { icon: <FaGithub />, key: 8, desc: "GitHub" },
  { icon: <SiPostman />, key: 9, desc: "Postman" },
  { icon: <DiMysql />, key: 10, desc: "MySQL" },
  { icon: <SiFirebase />, key: 11, desc: "Firebase" },
  { icon: <SiSupabase />, key: 12, desc: "Supabase" },
  { icon: <FaNodeJs />, key: 13, desc: "Node.js" },
  { icon: <SiPhp />, key: 14, desc: "PHP" },
  { icon: <SiExpress />, key: 15, desc: "Express.js" },
  { icon: <DiMongodb />, key: 16, desc: "MongoDB" },
  { icon: <SiSocketdotio />, key: 17, desc: "Socket.io" },
  { icon: <SiWebrtc />, key: 18, desc: "WebRTC" },
  { icon: <FaDocker />, key: 19, desc: "Docker" },
  { icon: <SiTailwindcss />, key: 20, desc: "Tailwind CSS" },
  { icon: <SiRedux />, key: 21, desc: "Redux" },
  { icon: <SiFramer />, key: 22, desc: "Framer Motion" },
  { icon: <FaAws />, key: 23, desc: "Amazon Web Services" },
  { icon: <DiPostgresql />, key: 24, desc: "PostgreSQL" },
  { icon: <SiGrafana />, key: 25, desc: "Grafana" },
  { icon: <SiPrisma />, key: 26, desc: "Prisma" },
  { icon: <SiPuppeteer />, key: 27, desc: "Puppeteer" },
  
];

export const projectsData = [
    {
        pId: 1,
        projectName: "Quizzer",
        projectDescription: "A real-time multiplayer quiz application where users can create, join, and compete in quizzes. It features a dynamic question bank, real-time score updates, and a user-friendly interface.",
        githubLink: "https://github.com/Vinit1014/quizzer",
        projectLink: "https://quizzer-gilt.vercel.app/",
        projectImage: "/projectss/Quizzer.png", //left
        techStack: [
            {
                name: "Nextjs",
                icon: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000",
            },
            {
                name: "TypeScript",
                icon: "https://img.icons8.com/?size=100&id=vMqgHSToxrJR&format=png&color=000000",
            },
            {
                name: "Prismajs",
                icon: "https://img.icons8.com/?size=100&id=aqb9SdV9P8oC&format=png&color=000000",
            },
            {
                name: "Socketio",
                icon: "/techlogos/socketio.png",
            },
            {
                name: "Postgresql",
                icon: "/techlogos/postgresql.png",
            },
            {
                name: "Tailwindcss",
                icon: "/techlogos/tailwindcss.png",
            },
            {
                name: "Framer",
                icon: "/techlogos/framer.png",
            },
        ],
    },
    {
        pId: 2,
        projectName: "Omeeggle",
        projectDescription: "A real-time video chat application that connects users randomly for one-on-one conversations. It uses WebRTC for peer-to-peer communication and Socket.io for signaling.",
        githubLink: "https://github.com/Vinit1014/omeegle",
        projectLink: "",
        projectImage: "/projectss/Omeggle.png", //left
        techStack: [
            {
                name: "Reactjs",
                icon: "/techlogos/react.png",
            },
            {
                name: "TypeScript",
                icon: "https://img.icons8.com/?size=100&id=vMqgHSToxrJR&format=png&color=000000",
            },
            {
                name: "Nodejs",
                icon: "/techlogos/nodejs.png",
            },
            {
                name: "Mongodb",
                icon: "/techlogos/mongodb.png",
            },
            {
                name: "WebRTC",
                icon: "/techlogos/webrtc.png",
            },
            {
                name: "Socket.io",
                icon: "/techlogos/socketio.png",
            },
        ],
    },
    {
        pId: 3,
        projectName: "AI Music Generator",
        projectDescription: "An AI-powered music generator that creates unique music tracks based on user input. Currently it generates music in various genres and moods on random basics. I want to show my frontend skills in this project.",
        githubLink: "https://github.com/Vinit1014/music_generator/",
        projectLink: "https://music-generator-sigma.vercel.app/",
        projectImage: "/projectss/music_generator.png",
        techStack: [
            {
                name: "Reactjs",
                icon: "/techlogos/reactjs.png",
            },
            {
                name: "Tailwindcss",
                icon: "/techlogos/tailwindcss.png",
            },
            {
                name: "Framer Motion",
                icon: "/techlogos/tailwindcss.png", //keeping it as it is
            },
             {
                name: "Node.js",
                icon: "/techlogos/nodejs.png",
            },
            {
                name: "Expressjs",
                icon: "/techlogos/expressjs.png",
            },
        ],
    },
    {
        pId: 4,
        projectName: "N.U. Engineering Works",
        projectDescription: "A professional website for N.U. Engineering Works, showcasing their services and contact information. It features a modern design with responsive layout and easy navigation.",
        githubLink: "",
        projectLink: "https://nuengineeringworks.com/",
        projectImage: "/projectss/nuengineeringworks.png",
        techStack: [
            {
                name: "Reactjs",
                icon: "/techlogos/reactjs.png",
            },
            {
                name: "Tailwindcss",
                icon: "/techlogos/tailwindcss.png",
            },
            {
                name: "Nodemailer",
                icon: "/techlogos/tailwindcss.png",
            },
           
        ],
    },
    {
        pId: 5,
        projectName: "SecureShare",
        projectDescription: "A secure file sharing application that allows users to upload, share, and manage files with end-to-end encryption. It uses Supabase for authentication and storage, ensuring data privacy and security. It uses public key to send files securely and open via the private key.",
        githubLink: "https://github.com/Vinit1014/secureShare/",
        projectLink: "https://secure-share-wine.vercel.app/",
        projectImage: "/projectss/secureShare.png", //left
        techStack: [
            {
                name: "Nextjs",
                icon: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000",
            },
            {
                name: "TypeScript",
                icon: "https://img.icons8.com/?size=100&id=vMqgHSToxrJR&format=png&color=000000",
            },
            {
                name: "Supabase",
                icon: "/techlogos/supabase.png",
            },
            {
                name: "Tailwindcss",
                icon: "/techlogos/tailwindcss.png",
            },
        ],
    },
    {
        pId: 6,
        projectName: "Traffic Monitoring and Pathfinding System",
        projectDescription: "A real-time traffic monitoring system that tracks vehicle movements and provides optimal pathfinding solutions. It uses Node.js and MongoDB for backend services, with real-time data updates.",
        githubLink: "https://github.com/Vinit1014/realTimeTraffic",
        projectLink: "",
        projectImage: "/projectss/realtime.png", //left
        techStack: [
            {
                name: "Node.js",
                icon: "/techlogos/nodejs.png",
            },
            {
                name: "Expressjs",
                icon: "/techlogos/expressjs.png",
            },
            {
                name: "Mongodb",
                icon: "/techlogos/mongodb.png",
            }
        ],
    },
    {
        pId: 7,
        projectName: "PriceTracker",
        projectDescription: "A web application that tracks product prices across various e-commerce platforms and notifies users of price drops. It uses Puppeteer for web scraping, Node.js for backend services, and MongoDB for data storage.",
        githubLink: "https://github.com/Vinit1014/productPriceTracker",
        projectLink: "https://product-price-tracker-seven.vercel.app/",
        projectImage: "/projectss/PriceTracker.png", //left
        techStack: [
            {
                name: "Reactjs",
                icon: "/techlogos/react.png",
            },
            {
                name: "TypeScript",
                icon: "https://img.icons8.com/?size=100&id=vMqgHSToxrJR&format=png&color=000000",
            },
            {
                name: "Nodejs",
                icon: "/techlogos/nodejs.png",
            },
            {
                name: "Mongodb",
                icon: "/techlogos/mongodb.png",
            },
            {
                name: "Puppeteer",
                icon: "/techlogos/puppeteer.png"
            },
            {
                name: "Tailwindcss",
                icon: "/techlogos/tailwindcss.png",
            },
            {
                name: "Docker",
                icon: "/techlogos/docker.png",
            },
        ],
    },
    {
        pId: 8,
        projectName: "Investcharts",
        projectDescription: "A financial dashboard that visualizes stock market data using Chart.js. It provides interactive charts and real-time updates on stock prices, allowing users to analyze market trends effectively.",
        githubLink: "https://github.com/Vinit1014/InvestCharts",
        projectLink: "",
        projectImage: "/projectss/investCharts.png", //left
        techStack: [
            {
                name: "Reactjs",
                icon: "/techlogos/reactjs.png",
            },
            {
                name: "Chartjs",
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Chart.js_logo.svg/800px-Chart.js_logo.svg.png",
            },
        ],
    },
    {
        pId: 9,
        projectName: "NoteKeeper",
        projectDescription: "A full-stack note-taking application that allows users to create, edit, and delete notes. It features a user-friendly interface with real-time updates and secure authentication.",
        githubLink: "https://github.com/Vinit1014/todoApp",
        projectLink: "https://todo-app-six-cyan-35.vercel.app/",
        projectImage: "/projectss/noteKeeper.png",
        techStack: [
            {
                name: "Reactjs",
                icon: "/techlogos/reactjs.png",
            },
            {
                name: "Node.js",
                icon: "/techlogos/nodejs.png",
            },
            {
                name: "Expressjs",
                icon: "/techlogos/expressjs.png",
            },
            {
                name: "Mongodb",
                icon: "/techlogos/mongodb.png",
            }
        ],
    },
    // {
    //     pId: 9,
    //     projectName: "BloggersAdda",
    //     githubLink: "https://github.com/Vinit1014/BloggersAdda",
    //     projectLink: "",
    //     projectImage: "/projectss/bloggersAdda.png", //left
    //     techStack: [
    //         {
    //             name: "HTML",
    //             icon: "https://img.icons8.com/?size=100&id=ZRRdKjb2zoiK&format=png&color=000000",
    //         },
    //         {
    //             name: "CSS",
    //             icon: "https://img.icons8.com/?size=100&id=111973&format=png&color=000000",
    //         },
    //         {
    //             name: "Nodejs",

    //             icon: "/techlogos/nodejs.png",
    //         },
    //         {
    //             name: "Expressjs",

    //             icon: "/techlogos/expressjs.png",
    //         },
    //         {
    //             name: "EJS",

    //             icon: "https://img.icons8.com/?size=100&id=puL87ypQPxxr&format=png&color=000000",
    //         },
    //         {
    //             name: "Mongodb",

    //             icon: "/techlogos/mongodb.png",
    //         },
    //     ],
    // },
]


// {
//     pId: 6,
//     projectName: "React-Meetups",
//     githubLink: "https://github.com/Vinit1014/react-meetups",
//     projectLink: "https://react-meetups-ecru.vercel.app/",
//     projectImage: "/projectss/reactmeetups.png", //left
//     techStack: [
//         {
//             name: "Nextjs",
//             icon: "/techlogos/nextjs.png",
//         },
//         {
//             name: "Mongodb",
//             icon: "/techlogos/mongodb.png",
//         }
//     ],
// },