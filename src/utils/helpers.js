export const formatNumber = (num = 0, isCurrency = false) => {
  const formattedPrice = Intl.NumberFormat('en-US').format(+num);

  if (isCurrency) {
    return `$${formattedPrice}`;
  }

  return formattedPrice;
};
