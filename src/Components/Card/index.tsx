import React from 'react';
import { Link } from 'react-router-dom';
// @types
import { CardProps } from '../../@types/Card';
// breakpoints
import breakpoints from '../../Assets/styles/breakpoints';
// Utils
import getWindowDimensions from '../../Utils/getWindowDimension';
import Button from '../Button';
// Components
import Rate from '../Rate';
// Styles
import { CardContainer, CardRemove } from './styles';

const Card: React.FC<CardProps> = ({title, description, image, value, rate, type, category, id, removeDisplayed, handleRemove, onCartPage}) => {

  const widthScreen = getWindowDimensions().width 
  const size = widthScreen < Number(breakpoints.tablet.split('p')[0]) ? 20 : 30 
  
  return <>
    <CardContainer thumb={image} onCartPage={onCartPage}>
      <Link to={`/visualizar/${id}`}>
        <main id="card-main">
          <section className="card-thumb-container">
            <div className="thumb"></div>
          </section>
          <section className="card-desc-container">
            <h2>{title}</h2>
            <div className="rate">
              <Rate rate={rate} size={size}/>
            </div>
            <p>{description}</p>
            <footer>
              <span>{value}</span>
              <Button to={`/visualizar/${id}`} label="Comprar!"/>
            </footer>
          </section>
        </main>
      </Link>
  </CardContainer>
  <CardRemove removeDisplayed={removeDisplayed}>
    <div onClick={() => handleRemove && handleRemove()}>
      Remover
    </div>
  </CardRemove>
  </>;
}

export default Card;