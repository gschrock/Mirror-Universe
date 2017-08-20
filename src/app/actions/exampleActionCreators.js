export const incrementCounter = (count) => {
  return {
    count,
    type: 'incrementCounter'
  };
};

export const apiDataFetched = (result) => {
  return {
    result,
    type: 'apiDataFetched',
  }
}
