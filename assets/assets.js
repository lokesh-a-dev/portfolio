import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import postman from './postaman.png'; 
import figma from './figma.png';
import git from './git.png';
import postersql from './postersql.jpg';
import mongodb from './mongodb.png';
import chatgpt from './chatgpt.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.jpg';
import logo_dark from './logo-dark.jpg';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import me from './me.jpg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import fullstack from './full-stack.jpg';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import python from './python.jpg';
import flutter from './flutter.jpg';

export const assets = {
    user_image,
    python , 
    postersql,
    flutter,
    fullstack,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    me,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    postman,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    chatgpt,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Real Time Chat Application',
        bgImage: '/work-1.png',
        techstack: ['React', "DaisyUI" , 'Tailwind', 'Node.js', 'Socket.io' , 'MongoDB', 'Cloudinary' ],
        liveLink : 'https://mern-stack-chat-app-8dh6.onrender.com/login',
        gitubLink : 'https://github.com/lokeshRedEye/mern-stack-chat-app',
        description: 'A real-time chat application with CRUD functionalities using MongoDB.'
    },
    {
        title: 'Job Portal',
        bgImage: '/job-portal.png',
        techstack: ['MERN', 'Clerk' , 'Cloudinary' ],
           liveLink : 'https://job-portal-client-two-gamma.vercel.app/',
        gitubLink : 'https://github.com/lokeshRedEye/job-portal',
        description: 'A Job Protal Application where the recruiters can post their job openings and the candidates can register for the jobs and track their status of the application..'


    },
    {
        title: 'Kovai Juice And Bakery',
        bgImage: '/work-3.png',
        techstack: ['HTML', 'CSS', 'JavaScript' , 'Bootstrap'  ],
           liveLink : 'https://kovaijuiceandbakery.in/',
        gitubLink : 'https://github.com/silo-bros/kovai-juice',
        description: 'A responsive website for a local bakery and juice shop built using HTML, CSS, JavaScript, Bootstrap and React. The website features a parallax effect, a gallery section and an about section.'


    },
    // {
    //     title: 'Ai Chat App',
    //     bgImage: '/work-4.png',
    //     techstack: ['Node js', 'Express js', 'Gemini-Api' , 'Ejs' , 'Html & CSS' ],
    //        liveLink : 'https://silo-ai-84sv.onrender.com/',
    //     gitubLink : 'https://github.com/silo-bros/silo-ai-gemini',
    //     description: 'AI chatbot built using Gemini API that can be used for tasks such as answering questions, generating code, providing definitions.'


    // },
]

// export const serviceData = [
//     { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
//     { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
//     { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
//     { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
// ]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Python , Java , JavaScript ,Dart , C , SQL' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.E in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built multiple projects using React, NodeJs, ExpressJs, MongoDB, Firebase, and more.' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.git , assets.postersql, assets.chatgpt,assets.postman,
];