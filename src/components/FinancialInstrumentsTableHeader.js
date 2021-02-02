import { PRICE, ASSET_CLASS, TICKER } from '../appConstants.js';

const FinancialInstrumentsTableHeader = ({
  appContent,
  sortFinancialInstruments
}) => {
  const {
    financialInstrumentsContent: {
      ticker,
      price,
      assetClass,
      tickerToolTip,
      priceToolTip,
      assetClassToolTip
    }
  } = appContent;
  return (
    <thead>
      <tr>
        <th
          onClick={() => sortFinancialInstruments(TICKER)}
          title={tickerToolTip}
          className="header"
        >
          {ticker}
        </th>
        <th
          onClick={() => sortFinancialInstruments(PRICE)}
          title={priceToolTip}
          className="header"
        >
          {price}
        </th>
        <th
          onClick={() => sortFinancialInstruments(ASSET_CLASS)}
          title={assetClassToolTip}
          className="header"
        >
          {assetClass}
        </th>
      </tr>
    </thead>
  );
};
export default FinancialInstrumentsTableHeader;