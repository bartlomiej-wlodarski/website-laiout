import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img9 from './images/img-9.jfif';
import img2 from './images/img-2.jfif';
import img3 from './images/img-3.jfif';
import img4 from './images/img-4.jfif';
import img8 from './images/img-8.jfif';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our latest news!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img9}
              text='Presentation at the Pi Labs Growth Accelerator Demo Day'
              label='Growthstage'
              path='/services'
            />
            <CardItem
              src={img2}
              text='Laiout founders team.'
              label='Team'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='Our CEO Wouter Merkestein was on stage to discuss the benefits of collaboration between property managers, developers, and young entrepreneurs.'
              label='Growthstage'
              path='/services'
            />
            <CardItem
              src={img4}
              text='PropTech is rising in Europe and is becoming a fascinating market.'
              label='Technology'
              path='/products'
            />
            <CardItem
              src={img8}
              text='Another great feature in the Norwegian financial times Finansavisen!'
              label='Fundraising'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;