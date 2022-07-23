import React from 'react';

export default function Card(props) {
  return (
    <div className='card' onClick={() => props.handleClick(props)}>
      <img src={props.image} alt='camp' />
      <h3 className='card-title'>{props.title}</h3>
      <p className='card-desc'>{props.desc}</p>
      <button className='btn'>View Campground</button>
    </div>
  );
}
