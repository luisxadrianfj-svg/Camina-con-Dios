'use client';
import Link from 'next/link';
import { Heart, ArrowRight } from 'lucide-react';
import { useApp } from '@/components/app-provider';
import { FavoriteButton } from '@/components/favorite-button';
import { PageHeading, DemoNotice } from '@/components/ui';
import { passage } from '@/lib/demo';
export default function Favorites(){const {favorite}=useApp();return <div className="page narrow"><PageHeading eyebrow="FAVORITOS" title="Vuelve a lo que te inspira." description="Un pequeño lugar para los pasajes que quieras volver a explorar."/><DemoNotice>Los favoritos de muestra solo duran durante esta sesión y se restablecen al recargar. No se guardan datos.</DemoNotice>{favorite?<section className="card"><span className="pill">Contenido de demostración</span><h2>{passage.reference}</h2><p>{passage.theme}</p><p className="muted">Sin texto bíblico autorizado.</p><div className="daily-actions"><Link href="/biblia" className="button">Explorar contexto <ArrowRight size={18}/></Link><FavoriteButton/></div></section>:<section className="card empty-state"><span className="welcome-icon"><Heart size={35}/></span><h2>Un espacio por descubrir</h2><p>Añade la referencia de muestra desde Inicio para probar tus favoritos.</p><Link className="button" href="/inicio">Explorar el inicio <ArrowRight size={18}/></Link></section>}</div>}
