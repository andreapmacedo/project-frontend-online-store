import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { ShoppingCart } from 'phosphor-react';

import './style.css';

import freeShippingSvg from '../../assets/free5.svg';

class CategoryCard extends Component {
  render() {
    const { productId, thumbnail, title, price, onClick, shipping, originalPrice } = this.props;
    return (
      <div className="card" >
        <div className="free-shipping-svg">
        { shipping && <img src={ freeShippingSvg } alt="Profile" /> }          
        </div>

        <Link
          to={ `/product/${productId}` }
          className="card-link"
        >
          <img className="imgBox"
            src={ thumbnail }
            alt={ title }
          />
          <div className="info-content">
            <div className="title-content">
              <p>{title}</p>
            </div>
            <div className="price-content">
              <p class="original-price">{ (originalPrice && (originalPrice !== price)) && `R$ ${ originalPrice.toFixed(2).replace('.', ',') }` }</p>
              <p className="price">
                {' '}
                { price ? `R$ ${price.toFixed(2).replace('.', ',')}` : `Entrar em contato` }
              </p>
            </div>
          </div>
          
        </Link>
        
        <div className="btn-container">
          <input
            className="btnAdd"
            type="button"
            value="ADICIONAR AO CARRINHO"
            onClick={ onClick }
          />
        </div>
      </div>
    );
  }
}

CategoryCard.propTypes = {
  productId: PropTypes.string,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  onClick: PropTypes.func,
}.isRequired;

export default CategoryCard;