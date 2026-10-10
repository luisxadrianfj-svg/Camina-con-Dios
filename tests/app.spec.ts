import { test, expect } from '@playwright/test';
test('recorrido móvil, favoritos efímeros y límites de la demostración', async ({page})=>{
  await page.goto('/');
  await expect(page.getByRole('heading',{name:'Un pequeño paso. Un encuentro cada día.'})).toBeVisible();
  await page.getByRole('link',{name:'Comenzar mi camino'}).click();
  await expect(page.getByText('Texto bíblico disponible cuando')).toBeVisible();
  const tile=page.locator('.card-link').first();
  if(await tile.isVisible() && (page.viewportSize()?.width ?? 0)<760){
    const icon=await tile.locator('.tile-icon').boundingBox(); const heading=await tile.getByRole('heading').boundingBox();
    expect(icon && heading && heading.x>=icon.x+icon.width).toBeTruthy();
  }
  await page.getByRole('button',{name:'Añadir a favoritos'}).click();
  await expect(page.getByRole('button',{name:'Quitar de favoritos'})).toHaveAttribute('aria-pressed','true');
  await page.getByRole('navigation',{name:'Navegación móvil'}).getByRole('link',{name:'Favoritos'}).click();
  await expect(page.getByRole('heading',{name:'Salmo 23:1–3'})).toBeVisible();
  await page.reload();
  await expect(page.getByRole('heading',{name:'Un espacio por descubrir'})).toBeVisible();
  await page.goto('/reflexion');
  await page.getByRole('button',{name:'Llevarlo a mi día'}).click();
  await expect(page.getByText('Ejemplo editorial: reserva')).toBeVisible();
  await expect(page.getByRole('textbox')).toBeDisabled();
  await page.goto('/diario');
  for(const field of await page.getByRole('textbox').all()) await expect(field).toBeDisabled();
  await expect(page.getByRole('button',{name:'Guardar'})).toBeDisabled();
  await page.goto('/perfil');
  await page.getByRole('switch',{name:'Texto más grande'}).click();
  await expect(page.getByRole('switch')).toBeChecked();
  await expect(page.locator('.app')).toHaveClass(/large-text/);
  for(const route of ['/inicio','/biblia','/diario','/favoritos','/perfil','/bienvenida','/reflexion']){
    await page.goto(route);
    await expect(page.getByRole('heading',{level:1})).toBeVisible();
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
  }
  expect(await page.evaluate(()=>Object.keys(localStorage))).toEqual([]);
});
test('navegación de escritorio, eliminación de favorito y recursos PWA', async ({page})=>{
 await page.setViewportSize({width:1440,height:1000});
 const errors:string[]=[]; page.on('pageerror',error=>errors.push(error.message));
 await page.goto('/inicio');
 await expect(page.getByRole('navigation',{name:'Navegación principal'})).toBeVisible();
 await page.getByRole('button',{name:'Añadir a favoritos'}).click();
  await expect(page.getByRole('button',{name:'Quitar de favoritos'})).toHaveAttribute('aria-pressed','true');
 await page.getByRole('navigation',{name:'Navegación principal'}).getByRole('link',{name:'Favoritos'}).click();
 await page.getByRole('button',{name:'Quitar de favoritos'}).click();
 await expect(page.getByRole('heading',{name:'Un espacio por descubrir'})).toBeVisible();
 await page.goto('/bienvenida');
 await page.getByLabel('Mi ritmo de lectura').selectOption('Una pausa breve');
 await page.getByRole('link',{name:'Comenzar mi camino'}).click();
 await page.getByRole('navigation',{name:'Navegación principal'}).getByRole('link',{name:'Perfil'}).click();
 await expect(page.getByLabel('Mi ritmo de lectura')).toHaveValue('Una pausa breve');
 for(const path of ['/manifest.webmanifest','/icon-192.png','/icon-512.png']) expect((await page.request.get(path)).status()).toBe(200);
 expect(errors).toEqual([]);
});
