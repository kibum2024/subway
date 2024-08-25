import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as mainImages from 'src/image/home/mainImage';
import 'src/components/content/home/HomeContent.css';

const HomeContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const images = [mainImages.drama01, mainImages.drama02, mainImages.drama03, mainImages.drama04];

  const handlePageClick = (index) => {
    setCurrentIndex(index);
  }

  const handleAdvertisementClick = () => {
		navigate("/news/advertisement");
	}

  return (
    <div className='home-content-wrap'>
      <div className='home-content-1'>
        <div className='utilization'>
          <img src={mainImages.utilization} alt="" />
          <p>써브웨이를<br />제대로 즐기는 방법!</p>
          <a class="btn" href="/use/subwayuse"><span>이용방법</span></a>
        </div>
        <div className='history'>
          <img src={mainImages.subwayHhistory} alt="" />
          <p>50년 역사를 가진<br />No.1 프랜차이즈의 성장기</p>
          <a class="btn" href="/story/history"><span>써브웨이 역사</span></a>
        </div>
      </div>
      <div className='home-content-2'>
        <div class="whats_new">
          <div class="hd">
            <img src={mainImages.bulTtit} alt="" />
            <h2><strong>What's New</strong></h2>
            <p>
              써브웨이의 다양한 소식을<br />
              빠르게 전달해드립니다.
            </p>
          </div>
          <div class="board_list">
            <ul>
              <li><a href="#" onclick="view.noticeView(this);return false;" data-idx="300">써브웨이 가격 조정 안내</a></li>
              <li><a href="#" onclick="view.noticeView(this);return false;" data-idx="299">써브웨이와 함께하는 tvN, TVING '졸업'</a></li>
              <li><a href="#" onclick="view.noticeView(this);return false;" data-idx="298">개인정보 처리방침 개정안내</a></li>
            </ul>
            <a class="more" href="/newsList">more</a>
          </div>
        </div>
        <div className='home-content-banner'>
          <ul>
            {images.map((image, index) => {
              return (
                <li key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="slide-image"
                  />
                </li>
              );
            })}
          </ul>
          <div className="home-content-page">
            {images.map((image, index) => {
              return (
                <div key={index} className={`${index === currentIndex ? 'active' : ''}`} onClick={() => handlePageClick(index)}>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='home-content-3'>
        <ul>
          <li class="qm">
            <div class="icon a1">
              <img src={mainImages.quickMenu} alt="" />
            </div>
            <div className='message'>
              <strong>프랜차이즈</strong>
              <p>개설절차/투자비용 정보</p>
            </div>
          </li>
          <li class="qm">
            <div class="icon a2">
              <img src={mainImages.quickMenu} alt="" />
            </div>
            <div className='message'>
              <strong>지사안내</strong>
              <p>수도권/지방 지사정보</p>
            </div>
          </li>
          <li class="qm" onClick={handleAdvertisementClick}>
            <div class="icon a3">
              <img src={mainImages.quickMenu} alt="" />
            </div>
            <div className='message'>
              <strong>광고영상</strong>
              <p>TV광고/동영상</p>
            </div>
          </li>
          <li class="qm">
            <div class="icon a4">
              <img src={mainImages.quickMenu} alt="" />
            </div>
            <div className='message'>
              <strong>고객문의</strong>
              <p>자주하는 질문/1:1문의</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomeContent;