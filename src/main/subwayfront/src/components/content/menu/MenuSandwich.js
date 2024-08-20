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
      <div className='sandwich-main-img'>
        <img src={menuImages.sandwichMain} alt="" />
      </div>
      <div className='sandwich-main-message'>
        <h2>Sandwich</h2>
        <p>전세계 넘버원 브랜드 Subway!<br />50년 전통의 세계 최고의 샌드위치를 맛보세요!</p>
      </div>
    </div>
  );
}

export default MenuSandwich;