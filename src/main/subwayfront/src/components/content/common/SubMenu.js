import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuContext } from 'src/MenuContext';
import * as mainImages from 'src/image/home/mainImage';
import 'src/components/content/common/SubMenu.css';

const SubMenu = ({ subMenuProp, subPathProp, menuUrlProp }) => {
  const navigate = useNavigate();
  const { menuItems } = useContext(MenuContext);
  const [isSticky, setIsSticky] = useState(false);
  const subMenuRef = useRef(null);
  const placeholderRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (subMenuRef.current && placeholderRef.current) {
        const scrollY = window.scrollY;
        // console.log("scrollY : ", scrollY);

        // 현재 스크롤 위치가 서브메뉴의 초기 위치에 도달하거나 그 이상일 때 상단 고정
        if (scrollY >= 165) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmenuClick = (menuUrl) => {
    navigate(menuUrl);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 부드러운 스크롤 효과
    });
  };

  return (
    <div className='sub-menu-wrap'>
      <div
        ref={placeholderRef}
        style={{ height: isSticky ? '0px' : 'auto' }}
      ></div>
      <div
        ref={subMenuRef}
        className={`sub-menu-title sub-menu ${isSticky ? 'sticky' : ''}`}
      >
        <div className='sub-menu-logo' style={{display: isSticky ? 'block' : 'none'}}>
          <img src={mainImages.logo} alt="" />
        </div>
        <ul>
          {menuItems
            .filter(
              (menuItem) =>
                menuItem.menuLargeCategory === subMenuProp &&
                menuItem.menuSmallCategory === 'sub'
            )
            .map((menuItem, index) => (
              <li
                key={index}
                className={`${menuItem.menuUrl === menuUrlProp ? 'active' : ''} ${isSticky ? 'sticky-color' : ''}`}
                onClick={() => handleSubmenuClick(menuItem.menuUrl)}
              >
                {menuItem.menuName}
              </li>
            ))}
        </ul>
        <div className='sub-menu-top' style={{display: isSticky ? 'block' : 'none'}} onClick={scrollToTop}>
          <img src={mainImages.arrTop} alt="" />
          <div>TOP</div>
        </div>
      </div>
    </div>
  );
};

export default SubMenu;
