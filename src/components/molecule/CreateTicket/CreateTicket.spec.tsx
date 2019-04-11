import { shallow } from 'enzyme';
import * as React from 'react';

import Button from '#atom/Button';
import CreateTicket, { CreateTicketProps } from './CreateTicket';

describe('<CreateTicket /> tests', () => {
  const props: CreateTicketProps = {
    onCreateClick: jest.fn(),
    titleRef: React.createRef() as React.RefObject<HTMLInputElement>,
    descriptionRef: React.createRef() as React.RefObject<HTMLInputElement>,
  };

  test('should match snapshot without errors', () => {
    const wrapper = shallow(<CreateTicket {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should match snapshot with error in title', () => {
    const wrapper = shallow(<CreateTicket {...props} titleError={true} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should match snapshot with error in description', () => {
    const wrapper = shallow(
      <CreateTicket {...props} descriptionError={true} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should call onCreateClick when create clicked', () => {
    const clickMock = jest.fn();
    const wrapper = shallow(
      <CreateTicket {...props} onCreateClick={clickMock} />,
    );

    wrapper
      .find(Button)
      .first()
      .simulate('click');

    expect(clickMock).toHaveBeenCalledTimes(1);
  });
});
