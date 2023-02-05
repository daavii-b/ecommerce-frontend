// eslint-disable-next-line import/no-mutable-exports
let cartAmount = 0;

export default function setAmount(value) {
  cartAmount = value;
}

export function addAmount({ price, promotional_price: promotionalPrice }) {
  if (promotionalPrice) {
    cartAmount += promotionalPrice;
  } else {
    cartAmount += price;
  }
}

export function removeAmount({ price, promotional_price: promotionalPrice }) {
  if (promotionalPrice) {
    cartAmount -= promotionalPrice;
  } else {
    cartAmount -= price;
  }
}

export function clearAmount() {
  cartAmount = 0;
}

export { cartAmount };
