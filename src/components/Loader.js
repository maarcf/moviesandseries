import styled, { keyframes } from 'styled-components';

import { Flex } from './Commons';

const Overlay = styled(Flex)`
  background-color: rgba(255, 255, 255, 0.5);
  position: fixed;
  inset: 0;
`;

const spinLoader = keyframes`
  100% { transform: rotate(360deg);
`;

const SpinLoader = styled.div`
  width: 120px;
  height: 120px;
  border: 8px solid transparent;
  border-top: 8px solid ${props => props.theme.colors.textSecondary};
  border-bottom: 8px solid ${props => props.theme.colors.textSecondary};
  border-radius: 50%;
  animation: ${spinLoader} 1.5s linear infinite;
`;

const Loader = () => {
  return(
    <Overlay 
      justifyContent="center" 
      alignItems="center" 
      role="alertdialog"  
      aria-modal="true"
      aria-label="Cargando resultados...">
      <SpinLoader />
    </Overlay>
  )
};

export default Loader;