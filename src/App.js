import financialInstruments from './financialInstruments.json';
import appContent from './appContent.json';
import FinancialInstrumentsTable from './components/FinancialInstrumentsTable.js';

const App = () => {
  return (
    <FinancialInstrumentsTable
      financialInstruments={financialInstruments}
      appContent={appContent}
    />
  );
};
export default App;