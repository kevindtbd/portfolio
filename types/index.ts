export enum Colors {
  IVY_DATA = '#7cc190',
  SEARCH_PILOT = '#7603db',
  DERIVE = '#ef4b6c',
  PORTFOLIO = '#6573FF',
  QUANTUM = '#ec005e',
}

export type ProjectProps = {
  imgAttrs: {
    src: StaticImageData,
    alt: string
  },
  project: {
    company: string,
    link?: string,
    title?: string,
    timeline: [string, string | 'ongoing'],
    responsibilities?: Array<string>,
    excerpt: string,
  }
  color: Colors,
  tags: Array<string>
};
