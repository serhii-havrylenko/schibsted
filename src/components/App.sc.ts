import styled from 'styled-components';

export default (app: React.ComponentType): React.ComponentType => styled(app)`
  background-color: #eee;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
