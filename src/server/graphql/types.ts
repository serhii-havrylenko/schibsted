export enum TicketStatus {
  Open = 'Open',
  Pending = 'Pending',
  Closed = 'Closed',
}

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
}

export interface CreateTicketArgs {
  ticket: Pick<Ticket, 'title' | 'description'>;
}

export interface UpdateTicketArgs {
  where: {
    id: Ticket['id'];
  };
  with: {
    status: TicketStatus;
  };
}
