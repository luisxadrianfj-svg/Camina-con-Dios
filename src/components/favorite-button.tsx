'use client';
import { Heart } from 'lucide-react';
import { useApp } from './app-provider';
export function FavoriteButton(){const {favorite,setFavorite}=useApp();return <button className="text-button" aria-pressed={favorite} onClick={()=>setFavorite(!favorite)}><Heart size={19} fill={favorite?'currentColor':'none'}/>{favorite?'Quitar de favoritos':'Añadir a favoritos'}</button>}
