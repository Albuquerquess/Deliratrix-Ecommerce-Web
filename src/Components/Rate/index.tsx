import React from 'react';

import Rating from 'react-simple-star-rating'


// @types
import { RateProps } from '../../types/Rate';

const Rate: React.FC<RateProps> = ({rate, size}) => {

    const rateConfig = {
        fillColor:'#FF4848',
        emptyColor:'#404040',
        onClick: () => {},
        ratingValue: rate || 0,
        transition: true,
        size: size,
      };

  return <Rating {...rateConfig}/>
}

export default Rate;