import React from 'react';
export default function SectionHeader({eyebrow,title,text}){return <div className="section-head"><span>{eyebrow}</span><h2>{title}</h2>{text&&<p>{text}</p>}</div>}
