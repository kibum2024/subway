import React from 'react';
import { Routes, Route, Link, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { AuthProvider } from 'src/AuthContext';
import { MenuProvider } from 'src/MenuContext';
import Header from 'src/components/main/Header';
import Login from 'src/components/main/Login';
import MembershipStep01 from 'src/components/main/MembershipStep01';
import MembershipStep02 from 'src/components/main/MembershipStep02';
import MembershipStep03 from 'src/components/main/MembershipStep03';
import MembershipStep04 from 'src/components/main/MembershipStep04';
import Home from 'src/components/content/home/Home';
import MenuSandwich from 'src/components/content/menu/MenuSandwich';
import 'src/App.css';

function Main() {

  return (
    <AuthProvider>
      <MenuProvider>
        <div className='app-wrap'>
          <div className='header-main-wrap'>
            <Header></Header>
          </div>
          <div className='container-main-wrap'>
              <Routes>
                <Route path="/" element={<Navigate to="/content/home" />} ></Route>
                <Route path="/users/login" element={<Login />} ></Route> 
                <Route path="/users/membershipstep01" element={<MembershipStep01 />} ></Route> 
                <Route path="/users/membershipstep02" element={<MembershipStep02 />} ></Route> 
                <Route path="/users/membershipstep03" element={<MembershipStep03 />} ></Route> 
                <Route path="/users/membershipstep04" element={<MembershipStep04 />} ></Route> 
                <Route path="/content/home" element={<Home />} ></Route> 
                <Route path="/menu/sandwich" element={<MenuSandwich />} ></Route> 
                {/* <Route path="/home" element={<MainContent />} ></Route> 
                <Route path="/brandstory" element={<BrandStory stateProp ={true}/>} >
                  <Route path="story" element={<Story />} />
                  <Route path="contact" element={<Contact />} />
                </Route>
                <Route path="/item" element={<ItemIntroduce />} ></Route>
                <Route path="/shopping" element={<Shopping onImageClick={handleImageClick}/>}>
                  <Route path="ShoppingNewItem" element={<ShoppingNewItem onImageClick={handleImageClick}/>}></Route>
                </Route>
                <Route path="/qna" element={<BrandStory stateProp ={false}/>} >
                  <Route path="story" element={<Story />} />
                  <Route path="contact" element={<Contact />} />
                </Route>
                <Route path="/item-order" element={<ItemOrder  itemNoProp={selectedItemNo} />} /> */}
              </Routes>
          </div>
          <div className='footer-main-wrap'>

          </div>
        </div>
      </MenuProvider>
    </AuthProvider>
  );
}

export default Main;
