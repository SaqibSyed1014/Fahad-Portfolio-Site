import Gleam from "../imgs/gleam.webp";
import SimMarket from "../imgs/simmarket.webp";
import SeaForester from "../imgs/seaforester.webp";
import Cantihodo from "../imgs/cantinhodocoimbra.webp";

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
        category: ProjectCategories.app,
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
