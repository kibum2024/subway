import React, { useContext, useState, useEffect } from 'react';
import { MenuContext } from 'src/MenuContext';
import axios from 'axios';

import 'src/components/content/menu/MenuContent.css';

const MenuContent = ({ menuUrlProp }) => {
  const { menuItems } = useContext(MenuContext);
  const [kinds, setKinds] = useState([]);
  const [menu, setMenu] = useState();
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${apiUrl}/menu/kinds`)
      .then(response => {
        setKinds(response.data);
      })
      .catch(error => {
        console.error('Error fetching menus:', error);
      });
  }, []);

  useEffect(() => {
    setMenu(menuItems.find(menuItem => menuItem.menuUrl === menuUrlProp));
  }, [menuUrlProp]);

  return (
    <div className='menu-content-wrap'>
      <div className='menu-content-filter'>
        <ul>
          {console.log(menu)}
          {kinds.filter(kind => kind.kindCode === menu.menuKind)
                .map((kind, index) => (
            <li key={index}>{kind.articleName}</li>
          ))}
        </ul>
      </div>
      <h1>Content</h1>
    </div>
  );
}

export default MenuContent;