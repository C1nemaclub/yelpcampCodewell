import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { ImBubble2 } from 'react-icons/im';

export default function SingleCamp() {
  const { state } = useLocation();

  return (
    <>
      <section className='single-camp-section'>
        <div className='container'>
          <Header />
          <div className='flex-container'>
            <div className='left-col'>
              <div className='map'></div>
            </div>
            <div className='right-col'>
              <div className='camp'>
                <img src={state.imageHq} alt='camp' />
                <div className='top'>
                  <h3 className='camp-title'>{state.title}</h3>
                  <h4 className='camp-price'>$104.99/night</h4>
                </div>
                <p className='camp-long-desc'>{state.longDesc}</p>
                <p className='camp-author'>
                  <span>Submitted by </span>
                  {state.submited}
                </p>
              </div>
              <div className='opinions'>
                <div className='top'>
                  <h4>Adam Jones</h4>
                  <p>13h ago</p>
                </div>
                <p className='review'>
                  Honestly one of the best experiences ever, took us a while to
                  figure out how to get there but it was amazing
                </p>
                <div className='top'>
                  <h4>Isaac Dylan</h4>
                  <p>13h ago</p>
                </div>
                <p className='review'>
                  Honestly one of the best experiences ever, took us a while to
                  figure out how to get there but it was amazing
                </p>
                <div className='top'>
                  <h4>Hudson Luca</h4>
                  <p>13h ago</p>
                </div>
                <p className='review'>
                  Honestly one of the best experiences ever, took us a while to
                  figure out how to get there but it was amazing
                </p>
                <button className='btn'>
                  <ImBubble2 />
                  Leave a Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
