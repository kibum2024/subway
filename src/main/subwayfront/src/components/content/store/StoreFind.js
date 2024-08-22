import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MapComponent from './MapComponent';
import SubMenu from 'src/components/content/common/SubMenu';
import * as common from 'src/image/common/common';
import Pagination from 'src/components/content/common/Pagination';
import 'src/components/content/store/StoreFind.css';

const StoreFind = ({pathProp}) => {
  const [stores, setStores] = useState([]);
  const [menuUrl, setMenuUrl] = useState([]);
  const [menuPath, setMenuPath] = useState([]);
  const [subMenuPath, setSubMenuPath] = useState([]);
  const [keyword, setKeyword] = useState([]);
  const [selectedLatitude, setSelectedLatitude] = useState("37.2994408");
  const [selectedLongitude, setSelectedLongitude] = useState("127.0435693");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // 페이지당 항목 수

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    let path = pathProp.split("/");
    setMenuPath(path[1]);
    setSubMenuPath(path[2]);
    setMenuUrl(pathProp);
  }, [pathProp]);


  const handleSearchClick = () => {
    const fetchStores = async () => {
      try {
        console.log("keyword : ", keyword);
        const response = await axios.get(`${apiUrl}/store/search`, {
          params: {
            keyword: keyword,
          },
        });
        setStores(response.data);
      } catch (error) {
        console.error('Error fetching stores:', error);
      }
    };

    fetchStores();
  }


  // 총 페이지 수 계산
  const totalPages = Math.ceil(stores.length / itemsPerPage);
  // 현재 페이지의 항목 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = stores.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleKeywordChange = (event) => {
    const inputText = event.target.value;
    setKeyword(inputText);
  }

  const handleStoreClick = (latitude, longitude) => {
    setSelectedLatitude(latitude);
    setSelectedLongitude(longitude);
  }

  // console.log("stores : ", stores);

  return (
    <div className='store-wrap'>
      <div className='store-main'>
        <div className='sub-menu-position'>
          <SubMenu subMenuProp={ menuPath } subPathProp={ subMenuPath } menuUrlProp={ menuUrl } />
        </div>
      </div>
      <div className='store-map'>
        {selectedLatitude && selectedLongitude && (
          <MapComponent latitudeProp={selectedLatitude} longitudeProp={selectedLongitude} />
        )}
      </div>
      <div className='store-find'>
        <h2>매장찾기</h2>
        <div className='store-search-title'>
          <input id="keyword" maxlength="30" placeholder="지역 또는 매장명 입력" type="text" onChange={handleKeywordChange}></input>
          <img className='store-search-btn' src={common.search01} alt="" onClick={() => handleSearchClick()} />
          <p>* 운영시간은 매장 사정에 따라 변경될 수 있습니다.</p>
        </div>
        <div className='store-info'>
          <ul>
            {currentItems.map((store, index) => (
              <li key={index} onClick={() => handleStoreClick(store.latitude, store.longitude)}>
                <div className='store-name'><strong>{store.storeName}</strong></div>
                <div className='store-address'>{store.address}</div>
                <div className='store-contact'>{store.contact}</div>
                <div className='store-open-time'>{store.openTime}-{store.closeTime}</div>
                <div className='store-service'>{store.services}</div>
              </li>
            ))}
          </ul>
          <div className='store-page'>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreFind;
