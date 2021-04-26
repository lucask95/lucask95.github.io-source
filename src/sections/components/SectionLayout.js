import React from "react";
import SectionHeader from "./SectionHeader";

export default function SectionLayout({ header, children }) {
  return (
    <section className='space-y-8 mb-12'>
      <SectionHeader>{header}</SectionHeader>
      <div className='px-8 space-y-8'>{children}</div>
    </section>
  );
}
