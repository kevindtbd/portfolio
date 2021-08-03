import { CardProps, Colors } from '../types/experience';
import SearchPilot from '../public/searchpilot.png';
import Derive from '../public/derive.png';
import Ivy from '../public/ivy.png';

export const Skills = ['React', 'Typescript', 'Figma', 'Python', 'Node.js', 'Javascript'];

export const previousJobs: Array<CardProps> = [
  {
    imgAttrs: {
      src: Ivy,
      alt: '',
    },
    company: 'Ivy Data',
    excerpt: 'Real Estate Data Information SaaS Company',
    color: Colors.IVY_DATA,
    tags: ['React', 'Typescript', 'Python', 'Redux', 'Cypress'],
  },
  {
    imgAttrs: {
      src: SearchPilot,
      alt: 'SearchPilot',
    },
    company: 'SearchPilot',
    excerpt: 'SEO A/B Testing SaaS Company',
    color: Colors.SEARCH_PILOT,
    tags: ['SEO', 'Python', 'HTML/CSS', 'Javascript', 'A/B Testing'],
  },
];

export const projects: Array<CardProps> = [
  {
    imgAttrs: {
      src: Derive,
      alt: 'derive',
    },
    company: 'Derive',
    excerpt: 'Shoe Bot for the Public',
    color: Colors.DERIVE,
    tags: ['Gatsby', 'AWS', 'NodeJS', 'DynamoDB', 'React'],
  },
  {
    imgAttrs: {
      src: SearchPilot,
      alt: '',
    },
    company: 'Portfolio',
    excerpt: 'Shoe Bot for the Public',
    color: Colors.PORTFOLIO,
    tags: ['Next.JS', 'Typescript', 'Vercel'],
  },
];
