import * as React from 'react';

type WorkSectionProps = {
  title: string,
  children: React.ReactElement
};

export default function WorkSection({ title, children }: WorkSectionProps) {
  return (
    <section>
      <h3>{title}</h3>
      {children}
    </section>
  );
}
