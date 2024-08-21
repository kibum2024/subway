import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MapComponent from './MapComponent';
import SubMenu from 'src/components/content/common/SubMenu';
import 'src/components/content/store/StoreFind.css';

const StoreFind = ({pathProp}) => {
  const [stores, setStores] = useState([]);
  const [menuUrl, setMenuUrl] = useState([]);
  const [menuPath, setMenuPath] = useState([]);
  const [subMenuPath, setSubMenuPath] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    let path = pathProp.split("/");
    setMenuPath(path[1]);
    setSubMenuPath(path[2]);
    setMenuUrl(pathProp);
  }, [pathProp]);


  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await axios.get(`${apiUrl}/store/stores`);
        setStores(response.data);
      } catch (error) {
        console.error('Error fetching menus:', error);
      }
    };

    fetchStores();
  }, []);

  // console.log("stores : ", stores);

  return (
    <div className='store-wrap'>
      <div className='store-main'>
        <div className='sub-menu-position'>
          <SubMenu subMenuProp={ menuPath } subPathProp={ subMenuPath } menuUrlProp={ menuUrl } />
        </div>
      </div>
      <div className='store-map'>
        <MapComponent />
      </div>
      <div className='store-find'>
        <h2>매장찾기</h2>
        <input id="keyword" maxlength="30" placeholder="지역 또는 매장명 입력" type="text"></input>
        <p>* 운영시간은 매장 사정에 따라 변경될 수 있습니다.</p>
      </div>
    </div>
  );
}

export default StoreFind;
