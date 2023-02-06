export function getPercentageDiscount(price, promotionalPrice) {
  const descValue = price - promotionalPrice;

  return String(((descValue / price) * 100).toFixed(0)).concat('%');
}

export function formatTextLength(text) {
  return text.length > 28 ? `${text.substring(0, 25)}...` : text;
}

export function getFormatedPrice(price) {
  return 'R$'.concat(
    new Intl.NumberFormat('pt-BR', {
      style: 'decimal',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price)
  );
}
