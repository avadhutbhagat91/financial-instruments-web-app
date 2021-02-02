import React from 'react';
import { shallow } from 'enzyme';
import FinancialInstrumentsTable from '../FinancialInstrumentsTable';
import financialInstruments from '../../financialInstruments.json';
import appContent from '../../appContent.json'

const setup = (setupProps = {}) => {
    const defaultProps = {
        financialInstruments: financialInstruments
    }
    const props = { ...defaultProps, ...setupProps};
    const wrapper = shallow(<FinancialInstrumentsTable {...props}/>);
    return {
        props,
        wrapper
    }
}

describe('FinancialInstrumentsTable', () => {
    test('render', () => {
        const { wrapper } = setup({ appContent: appContent });
        expect(wrapper).toMatchSnapshot();
    });
});