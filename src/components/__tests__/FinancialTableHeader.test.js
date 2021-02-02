import React from 'react';
import { shallow } from 'enzyme';
import FinancialInstrumentsTableHeader from '../FinancialInstrumentsTableHeader';
import financialInstruments from '../../financialInstruments.json';
import appContent from '../../appContent.json'

const setup = (setupProps = {}) => {
    const defaultProps = {
        financialInstruments: financialInstruments
    }
    const props = { ...defaultProps, ...setupProps};
    const wrapper = shallow(<FinancialInstrumentsTableHeader {...props}/>);
    return {
        props,
        wrapper
    }
}

describe('FinancialInstrumentsTableHeader', () => {
    test('render', () => {
        const { wrapper } = setup({ appContent: appContent });
        expect(wrapper).toMatchSnapshot();
    });
});