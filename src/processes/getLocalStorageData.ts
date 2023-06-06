export const getUsersCurrencies = (): Array<{ id: string; value: number }> => {
  const localStorageStringifyData = localStorage.getItem('usersCurrencies');
  return localStorageStringifyData ? JSON.parse(localStorageStringifyData) : null;
};
export const getUsersCurrenciesIds = (): Array<number> => {
  const localStorageStringifyData = localStorage.getItem('usersCurrencies');
  const localStorageParsedData = localStorageStringifyData
    ? JSON.parse(localStorageStringifyData)
    : null;
  return localStorageParsedData
    ? localStorageParsedData.map((c: { id: string; value: number }) => c.id)
    : [];
};
