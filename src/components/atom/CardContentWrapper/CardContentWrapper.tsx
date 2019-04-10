import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';

export const CardContentWrapper = styled(CardContent)`
  && {
    display: flex;
    flex-direction: column;
  }
` as typeof CardContent;

export default CardContentWrapper;
