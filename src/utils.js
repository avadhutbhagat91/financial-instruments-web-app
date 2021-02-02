import { PRICE, ASSET_CLASS, TICKER, EQUITIES, MACRO } from './appConstants.js';

/**
 * This utility is used to return sorted array of objects based on sortKey.
 * @param {Array} data Data to sort.
 * @param {String}sortKey Sort key.
 * @return {Array} sorted data.
 */
export const getSortedFinancialInstruments = (data, sortKey) => {
  switch (sortKey) {
    case PRICE:
      return sortByNumericDataInDescendingOrder(data, sortKey);
    case TICKER:
      return sortByStringData(data, sortKey);
    case ASSET_CLASS:
      return getSortedInstrumentsDataByAssetClass(data);
    default:
      return data;
  }
};
/**
 * This utility is used to sort array of objects by single key with numeric value in descending order.
 * @param {Array} data Data to sort.
 * @param {String}sortKey Sort key.
 * @return {Array} sorted data.
 */
export const sortByNumericDataInDescendingOrder = (data, sortKey) =>
  data.sort((a, b) => b[sortKey] - a[sortKey]);
/**
 * This utility is used to sort array of objects by single key with string value.
 * @param {Array}data Data to sort.
 * @param {String}sortKey Sort key.
 * @return {Array} sorted data.
 */
export const sortByStringData = (data, sortKey) =>
  data.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));

/**
 * This utility returns sorted financial instruments data by asset class. Equities first then Macro and then Credit.
 * @param {Array}data Financial Instruments Table Data.
 * @return {Array} sorted financial instruments data.
 */
export const getSortedInstrumentsDataByAssetClass = data => {
  let equities = [];
  let credits = [];
  let macros = [];

  data.forEach(asset => {
    asset.assetClass === EQUITIES
      ? equities.push(asset)
      : asset.assetClass === MACRO
      ? macros.push(asset)
      : credits.push(asset);
  });
  return [...equities, ...macros, ...credits];
};