import { Table, TableBody, TableHead, TableRow } from '@material-ui/core';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import TableCellStyled from './TableCellStyled';

storiesOf('TableCellStyled', module).add('default', () => (
  <Table>
    <TableHead>
      {' '}
      <TableRow>
        <TableCellStyled>Head cell</TableCellStyled>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCellStyled>Body cell</TableCellStyled>
      </TableRow>
    </TableBody>
  </Table>
));
