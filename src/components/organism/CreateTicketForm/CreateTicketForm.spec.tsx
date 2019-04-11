import { mount, shallow } from 'enzyme';
import * as React from 'react';

import Button from '#atom/Button';
import CreateTicket from '#molecule/CreateTicket';
import { CreateTicketForm, CreateTicketFormProps } from './CreateTicketForm';

describe('<CreateTicketForm /> tests', () => {
  const props: CreateTicketFormProps = {
    onCreateClick: jest.fn(),
  };

  test('should match snapshot without errors', () => {
    const wrapper = shallow(<CreateTicketForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should call onCreateClick with proper params when create clicked', () => {
    const clickMock = jest.fn();
    const wrapper = mount(<CreateTicketForm onCreateClick={clickMock} />);

    ((wrapper
      .find('input')
      .first()
      .instance() as unknown) as HTMLInputElement).value = 'title';

    ((wrapper
      .find('textarea')
      .first()
      .instance() as unknown) as HTMLTextAreaElement).value = 'desc';

    wrapper
      .find(Button)
      .first()
      .simulate('click');

    expect(clickMock).toHaveBeenCalledTimes(1);
    expect(clickMock).toHaveBeenCalledWith({
      title: 'title',
      description: 'desc',
    });
  });

  test('should not call onCreateClick when has invalid fields', () => {
    const clickMock = jest.fn();
    const wrapper = mount(<CreateTicketForm onCreateClick={clickMock} />);

    wrapper
      .find(Button)
      .first()
      .simulate('click');

    expect(clickMock).toHaveBeenCalledTimes(0);
  });

  test('should pass error when no title specified', () => {
    const clickMock = jest.fn();
    const wrapper = mount(<CreateTicketForm onCreateClick={clickMock} />);

    ((wrapper
      .find('textarea')
      .first()
      .instance() as unknown) as HTMLTextAreaElement).value = 'desc';

    wrapper
      .find(Button)
      .first()
      .simulate('click');

    expect(
      wrapper
        .find(CreateTicket)
        .first()
        .props(),
    ).toMatchObject({ titleError: true, descriptionError: false });
  });

  test('should pass error when no description specified', () => {
    const clickMock = jest.fn();
    const wrapper = mount(<CreateTicketForm onCreateClick={clickMock} />);

    ((wrapper
      .find('input')
      .first()
      .instance() as unknown) as HTMLInputElement).value = 'title';

    wrapper
      .find(Button)
      .first()
      .simulate('click');

    expect(
      wrapper
        .find(CreateTicket)
        .first()
        .props(),
    ).toMatchObject({ titleError: false, descriptionError: true });
  });
});
