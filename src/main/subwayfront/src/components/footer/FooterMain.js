import React from 'react';
import * as footerImages from 'src/image/footer/footerImage'
import 'src/components/footer/FooterMain.css';

const FooterMain = () => {
  return (
    <div className='footer-wrap'>
      <div class="content">
        <div class="util_menu">
          <ul>
            <li><a href="/agreement">이용약관</a></li>
            <li><a href="/privacy"><strong>개인정보처리방침</strong></a></li>
            <li><a href="/subcard">써브카드</a></li>
            <li><a href="https://store.subway.co.kr/" target="_blank">점주관리자</a></li>
          </ul>
        </div>
        <div className='company-wrap'>
          <div className='company-info'>
            <p>
              <span class="addr">서울시 서초구 강남대로 535 프린스빌딩 15층</span>
              <span class="rep">대표 : INSOO CHO(인수조)</span>
              <span class="tel">전화 : 02-797-5036</span>
              <span class="rep">사업자등록번호 : 101-84-04143</span>
            </p>
            <p class="copyright">SUBWAY® is a Registered Trademark of Subway IP LLC. © 2021 Subway IP LLC. All Rights Reserved.</p>
          </div>
          <div className='sns-wrap'>
            <a class="sns_area instagram" href="https://www.instagram.com/subwaykorea" target="_blank"><img src={footerImages.iconInstar} alt="" /></a>
            <a class="sns_area fackbook" href="https://www.facebook.com/Subwaykr" target="_blank"><img src={footerImages.iconFacebook} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterMain;