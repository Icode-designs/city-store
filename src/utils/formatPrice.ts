function formatNairaToUSD(nairaAmount: number, rate: number = 1600): string {
  const usdAmount = nairaAmount / rate;
  return usdAmount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default formatNairaToUSD;
