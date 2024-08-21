import React, { useContext, useState, useEffect } from 'react';
import { MenuContext } from 'src/MenuContext';
import axios from 'axios';
import * as menuImages from 'src/image/menu/menuImage';
import 'src/components/content/menu/MenuContent.css';

const MenuContent = ({ menuUrlProp }) => {
  const { menuItems } = useContext(MenuContext);
  const [kinds, setKinds] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [menu, setMenu] = useState();
  const [article, setArticle] = useState();
  const [displayOn, setDisplayOn] = useState(false);
  const [displayIndex, setDisplayIndex] = useState();
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchKinds = async () => {
      try {
        const response = await axios.get(`${apiUrl}/menu/kinds`);
        setKinds(response.data);
      } catch (error) {
        console.error('Error fetching menus:', error);
      }
    };

    fetchKinds();
  }, []);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${apiUrl}/menu/products`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching menus:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    setMenu(menuItems.find(menuItem => menuItem.menuUrl === menuUrlProp));
    if (products.length > 0) {
      handleArticleClick(menuUrlProp === "/menu/smilesup" ? "11" : "00");
    }  
  }, [menuUrlProp, products]);

  useEffect(() => {
    if (menu) {
      handleArticleClick(menuUrlProp === "/menu/smilesup" ? "11" : "00");
    }
  }, [menu]); 

  const handleArticleClick = (articleCode) => {
    if (products.length > 0) {
      if (articleCode === "00") {
        const filteredProducts = products.filter(product => product.productKind === menu.menuKind);
        setProductsData(filteredProducts);
      } else {
        const filteredProducts = products.filter(product => product.productKind === menu.menuKind && product.productArticle === articleCode);
        setProductsData(filteredProducts);
      }
    }
    setArticle(articleCode);
  }

  const handleMouseEnter = (index) => {
    setDisplayOn(true);
    setDisplayIndex(index);
  }

  const handleMouseLeave = () => {
    setDisplayOn(false);
  }

  return (
    <div className='menu-content-wrap'>
      <div className='menu-content-filter'>
        <ul>
          {/* {console.log("kinds : ", kinds)}
          {console.log("article : ", article)} */}
          {kinds.filter(kind => kind.kindCode === menu.menuKind)
                .map((kind, index) => (
            <li key={index} className={`${kind.articleCode === article? 'active' : ''}`} onClick={() => handleArticleClick(kind.articleCode)}>{kind.articleName}</li>
          ))}
        </ul>
      </div>
      <div className='menu-content-product'>
        <ul>
          {productsData.map((product, index) => (
            <li key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
              <div className='product-label'>
                <img src={menuImages[`${product.productImage}`]} alt="" />
                <p className='product-title1'><strong>{product.productName}</strong></p>
                <p className='product-eng-name1'>{product.productEngName}</p>
                <p className='product-kcal1'>{product.productKcal}</p>
              </div>
              <div className='product-summary' style={{display: (displayOn) && index === displayIndex? "block" : "none"}}>
                <p className='product-title2'><strong>{product.productName}</strong></p>
                <p className='product-eng-name2'>{product.productEngName}</p>
                <p className='product-comment2' dangerouslySetInnerHTML={{ __html: product.productComment }} ></p>
                <div>
                  <img className='product-btn' src={menuImages.btnMore} alt="" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MenuContent;