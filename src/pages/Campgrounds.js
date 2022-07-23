import React, { useState } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import Camps from '../Camps';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import SingleCamp from './SingleCamp';

export default function Campgrounds() {
  const [camps, setCamps] = useState(Camps);
  const navigate = useNavigate();

  function handleClick(post) {
    const campData = {
      title: post.title,
      desc: post.desc,
      longDesc: post.longDesc,
      submited: post.submited,
      id: post.id,
      image: post.image,
      imageHq: post.imageHq,
    };

    navigate('/camp', { state: campData });
  }

  const campElements = camps.map((item) => {
    return (
      <Card
        id={item.id}
        image={item.image}
        imageHq={item.imageHq}
        desc={item.desc}
        longDesc={item.longDesc}
        title={item.title}
        submited={item.submited}
        handleClick={handleClick}
      />
    );
  });

  return (
    <>
      <section className='campgrounds-section'>
        <div className='container'>
          <Header />
          <div className='hero'>
            <h2 className='sub-title'>Welcome to YelpCamp!</h2>
            <p className='paragraph'>
              View our hand-picked campgrounds from all over the world, or add
              your own.
            </p>
            <form>
              <div className='input-group'>
                <FaSearch />
                <input type='text' placeholder='Search for camps' />
              </div>
              <button className='btn'>Search</button>
            </form>
            <a href='#'>Or add your own campground</a>
          </div>

          <div className='grid-container'>{campElements}</div>
        </div>
      </section>
    </>
  );
}
