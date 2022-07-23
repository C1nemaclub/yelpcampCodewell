import React from 'react';
import Logo from '../Assets/Logo.svg';
import CheckMark from '../Assets/Checkmark.svg';
import Airbnb from '../Assets/Airbnb.svg';
import Booking from '../Assets/Booking.svg';
import PlumGuide from '../Assets/PlumGuide.svg';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <>
      <section className='welcome-section'>
        <img src={Logo} alt='logo' className='logo' />
        <div className='container'>
          <div className='left-col'>
            <h1 className='title'>Explore the best camps on Earth.</h1>
            <p>
              YelpCamp is a curated list of the best camping spots on Earth.
              Unfiltered and unbiased reviews.
            </p>
            <ul>
              <li>
                <img src={CheckMark} alt='checkmark' />
                Add your own camps suggestions.
              </li>
              <li>
                <img src={CheckMark} alt='checkmark' />
                leave reviews and experiences.
              </li>
              <li>
                <img src={CheckMark} alt='checkmark' />
                See locations for all camps.
              </li>
            </ul>
            <Link to='campgrounds'>
              <button className='btn btn-primary'>View Campgrounds</button>
            </Link>

            <p>Partenered with:</p>
            <div className='partners'>
              <img src={Airbnb} alt='partner' />
              <img src={Booking} alt='partner' />
              <img src={PlumGuide} alt='partner' />
            </div>
          </div>
          <div className='right-col'></div>
        </div>
      </section>
    </>
  );
}
