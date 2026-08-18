import { menu, specials } from './menu.js';
import { formatPrice } from './price.js';

export function renderMenu(currency) {
  return [...menu, ...specials]
    .map((dish) => `${dish.name} — ${formatPrice(dish.price, currency)}`)
    .join('\n');
}
