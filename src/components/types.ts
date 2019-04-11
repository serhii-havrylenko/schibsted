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

export interface TicketsQueryData {
  tickets: Ticket[];
}

export interface CreateTicketQueryData {
  ticket: Ticket;
}
export type CreateTicketQueryVariables = Pick<Ticket, 'title' | 'description'>;

export interface UpdateTicketQueryData {
  ticket: Ticket;
}
export type UpdateTicketQueryVariables = Pick<Ticket, 'id' | 'status'>;
