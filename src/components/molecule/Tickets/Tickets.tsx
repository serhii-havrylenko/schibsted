import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as React from 'react';

import Button from '#atom/Button';
import { Ticket } from '#components/types';
import { getNextStatus } from './utils';

const TableCellStyled = withStyles(() => ({
  head: {
    backgroundColor: '#65a1ec',
    color: '#fff',
  },
  body: {
    fontSize: 14,
    whiteSpace: 'pre',
    '&:first-child': {
      whiteSpace: 'nowrap',
    },
  },
}))(TableCell);

export interface TicketsProps {
  tickets: Ticket[];
  classes: { root: string; row: string };
  onUpdateClick: (ticket: Ticket) => void;
}

const Tickets: React.SFC<TicketsProps> = ({
  tickets,
  classes,
  onUpdateClick,
}) => (
  <Paper className={classes.root}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCellStyled align="left">ID</TableCellStyled>
          <TableCellStyled align="left">Title</TableCellStyled>
          <TableCellStyled>Description</TableCellStyled>
          <TableCellStyled align="left">Status</TableCellStyled>
          <TableCellStyled align="center">Update to</TableCellStyled>
        </TableRow>
      </TableHead>
      <TableBody>
        {tickets.map((ticket) => {
          const onStatusClick = () => onUpdateClick(ticket);
          const nextStatus = getNextStatus(ticket.status);

          return (
            <TableRow className={classes.row} key={ticket.id}>
              <TableCellStyled align="left">{ticket.id}</TableCellStyled>
              <TableCellStyled align="left">{ticket.title}</TableCellStyled>
              <TableCellStyled>{ticket.description}</TableCellStyled>
              <TableCellStyled align="left">{ticket.status}</TableCellStyled>
              <TableCellStyled align="center">
                {nextStatus ? (
                  <Button onClick={onStatusClick}>{nextStatus}</Button>
                ) : (
                  ''
                )}
              </TableCellStyled>
            </TableRow>
          );
        })}
        {!tickets.length && (
          <TableRow>
            <TableCellStyled>
              No data to show, feel free to add some tickets
            </TableCellStyled>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </Paper>
);

export default withStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(Tickets);
