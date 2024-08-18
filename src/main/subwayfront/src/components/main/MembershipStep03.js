import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const MembershipStep03 = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailId, setEmailId] = useState('');
  const [emailDomain, setEmailDomain] = useState('');
  const [reEmail, setReEmail] = useState('');
  const [reEmailId, setReEmailId] = useState('');
  const [reEmailDomain, setReEmailDomain] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isReValid, setReIsValid] = useState(false);
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [message, setMessage] = useState('');
  const [reMessage, setReMessage] = useState('');
  const [nextChecked, setNextChecked] = useState(false);

  const handleMemberNextStep04Click = () => {
    if (!nextChecked) {
      alert("이메일주소와 비밀번호를 정상적으로 입력해주세요.")
    } else {
      if (memberSave()) {
        navigate('/users/membershipstep04');
      }
    }
  };

  useEffect(() => {
    setEmail(emailId + "@" + emailDomain);
    setIsEmailValid(false);
  }, [emailId, emailDomain]);

  useEffect(() => {
    setReEmail(reEmailId + "@" + reEmailDomain);
  }, [reEmailId, reEmailDomain]);

  useEffect(() => {
    if (emailId && emailDomain && reEmailId && reEmailDomain && password && rePassword && isEmailValid) {
      if (email === reEmail && password === rePassword) {
        setNextChecked(true);
      } else {
        setNextChecked(false);
      }
    } else {
      if (emailId && emailDomain && reEmailId && reEmailDomain && password && rePassword) {
        if (email === reEmail && password === rePassword  && !isEmailValid) {
          alert("이메일주소 중복확인을 하세요.");
        }
      } 
      setNextChecked(false);
    }
  }, [email, reEmail, password, rePassword, isEmailValid]);

  const handleEmailCheckClick = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/users/emailCheck', {
        userEmail: email
      });
      setIsEmailValid(false);
      alert("이미 사용 중인 이메일 주소입니다. 다른 이메일 주소를 입력하세요.");
    } catch (error) {
      setIsEmailValid(true);
      alert("사용 가능한 이메일 주소입니다.");
    }

  };

  const memberSave = async () => {
    try {
      const response = await axios.post('/users/memberSave', {
        userEmail: email,      
        userPassword: password   
      });
      return true;
    } catch (error) {
      alert("사용자정보 저장를 실패하였습니다. 다시 등록해 주세요.");
      return false;
    }

  };

  const checkEmailMatch = () => {
  if (emailId && emailDomain && reEmailId && reEmailDomain) {
      if (emailId === reEmailId && emailDomain === reEmailDomain) {
        setEmailMessage("");
      } else {
        setEmailMessage("이메일주소와 확인 이메일주소가 다릅니다.");
      }
    }
  };

  const checkPasswordMatch = () => {
    if (password && rePassword) {
      if (password === rePassword) {
        setPasswordMessage("");
      } else {
        setPasswordMessage("비밀번호와 확인 비밀번호가 다릅니다.");
      }
    }
  };

  const handleInputIdChange = (event) => {
    const inputedValue = event.target.value;
    setEmailId(inputedValue); 
  };

  const handleSelectDomainChange = (event) => {
    const selectedValue = event.target.value;
    setEmailDomain(selectedValue); 
  };

  const handleInputDomainChange = (event) => {
    const selectedValue = event.target.value;
    setEmailDomain(selectedValue); 
  };

  const handleInputReIdChange = (event) => {
    const inputedValue = event.target.value;
    setReEmailId(inputedValue); 
  };

  const handleSelectReDomainChange = (event) => {
    const selectedValue = event.target.value;
    setReEmailDomain(selectedValue); 
  };

  const handleInputReDomainChange = (event) => {
    const selectedValue = event.target.value;
    setReEmailDomain(selectedValue); 
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePassword(newPassword, "password");
  };

  const handleRePasswordChange = (event) => {
    const newPassword = event.target.value;
    setRePassword(newPassword);
    validatePassword(newPassword, "rePassword");
  };

  const validatePassword = (value, password) => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    
    if (regex.test(value)) {
      if (password === "password") {
        setIsValid(true);
        setMessage('');
      } else {
        setReIsValid(true);
        setReMessage('');
      }
    } else {
      if (password === "password") {
        setIsValid(false);
        setMessage('최대 8자 이상, 대문자 1자와 특수문자 1자 이상 포함되어야 합니다.');
      } else {
        setReIsValid(false);
        setReMessage('최대 8자 이상, 대문자 1자와 특수문자 1자 이상 포함되어야 합니다.');
      }
    }
  };

  return (
    <div>
      <div className="bg_type01" id="container">
        {/* <!-- sub content --> */}
        <div id="content">
          {/* <!-- 멤버십가입 --> */}
          <div className="joining_wrapper">
            <h2 className="subTitle_02">회원가입</h2>

            {/* <!-- join step --> */}
            <div className="join_step">
              <ul>
                <li className="step01"><span className="blind">약관동의</span></li> 
                <li className="step02"><span className="blind">본인인증</span></li>
                <li className="step03 curr"><span className="blind">정보입력</span></li>
                <li className="step04"><span className="blind">가입완료</span></li>
              </ul>
            </div>
            {/* <!--// join step --> */}

            <h3 className="step_tit"><span>Step3.</span> 정보입력</h3>
            {/* <!-- step_cont_box --> */}
            <div className="step_cont_box">
              {/* <!-- step03_cont --> */}
              <div className="step03_cont">
                <div className="form_box">
                  <input id="mbrYn" name="mbrYn" type="hidden" />
                  <input id="mbrLgnId" name="mbrLgnId" type="hidden" />

                  <h2>기본 정보 (필수 입력)</h2>
                  <div className="write_info_wrap">
                    <div className="input_set">
                      <dl>
                        <dt>아이디(이메일)<span className="ess"></span></dt>
                        <dd>
                          <span className="form_text" style={{width:'155px'}}>
                            <input className="required-value" placeholder="이메일 아이디 입력" type="text" value={emailId} onChange={handleInputIdChange} onBlur={checkEmailMatch} />
                          </span>
                          @
                          <span className="form_text" style={{width:'155px'}}>
                            <input className="required-value" placeholder="이메일 도메인 입력" type="text" value={emailDomain} onChange={handleInputDomainChange} onBlur={checkEmailMatch}/>
                          </span>
                          <span className="form_select" style={{width:'155px'}}>
                            <select id="mbrLgnId3" name="mbrLgnId3" onChange={handleSelectDomainChange}>
                              <option value="">직접 입력</option>
                              <option value="naver.com">naver.com</option>
                              <option value="daum.net">daum.net</option>
                              <option value="hanmail.net">hanmail.net</option>
                              <option value="gmail.com">gmail.com</option>
                              <option value="icloud.com">icloud.com</option>
                              <option value="nate.com">nate.com</option>
                            </select>
                          </span>
                          <div className="btn_input_in">
                            <input className="required-val" id="duplicationYn-mbrLgnId" type="hidden" value="N" />
                            <a className="in_form_btn" href="javascript:void(0);" id="pop" onClick={handleEmailCheckClick}><span>중복확인</span></a>
                          </div>
                          <span className="pw_check miss" id="worng-msg-email" style={{display:'inline-block'}}></span>
                        </dd>
                      </dl>
                    </div>
                    {/* <!-- (2020.08.11) 회원 가입 시 이메일 두번 입력하도록 변경--> */}
                    <div className="input_set">
                      <dl>
                        {/* <dt>아이디(이메일) 확인<span className="ess"></span></dt> */}
                        <dt>아이디(이메일) 확인</dt>
                        <dd>
                          <span className="form_text" style={{width:'155px'}}>
                            <input className="required-value" placeholder="이메일 아이디 입력" type="text" value={reEmailId} onChange={handleInputReIdChange} onBlur={checkEmailMatch} />
                          </span>
                          @
                          <span className="form_text" style={{width:'155px'}}>
                            <input className="required-value" placeholder="이메일 도메인 입력" type="text" value={reEmailDomain} onChange={handleInputReDomainChange} onBlur={checkEmailMatch} />
                          </span>
                          <span className="form_select" style={{width:'155px'}}>
                            <select id="subMbrLgnId3" name="subMbrLgnId3" onChange={handleSelectReDomainChange}>
                              <option value="">직접 입력</option>
                              <option value="naver.com">naver.com</option>
                              <option value="daum.net">daum.net</option>
                              <option value="hanmail.net">hanmail.net</option>
                              <option value="gmail.com">gmail.com</option>
                              <option value="icloud.com">icloud.com</option>
                              <option value="nate.com">nate.com</option>
                            </select>
                          </span>
                          <span className="pw_check miss" id="worng-msg-email-sub" style={{display:'inline-block'}}>{emailMessage}</span>
                        </dd>
                      </dl>
                    </div>
                    <div className="input_set input_pw_div">
                      <dl>
                        <dt>비밀번호<span className="ess"></span></dt>
                        <dd>
                          <span className="form_text" style={{width:'235px'}}>
                            <input className="required-value input_pw" placeholder="비밀번호 입력" type="password" onChange={handlePasswordChange} onBlur={checkPasswordMatch} />
                          </span>
                          <span className="pw_check miss worng-msg-pw" style={{ color: isValid ? 'green' : 'red' }}>{message}</span>
                        </dd>
                      </dl>
                    </div>
                    <div className="input_set input_pw_div">
                      <dl>
                        <dt>비밀번호 확인<span className="ess"></span></dt>
                        <dd>
                          <span className="form_text" style={{width:'235px'}}>
                            <input className="required-value input_pw" placeholder="비밀번호 입력" type="password" onChange={handleRePasswordChange} onBlur={checkPasswordMatch} />
                          </span>
                          <span className="pw_check miss worng-msg-pw" style={{ color: 'red' }}>{reMessage}{passwordMessage}</span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <div className="write_info_wrap" style={{display:'none'}}>
                    {/* <!-- 입력1세트 --> */}
                    <div className="input_set">
                      <dl>
                        <dt>우편번호</dt>
                        <dd>
                          {/* <!-- 주소 폼일시 post_num 클래스 추가 --> */}
                          <span className="form_text post_num" style={{width:'650px'}}>
                            <input id="zipCd" name="zipCd" placeholder="00000" readonly="" type="text" />
                          </span>
                          <div className="btn_input_in">
                            <button className="in_form_btn" type="button">
                              <span id="addressSearchBtn">우편번호검색</span>
                            </button>
                          </div>
                        </dd>
                        <dt>주소</dt>
                        <dd>
                          <span className="form_text">
                            <input id="baseAddr" name="baseAddr" placeholder="주소 입력" readonly="" type="text" />
                          </span>
                        </dd>
                        <dt>상세주소</dt>
                        <dd>
                          <span className="form_text">
                            <input id="dtlAddr" name="dtlAddr" placeholder="상세주소 입력" type="text" />
                          </span>
                        </dd>
                      </dl>
                    </div>
                    {/* <!--// 입력1세트 --> */}
                  </div>
                </div>
              </div>
              {/* <!--// step03_cont --> */}
              <div className="btn_area" onClick={handleMemberNextStep04Click}>
                <a className={`btn ${ (!nextChecked) ? 'bgc_white next-btn' : 'i_reg bgc_point'}`} href="javascript:void(0);" id="submitBtn" style={{width:'170px'}}><span style={{fontWeight:'bold'}}>회원가입 완료</span></a>
              </div>
            </div>
            {/* <!--// step_cont_box --> */}
          </div>
          {/* <!--// 멤버십가입 --> */}
        </div>
        {/* <!--// sub content --> */}
      </div>    
    </div>
  );
}

export default MembershipStep03;