import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'src/AuthContext';
import { MenuContext } from 'src/MenuContext';
import axios from 'axios';
import 'src/components/header/Header.css';

const Header = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const { contextMenu } = useContext(MenuContext);
  const [menus, setMenus] = useState([]);
  const [mainMenus, setMainMenus] = useState([]);
  const [subMenus, setSubMenus] = useState([]);
  const [visibleIndex, setVisibleIndex] = useState(-1);
  const { loginStatus } = useContext(AuthContext);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${apiUrl}/menu/menus`)
      .then(response => {
        setMenus(response.data);
      })
      .catch(error => {
        console.error('Error fetching menus:', error);
      });
  }, []);

  useEffect(() => {
    if (menus.length > 0) {
      setMainMenus(menus.filter(menu => menu.menuSmallCategory === "main"));
      setSubMenus(menus.filter(menu => menu.menuSmallCategory === "sub"));
      contextMenu(menus);
    }
  }, [menus]);

  const mouseEnter = () => {
    setVisibleIndex(1);
  };

  const mouseLeave = () => {
    setVisibleIndex(-1);
  };

  const handleLogoutClick = () => {
    login(false);
  };

  const handleSubMenuClick = (menuUrl) => {
    setVisibleIndex(-1);
    if (menuUrl === "/store/membership" && !loginStatus) {
      alert("로그인을 해주세요.");
      navigate("/users/login",{state: {url: '/store/membership'}});
    } else {
      navigate(menuUrl);
    }
  };

  return (
    <div className='header-wrap'
      style={{
        height: visibleIndex === 1 ? '370px' : '165px'
      }}>
      <div className='header-title-wrap'>
        <div className='header-title'>
          <h1 className="header-logo"><a href="/">SUBWAY</a></h1>
          <div className="header-util-menu">
            <ul className='header-util-menu-ul'>
              <li className="header-before-sign" style={{ display: loginStatus ? 'none' : 'block' }}><a href="/users/login">로그인</a></li>
              <li className="header-before-sign" style={{ display: loginStatus ? 'block' : 'none' }} onClick={handleLogoutClick}><a href="/">로그아웃</a></li>
              <li className="header-before-sign header-before" style={{ display: loginStatus ? 'block' : 'none' }}><a href="/users/membershipstep01">MY-SUB</a></li>
              <li className="header-before-sign header-before" style={{ display: loginStatus ? 'none' : 'block' }}><a href="/users/membershipstep01">회원가입</a></li>
              <li className="icon-menu showpping-cart" style={{ display: loginStatus ? 'block' : 'none' }}><a href="/users/cart"></a></li>
              <li className="icon-menu global-subway">
                <a href="http://www.subway.com/en-us/exploreourworld" target="_blank" title="Global Subway" rel="noreferrer"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header-main-menu" onMouseEnter={() => mouseEnter()} onMouseLeave={mouseLeave}>
        <ul>
          {mainMenus.map((mainMenu, index) => (
            <li key={index}>{mainMenu.menuName}
              <div className='header-sub-menu'
                style={{
                  opacity: visibleIndex === 1 ? 1 : 0,
                  top: visibleIndex === 1 ? '0px' : '-20px',
                  transition: 'opacity 0.3s ease, top 0.3s ease'
                }}>
                <ul>
                  {subMenus.filter(subMenus => subMenus.menuLargeCategory === mainMenu.menuLargeCategory)
                    .map((subMenus, index) => (
                      <li key={index} onClick={() => handleSubMenuClick(subMenus.menuUrl)}>{subMenus.menuName}</li>
                    ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;