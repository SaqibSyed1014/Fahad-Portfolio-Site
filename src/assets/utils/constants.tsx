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
        title: 'Indigenous culture accessible to anyone',
        subtitle: 'Our Songlines — Marketing Website',
        images: [
            'https://www.concealed.pt/_next/image?url=%2Fshowcase-projects%2Foursonglines%2Fbehind.png&w=2048&q=100',
            'https://www.concealed.pt/_next/image?url=%2Fshowcase-projects%2Foursonglines%2Ffront.png&w=2048&q=100'
        ],
        color: ProjectColors.Green
    },
    {
        category: ProjectCategories.app,
        title: 'Explore an endless world',
        subtitle: 'simMarket — Desktop App',
        images: [
            'https://www.concealed.pt/_next/image?url=%2Fshowcase-projects%2Fsimmarket-app%2Ffront.png&w=2048&q=100'
        ],
        color: ProjectColors.Blue
    },
    {
        category: ProjectCategories.app,
        title: 'On-demand delivery made simple',
        subtitle: 'YouShip — Mobile App',
        images: [
            'https://www.concealed.pt/_next/image?url=%2Fshowcase-projects%2Fyouship-mobile-app%2Ffront.png&w=2048&q=100'
        ],
        color: ProjectColors.Red
    },
    {
        category: ProjectCategories.website,
        title: 'Restoring The Forgotten Forests In Our Ocean',
        subtitle: 'SeaForester — Marketing Website',
        images: [
            'https://www.concealed.pt/_next/image?url=%2Fshowcase-projects%2Fseaforester%2Ffront.png&w=2048&q=100'
        ],
        color: ProjectColors.Blue
    },
    {
        category: ProjectCategories.website,
        title: 'Send and receive orders on time',
        subtitle: 'YouShip — Marketing Website',
        images: [],
        color: ProjectColors.Red
    },

    {
        category: ProjectCategories.website,
        title: 'Marketplace for Flight Simulation',
        subtitle: 'simMarket — Vendors Platform',
        images: [],
        color: ProjectColors.Blue
    },
    {
        category: ProjectCategories.app,
        title: 'Delivery in minutes: save time and money',
        subtitle: 'YouShip — Web App',
        images: [],
        color: ProjectColors.Red
    },
    {
        category: ProjectCategories.website,
        title: 'Sharing sustainable digital infrastructure thinking',
        subtitle: 'Digital Infra Network — Marketing Website',
        images: [],
        color: ProjectColors.Navy
    },
    {
        category: ProjectCategories.website,
        title: 'Rebuilding Portuguese marine forests',
        subtitle: 'BlueForests — Marketing Website',
        images: [],
        color: ProjectColors.DarkGreen
    },
    {
        category: ProjectCategories.website,
        title: 'Prompt, friendly and professional physio care',
        subtitle: 'start.physio — Marketing Website',
        images: [],
        color: ProjectColors.LightBlue
    },
    {
        category: ProjectCategories.website,
        title: 'By André Coimbra, professional poker player',
        subtitle: 'Cantinho do Coimbra — Marketing Website',
        images: [],
        color: ProjectColors.Black
    },
    {
        category: ProjectCategories.website,
        title: 'Nerd. Indie. Unmissable Beer',
        subtitle: 'Brew! Coimbra — Marketing Website',
        images: [],
        color: ProjectColors.Yellow
    },
    {
        category: ProjectCategories.lab,
        title: 'Lifestyle Blog Template',
        subtitle: 'Betty Bonnet — Marketing Website',
        images: [],
        color: ProjectColors.Mint
    }
]


export const clientsFeedback = [
    {
        logo: Gleam,
        name: 'John Sherwood',
        feedback: '“We’ve been working with Concealed for a few years now. They’ve allowed us to add top tier front-end skills to our team at a very reasonable price. They’ve done an excellent job rebuilding our public website and now they’re redoing our backend dashboard (plus many other tweaks, fixes, and improvements along the way). They’ve also given us more time by managing the project with the emotional investment and conscientiousness of an owner. Looking forward to working with Concealed for many years to come!”',
        briefFeedback: '“Concealed allowed us to add top tier front-end skills to our team at a very reasonable price. Looking forward to working with them for many years to come!”',
        companyName: 'Gleam',
        designation: 'CTO & Co-founder',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgleam-john-sherwood.6265451e.jpeg&w=32&q=100',
        website: '',
        bgColor: ['#4B6998', '#68B193']
    },
    {
        logo: SimMarket,
        name: 'Miguel Blaufuks',
        feedback: '“We are a very international team in a company based in Germany. We hired Concealed to re-create our web shop in an app and were pleasantly surprised, not only by the result, but also by the flexibility, sympathy and enthusiasm shown during the development period. We also liked their tight workflow and the sensibility to understand our side and our business. We were so very pleased that we decided to contract Concealed to do another project for us.”',
        briefFeedback: '“We hired Concealed to re-create our web shop in an app and were pleasantly surprised, not only by the result, but also by the flexibility, sympathy and enthusiasm shown during the development period.”',
        companyName: 'simMarket',
        designation: 'CEO',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsimmarket-miguel-blaufuks.a3f01069.jpg&w=32&q=100',
        website: '',
        bgColor: ['#589BDE', '#589BDE']
    },
    {
        logo: SeaForester,
        name: 'Jan Verbeek',
        feedback: '“Concealed provided an excellent delivery of the website in a timely manner, successfully covering our desired objectives. They provided excellent communication throughout the development period, taking on board all provided feedback and implementing our vision to a high standard. The new website will be a centerpiece in our marketing and communication strategy going forward. All in all, it was a pleasure working with the team at Concealed due to their enthusiasm, attention to detail, and overall professional work ethic.”',
        briefFeedback: '',
        companyName: 'SeaForester',
        designation: 'Scientific Manager',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fseaforester-jan-verbeek.59b70617.jpg&w=32&q=100',
        website: '',
        bgColor: ['#0088B8', '#0088B8']
    },
    {
        logo: Cantihodo,
        name: 'André Coimbra',
        feedback: '“I had the opportunity to work with Concealed on several projects and I was always very satisfied, not just with the final outcome, but with the whole process! It is a high-quality and high-efficiency service that combines creativity with maximum precision.”',
        briefFeedback: '“Concealed delivered on time, on budget and on quality. I’ve reached out to them because I ‘fell’ for their design language and flawless execution and they’ve delivered according to my very high expectations.”',
        companyName: 'Cantinho do Coimbra',
        designation: 'CEO',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcantinhodocoimbra-andre-coimbra.99e6937e.jpg&w=32&q=100',
        website: '',
        bgColor: ['#E69C4A', '#E69C4A']
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

export const coreValues :{ title: string, description: string, icon: React.ReactNode }[] = [
    {
        title: 'Communicate with clarity',
        description: 'We talk, write, design and code in a clear way, so that information is always accessible.',
        icon: <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><g className="[transoform:matrix(1,0,0,1,20,0)] group-hover:[transform:matrix(1,0,0,1,30,0)] svg-transition" stroke="#FCFCFA" strokeWidth="0.6" data-svg-origin="31.06800079345703 25.110000610351562" transform="matrix(1,0,0,1,20,0)"><path d="M31.068 39.147h11.817M31.068 29.15l11.104-4.04M31.068 49.143l11.104 4.042"></path></g><path d="M43.45 61.126L7.591 40 43.45 18.874v42.252z" fill="#3D43D8" stroke="#FCFCFA" strokeWidth="0.6"></path></svg>
    },
    {
        title: 'Trust',
        description: 'We trust each other to manage our time and energy in a way that lets us achieve our best quality of life.',
        icon: <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path className="[transform:matrix(0.7,0,0,0.7,9.8,12.1)] group-hover:[transform:matrix(1,0,0,1,0,0)] svg-transition" d="M5.359 39.8V18.617L32.917 7.388l27.557 11.228v21.185A29.55 29.55 0 0146.81 64.718l-13.893 8.856-13.893-8.856A29.55 29.55 0 015.359 39.8z" fill="#3D43D8" stroke="#FCFCFA" strokeWidth="0.718" data-svg-origin="32.91649913787842 40.48100233078003" transform="matrix(0.7,0,0,0.7,9.87495,12.1443)"></path><path className="js-svg-trust-inner-path" d="M12.359 35.11V23.618l20.924-9.227 20.925 9.227v11.49a29.55 29.55 0 01-13.665 24.917l-7.26 4.628-7.259-4.627a29.55 29.55 0 01-13.665-24.918z" fill="#3D43D8" stroke="#FCFCFA" strokeWidth="0.718"></path></g></svg>
    },
    {
        title: 'Empathy',
        description: 'Caring for one another allows us to live less stressful, happier lives.',
        icon: <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle className="[transform:matrix(1,0,0,1,0,0)] group-hover:[transform:matrix(0.64,0.76604,-0.76,0.64279,44.63,-12.15)] svg-transition" cx="40.063" cy="43.5" r="14.7" fill="#3D43D8" stroke="#fff" strokeWidth="0.6" data-svg-origin="40.06299877166748 43.499999046325684" transform="matrix(1,0,0,1,0,0)"></circle><circle className="[transform:matrix(1,0,0,1,0,0)] group-hover:[transform:matrix(1,0,0,1,-21,25)] svg-transition" cx="64.5" cy="43.5" r="5.7" fill="#3D43D8" stroke="#fff" strokeWidth="0.6" data-svg-origin="64.49999952316284 43.49999952316284" transform="matrix(1,0,0,1,0,0)"></circle><circle className="[transform:matrix(1,0,0,1,0,0)] group-hover:[transform:matrix(1,0,0,1,5,22)] svg-transition" cx="58.5" cy="27.5" r="5.7" fill="#3D43D8" stroke="#fff" strokeWidth="0.6" data-svg-origin="58.49999952316284 27.499999523162842" transform="matrix(1,0,0,1,0,0)"></circle><circle className="[transform:matrix(1,0,0,1,0,0)] group-hover:[transform:matrix(1,0,0,1,15,-12)] svg-transition" cx="15.5" cy="36.5" r="5.7" fill="#3D43D8" stroke="#fff" strokeWidth="0.6" data-svg-origin="15.499999523162842 36.49999952316284" transform="matrix(1,0,0,1,0,0)"></circle></svg>
    },
    {
        title: 'Continuous Improvement',
        description: 'We study and experiment until we find the best process and solution for each new challenge, and then we share our findings with the team so that they improve along with us.',
        icon: <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#3D43D8" stroke="#fff" strokeWidth="0.5" d="M10.25 53.25h7.5v15.5h-7.5zM22.25 44.25h7.5v24.5h-7.5zM34.25 36.25h7.5v32.5h-7.5zM46.25 29.25h7.5v39.5h-7.5z"></path><path className="[transform:matrix(1,0,0,0,0,68.7)] group-hover:[transform:matrix(1,0,0,1,0,0)] svg-transition" fill="#3D43D8" stroke="#fff" strokeWidth="0.5" d="M58.25 23.25h7.5v45.5h-7.5z" data-svg-origin="62 68.75" transform="matrix(1,0,0,0,0,68.75)"></path></svg>
    },
    {
        title: 'Integrity',
        description: 'We use our moral compass in every decision, opting to be straightforward, just and fair, and honoring our commitments every time.',
        icon: <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><g className="matrix(1,0,0,1,-19.2,-3) group-hover:[transform:matrix(1,0,0,1,6,-3)] svg-transition" transform="matrix(1,0,0,1,-19.2,-3)" opacity="0.8" data-svg-origin="24.000001907348633 20.667999267578125"><ellipse cx="46.615" cy="43" rx="22.615" ry="22.332" fill="#3d43d8"></ellipse><path d="M68.929 43c0 12.164-9.987 22.032-22.314 22.032C34.287 65.032 24.3 55.164 24.3 43s9.987-22.032 22.315-22.032c12.327 0 22.314 9.868 22.314 22.032z" fill="none" stroke="#fff" strokeWidth="0.6"></path></g><g className="matrix(1,0,0,1,-19.2,-3) group-hover:[transform:matrix(1,0,0,1,-44.4,-3)] svg-transition" opacity="0.8" transform="matrix(1,0,0,1,-19.229,-3)" data-svg-origin="49.22999572753906 20.667999267578125"><ellipse cx="71.844" cy="43" rx="22.614" ry="22.332" fill="#3d43d8"></ellipse><path d="M94.158 43c0 12.164-9.987 22.032-22.314 22.032-12.328 0-22.315-9.868-22.315-22.032s9.987-22.032 22.315-22.032c12.327 0 22.314 9.868 22.314 22.032z" fill="none" stroke="#fff" strokeWidth="0.6"></path></g></svg>
    },
    {
        title: 'High quality work',
        description: 'When we communicate with clarity, trust each other, are empathic with our colleagues and work together with integrity to get better everyday, the outcome is amazing.',
        icon: <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="[tranform:matrix(1,0,0,1,-5.5,-5.3)] group-hover:[transform:matrix(1.2,0,0,1.2,-13.5,-12.8)] svg-transition" d="M40.286 11.909L40 11.013l-.286.896-6.22 19.484H12.46l.732.541 16.285 12.043-6.22 19.489-.283.884.746-.552L40 51.76 56.28 63.8l.746.551-.282-.884-6.221-19.489 16.285-12.043.732-.541H46.506l-6.22-19.484z" fill="#3D43D8" stroke="#FCFCFA" strokeWidth="0.6" data-svg-origin="40.000000953674316 37.68199825286865" transform="matrix(0.8,0,0,0.8,2.492,2.2026)"></path></svg>
    }
]

export const services :{ label: string, text: string, icon: React.ReactNode }[] = [
    {
        label: 'Product Strategy',
        text: 'Thorough research and an optimized strategy are the foundation for the best product development.',
        icon: <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><g className="clippy"><path fill="#3D43D8" fillOpacity="0.8" stroke="#fff" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" d="M7 7h32v32H7z"></path><path d="M15 7h16l-2.5 6h-11L15 7z" fill="#040B10" stroke="#fff" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"></path><path className="group-hover:[stroke-opacity:0] group-hover:[stroke-dashoffset:0] svg-transition" d="M15 23h8M15 29h4" stroke="#fff" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
    },
    {
        label: 'UX & UI Design',
        text: 'UX allows for the best user experience/UI displays the most interesting visuals.',
        icon: <svg overflow="visible" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><g className="pencil"><path fill="none" d="M0 0h46v46H0z"></path><g filter="url(#filter0_d_12_623)"><path fillRule="evenodd" clipRule="evenodd" d="M-.128 31.462a.5.5 0 01.344-.48l22.641-7.457a.5.5 0 01.315 0l22.613 7.544a.5.5 0 01-.011.952l-22.64 6.957a.5.5 0 01-.296 0L.223 31.935a.5.5 0 01-.35-.473zm2.139-.018l20.976 6.533 21.001-6.454-20.975-6.996L2.01 31.444z" fill="#FCFCFA" fillOpacity="0.6" shapeRendering="crispEdges"></path></g><g className="group-hover:[transform:matrix(1,0,0,1,8,0)] svg-transition" stroke="#F9F6F1" strokeOpacity="0.6" strokeLinecap="round" data-svg-origin="19.392000198364258 5.679998397827148" transform="matrix(1,0,0,1,0,0)"><path d="M36.546 5.682l8.126 8.126-17.62 17.155h-7.66V23.3l17.154-17.62z" fill="#3238B0"></path><path d="M36.546 5.682l8.126 8.126-3.18 2.934-4.228-4.35-3.611-3.53 2.893-3.18z" fill="#3238B0"></path><path d="M33.714 8.965l7.661 7.661M20.581 22.098l7.661 7.661" strokeLinejoin="round"></path></g></g><defs><clipPath id="clip0_12_623"><path fill="#fff" d="M0 0h46v46H0z"></path></clipPath><filter id="filter0_d_12_623" x="-7.128" y="20.5" width="60.255" height="29.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="3.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_12_623"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_12_623" result="shape"></feBlend></filter></defs></svg>
    },
    {
        label: 'Development',
        text: 'Websites, desktop apps, mobile apps, the works — You name it: we code it.',
        icon: <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><g className="development" clipPath="url(#clip0_12_604)"><path fill="none" d="M0 0h46v46H0z"></path><g className="group-hover:[transform:matrix(1,0,0,1,0,-6)] svg-transition" filter="url(#filter0_d_12_604)" shapeRendering="crispEdges" data-svg-origin="0.37299999594688416 24.5" transform="matrix(1,0,0,1,0,0)"><path d="M.373 32L23 24.5 45.627 32 23 39 .373 32z" fill="#3D43D8" fillOpacity="0.8"></path><path d="M.373 32L23 24.5 45.627 32 23 39 .373 32z" stroke="#FCFCFA" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"></path></g><g filter="url(#filter1_d_12_604)" shapeRendering="crispEdges"><path d="M.373 23L23 15.5 45.627 23 23 30 .373 23z" fill="#3D43D8" fillOpacity="0.8"></path><path d="M.373 23L23 15.5 45.627 23 23 30 .373 23z" stroke="#FCFCFA" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"></path></g><g className="group-hover:[transform:matrix(1,0,0,1,0,6)] svg-transition" filter="url(#filter2_d_12_604)" shapeRendering="crispEdges" data-svg-origin="0.37299999594688416 6.5" transform="matrix(1,0,0,1,0,0)"><path d="M.373 14L23 6.5 45.627 14 23 21 .373 14z" fill="#3D43D8" fillOpacity="0.8"></path><path d="M.373 14L23 6.5 45.627 14 23 21 .373 14z" stroke="#FCFCFA" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"></path></g></g><defs><filter id="filter0_d_12_604" x="-7.127" y="21" width="60.255" height="29.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="3.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_12_604"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_12_604" result="shape"></feBlend></filter><filter id="filter1_d_12_604" x="-7.127" y="12" width="60.255" height="29.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="3.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_12_604"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_12_604" result="shape"></feBlend></filter><filter id="filter2_d_12_604" x="-7.127" y="3" width="60.255" height="29.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="3.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_12_604"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_12_604" result="shape"></feBlend></filter><clipPath id="clip0_12_604"><path fill="#fff" d="M0 0h46v46H0z"></path></clipPath></defs></svg>
    },
    {
        label: 'Conversion',
        text: 'We make your product work for your business.',
        icon: <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-[-30deg] group-hover:rotate-[-180deg] svg-transition"><g data-svg-origin="23 23" transform="matrix(1,0,0,1,0,0)"><path fill="none" d="M0 0h46v46H0z"></path><circle cx="23" cy="23" r="16" fill="#3D43D8" fillOpacity="0.8"></circle><circle cx="23" cy="23" r="15.5" stroke="#FCFCFA" strokeOpacity="0.6"></circle><circle cx="23" cy="23" r="7" fill="#040B10"></circle><path opacity="0.9" d="M42.846 29.994l-4.276-5.649-6.341 3.661M2.155 20.414l5.592 4.35 5.177-5.178" stroke="#FCFCFA" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
    }
]
