import { ProjectProps, Colors } from '../types';
import SearchPilot from '../public/searchpilot.png';
import Derive from '../public/derive.png';
import Ivy from '../public/ivy.png';
import Portfolio from '../public/portfolio.png';

export const email = 'kevindtbd@gmail.com';

export const Skills = ['React', 'Typescript', 'Figma', 'Python', 'Node.js', 'Javascript'];

export const previousJobs: Array<ProjectProps> = [
  {
    imgAttrs: {
      src: Ivy,
      alt: 'ivy-data',
    },
    project: {
      company: 'Ivy Data',
      excerpt: 'Real Estate Data Information SaaS Company',
      title: 'Junior Full Stack Developer',
      timeline: ['August 2020', 'Ongoing'],
      responsibilities: [
        'Created the flagship product’s dashboard for clients to purchase, preview and search marketing information regarding housing properties',
        'Co-led the flagship product’s launch alongside executives by translating design mock-ups to a scalable product.',
        'Enabled clients to export data to 3rd party CRM accounts from the product dashboard by integrating APIs.',
        'Convert existing REST API calls to GraphQL queries based on customers\' demands, leading to faster development time.',
        'Extend backend endpoints using Django framework to support front end functionality',
      ],
    },
    color: Colors.IVY_DATA,
    tags: ['React', 'Typescript', 'Python', 'Redux', 'Cypress'],
  },
  {
    imgAttrs: {
      src: SearchPilot,
      alt: 'SearchPilot',
    },
    project: {
      company: 'SearchPilot',
      title: 'Web Analyst',
      timeline: ['September 2019', 'August 2020'],
      excerpt: 'An SEO A/B Testing Platform Company',
      responsibilities: [
        'Co-led a client-side Javascript rerendering project that resulted in a projected $1.5 million revenue increase (4% conversion increase) for a client',
        'Ideated front-end optimizations and SEO & CRO A/B tests resulting in upwards of 25% increase in client traffic',
        'Automate and optimize workflows and processes to increase internal efficiency (sitemap parsers, custom HTML templates, internal guides)',
        'Create custom, stylistic HTML components for clients as needed to support their CMS needs.',
        'Collaborated with SearchPilot’s Head of R&D to create a Javascript solution to counteract unwanted front end changes made by client-side frameworks',
      ],
    },
    color: Colors.SEARCH_PILOT,
    tags: ['SEO', 'Python', 'HTML/CSS', 'Javascript', 'A/B Testing'],
  },
];

export const projects: Array<ProjectProps> = [
  {
    imgAttrs: {
      src: Derive,
      alt: 'derive',
    },
    project: {
      company: 'Derive',
      link: 'https://www.deriveaio.io/',
      timeline: ['May 2021', 'Ongoing'],
      excerpt: 'An automation tool for checking out highly sought after items, ranging from athletic sneakers to graphics cards. Create multiple billing profiles, see previous checkouts, and replicate identical requests across multiple IP addresses.',
    },
    color: Colors.DERIVE,
    tags: ['Gatsby', 'AWS', 'NodeJS', 'DynamoDB', 'React'],
  },
  {
    imgAttrs: {
      src: Portfolio,
      alt: 'portfolio',
    },
    project: {
      company: 'Portfolio',
      timeline: ['July 2021', 'Ongoing'],
      excerpt: 'One stop shop for all of my works. A constant work-in-progress as I advance through my web development career.',
    },
    color: Colors.PORTFOLIO,
    tags: ['Next.JS', 'Typescript', 'Vercel'],
  },
];
