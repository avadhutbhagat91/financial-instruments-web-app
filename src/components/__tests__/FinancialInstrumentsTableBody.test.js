import React from 'react';
import { shallow } from 'enzyme';
import FinancialInstrumentsTableBody from '../FinancialInstrumentsTableBody';
import financialInstruments from '../../financialInstruments.json';

const setup = (setupProps = {}) => {
    const defaultProps = {
        financialInstruments: financialInstruments
    }
    const props = { ...defaultProps, ...setupProps};
    const wrapper = shallow(<FinancialInstrumentsTableBody {...props}/>);
    return {
        props,
        wrapper
    }
}

describe('FinancialInstrumentsTableBody', () => {
    test('render', () => {
        const { wrapper } = setup();
        expect(wrapper).toMatchSnapshot();
    });
});