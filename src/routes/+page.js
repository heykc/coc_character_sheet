import { redirect } from '@sveltejs/kit';

/* @type { import('./$types').LayoutServerLoad } */
export function load() {
  redirect (302, '/characteristics');
}