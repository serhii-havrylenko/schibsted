import { shallow } from 'enzyme';
import * as React from 'react';

import CreateTicket, { CreateTicketProps } from './CreateTicket';

describe('<CreateTicket /> tests', () => {
  const props: CreateTicketProps = {
    onCreateClick: jest.fn(),
    titleRef: React.createRef() as React.RefObject<HTMLInputElement>,
    descriptionRef: React.createRef() as React.RefObject<HTMLInputElement>,
  };

  test('should match snapshot without errors', () => {
    const tree = shallow(<CreateTicket {...props} />);
    expect(tree).toMatchSnapshot();
  });

  test('should match snapshot with error in title', () => {
    const tree = shallow(<CreateTicket {...props} titleError={true} />);
    expect(tree).toMatchSnapshot();
  });

  test('should match snapshot with error in description', () => {
    const tree = shallow(<CreateTicket {...props} descriptionError={true} />);
    expect(tree).toMatchSnapshot();
  });
});
