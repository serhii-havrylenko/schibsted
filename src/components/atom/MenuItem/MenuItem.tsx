import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import styled from 'styled-components';

const MenuItem: React.SFC<{ className?: string }> = ({
  className,
  children,
}) => (
  <Typography variant="h6" color="inherit" noWrap={false} className={className}>
    {children}
  </Typography>
);

export default styled(MenuItem)`
  && {
    color: #fff;
  }
`;
