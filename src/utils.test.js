import {
    getSortedFinancialInstruments,
    sortByNumericDataInDescendingOrder,
    sortByStringData,
    getSortedInstrumentsDataByAssetClass
  } from './utils.js';
  import { PRICE, TICKER, EQUITIES } from './appConstants.js';
  
  let inputData;
  
  beforeAll(() => {
    inputData = [
      { ticker: "BETA", price: 3791.37, assetClass: "Equities" },
      { ticker: "DELTA", price: 8132.66, assetClass: "Equities" },
      { ticker: "ETA", price: 3089.2, assetClass: "Macro" },
      { ticker: "PSI", price: 2735.78, assetClass: "Credit" },
      { ticker: "NU", price: 2744.89, assetClass: "Macro" }
    ];
  });
  
  describe("getSortedFinancialInstruments", () => {
    test("returns sorted data based on price in descending order", () => {
      const expectedResult = [
        { ticker: "DELTA", price: 8132.66, assetClass: "Equities" },
        { ticker: "BETA", price: 3791.37, assetClass: "Equities" },
        { ticker: "ETA", price: 3089.2, assetClass: "Macro" },
        { ticker: "NU", price: 2744.89, assetClass: "Macro" },
        { ticker: "PSI", price: 2735.78, assetClass: "Credit" }
      ];
      const sortedDataByPriceInDescending = getSortedFinancialInstruments(
        inputData,
        PRICE
      );
      expect(sortedDataByPriceInDescending).toEqual(expectedResult);
    });
    test("returns sorted data by ticker in an alphabetical order", () => {
      const expectedResult = [
        { ticker: "BETA", price: 3791.37, assetClass: "Equities" },
        { ticker: "DELTA", price: 8132.66, assetClass: "Equities" },
        { ticker: "ETA", price: 3089.2, assetClass: "Macro" },
        { ticker: "NU", price: 2744.89, assetClass: "Macro" },
        { ticker: "PSI", price: 2735.78, assetClass: "Credit" }
      ];
      const sortedDataByTickerInAlphabeticalOrder = getSortedFinancialInstruments(
        inputData,
        TICKER
      );
      expect(sortedDataByTickerInAlphabeticalOrder).toEqual(expectedResult);
    });
    test("returns sorted financial instruments data by asset class. Equities first then Macro and then Credit.", () => {
      const expectedResult = [
        { ticker: "BETA", price: 3791.37, assetClass: "Equities" },
        { ticker: "DELTA", price: 8132.66, assetClass: "Equities" },
        { ticker: "ETA", price: 3089.2, assetClass: "Macro" },
        { ticker: "NU", price: 2744.89, assetClass: "Macro" },
        { ticker: "PSI", price: 2735.78, assetClass: "Credit" }
      ];
      const result = getSortedFinancialInstruments(inputData);
      expect(result).toEqual(expectedResult);
    });
  });
  
  describe("sortByNumericDataInDescendingOrder", () => {
    test("returns sorted data by numeric key provided", () => {
      const expectedResult = [
        { ticker: "DELTA", price: 8132.66, assetClass: "Equities" },
        { ticker: "BETA", price: 3791.37, assetClass: "Equities" },
        { ticker: "ETA", price: 3089.2, assetClass: "Macro" },
        { ticker: "NU", price: 2744.89, assetClass: "Macro" },
        { ticker: "PSI", price: 2735.78, assetClass: "Credit" }
      ];
      const result = sortByNumericDataInDescendingOrder(inputData, PRICE);
      expect(result).toEqual(expectedResult);
    });
  });
  
  describe("sortByStringData", () => {
    test("returns sorted data by string key provided", () => {
      const expectedResult = [
        { ticker: "BETA", price: 3791.37, assetClass: "Equities" },
        { ticker: "DELTA", price: 8132.66, assetClass: "Equities" },
        { ticker: "ETA", price: 3089.2, assetClass: "Macro" },
        { ticker: "NU", price: 2744.89, assetClass: "Macro" },
        { ticker: "PSI", price: 2735.78, assetClass: "Credit" }
      ];
      const result = sortByStringData(inputData, TICKER);
      expect(result).toEqual(expectedResult);
    });
  });
  
  describe("getSortedInstrumentsDataByAssetClass", () => {
    test("returns sorted financial instruments data by asset class. Equities first then Macro and then Credit.", () => {
      const expectedResult = [
        { ticker: "BETA", price: 3791.37, assetClass: "Equities" },
        { ticker: "DELTA", price: 8132.66, assetClass: "Equities" },
        { ticker: "ETA", price: 3089.2, assetClass: "Macro" },
        { ticker: "NU", price: 2744.89, assetClass: "Macro" },
        { ticker: "PSI", price: 2735.78, assetClass: "Credit" }
      ];
      const result = getSortedInstrumentsDataByAssetClass(inputData);
      expect(result).toEqual(expectedResult);
    });
  });