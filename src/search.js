import { menu } from './menu.js';

export function search(term) {
  const t = term.toLowerCase();
  return menu.filter((dish) => dish.name.toLowerCase().includes(t));
}

export function cheapest() {
  return [...menu].sort((a, b) => a.price - b.price)[0];
}
