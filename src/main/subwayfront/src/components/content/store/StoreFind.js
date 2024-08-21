import React from 'react';
import MapComponent from './MapComponent';
import 'src/components/content/store/StoreFind.css';

const StoreFind = () => {

  return (
    <div className='store-wrap'>
      <div className='store-map'>
        <h1>매장 찾기</h1>
        <MapComponent />
      </div>
    </div>
  );
}

export default StoreFind;
