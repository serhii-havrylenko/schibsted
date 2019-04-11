import { TicketStatus } from '#components/types';
import { getNextStatus } from './utils';

describe('getNextStatus', () => {
  it('should return Pending when Open passed', () => {
    expect(getNextStatus(TicketStatus.Open)).toBe(TicketStatus.Pending);
  });

  it('should return Closed when Pending passed', () => {
    expect(getNextStatus(TicketStatus.Pending)).toBe(TicketStatus.Closed);
  });

  it('should return null when Closed passed', () => {
    expect(getNextStatus(TicketStatus.Closed)).toBe(null);
  });
});
