import React from 'react';

const MembershipStep04 = () => {
  return (
    <div>
      <div id="content">
        {/* <!-- 멤버십가입 --> */}
        <div class="joining_wrapper">
          <h2 class="subTitle_02">회원가입</h2>
          <div class="join_step">
            <ul>
              <li class="step01"><span class="blind">약관동의</span></li> 
              <li class="step02"><span class="blind">본인인증</span></li>
              <li class="step03"><span class="blind">정보입력</span></li>
              <li class="step04 curr"><span class="blind">가입완료</span></li>
            </ul>
          </div>
          <h3 class="step_tit"><span>Step4.</span> 가입완료</h3>
          {/* <!-- step_cont_box --> */}
          <div class="step_cont_box">
            {/* <!-- step04_cont --> */}
            <div class="step04_cont">
              <h3 class="cont_tit">써브웨이에 가족이 되신 것을<br /> 환영합니다.</h3>
              <ul class="order_gobtn">
                <li class="fast">
                  <a href="/">
                    <strong>FAST-SUB</strong>
                    <i class="icon"></i>
                    <p class="txt">온라인 주문 후 매장에서<br /> 픽업/시식하는 서비스입니다.</p>
                  </a>
                </li>
                <li class="home">
                  <a href="/">
                    <strong>HOME-SUB</strong>
                    <i class="icon"></i>
                    <p class="txt">온라인 주문 시 배달되는<br /> 서비스입니다.</p>
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--// step04_cont --> */}

            <div class="btn_area">
              <a class="btn bgc_point i_reg" href="/" style={{width:'170px', fontWeight:'bold'}}><span>홈으로</span></a>
            </div>
          </div>
          {/* <!--// step_cont_box --> */}
        </div>
        {/* <!--// 멤버십가입 --> */}
      </div>  
    </div>
  );
}

export default MembershipStep04;