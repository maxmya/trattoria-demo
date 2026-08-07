import { menu } from './menu.js';

export function search(term) {
  const t = term.toLowerCase();
  return menu.filter((dish) => dish.name.toLowerCase().includes(t));
}
