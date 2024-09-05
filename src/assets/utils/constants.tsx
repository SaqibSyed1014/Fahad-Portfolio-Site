import Gleam from "../imgs/gleam.webp";
import SimMarket from "../imgs/simmarket.webp";
import SeaForester from "../imgs/seaforester.webp";
import Cantihodo from "../imgs/cantinhodocoimbra.webp";
import React from "react";

enum ProjectColors {
    Blue = '#589BDE',
    Red = '#EC5344',
    Navy = '#3E3D91',
    Yellow = '#F9B25C',
    Black = '#13151C',
    Green = '#1A988B',
    Mint = '#31C4A9',
    DarkGreen = '#025458',
    LightBlue = '#0298BD'
}

export enum ProjectCategories {
    website = 'Websites',
    app = 'Apps',
    lab = 'Lab'
}

export const projects = [
    {
        category: ProjectCategories.website,
        title: 'Renaissant Mobile',
        subtitle: 'Management',
        coverImage: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/19/59/5f/19595f3b-3994-222b-0795-60c8142f714c/AppIcon-0-0-1x_U007emarketing-0-0-0-8-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.webp',
        images: [
            'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/19/59/5f/19595f3b-3994-222b-0795-60c8142f714c/AppIcon-0-0-1x_U007emarketing-0-0-0-8-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.webp',
        ],
        color: '#112233'
    },
    {
        category: ProjectCategories.website,
        title: 'Renaissant KIOSK (Version 1) ',
        subtitle: 'Management',
        coverImage: 'https://play-lh.googleusercontent.com/c666V4-mRPTu9gmnm5Kezgd6rXyhpHNySfskkS_RoYxKsTL8qS02jZmNyGFKqSUNeA0=w240-h480-rw',
        images: [
            'https://devprofiles.thundertechsol.com/devdock/public/portfolios/fahad/whatstocks.png',
        ],
        color: '#112233'
    },
    {
        category: ProjectCategories.website,
        title: 'Renaissant KIOSK (Version 2) ',
        subtitle: 'Management',
        coverImage: 'https://play-lh.googleusercontent.com/c666V4-mRPTu9gmnm5Kezgd6rXyhpHNySfskkS_RoYxKsTL8qS02jZmNyGFKqSUNeA0=w240-h480-rw',
        images: [
            'https://devprofiles.thundertechsol.com/devdock/public/portfolios/fahad/whatstocks.png',
        ],
        color: '#112233'
    },
    {
        category: ProjectCategories.website,
        title: 'Renaissant Carrier',
        subtitle: 'Management',
        coverImage: 'https://play-lh.googleusercontent.com/m5lFuZ473VLZxmPazJEZgJvsBM2ZXJ2pkO3ulIS82NA14VbMjvwrDJN6zkLxMPMZiso=w240-h480-rw',
        images: [
            'https://devprofiles.thundertechsol.com/devdock/public/portfolios/fahad/whatstocks.png',
        ],
        color: '#112233'
    },
    {
        category: ProjectCategories.website,
        title: 'WhatStocks',
        subtitle: 'Stock Market',
        coverImage: 'https://www.whatstocks.com/WhatStocks_files/main-logo.svg',
        images: [
            'https://devprofiles.thundertechsol.com/devdock/public/portfolios/fahad/whatstocks.png',
        ],
        color: '#112233'
    },
    {
        category: ProjectCategories.app,
        title: 'SAL- Mobile Modeller',
        subtitle: 'Finance and Insurance',
        coverImage: 'https://play-lh.googleusercontent.com/NDiPkWbaweRwO-bmFB6znEE9M0gwY2yg4Ma1W1RWZOLUHLzdW0xUxWW5SHp8ANTYeRjB=w240-h480-rw',
        images: [
            'https://devprofiles.thundertechsol.com/devdock/public/portfolios/fahad/striveon.png'
        ],
        color: '#7e807d'
    },
    {
        category: ProjectCategories.app,
        title: 'VenueGPS',
        subtitle: 'Information & Events',
        coverImage: 'https://play-lh.googleusercontent.com/9UUXhN5GMc0epxe_SeMUpz1ZnuL3pPkqdW98KKxNcIShpdGdOOFNnfMWDo0VVqXfHRg=w240-h480-rw',
        images: [
            'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80'
        ],
        color: '#887654'
    },
    {
        category: ProjectCategories.website,
        title: 'DIBBS',
        subtitle: 'Ecommerce',
        coverImage: 'https://play-lh.googleusercontent.com/pGfFbAAalDVRzqA2GwE14FS7sjyH5BvsXOeSdaihRvht7dO9Yowm82SInokajSO0XRg=w240-h480-rw',
        images: [
            'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80'
        ],
        color: ProjectColors.Blue
    },
    {
        category: ProjectCategories.website,
        title: 'Thenx',
        subtitle: 'Fitness App',
        coverImage: 'https://play-lh.googleusercontent.com/2SAidba7Exwo6-Wf-NUJMIW3ru2FWREsuDFYWPJyPITtNi5_Gnf2x_s1DWTaAqL1B2s=s48-rw',
        images: [
            'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80'
        ],
        color: "#894423"
    },

    {
        category: ProjectCategories.website,
        title: 'Dukan.pk',
        subtitle: 'Online Stores',
        coverImage: 'https://play-lh.googleusercontent.com/4_SxmqayQItdQalJqj5laCzQXw7EHczTBaSt61hmuK5ZMps634tcl2Mg1tviuN9Uk6Oc=s48-rw',
        images: [
            'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80'
        ],
        color: "#090954"
    },
    {
        category: ProjectCategories.app,
        title: 'ScoreBoard',
        subtitle: 'for Sports score counting',
        coverImage: 'https://play-lh.googleusercontent.com/IaDRPWwXFt5MIBiera9i1scKY6mtHnX5YjFvLcXwOcAVAj5QkawU_3hxBG9E-dvT1eea=w240-h480-rw',
        images: [
            'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80'
        ],
        color: "#674379"
    },
    {
        category: ProjectCategories.website,
        title: 'Dboard',
        subtitle: 'Attendance Management System',
        coverImage: 'https://play-lh.googleusercontent.com/UbmlJUFal0zxhfkehz0rBIR6GfkTMSG1wNAkTJo79vyLGjADMI1jc-OEiiWaPQdBIg=w240-h480-rw',
        images: [
            'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80'
        ],
        color: '#553300'
    }
]


export const clientsFeedback = [
    {
        logo: Gleam,
        name: 'Maria Smantha',
        feedback: '“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.”',
        briefFeedback: '“Concealed allowed us to add top tier front-end skills to our team at a very reasonable price. Looking forward to working with them for many years to come!”',
        companyName: '',
        designation: '',
        image: 'https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg',
        website: '',
        bgColor: ['#4B6998', '#68B193'],
        role: 'Web Developer'
    },
    {
        logo: SimMarket,
        name: 'Lisa Cudrow',
        feedback: '"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi”',
        briefFeedback: '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi”',
        companyName: '',
        designation: '',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsimmarket-miguel-blaufuks.a3f01069.jpg&w=32&q=100',
        website: '',
        bgColor: ['#589BDE', '#589BDE'],
        role: 'Graphic Designer',
    },
    {
        logo: SeaForester,
        name: 'Lisa Cudrow',
        feedback: '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi”',
        briefFeedback: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi',
        companyName: '',
        designation: '',
        image: 'https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg',
        website: '',
        bgColor: ['#0088B8', '#0088B8'],
        role: 'Graphic Designer',
    },
    {
        logo: Cantihodo,
        name: 'John Smith',
        feedback: '“At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.”',
        briefFeedback: '“At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.”',
        companyName: '',
        designation: '',
        image: 'https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg',
        website: '',
        bgColor: ['#E69C4A', '#E69C4A'],
        role: 'Marketing Specialist'
    }
]

export const teamMembers = [
    {
        name: 'Catarina Coimbra',
        designation: 'Business Developer & Project Manager',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcatarina.cce29745.png&w=3840&q=100',
        quote: 'Planning, coordinating, and reviewing amazing projects.'
    },
    {
        name: 'Diogo Dias',
        designation: 'Frontend Developer',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiogo.d9355407.png&w=3840&q=100',
        quote: ''
    },
    {
        name: 'Francisco Lopes',
        designation: 'Lead Developer',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffrancisco.df5459ae.png&w=3840&q=100',
        quote: ''
    },
    {
        name: 'Gabriel Oliveira',
        designation: 'Full-Stack Developer',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgabriel.af0e1058.png&w=3840&q=100',
        quote: ''
    },
    {
        name: 'Gonçalo Dias',
        designation: 'UX & UI Designer',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoncalo.29ea63a0.png&w=3840&q=100',
        quote: 'Making the world a better place, one pixel at a time.'
    },
    {
        name: 'João Ribau',
        designation: 'Frontend Developer',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjoao.170b2e58.png&w=3840&q=100',
        quote: 'Turning designs into pixel perfect web applications.'
    },
    {
        name: 'João Saraiva',
        designation: 'Founder & CEO',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjoao-s.e14a5449.png&w=3840&q=100',
        quote: 'Always on the lookout for the next big idea. Maybe yours? Driven by work quality. Trying not to take myself so seriously.'
    },
    {
        name: 'Vitoria Peres',
        designation: 'UX & UI Designer',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvitoria.30678cd9.png&w=3840&q=100',
        quote: 'Design it’s about solving problems into beautiful solutions.'
    }
]


export const dates = [
    {
        title: '2022 Retreat: Ponte de Lima',
        description: 'Daily pool dips, collaborative work, our annual cooking competition tradition, craft beers, the local fair at Ponte de Lima, and yet another successful horror escape room in Guimarães. This retreat was a blast!',
        date: 'September 2022',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fseptember-2022.d7dbb201.jpg&w=3840&q=100'
    },
    {
        title: '2021 Retreat: Alvor',
        description: 'Our 2021 team retreat was filled with amazing views and activities. From working together to conquer an horror escape room to a having a superb boat excursion to the beatiful scenery of the Benagil caves, we had a great time together.',
        date: 'September 2021',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faugust-2021.2e28174e.jpg&w=3840&q=100'
    },
    {
        title: '2020 Retreat: Vilamoura',
        description: 'We had a blast in our 2020 retreat: we tested our physiques in a mega paintball match, sped in a karting race and had an overall great time getting together for the first time since the beginning of the pandemic.',
        date: 'November 2020',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnovember-2020.b5066a88.jpg&w=2048&q=100'
    },
    {
        title: 'Remote Gatherings',
        description: 'Since we couldn’t get together for our quarterly dinners once the pandemic began, we came up with new remote solutions to hang out — one of them was playing some online games, like creating the best themed t-shirt design.',
        date: 'March 2020',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarch-2020.7b8614d3.jpg&w=3840&q=100'
    },
    {
        title: '2019 Retreat: Sines',
        description: 'The 2019 retreat had a new participant: João Ribau joined the team that year and spent a week in Sines with João, Francisco and Zola. The week was spent working, eating and drinking (local craft beer), in a very chill environment.',
        date: 'July 2019',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjuly-2019.c2572a82.jpg&w=3840&q=100'
    },
    {
        title: '2018 Retreat: Thailand',
        description: 'Concealed’s first team retreat was a basic FULL MONTH trip to Thailand, where Francisco and João got to eat amazing food and know some awesome elephants. Zola sat this one out as she isn’t the biggest fan of elephants.',
        date: 'September 2018',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fseptember-2018.eea2caad.jpg&w=3840&q=100'
    },
    {
        title: 'Francisco joins Concealed',
        description: 'Although João’s dog Zola was the first colleague in Concealed’s office, the team was only truly created when Francisco joined as well.',
        date: 'April 2018',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapril-2018.6e60c87b.jpg&w=3840&q=100'
    },
    {
        title: 'Concealed foundation',
        description: 'Concealed was created in João Saraiva’s one-bedroom apartment’s living room in Lisbon in 2017 with the goal of assembling a fully-remote digital agency.',
        date: 'February 2017',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffebruary-2017.7c007890.jpg&w=3840&q=100'
    }
]

export const skills :{ title: string, description: string, icon: string, rating: number }[] = [
    {
        title: 'ReactNative',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/React-native.png',
        rating: 98
    },
    {
        title: 'Kotlin',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/kotlin.png',
        rating: 95
    },
    {
        title: 'Java',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/java.png',
        rating: 95
    },
    {
        title: 'Swift',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/swift.png',
        rating: 95
    },
    {
        title: 'Next.js',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/next-js.png',
        rating: 85
    },
    {
        title: 'React.js',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/skills/reactjs.png',
        rating: 85
    },
    {
        title: 'Vue.js',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/vue.png',
        rating: 80
    },
    {
        title: 'Node.JS',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/nodejs.png',
        rating: 90
    },
    {
        title: 'Express',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/express.js.png',
        rating: 90
    },
    {
        title: 'Javascript',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/javascript.png',
        rating: 90
    },
    {
        title: 'Typescript',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/typescript.png',
        rating: 85
    },
    {
        title: 'Functional Programming',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/functional programming.png',
        rating: 90
    },
    {
        title: 'App Store',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/google play store.png',
        rating: 95
    },
    {
        title: 'Play Store',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/appstore.png',
        rating: 95
    },
    {
        title: 'SQL',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/sql.png',
        rating: 95
    },
    {
        title: 'PostgresSQL',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/postgresql.png',
        rating: 95
    },
    {
        title: 'MongoDB',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/mongo db.png',
        rating: 95
    },
    {
        title: 'AWS',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/aws.png',
        rating: 95
    },
    {
        title: 'Docker',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/docker.png',
        rating: 95
    },
    {
        title: 'Redux',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/redux.png',
        rating: 95
    },
]

export const tools = [
    {
        name: 'Xcode',
        image: 'https://devprofiles.thundertechsol.com/devdock/public/png/xcode-seeklogo.png'
    },
    {
        name: 'Android Studio',
        image: 'https://devprofiles.thundertechsol.com/devdock/public/png/Group 1.png'
    },
    {
        name: 'VS Code',
        image: 'https://devprofiles.thundertechsol.com/devdock/public/png/vs code.png'
    },
    {
        name: 'Postman',
        image: 'https://devprofiles.thundertechsol.com/devdock/public/png/postman.png'
    },
    {
        name: 'cPanel',
        image: 'https://devprofiles.thundertechsol.com/devdock/public/png/Vector.png'
    },
    {
        name: 'Docker Hub',
        image: 'https://devprofiles.thundertechsol.com/devdock/public/png/docker.png'
    },
    {
        name: "GitHub",
        image:
            "https://devprofiles.thundertechsol.com/devdock/public/tools/github.png",
    },
    {
        name: "Slack",
        image:
            "https://devprofiles.thundertechsol.com/devdock/public/png/slack.png",
    },
    {
        name: "Notion",
        image:
            "https://devprofiles.thundertechsol.com/devdock/public/png/notion.png",
    },
    {
        name: "Discord",
        image:
            "https://devprofiles.thundertechsol.com/devdock/public/png/discord.png",
    },
    {
        name: "Chat GPT",
        image:
            "https://devprofiles.thundertechsol.com/devdock/public/png/chatgpt.png",
    },
    {
        name: "App Store",
        image:
            "https://devprofiles.thundertechsol.com/devdock/public/png/appstore.png",
    },
    {
        name: "Play Store",
        image:
            "https://devprofiles.thundertechsol.com/devdock/public/png/google play store.png",
    },

]

export const services :{ label: string, text: string, icon: React.ReactNode }[] = [
    {
        label: '8+',
        text: 'Years of Experience',
        icon: <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><g className="clippy"><path fill="#3D43D8" fillOpacity="0.8" stroke="#fff" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" d="M7 7h32v32H7z"></path><path d="M15 7h16l-2.5 6h-11L15 7z" fill="#040B10" stroke="#fff" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"></path><path className="group-hover:[stroke-opacity:0] group-hover:[stroke-dashoffset:0] svg-transition" d="M15 23h8M15 29h4" stroke="#fff" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
    },
    {
        label: '55+',
        text: 'Completed Projects',
        icon: <svg overflow="visible" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><g className="pencil"><path fill="none" d="M0 0h46v46H0z"></path><g filter="url(#filter0_d_12_623)"><path fillRule="evenodd" clipRule="evenodd" d="M-.128 31.462a.5.5 0 01.344-.48l22.641-7.457a.5.5 0 01.315 0l22.613 7.544a.5.5 0 01-.011.952l-22.64 6.957a.5.5 0 01-.296 0L.223 31.935a.5.5 0 01-.35-.473zm2.139-.018l20.976 6.533 21.001-6.454-20.975-6.996L2.01 31.444z" fill="#FCFCFA" fillOpacity="0.6" shapeRendering="crispEdges"></path></g><g className="group-hover:[transform:matrix(1,0,0,1,8,0)] svg-transition" stroke="#F9F6F1" strokeOpacity="0.6" strokeLinecap="round" data-svg-origin="19.392000198364258 5.679998397827148" transform="matrix(1,0,0,1,0,0)"><path d="M36.546 5.682l8.126 8.126-17.62 17.155h-7.66V23.3l17.154-17.62z" fill="#3238B0"></path><path d="M36.546 5.682l8.126 8.126-3.18 2.934-4.228-4.35-3.611-3.53 2.893-3.18z" fill="#3238B0"></path><path d="M33.714 8.965l7.661 7.661M20.581 22.098l7.661 7.661" strokeLinejoin="round"></path></g></g><defs><clipPath id="clip0_12_623"><path fill="#fff" d="M0 0h46v46H0z"></path></clipPath><filter id="filter0_d_12_623" x="-7.128" y="20.5" width="60.255" height="29.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="3.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_12_623"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_12_623" result="shape"></feBlend></filter></defs></svg>
    },
    {
        label: '40+',
        text: 'Achievements',
        icon: <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><g className="development" clipPath="url(#clip0_12_604)"><path fill="none" d="M0 0h46v46H0z"></path><g className="group-hover:[transform:matrix(1,0,0,1,0,-6)] svg-transition" filter="url(#filter0_d_12_604)" shapeRendering="crispEdges" data-svg-origin="0.37299999594688416 24.5" transform="matrix(1,0,0,1,0,0)"><path d="M.373 32L23 24.5 45.627 32 23 39 .373 32z" fill="#3D43D8" fillOpacity="0.8"></path><path d="M.373 32L23 24.5 45.627 32 23 39 .373 32z" stroke="#FCFCFA" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"></path></g><g filter="url(#filter1_d_12_604)" shapeRendering="crispEdges"><path d="M.373 23L23 15.5 45.627 23 23 30 .373 23z" fill="#3D43D8" fillOpacity="0.8"></path><path d="M.373 23L23 15.5 45.627 23 23 30 .373 23z" stroke="#FCFCFA" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"></path></g><g className="group-hover:[transform:matrix(1,0,0,1,0,6)] svg-transition" filter="url(#filter2_d_12_604)" shapeRendering="crispEdges" data-svg-origin="0.37299999594688416 6.5" transform="matrix(1,0,0,1,0,0)"><path d="M.373 14L23 6.5 45.627 14 23 21 .373 14z" fill="#3D43D8" fillOpacity="0.8"></path><path d="M.373 14L23 6.5 45.627 14 23 21 .373 14z" stroke="#FCFCFA" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"></path></g></g><defs><filter id="filter0_d_12_604" x="-7.127" y="21" width="60.255" height="29.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="3.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_12_604"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_12_604" result="shape"></feBlend></filter><filter id="filter1_d_12_604" x="-7.127" y="12" width="60.255" height="29.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="3.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_12_604"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_12_604" result="shape"></feBlend></filter><filter id="filter2_d_12_604" x="-7.127" y="3" width="60.255" height="29.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="3.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_12_604"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_12_604" result="shape"></feBlend></filter><clipPath id="clip0_12_604"><path fill="#fff" d="M0 0h46v46H0z"></path></clipPath></defs></svg>
    },
    {
        label: '24',
        text: 'Happy Customers',
        icon: <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-[-30deg] group-hover:rotate-[-180deg] svg-transition"><g data-svg-origin="23 23" transform="matrix(1,0,0,1,0,0)"><path fill="none" d="M0 0h46v46H0z"></path><circle cx="23" cy="23" r="16" fill="#3D43D8" fillOpacity="0.8"></circle><circle cx="23" cy="23" r="15.5" stroke="#FCFCFA" strokeOpacity="0.6"></circle><circle cx="23" cy="23" r="7" fill="#040B10"></circle><path opacity="0.9" d="M42.846 29.994l-4.276-5.649-6.341 3.661M2.155 20.414l5.592 4.35 5.177-5.178" stroke="#FCFCFA" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
    }
]
