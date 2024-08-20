import React from 'react';
import SubMenu from 'src/components/content/common/SubMenu';
import * as menuImages from 'src/image/menu/menuImage';
import 'src/components/content/menu/MenuRap.css';

const MenuRap = () => {
  return (
    <div className='rap-wrap'>
      <div className='sub-menu-position'>
        <SubMenu subMenuProp={"menu"} subPathProp = {"/menu/rap"} />
      </div>
      <div>
        <img className='rap-img01' src={menuImages.wrapMain01} alt="" />
        <img className='rap-img02' src={menuImages.wrapMain02} alt="" />
      </div>
      <div className='rap-main-message'>
        <h2>Wrap</h2>
        <p>Subway를 더 맛있고 간편하게 즐기는 방법
          <br />최상의 레시피로 만들어진 써브웨이 랩 시리즈, 이젠 고민하지 마세요!
          <br />* 그릴드 랩은 일부 매장에서만 제공 가능합니다.
          <br />* 그릴드 랩을 제공하는 매장에서는 시그니처랩을 제공하지 않습니다.매장찾기의 매장정보를 확인해주세요.</p>
        </div>
    </div>
  );
}

export default MenuRap;