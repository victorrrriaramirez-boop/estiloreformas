import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Story from "@/components/Story";
import BeforeAfterStory from "@/components/BeforeAfterStory";
import Visual from "@/components/Visual";
import { site } from "@/lib/site";

export default function Home(){
 const schema={"@context":"https://schema.org","@type":site.businessType,"name":site.name,"url":site.url,"description":"Reformas integrales de viviendas, cocinas y baños en Madrid con planificación, coordinación de obra y atención al detalle.","areaServed":site.city,"makesOffer":site.services.map(s=>({"@type":"Offer","itemOffered":{"@type":"Service","name":s.title}}))};
 return <><NavBar/><main>
  <section className="hero editorial-hero">
   <div className="shell hero-grid">
    <div className="hero-copy"><p className="eyebrow">INTERIORISMO · REFORMA · MADRID</p><h1>Espacios que cambian la forma de vivirlos.</h1><p className="lead">Reformas integrales en Madrid planteadas como un proyecto completo: distribución, instalaciones, materiales, iluminación y acabados bajo una misma dirección.</p><div className="hero-actions"><Link className="button primary" href="/contacto">Estudiar mi vivienda</Link><Link className="text-link" href="#servicios">Explorar servicios ↘</Link></div></div>
    <div className="hero-art"><Visual stage={0}/><span className="art-caption">01 / CASA · LUZ · MATERIAL</span></div>
   </div>
   <div className="shell editorial-strip"><span>REFORMA INTEGRAL</span><span>COCINAS</span><span>BAÑOS</span><span>MADRID</span></div>
  </section>

  <section id="servicios" className="section shell editorial-services"><Reveal><p className="eyebrow">SERVICIOS</p><h2 className="display">Una reforma se entiende mejor cuando cada decisión tiene un porqué.</h2></Reveal><div className="service-list">
   <Link href="/servicios/reformas-integrales" className="service-row"><span>01</span><h3>Reformas integrales en Madrid</h3><p>Redistribución, instalaciones y acabados coordinados en un único proyecto.</p><b>↗</b></Link>
   <Link href="/servicios/reformas-cocinas" className="service-row"><span>02</span><h3>Reformas de cocinas</h3><p>Ergonomía, iluminación, almacenaje e instalaciones pensadas como un conjunto.</p><b>↗</b></Link>
   <Link href="/servicios/reformas-banos" className="service-row"><span>03</span><h3>Reformas de baños</h3><p>Impermeabilización, distribución, revestimientos y soluciones de almacenaje.</p><b>↗</b></Link>
  </div></section>

  <Story/>

  <section className="section shell material-section"><div className="material-intro"><p className="eyebrow">MATERIALIDAD</p><h2>Menos elementos. Más intención.</h2></div><div className="material-grid"><Reveal className="material-card m1"><span>01</span><h3>Luz</h3><p>La iluminación natural y artificial se proyecta junto a la distribución para mejorar amplitud, uso y ambiente.</p></Reveal><Reveal className="material-card m2"><span>02</span><h3>Textura</h3><p>Madera, piedra, cerámica y pintura se combinan con una paleta limitada para mantener coherencia visual.</p></Reveal><Reveal className="material-card m3"><span>03</span><h3>Detalle</h3><p>Encuentros, carpinterías, mecanismos y remates son parte del resultado, no decisiones de última hora.</p></Reveal></div></section>

  <BeforeAfterStory/>

  <section className="section shell seo-editorial"><div><p className="eyebrow">SEO LOCAL · MADRID</p><h2>Contenido que explica el servicio antes de intentar posicionarlo.</h2></div><div><p>La web dispone de páginas específicas para reforma integral, cocinas y baños, con títulos, metadescripciones, canonical, datos estructurados y enlazado interno. La estructura puede ampliarse con páginas por zonas cuando exista contenido real y útil para cada ubicación.</p><p>El objetivo es responder de forma clara a búsquedas relacionadas con reformas en Madrid sin repetir palabras clave de manera artificial ni crear páginas vacías.</p></div></section>

  <section className="cta-band"><div className="shell"><p className="eyebrow">NOVA REFORMA · MADRID</p><h2>Una casa nueva sin cambiar de dirección.</h2><Link className="button light" href="/contacto">Solicitar estudio inicial</Link></div></section>
 </main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></>
}
