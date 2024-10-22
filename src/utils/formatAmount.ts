export function formatAmountString(
  numberString: string,
  decimalPlaces: number = 2,
) {
  if (decimalPlaces === 0) {
    return numberString.split('.')[0];
  }

  const [integerPart, decimalPart] = numberString.split('.');
  if (!decimalPart) {
    return numberString;
  }

  const truncatedDecimalPart = decimalPart.slice(0, decimalPlaces);
  return `${integerPart}.${truncatedDecimalPart}`;
}
