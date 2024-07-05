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
        images: [],
        color: ProjectColors.Green
    },
    {
        category: ProjectCategories.app,
        title: 'Explore an endless world',
        subtitle: 'simMarket — Desktop App',
        images: [],
        color: ProjectColors.Blue
    },
    {
        category: ProjectCategories.app,
        title: 'On-demand delivery made simple',
        subtitle: 'YouShip — Mobile App',
        images: [],
        color: ProjectColors.Red
    },
    {
        category: ProjectCategories.app,
        title: 'Restoring The Forgotten Forests In Our Ocean',
        subtitle: 'SeaForester — Marketing Website',
        images: [],
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
        website: ''
    },
    {
        logo: SimMarket,
        name: 'Miguel Blaufuks',
        feedback: '“We are a very international team in a company based in Germany. We hired Concealed to re-create our web shop in an app and were pleasantly surprised, not only by the result, but also by the flexibility, sympathy and enthusiasm shown during the development period. We also liked their tight workflow and the sensibility to understand our side and our business. We were so very pleased that we decided to contract Concealed to do another project for us.”',
        briefFeedback: '“We hired Concealed to re-create our web shop in an app and were pleasantly surprised, not only by the result, but also by the flexibility, sympathy and enthusiasm shown during the development period.”',
        companyName: 'simMarket',
        designation: 'CEO',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsimmarket-miguel-blaufuks.a3f01069.jpg&w=32&q=100',
        website: ''
    },
    {
        logo: SeaForester,
        name: 'Jan Verbeek',
        feedback: '“Concealed provided an excellent delivery of the website in a timely manner, successfully covering our desired objectives. They provided excellent communication throughout the development period, taking on board all provided feedback and implementing our vision to a high standard. The new website will be a centerpiece in our marketing and communication strategy going forward. All in all, it was a pleasure working with the team at Concealed due to their enthusiasm, attention to detail, and overall professional work ethic.”',
        briefFeedback: '',
        companyName: 'SeaForester',
        designation: 'Scientific Manager',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fseaforester-jan-verbeek.59b70617.jpg&w=32&q=100',
        website: ''
    },
    {
        logo: Cantihodo,
        name: 'André Coimbra',
        feedback: '“I had the opportunity to work with Concealed on several projects and I was always very satisfied, not just with the final outcome, but with the whole process! It is a high-quality and high-efficiency service that combines creativity with maximum precision.”',
        briefFeedback: '“Concealed delivered on time, on budget and on quality. I’ve reached out to them because I ‘fell’ for their design language and flawless execution and they’ve delivered according to my very high expectations.”',
        companyName: 'Cantinho do Coimbra',
        designation: 'CEO',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcantinhodocoimbra-andre-coimbra.99e6937e.jpg&w=32&q=100',
        website: ''
    }
]
