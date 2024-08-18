import React from 'react';
import { Routes, Route, Link, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Header from './components/main/Header';
import Login from './components/main/Login';
import MembershipStep01 from './components/main/MembershipStep01';
import MembershipStep02 from './components/main/MembershipStep02';
import MembershipStep03 from './components/main/MembershipStep03';
import MembershipStep04 from './components/main/MembershipStep04';
import './App.css';

function Main() {

  return (
    <AuthProvider>
      <div className='app-wrap'>
        <div className='header-main-wrap'>
          <Header></Header>
        </div>
        <div className='container-main-wrap'>
            <Routes>
              {/* <Route path="/reactproject" element={<Navigate to="/home" />} ></Route> */}
              <Route path="/users/login" element={<Login />} ></Route> 
              <Route path="/users/membershipstep01" element={<MembershipStep01 />} ></Route> 
              <Route path="/users/membershipstep02" element={<MembershipStep02 />} ></Route> 
              <Route path="/users/membershipstep03" element={<MembershipStep03 />} ></Route> 
              <Route path="/users/membershipstep04" element={<MembershipStep04 />} ></Route> 
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
    </AuthProvider>
  );
}

export default Main;
