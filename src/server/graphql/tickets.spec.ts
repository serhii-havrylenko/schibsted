import { createTicket, getAllTickets, updateTicket } from './tickets';
import { Ticket, TicketStatus } from './types';

jest.mock('lodash/fp/uniqueId', () => ({ default: () => 'someUniqID' }));

describe('getAllTickets', () => {
  it('should return default singleton value', () => {
    expect(getAllTickets()).toEqual([]);
  });

  it('should return passed list of tickets', () => {
    const ticket: Ticket = {
      id: 'random',
      title: 'foo',
      description: 'bar',
      status: TicketStatus.Open,
    };

    expect(getAllTickets([ticket])).toEqual([ticket]);
  });
});

describe('createTicket', () => {
  const ticket: Ticket = {
    id: 'someUniqID',
    title: 'foo',
    description: 'bar',
    status: TicketStatus.Open,
  };

  it('should add ticket to the list', () => {
    const allTickets: Ticket[] = [];
    createTicket(
      {
        title: ticket.title,
        description: ticket.description,
      },
      allTickets,
    );

    expect(allTickets).toEqual([ticket]);
  });

  it('should return created ticket', () => {
    expect(
      createTicket(
        {
          title: ticket.title,
          description: ticket.description,
        },
        [],
      ),
    ).toEqual(ticket);
  });
});

describe('updateTicket', () => {
  let tickets: Ticket[] = [];

  beforeEach(() => {
    tickets = [
      {
        id: 'someUniqID',
        title: 'foo',
        description: 'bar',
        status: TicketStatus.Open,
      },
      {
        id: 'someUniqID-2',
        title: 'foo-2',
        description: 'bar-2',
        status: TicketStatus.Pending,
      },
    ];
  });

  it('should update ticket with passed status', () => {
    const id = 'someUniqID';
    updateTicket(
      {
        id,
      },
      {
        status: TicketStatus.Closed,
      },
      tickets,
    );

    expect(tickets.find((ticket) => ticket.id === id)).toMatchObject({
      status: TicketStatus.Closed,
    });
  });

  it('should return null when nothing to update', () => {
    const id = 'random';
    const ticket = updateTicket(
      {
        id,
      },
      {
        status: TicketStatus.Closed,
      },
      tickets,
    );

    expect(ticket).toBe(null);
  });

  it('should return created ticket', () => {
    expect(
      updateTicket(
        {
          id: 'someUniqID',
        },
        {
          status: TicketStatus.Pending,
        },
        tickets,
      ),
    ).toEqual(tickets[0]);
  });
});
