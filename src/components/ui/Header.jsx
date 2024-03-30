import { Cart } from '@components';
import { Container, HeaderLogo, HeaderNavigation } from '@ui';
import { useState } from 'react';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };
  const handleCloseCart = event => {
    let { element } = event.target.dataset;
    if (!element) return;
    if (!element.includes('close-cart-element')) return;
    setIsCartOpen(false);
  };

  return (
    <header>
      <div className="h-16 opacity-0"></div>

      <div className="fixed left-0 top-0 z-50 w-full bg-blue-600 text-white">
        <Container className="flex items-center py-3">
          <HeaderLogo />
          <HeaderNavigation onOpenCart={handleOpenCart} />
        </Container>

        <Cart active={isCartOpen} onCloseModal={handleCloseCart} />
      </div>
    </header>
  );
};

export default Header;
