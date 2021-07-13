import React from 'react';

// @types
import { CardProps } from '../../@types/Card';

// Components
import Rate from '../Rate'
import Button from '../Button';

// Utils
import getWindowDimensions from '../../Utils/getWindowDimension'

// Styles
import { CardContainer, CardRemove } from './styles';

// breakpoints
import breakpoints from '../../Assets/styles/breakpoints';
import { Link } from 'react-router-dom';

const Card: React.FC<CardProps> = ({title, description, image, value, rate, type, category, id, prices, removeDisplayed, handleRemove, onCartPage}) => {

  const widthScreen = getWindowDimensions().width 
  const size = widthScreen < Number(breakpoints.tablet.split('p')[0]) ? 20 : 30 

  return <>
    <CardContainer thumb={image} onCartPage={onCartPage}>
      <Link to={`/visualizar/${id}`}>
        <main>
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