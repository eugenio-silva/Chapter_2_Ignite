import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal  }: HeaderProps) {

  return (
    <Container>
       <Content>
        <img src={logoImg} alt="dtmoney"/>
          <button 
            type="button" 
            onClick={onOpenNewTransactionModal}
          >
            Nova Transação
          </button>
       </Content>
    </Container>
  )
}
