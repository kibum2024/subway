import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuContext } from 'src/MenuContext';
import 'src/components/content/common/SubMenu.css';

const SubMenu = ({ subMenuProp, subPathProp, menuUrlProp }) => {
  const navigate = useNavigate();
  const { menuItems } = useContext(MenuContext);

  const handleSubmenuClick = (menuUrl) => {
    navigate(menuUrl);
  }

  return (
    <div className='sub-menu-wrap'>
			<div className='sub-menu-title'>
        <ul>
          {menuItems.filter(menuItem => menuItem.menuLargeCategory === subMenuProp && menuItem.menuSmallCategory === 'sub')
                    .map((menuItem, index) => (
                      <li key={index} className={`${menuItem.menuUrl === menuUrlProp? 'active' : ''}`} onClick={() =>handleSubmenuClick(menuItem.menuUrl)}>{menuItem.menuName}</li>
                    ))
          }
        </ul>
      </div>
    </div>
  );
}

export default SubMenu;