import { mount } from 'enzyme';
import * as React from 'react';

import Button from '#atom/Button';
import { Ticket, TicketStatus } from '#components/types';
import Tickets from './Tickets';

describe('<Tickets /> tests', () => {
  test('should match snapshot for open status', () => {
    const tickets: Ticket[] = [
      {
        id: 'REQ-1',
        title: 'First ticket',
        description: 'first description',
        status: TicketStatus.Open,
      },
    ];
    const wrapper = mount(
      <Tickets onUpdateClick={jest.fn()} tickets={tickets} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should match snapshot for pending status', () => {
    const tickets: Ticket[] = [
      {
        id: 'REQ-1',
        title: 'First ticket',
        description: 'first description',
        status: TicketStatus.Pending,
      },
    ];
    const wrapper = mount(
      <Tickets onUpdateClick={jest.fn()} tickets={tickets} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should match snapshot for closed status', () => {
    const tickets: Ticket[] = [
      {
        id: 'REQ-1',
        title: 'First ticket',
        description: 'first description',
        status: TicketStatus.Closed,
      },
    ];
    const wrapper = mount(
      <Tickets onUpdateClick={jest.fn()} tickets={tickets} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should call onUpdateClick with proper arguments', () => {
    const clickMock = jest.fn();
    const tickets: Ticket[] = [
      {
        id: 'REQ-1',
        title: 'First ticket',
        description: 'first description',
        status: TicketStatus.Pending,
      },
      {
        id: 'REQ-2',
        title: 'Second ticket',
        description: 'Second description',
        status: TicketStatus.Pending,
      },
    ];
    const wrapper = mount(
      <Tickets tickets={tickets} onUpdateClick={clickMock} />,
    );

    wrapper
      .find(Button)
      .first()
      .simulate('click');

    expect(clickMock).toHaveBeenCalledTimes(1);
    expect(clickMock).toHaveBeenCalledWith(tickets[0]);
  });
});
