import React, { useState, useEffect, useContext } from 'react';
// import CryptoJS from 'crypto-js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'src/AuthContext';
import 'src/components/header/Login.css';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isFocused, setIsFocused] = useState(false);
  const [loginMenuCheck, setLoginMenuCheck] = useState("1"); 
  const [passwordView, setPasswordView] = useState(false);
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(''); 

  const handleLoginClick = async (e) => {
    e.preventDefault();

    // 비밀번호 암호화
    // const encryptedPassword = CryptoJS.AES.encrypt(password, 'your-secret-key').toString();

    try {
      const response = await axios.post('/users/login', {
        userEmail: email,      
        userPassword: password   
      });

      setMessage("000");
      login(true);
      navigate('/');


    } catch (error) {
        login(false);
        if (error.response) {
            // The server responded with a status code outside the range of 2xx
            setMessage("402");
        } else {
            // The request was made but no response was received
            setMessage("401");
        }
    }

    if (isEmailChecked) {
      handleSaveEmail(); 
    }

  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 로컬 스토리지에서 이메일을 가져옵니다.
    const savedEmail = localStorage.getItem('savedEmail');
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSaveEmail = () => {
    // 이메일을 로컬 스토리지에 저장합니다.
    localStorage.setItem('savedEmail', email);
    console.log('email:', email);
  };

  const isPasswordViewClick = () => {
    if (passwordView) {
      setPasswordView(false); 
    } else {
      setPasswordView(true); 
    }
  };

  const handleLoginMenuClick = (check) => {
    setLoginMenuCheck(check); 
  };

  const onPasswordChange = (event) => {
    const inputValue = event.target.value;
    setPassword(inputValue);
  };

  const handleEmailCheckChange = (event) => {
    const isChecked = event.target.checked;
    setIsEmailChecked(isChecked);
  };

  return (
      <div className='login-wrap' >
        <div className="login-signin-wrapp">
          <div className="login-signin-tit">
            <ul>
              <li className={`${loginMenuCheck === "1" ? 'login-on' : ''}`} onClick={() => handleLoginMenuClick("1")}><a className="bt-menu" href="javascript:void(0);">회원 로그인</a></li>
              <li className={`${loginMenuCheck === "2" ? 'login-on' : ''}`} onClick={() => handleLoginMenuClick("2")}><a className="bt-menu" href="javascript:void(0);">비회원 주문하기</a></li>
            </ul>
          </div>
          {/* 회원로그인 */}
          <div className="login-signin-input" style={{ display: (loginMenuCheck === "1") ? 'block' : 'none' }}>
            <p>써브웨이 회원으로 로그인하시면 제공하는<br />다양한 서비스를 이용할 수 있습니다.</p>
            <div className="login-form-box">
              <div className="login-write-info-wrap">
                <div className="login-input-set">
                  <ul className={isFocused ? 'focused' : ''}>
                    <li>
                        <span className='login-form-label'>이메일 아이디</span>
                        <span className="login-form-text">
                          <input className="login-required-value" 
                                 id="username" name="username" placeholder="이메일 아이디 입력" type="text" value={email}
                                 onFocus={() => setIsFocused(true)}
                                 onBlur={() => setIsFocused(false)} 
                                 onChange={handleEmailChange} />
                        </span>
                    </li>
                    <li>
                        <span className='login-form-label'>비밀번호</span>
                        <span className="login-form-text">
                          <input className="login-required-value" 
                                 id="password" name="password" placeholder="비밀번호 입력" type={passwordView ? 'text' : 'password'} 
                                 onFocus={() => setIsFocused(true)}
                                 onBlur={() => setIsFocused(false)}
                                 onChange={onPasswordChange} />
                        </span>
                        <i class="bi bi-eye bi-password" onClick={isPasswordViewClick} style={{ display: (!passwordView) ? 'inline-block' : 'none' }}></i>
                        <i class="bi bi-eye-slash  bi-password" onClick={isPasswordViewClick}  style={{ display: (passwordView) ? 'inline-block' : 'none' }}></i>
                    </li>
                  </ul>
                </div>
              </div>
              <label class="form-checkbox">
                <input id="rememberId" name="rememberId" type="checkbox" onChange={handleEmailCheckChange} />
                <span class="icon"></span>이메일 아이디 저장
              </label>
            </div>
            <div className="login-signin-btn" onClick={handleLoginClick}>
              <a className="login-signin-a" href="javascript:void(0);">로그인</a>
            </div>
            <div className="login-signin-link">
              <ul>
                <li><a href="javascript:void(0);">아이디 찾기</a></li>
                <li><a href="javascript:void(0);">비밀번호 찾기</a></li>
                <li><a href="/users/membershipstep01">회원가입</a></li>
              </ul>
            </div>
          </div>
          {/* 비회원 */}
          <div className='login-nomember-input' style={{ display: ((loginMenuCheck === "2")) ? 'block' : 'none' }}>
            <p>써브웨이 회원이 되시면 다양한 혜택을 누리실 수 있습니다.</p>
            <div className="login-nomember-join">
              <a className="signin-btn" href="/member/join/step1">회원가입 하기</a>
            </div>
            <div className="login-nomember-policy-agree">
              <ul>
                <li className="li-pol">
                  <p className="tit">
                    <label className="form-checkbox">
                      <input id="termsChkYn" name="termsChkYn" type="checkbox" />
                      <span className="icon"></span>
                      <span>비회원 이용약관 및 개인정보 수집 이용동의</span>
                    </label>
                  </p>
                  <div className="login-nomember-txt-area">
                    Subway International, B.V.(“써브웨이”)는 비회원 주문 서비스를 위하여 다음과 같이 귀하의 개인정보를 수집·이용합니다.
                    <ul>
                      <li>수집 항목:<br />
                        -	연락처. 당사는 주문자명, 전화번호, 배달지 주소를 수집할 수 있습니다.<br />
                        -	결제 정보. 온라인 구매를 하는 경우, 귀하는 귀하가 선택하는 결제 형태에 따라 신용/직불카드 번호 및 관련 금융정보(유효기간, 보안코드, 청구지 주소 등) 또는 기타 결제 방식(Subway® 카드를 통한 결제 등)에 대한 정보를 제공해야 합니다.<br />
                        -	기기 및 기술 데이터. 당사는 귀하가 당사의 웹사이트를 방문하거나 당사의 모바일 애플리케이션 또는 서비스를 이용할 때 기술정보를 수집합니다. 여기에는 귀하의 IP 주소, 귀하가 사용하는 모바일 기기 유형, 귀하의 기기 운영체제 및 브라우저 유형, 시간대 설정 및 위치, 언어, 고유 기기 식별자, 참조 웹사이트 주소, 당사 웹사이트를 통해 귀하가 이용하는 경로 및 기타 당사 웹사이트 내 귀하의 세션에 관한 정보가 포함될 수 있습니다.<br />
                        -	쿠키 및 기타 기술. 당사 및 당사의 제3자 서비스 제공자들은 당사 웹사이트 및 모바일 서비스 이용에 관한 정보를 수집하기 위하여 쿠키, 웹 비콘, 고유 광고 식별자 및 모바일 기기 식별자와 같은 기술을 이용합니다. 여기에는 예컨대 귀하의 인구통계학적 정보, 미디어 소비, 쇼핑 습관, 또는 라이프스타일 선호 등 공개 데이터베이스 또는 데이터 수집업체의 정보가 포함될 수 있습니다.<br />
                        -	지리적 위치 정보. 귀하의 기기가 위치정보를 제공하는 것으로 설정된 경우, 당사는 귀하의 위치에 관한 정보를 수집할 수 있습니다. 예를 들어, 당사는 귀하의 기기의 GPS 신호를 통해 귀하와 가장 가까운 Subway® 매장 위치를 보여줄 수 있습니다. 당사는 근접성 기반 마케팅 및 기타 위치 기반 서비스의 제공을 지원하기 위하여 당사는 귀하가 동의한 Google 서비스 약관에 따라 당사 서비스 제공자 Google의 Maps API를 사용합니다. 대부분의 모바일 기기 및 컴퓨터 시스템의 경우, 귀하는 브라우저 또는 기기 설정을 이용하여 당사가 이러한 정보를 수집하는 것에 대한 귀하의 허가를 철회할 수 있습니다. 귀하의 Google Maps API 허가 설정을 철회하려면 Google 서비스 약관의 절차를 준수하시기 바랍니다. 당사가 귀하의 위치에 관한 정확한 정보를 수집하지 못하도록 할 수 있는 방법과 관련한 문의사항이 있는 경우, 귀하의 모바일 기기 제공자, 기기 제조업자 또는 웹브라우저 제공업체에 연락하시기 바랍니다. 일부 온라인 서비스 및 매장 내(in-restaurant) 기능은 귀하의 위치에 대한 정보가 없으면 제대로 작동하지 않을 수 있습니다.
                      </li>
                      <li>
                        수집·이용 목적: 당사는 다음과 같은 목적으로 개인정보를 이용합니다.<br />
                        -	주문 상품 배달 등 고객과 체결한 계약의 이행<br />
                        -	비회원주문 조회 서비스 제공<br />
                        -	주문자의 요청사항 처리<br />
                      </li>
                      <li>
                        보유 및 이용 기간: 5년<br />
                        귀하는 위와 같은 개인정보의 수집 및 이용에 대한 동의를 거부할 수 있습니다. 다만, 동의하지 않을 경우 비회원 주문 서비스 이용이 불가능할 수 있습니다.
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="li-pol">
                  <p className="tit">
                    <label className="form-checkbox">
                      <input id="ageChkYn" name="ageChkYn" type="checkbox" />
                      <span className="icon"></span>
                      <span>만 14세 이상입니다. <em>*</em></span>
                    </label>
                  </p>
                </li>
              </ul>
            </div>
            <div className="login-nomember-confirm-wrap">
              <ul>
                <li>
                  <input className="name-input" id="name" placeholder="이름" type="text" />
                </li>
                <li>
                  <input className="phone-input" id="hp" maxlength="11" name="hp" oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');" placeholder="휴대폰 번호" type="text" />
                  <div className="login-btns-wrapper">
                    <a className="login-btn bgc-green" href="javascript:void(0);"><span>인증번호 발송</span></a>
                  </div>
                </li>
                <li>
                  <input className="confirm-number" id="authNo" name="authNo" placeholder="인증번호" type="text" />
                  <div className="login-btns-wrapper">
                    <a className="login-btn bgc-green" href="javascript:void(0);"><span>확인</span></a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="login-nomember-complete-wrap">
              <div className="login-btns-complete-wrapper">
                <a className="login-btn bgc-gray " href="javascript:void(0);"><span>완료</span></a>	
              </div>
              <div className="login-btns-order-wrapper">
                <a className="login-btn bgc-lg" href="/nonmember/order/form"><span>비회원 주문조회</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Login;