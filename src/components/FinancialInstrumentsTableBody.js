import { CREDIT, EQUITIES } from '../appConstants.js';

const FinancialInstrumentsTableBody = ({ financialInstruments }) => {
  return (
    <tbody>
      {financialInstruments.map((instrument, index) => {
        return (
          <tr
            key={index}
            className={
              instrument.assetClass === EQUITIES
                ? "equities"
                : instrument.assetClass === CREDIT
                ? "credit"
                : "macro"
            }
          >
            <td>{instrument.ticker}</td>
            <td
              className={
                instrument.price > 0 ? "price-positive" : "price-negative"
              }
            >
              {instrument.price}
            </td>
            <td>{instrument.assetClass}</td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default FinancialInstrumentsTableBody;