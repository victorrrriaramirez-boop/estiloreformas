export const site = {
  name: "NOVA Reforma",
  tagline: "Reformas integrales pensadas para vivir mejor.",
  city: "Madrid",
  url: "https://nova-reforma.example.com",
  category: "Reformas integrales",
  businessType: "HomeAndConstructionBusiness",
  email: "hola@ejemplo.com",
  services: [
  { slug: "reformas-integrales", nav: "Reformas integrales en Madrid", title: "Reforma integral de vivienda en Madrid", description: "Coordinamos la reforma completa de pisos y viviendas: distribución, instalaciones, albañilería, revestimientos, pintura, carpintería e iluminación.", body: "Una reforma integral permite actualizar distribución, instalaciones y acabados dentro de un único proyecto. En NOVA Reforma organizamos las fases para reducir improvisaciones y mantener una visión global de la vivienda. Trabajamos especialmente en pisos que necesitan una redistribución más funcional, renovación eléctrica o de fontanería, mejora de cocina y baños y un lenguaje de acabados coherente." },
  { slug: "reformas-cocinas", nav: "Reformas de cocinas en Madrid", title: "Reforma de cocina en Madrid", description: "Diseñamos cocinas funcionales, luminosas y pensadas para el uso diario, desde instalaciones hasta mobiliario y acabados.", body: "La cocina concentra instalaciones, almacenaje, iluminación y ergonomía. Por eso una buena reforma debe resolver primero recorridos y puntos de trabajo. Estudiamos la ubicación de agua, electricidad, extracción, zonas de preparación y almacenamiento para plantear una cocina práctica y fácil de mantener. Después definimos revestimientos, encimera, iluminación y carpintería." },
  { slug: "reformas-banos", nav: "Reformas de baños en Madrid", title: "Reforma de baño en Madrid", description: "Actualizamos baños con nuevas instalaciones, impermeabilización, revestimientos, iluminación y soluciones de almacenaje.", body: "En una reforma de baño la parte que no se ve es tan importante como el acabado final. Revisamos instalaciones, pendientes, impermeabilización y ventilación antes de colocar revestimientos y sanitarios. El objetivo es conseguir un baño cómodo, resistente a la humedad y visualmente integrado con el resto de la vivienda." }
  ]
} as const;

export function absoluteUrl(path = "") {
  return `${site.url}${path.startsWith('/') ? path : `/${path}`}`;
}
