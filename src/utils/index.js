export const santizeCurrency = currency => (
  new Intl.NumberFormat('pt-BR', {
    style: "currency",
    currency: "BRL",
    minimumIntegerDigits: 3,
    minimumFractionDigits: 4,
  }).format(currency)
);

export const sanatizeIndex = indexNumber => {
  const index = {};

  index.status = Math.sign(indexNumber) === -1 ? 'negative' : 'positive';
  index.currValue = new Intl.NumberFormat('pt-BR', {
    maximumFractionDigits: 2,
  }).format(indexNumber);

  return index;
}

export const sanatizeVolume = volumeValue => (
  new Intl.NumberFormat('pt-BR', {
    minimumIntegerDigits: 1,
    minimumFractionDigits: 2,
  }).format(volumeValue)
);