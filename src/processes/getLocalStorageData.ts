export const getUsersCurrenciesIds = (): Array<number> => {
  const localStorageStringifyData = localStorage.getItem('currenciesIds');
  const localStorageParsedData = localStorageStringifyData
    ? JSON.parse(localStorageStringifyData)
    : null;
  return localStorageParsedData
    ? localStorageParsedData.map((c: { id: string; value: number }) => c.id)
    : [];
};
export const getUsersCurrencies = (): Array<{ id: string; value: number }> => {
  const localStorageStringifyData = localStorage.getItem('currenciesIds');
  return localStorageStringifyData ? JSON.parse(localStorageStringifyData) : null;
};
