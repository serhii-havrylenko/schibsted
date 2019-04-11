import { withStyles } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';

export const TableCellStyled = withStyles(() => ({
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

export default TableCellStyled;
