import type { Metadata, Viewport } from 'next';
import { AppProvider } from '@/components/app-provider';
import { Shell } from '@/components/shell';
import './globals.css';
export const metadata: Metadata = { title: { default: 'Camina con Dios', template: '%s · Camina con Dios' }, description: 'Un espacio sereno para acompañar tu camino espiritual. MVP de demostración.', applicationName: 'Camina con Dios', manifest: '/manifest.webmanifest', icons: { icon: '/icon.svg', apple: '/icon-192.png' } };
export const viewport: Viewport = { themeColor: '#365647', width: 'device-width', initialScale: 1 };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="es"><body><AppProvider><Shell>{children}</Shell></AppProvider></body></html>; }
