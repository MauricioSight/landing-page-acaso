import React from 'react';

import { usePageController } from '@/contexts/PagesController';
import { Container, AnimatedContainer, Title, Icon } from './styles';

const ScrollFooter: React.FC = () => {
  const { data } = usePageController();

  return (
    <Container>
      <AnimatedContainer isHiddenScroll={data.currentPage === 'see-more'}>
        <Icon />
        <Title>Role para baixo para ver mais</Title>
      </AnimatedContainer>
    </Container>
  );
};

export default ScrollFooter;
