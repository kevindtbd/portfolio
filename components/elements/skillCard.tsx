import * as React from 'react';
import Image from 'next/image';

export type SkillCardProps = {
  src: StaticImageData,
  alt: string
};

export default function SkillCard({ src, alt }: SkillCardProps) {
  return (
    <div>
      <Image src={src} alt={alt} width={50} height={50} />
      <span>{alt}</span>
    </div>

  );
}
