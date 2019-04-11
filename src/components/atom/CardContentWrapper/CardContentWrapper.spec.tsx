import { mount } from 'enzyme';
import * as React from 'react';

import CardContentWrapper from './CardContentWrapper';

jest.mock('@material-ui/core/CardContent');

describe('<CardContentWrapper /> tests', () => {
  test('should match snapshot and styles', () => {
    const tree = mount(<CardContentWrapper>Content</CardContentWrapper>);
    expect(tree).toMatchSnapshot();
  });
});
