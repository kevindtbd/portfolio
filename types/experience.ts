export enum Colors {
  IVY_DATA = '#7cc190',
  SEARCH_PILOT = '#7603db',
  DERIVE = '#ef4b6c',
  PORTFOLIO = '#00798C',
}

export type CardProps = {
  imgAttrs: {
    src: StaticImageData,
    alt: string
  },
  company: string,
  excerpt: string,
  color: Colors,
  tags: Array<string>
};
