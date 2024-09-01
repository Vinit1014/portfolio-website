import { DiMongodb, DiMysql, DiPostgresql } from "react-icons/di";
import { FaAws, FaDocker, FaGithub, FaGitAlt, FaNodeJs, FaReact, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiFirebase, SiPostman, SiRedux, SiSocketdotio, SiWebrtc, SiSupabase, SiTailwindcss, SiTypescript, SiFramer, SiPrisma } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const techData = [
  { icon: <FaJava />, key: 1, desc: "Java" },
  { icon: <IoLogoJavascript />, key: 2, desc: "JavaScript" },
  { icon: <SiTypescript />, key: 3, desc: "TypeScript" },
  { icon: <FaReact />, key: 4, desc: "React" },
  { icon: <TbBrandNextjs />, key: 5, desc: "Next.js" },
  { icon: <FaGitAlt />, key: 6, desc: "Git" },
  { icon: <FaGithub />, key: 7, desc: "GitHub" },
  { icon: <SiPostman />, key: 8, desc: "Postman" },
  { icon: <DiMysql />, key: 9, desc: "MySQL" },
  { icon: <SiFirebase />, key: 10, desc: "Firebase" },
  { icon: <SiSupabase />, key: 11, desc: "Supabase" },
  { icon: <FaNodeJs />, key: 12, desc: "Node.js" },
  { icon: <SiExpress />, key: 13, desc: "Express.js" },
  { icon: <DiMongodb />, key: 14, desc: "MongoDB" },
  { icon: <SiSocketdotio />, key: 15, desc: "Socket.io" },
  { icon: <SiWebrtc />, key: 16, desc: "WebRTC" },
  { icon: <FaDocker />, key: 17, desc: "Docker" },
  { icon: <SiTailwindcss />, key: 18, desc: "Tailwind CSS" },
  { icon: <SiRedux />, key: 19, desc: "Redux" },
  { icon: <SiFramer />, key: 20, desc: "Framer Motion" },
  { icon: <FaAws />, key: 21, desc: "Amazon Web Services" },
  { icon: <DiPostgresql />, key: 22, desc: "PostgreSQL" },
  { icon: <SiPrisma />, key: 23, desc: "Prisma" },
];

export const projectsData = [
    {
        pId: 1,
        projectName: "Quizzer",
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
        projectName: "SecureShare",
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
        pId: 3,
        projectName: "Omeeggle",
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
        pId: 4,
        projectName: "Traffic Monitoring and Pathfinding System",
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
        pId: 5,
        projectName: "Investcharts",
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
        pId: 6,
        projectName: "React-Meetups",
        githubLink: "https://github.com/Vinit1014/react-meetups",
        projectLink: "https://react-meetups-ecru.vercel.app/",
        projectImage: "/projectss/reactmeetups.png", //left
        techStack: [
            {
                name: "Nextjs",
                icon: "/techlogos/nextjs.png",
            },
            {
                name: "Mongodb",
                icon: "/techlogos/mongodb.png",
            }
        ],
    },
    {
        pId: 7,
        projectName: "BloggersAdda",
        githubLink: "https://github.com/Vinit1014/BloggersAdda",
        projectLink: "",
        projectImage: "/projectss/bloggersAdda.png", //left
        techStack: [
            {
                name: "HTML",
                icon: "https://img.icons8.com/?size=100&id=ZRRdKjb2zoiK&format=png&color=000000",
            },
            {
                name: "CSS",
                icon: "https://img.icons8.com/?size=100&id=111973&format=png&color=000000",
            },
            {
                name: "Nodejs",

                icon: "/techlogos/nodejs.png",
            },
            {
                name: "Expressjs",

                icon: "/techlogos/expressjs.png",
            },
            {
                name: "EJS",

                icon: "https://img.icons8.com/?size=100&id=puL87ypQPxxr&format=png&color=000000",
            },
            {
                name: "Mongodb",

                icon: "/techlogos/mongodb.png",
            },
        ],
    },
]
