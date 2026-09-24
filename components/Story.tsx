"use client";
import { motion, MotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Visual from "./Visual";
const steps=[
  {num:"01", title:"Planificación", text:"Medimos, definimos prioridades y ordenamos cada partida antes de empezar."},
  {num:"02", title:"Demolición", text:"Retiramos lo necesario con una secuencia de obra clara y controlada."},
  {num:"03", title:"Instalaciones", text:"Electricidad, fontanería y climatización se integran antes de cerrar superficies."},
  {num:"04", title:"Acabados", text:"Materiales, iluminación y carpinterías convierten la obra en un espacio terminado."}
];
function StoryStep({s,i,progress}:{s:(typeof steps)[number];i:number;progress:MotionValue<number>}){
 const start=i/steps.length, mid=(i+.5)/steps.length, end=(i+1)/steps.length;
 const opacity=useTransform(progress,[Math.max(0,start-.05),mid,Math.min(1,end+.05)],[.16,1,.16]);
 const x=useTransform(progress,[start,mid,end],[18,0,-12]);
 return <motion.article style={{opacity,x}} className="story-step"><span>{s.num}</span><div><h3>{s.title}</h3><p>{s.text}</p></div></motion.article>
}
export default function Story(){
 const ref=useRef<HTMLDivElement>(null);
 const {scrollYProgress}=useScroll({target:ref,offset:["start start","end end"]});
 const progress=useSpring(scrollYProgress,{stiffness:85,damping:24,mass:.35});
 const y=useTransform(progress,[0,1],["7%","-7%"]);
 const scale=useTransform(progress,[0,.5,1],[.9,1.04,.94]);
 const rotate=useTransform(progress,[0,1],[-2,2]);
 const bar=useTransform(progress,[0,1],["0%","100%"]);
 return <section ref={ref} id="story" className="story-wrap">
   <div className="story-sticky shell">
    <div className="story-copy"><p className="eyebrow">SCROLLYTELLING</p><h2>Una reforma no empieza con un martillo. Empieza con una decisión bien pensada.</h2><div className="story-steps">{steps.map((s,i)=><StoryStep key={s.num} s={s} i={i} progress={progress} />)}</div></div>
    <motion.div className="story-visual" style={{y,scale,rotate}}><Visual stage={0}/></motion.div>
    <div className="story-progress"><motion.i style={{width:bar}}/></div>
   </div>
 </section>
}
