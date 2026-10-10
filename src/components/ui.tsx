import type { ReactNode } from 'react';
import { Info, ArrowRight } from 'lucide-react';
import Link from 'next/link';
export function PageHeading({eyebrow,title,description}:{eyebrow:string;title:string;description:string}){return <div className="page-heading"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{description}</p></div>}
export function DemoNotice({children}:{children?:ReactNode}){return <aside className="demo-notice"><Info size={18}/><p>{children ?? 'Estás explorando una demostración. El contenido es ilustrativo y no se guarda información personal.'}</p></aside>}
export function CardLink({href,title,description,icon}:{href:string;title:string;description:string;icon:ReactNode}){return <Link className="card card-link" href={href}><span className="tile-icon">{icon}</span><h3>{title}</h3><p>{description}</p><span className="card-action">Explorar <ArrowRight size={17}/></span></Link>}
