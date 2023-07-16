import React from 'react';
import styled from 'styled-components';

const CartWidget = ({ numberOfProducts }) => {
  return (
    <CartIconContainer>
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-items">{numberOfProducts}</span>
    </CartIconContainer>
  );
};

export default CartWidget;

const CartIconContainer = styled.div`
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;

  .cart-icon {
    font-size: 24px;
    margin-right: 5px;
  }

  .cart-items {
    font-size: 16px;
  }
`;