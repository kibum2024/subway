import React, { useContext } from 'react';
import { MenuContext } from 'src/MenuContext';


const SubMenu = ({ subMenuProp }) => {
  const { menuItems } = useContext(MenuContext);

  console.log(menuItems);

  return (
    <div className='sub-menu-wrap'>
			<div className='sub-menu-title'>
        {/* {mainMenus.map((mainMenu, index) => (
          <div key={index} className='header-sub-title-menu'
            style={{
              display: selectMenuIndex === index ? 'block' : 'none',
            }}
          >
            <ul>
              {submenus.filter(submenu => submenu.menuLargeCategory === mainMenu.menuLargeCategory)
                .map((submenu, index) => (
                  <li key={index} onClick={handleSubmenuClick}>{submenu.menuName}</li>
                ))}
            </ul>
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default SubMenu;