/*global describe, it, before, beforeEach, after, afterEach */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import { _Header_ } from './Header';

Enzyme.configure({ apapter: new Adapter() });

describe('Header', () => {
    it('contains class .header', () => {
        expect(shallow(<_Header_ />).is('.Header')).to.equal(true);
    });
});
