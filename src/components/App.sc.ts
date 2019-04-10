import styled from 'styled-components';

export default (app: React.ComponentType): React.ComponentType => styled(app)`
  background-color: #eee;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;
