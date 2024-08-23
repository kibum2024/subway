import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import SubMenu from 'src/components/content/common/SubMenu';
import * as newsImage from 'src/image/news/newsImage';
import 'src/components/content/news/Advertisement.css';

const Advertisement = ({pathProp}) => {
  const [menuUrl, setMenuUrl] = useState([]);
  const [menuPath, setMenuPath] = useState([]);
  const [subMenuPath, setSubMenuPath] = useState([]);
  const [advertisements, setAdvertisements] = useState([]);
  const [displayOn, setDisplayOn] = useState(false);
  const [displayIndex, setDisplayIndex] = useState();
  const videoRef = useRef();
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    let path = pathProp.split("/");
    setMenuPath(path[1]);
    setSubMenuPath(path[2]);
    setMenuUrl(pathProp);
  }, [pathProp]);

  useEffect(() => {
    const fetchAdvertisements = async () => {
      try {
        const response = await axios.get(`${apiUrl}/news/advertisements`);
        setAdvertisements(response.data);
      } catch (error) {
        console.error('Error fetching menus:', error);
      }
    };

    fetchAdvertisements();
  }, []);

  const handleMouseEnter = (index) => {
    setDisplayOn(true);
    setDisplayIndex(index);
  }

  const handleMouseLeave = () => {
    setDisplayOn(false);
  }

  const handlePlayClick = (viewPath) => {
    videoRef.current.src = viewPath;
  }

  return (
    <div className='news-advertisement-wrap'>
      <div className='news-advertisement-main'>
        <div className='sub-menu-position'>
          <SubMenu subMenuProp={ menuPath } subPathProp={ subMenuPath } menuUrlProp={ menuUrl } />
        </div>
        <div>
          <h2 className='news-advertisement-title'>광고영상</h2>
          <div className='news-advertisement-view'>
            { advertisements.length > 0?
            (<iframe allow="encrypted-media" allowfullscreen="" frameborder="0" gesture="media" height="658" src={advertisements[0].viewPath} width="1170" ref={videoRef}></iframe>)
            : <p> none video </p>
            }
          </div>
        </div>
        <div className='news-advertisement-video'>
          <ul>
            {advertisements.map((advertisement, index) => (
              <li key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                <div className='news-advertisement-img'>
                  <img className='advertisement-play-img' src={newsImage[`${advertisement.viewImg}`]} alt="" />
                  <div className='advertisement-summary-wrap' style={{display: (displayOn) && index === displayIndex? "block" : "none"}} onClick={() => handlePlayClick(advertisement.viewPath)}>
                    <img className='advertisement-play-btn' src={newsImage.playBtn} alt="" />
                  </div>
                </div>
                <p>{advertisement.viewName}</p>  
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Advertisement;