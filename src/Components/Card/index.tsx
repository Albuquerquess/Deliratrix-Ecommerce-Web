import React from 'react';

// @types
import { CardProps } from '../../@types/Card';

// Components
import Rate from '../Rate'
import Button from '../Button';

// Utils
import getWindowDimensions from '../../Utils/getWindowDimension'

// Styles
import { CardContainer } from './styles';
import breakpoints from '../../Assets/styles/breakpoints';

const Card: React.FC<CardProps> = ({title, description, image, value, rate, type, category, id, prices}) => {

  const widthScreen = getWindowDimensions().width 
  const size = widthScreen < Number(breakpoints.tablet.split('p')[0]) ? 20 : 30 

  return <CardContainer thumb={image}>
      <main>
        <section>
          <div className="thumb"></div>
        </section>
        <section>
          <h2>{title}</h2>
          <div className="rate">
            <Rate rate={rate} size={size}/>
          </div>
          <p>{description}</p>
          <footer>
            <span>{value}</span>
            <Button to={`/visualizar/${type}/${category}/${id}`} label="Comprar!"/>
          </footer>
        </section>
      </main>
  </CardContainer>;
}

export default Card;