import React, { useState, useEffect } from 'react';
import SubMenu from 'src/components/content/common/SubMenu';
import EventSlide from 'src/components/content/news/EventSlide';
import EventList from 'src/components/content/news/EventList';
import 'src/components/content/news/EventHome.css';

const EventHome = ({pathProp}) => {
  const [menuUrl, setMenuUrl] = useState([]);
  const [menuPath, setMenuPath] = useState([]);
  const [subMenuPath, setSubMenuPath] = useState([]);

  useEffect(() => {
    let path = pathProp.split("/");
    setMenuPath(path[1]);
    setSubMenuPath(path[2]);
    setMenuUrl(pathProp);
  }, [pathProp]);

  return (
    <div className='event-home-wrap'>
      <div>
        <div className='sub-menu-position'>
          <SubMenu subMenuProp={ menuPath } subPathProp={ subMenuPath } menuUrlProp={ menuUrl } />
        </div>
      </div>
      <div>
        <h1>이벤트ㆍ프로모션</h1>
      </div>
      <div className='event-slide'>
        <EventSlide></EventSlide>
      </div>
      <div className='event-list'>
        <EventList></EventList>
      </div>
    </div>
  );
}

export default EventHome;