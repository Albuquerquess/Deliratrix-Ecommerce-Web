import React from 'react';

// @types
import { CardProps } from '../../@types/Card';

// Components
import Rate from '../Rate'
import Button from '../Button';

// Styles
import { CardContainer } from './styles';

const Card: React.FC<CardProps> = ({title, description, image, value, rate}) => {
  
  return <CardContainer thumb={''}>
      <main>
        <section>
          <div className="thumb"></div>
        </section>
        <section>
          <h2>{title}</h2>
          <div className="rate">
            <Rate rate={rate}/>
          </div>
          <p>{description}</p>
          <footer>
            <span>{value}</span>
            <Button to="#" label="Comprar!"/>
          </footer>
        </section>
      </main>
  </CardContainer>;
}

export default Card;