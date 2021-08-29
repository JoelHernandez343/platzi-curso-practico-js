const simpleDiscount = (originalPrice, discount) => {
  const percentageOfDiscount = 100 - discount;
  const newPrice = (originalPrice * percentageOfDiscount) / 100;

  return newPrice;
};

export { simpleDiscount };
