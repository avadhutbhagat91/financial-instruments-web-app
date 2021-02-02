import React, { Component } from 'react';
import FinancialInstrumentsTableHeader from './FinancialInstrumentsTableHeader.js';
import FinancialInstrumentsTableBody from './FinancialInstrumentsTableBody.js';
import { getSortedFinancialInstruments } from '../utils.js';

export class FinancialInstrumentsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      financialInstruments: []
    };
  }
  componentDidMount() {
    const { financialInstruments } = this.props;
    this.setState({
      financialInstruments: financialInstruments
    });
  }
  sortFinancialInstruments = sortKey => {
    const { financialInstruments } = this.state;
    const sortedFinancialInstruments = getSortedFinancialInstruments(
      financialInstruments,
      sortKey
    );
    this.setState({
      financialInstruments: sortedFinancialInstruments
    });
  };
  render() {
    const { appContent } = this.props;
    const {
      financialInstrumentsContent: { header }
    } = appContent;
    const { financialInstruments } = this.state;
    return (
      <div>
        <h1>{header}</h1>
        <table className="center">
          <FinancialInstrumentsTableHeader
            appContent={appContent}
            sortFinancialInstruments={sortKey =>
              this.sortFinancialInstruments(sortKey)
            }
          />
          <FinancialInstrumentsTableBody
            financialInstruments={financialInstruments}
          />
        </table>
      </div>
    );
  }
}
export default FinancialInstrumentsTable;