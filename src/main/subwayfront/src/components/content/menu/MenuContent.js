import React, { useContext, useState, useEffect } from 'react';
import { MenuContext } from 'src/MenuContext';
import axios from 'axios';

import 'src/components/content/menu/MenuContent.css';

const MenuContent = ({ menuUrlProp }) => {
  const { menuItems } = useContext(MenuContext);
  const [kinds, setKinds] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsData, setProductsData] = useState([]);
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
    axios.get(`${apiUrl}/menu/products`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  useEffect(() => {
    setMenu(menuItems.find(menuItem => menuItem.menuUrl === menuUrlProp));
  }, [menuUrlProp]);

  useEffect(() => {
    if (menu) {
      if (menuUrlProp === "/menu/smilesup") {
        handleArticleClick("11");
      } else {
        handleArticleClick("00");
      }
    }
  }, [menu]); 

  const handleArticleClick = (articleCode) => {
    let filterData;
    if (articleCode === "00") {
      filterData = products.filter(product => product.productKind === menu.menuKind);
    } else {
      filterData = products.filter(product => product.productKind === menu.menuKind && product.productArticle === articleCode);
    }
    setProductsData(filterData);
    // console.log("filterData : ", filterData);
  }

  return (
    <div className='menu-content-wrap'>
      <div className='menu-content-filter'>
        <ul>
          {console.log(menu)}
          {kinds.filter(kind => kind.kindCode === menu.menuKind)
                .map((kind, index) => (
            <li key={index} onClick={() => handleArticleClick(kind.articleCode)}>{kind.articleName}</li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {productsData.map((product, index) => (
            <li key={index}>
              <h3>{product.productNname}</h3>
              <p>{product.productEngName}</p>
              <p>{product.productKcal}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MenuContent;