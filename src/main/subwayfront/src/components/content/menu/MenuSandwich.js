import React from 'react';
import SubMenu from 'src/components/content/common/SubMenu';
import * as menuImages from 'src/image/menu/menuImage';
import 'src/components/content/menu/MenuSandwich.css';

const MenuSandwich = () => {
  return (
    <div className='sandwich-wrap'>
      <div className='sub-menu-position'>
        <SubMenu subMenuProp={"menu"} subPathProp = {"/menu/sandwich"} />
      </div>
      <div>
        <img src={menuImages.sandwichMmain} alt="" />
      </div>
    </div>
  );
}

export default MenuSandwich;