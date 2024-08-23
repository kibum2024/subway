import React from 'react';
import HomeSlide from 'src/components/content/home/HomeSlide';
import HomeContent from 'src/components/content/home/HomeContent';

const Home = () => {
  return (
    <div className='home-wrap'>
      <div>
        <HomeSlide></HomeSlide>
      </div>
      <div>

      </div>
      <div>
        <HomeContent></HomeContent>
      </div>
    </div>
  );
}

export default Home;