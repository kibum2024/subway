import React, { useState, useEffect } from 'react';
import * as menuImages from 'src/image/menu/menuImage';
import SubMenu from 'src/components/content/common/SubMenu';
import MenuContent from 'src/components/content/menu/MenuContent';
import 'src/components/content/menu/MenuMain.css';

const MenuMain = ({pathProp}) => {
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
    <div className='menu-wrap'>
      <div className='menu-main'>
        <div className='sub-menu-position'>
          <SubMenu subMenuProp={ menuPath } subPathProp = { subMenuPath } />
        </div>
        <div className='menu-main-wrap' style={{display: subMenuPath === "sandwich"? "block" : "none"}}>
          <div className='menu-main-img'>
            <img src={menuImages.sandwichMain} alt="" />
          </div>
          <div className='menu-main-message'>
            <h2>Sandwich</h2>
            <p>전세계 넘버원 브랜드 Subway!<br />50년 전통의 세계 최고의 샌드위치를 맛보세요!</p>
          </div>
        </div>
        <div className='menu-main-wrap' style={{display: subMenuPath === "rap"? "block" : "none", backgroundColor: '#85c441'}}>
          <div className='menu-main-img'>
            <img className='rap-img01' src={menuImages.wrapMain01} alt="" />
            <img className='rap-img02' src={menuImages.wrapMain02} alt="" />
          </div>
          <div className='menu-main-message'>
            <h2>Wrap</h2>
            <p>Subway를 더 맛있고 간편하게 즐기는 방법
              <br />최상의 레시피로 만들어진 써브웨이 랩 시리즈, 이젠 고민하지 마세요!
              <br />* 그릴드 랩은 일부 매장에서만 제공 가능합니다.
              <br />* 그릴드 랩을 제공하는 매장에서는 시그니처랩을 제공하지 않습니다.매장찾기의 매장정보를 확인해주세요.
            </p>
          </div>
        </div>
        <div className='menu-main-wrap' style={{display: subMenuPath === "salad"? "block" : "none", backgroundColor: '#0d9133'}}>
          <div className='menu-main-img'>
            <img className='salad-img01' src={menuImages.saladMain01} alt="" />
            <img className='salad-img02' src={menuImages.saladMain02} alt="" />
          </div>
          <div className='menu-main-message'>
            <h2>Salad</h2>
            <p>양은 더 많이! 칼로리는 더 적게!
              <br />신선한 야채와 다양한 소스로 가볍게 샐러드를 즐겨보세요!
            </p>
          </div>
        </div>
        <div className='menu-main-wrap' style={{display: subMenuPath === "morning"? "block" : "none", backgroundColor: '#f2b701'}}>
          <div className='menu-main-img'>
            <img className='morning-img01' src={menuImages.morningMain01} alt="" />
            <img className='morning-img02' src={menuImages.morningMain02} alt="" />
          </div>
          <div className='menu-main-message'>
            <h2>Morning Menu</h2>
            <p>아침 메뉴도 Subway와 함께, 취향대로 즐기자!
              <br />* 그릴드 랩은 일부 매장에서만 제공 가능합니다.
            </p>
          </div>
        </div>
        <div className='menu-main-wrap' style={{display: subMenuPath === "smilesup"? "block" : "none", backgroundColor: '#07a5e6'}}>
          <div className='menu-main-img'>
            <img className='smilesup-img01' src={menuImages.smilesupMain01} alt="" />
            <img className='smilesup-img02' src={menuImages.smilesupMain02} alt="" />
          </div>
          <div className='menu-main-message'>
            <h2>Smile Sub</h2>
            <p>웃음이 번지는 착한 가격, 착한 맛!
              <br />스마일 썹과 함께 하루 종일 스마일 하세요~
            </p>
          </div>
        </div>
        <div className='menu-main-wrap' style={{display: subMenuPath === "catering"? "block" : "none", backgroundColor: '#fa8306'}}>
          <div className='menu-main-img'>
            <img className='catering-img01' src={menuImages.cateringMain01} alt="" />
            <img className='catering-img02' src={menuImages.cateringMain02} alt="" />
          </div>
          <div className='menu-main-message'>
            <h2>Catering Menu</h2>
            <p>특별한 순간을 더욱 특별하게 해줄 단체 매뉴를 소개합니다.
              <br />※ 최소 1일전 매장에 주문해주세요
            </p>
          </div>
        </div>
      </div>
      <div className='menu-content-component'>
        <MenuContent menuUrlProp={ menuUrl } />
      </div>
    </div>
  );
}

export default MenuMain;