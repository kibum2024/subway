import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'src/components/header/MembershipStep02.css';

const MembershipStep02 = () => {
  const navigate = useNavigate();
  const [confirmCheck, setConfirmCheck] = useState("kakao");
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.onload = () => {
      window.Kakao.init('78c17c6c2ffdd5fe383edf297c5be8f5'); // 카카오 앱 키
    };
    document.body.appendChild(script);
  }, []);

  const handlekakaoClick = () => {
    window.Kakao.Auth.login({
      success: function (authObj) {
        axios.post('/users/kakao', { accessToken: authObj.access_token })
          .then(response => {
            console.log('Login Success:', response.data.kakao_account);
            navigate('/users/membershipstep03');
          })
          .catch(error => {
            console.error('Login Error:', error);
          });
      },
      fail: function (err) {
        console.error('Login Failed:', err);
      }
    });
  };

  const handleEmailClick = async () => {
    try {
      const response = await axios.post('/users/emailsend', {
        userEmail: email,      
      });

      alert("이메일이 발송되었습니다. 이메일을 확인하세요.");

    } catch (error) {
      alert("이메일 발송이 실패하였습니다. 이메일 주소를 확인하고 다시 인증하세요.");
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      axios.get(`/users/verify?token=${token}`)
        .then(response => {
          setMessage(response.data); // 서버에서 반환된 메시지 설정
          navigate('/users/membershipstep03');
        })
        .catch(error => {
          if (error.response) {
            setMessage(error.response.data); // 서버에서 반환된 오류 메시지 설정
          } else {
            setMessage('An error occurred. Please try again later.');
          }
        });
    } else {
      setMessage('No token found in URL.');
    }
  }, []);

  const handleSelectedClick = (selected) => {
    setConfirmCheck(selected);
  }

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
  }

  return (
    <div className='step2-wrap'>
      <div className='step2-confirm'>
        <h2>인증방식을 선택하세요.</h2>
        <div className='step2-confirm-select'>
          <div className='step2-confirm-kakao'> 
            <label htmlFor="kakao">kakao 인증</label>
            <input type="radio" id='kakao' checked={confirmCheck === "kakao"} onChange={() => handleSelectedClick("kakao")}/>
          </div>
          <div className='step2-confirm-email' onClick={() => handleSelectedClick("email")}>
            <label htmlFor="email">이메일 인증</label>
            <input type="radio" id='email' checked={confirmCheck === "email"} onChange={() => handleSelectedClick("email")}/>
          </div>
        </div>
        <div className='step2-confirm-kind'>
          <div className='kakao-confirm' style={{display: confirmCheck === "kakao"? "block" : "none"}}>
            <h1>Kakao 인증하기</h1>
            <div className="kakao-btn" onClick={handlekakaoClick}>
              <p>Kakao 인증</p>
            </div>
          </div>
          <div className='email-confirm' style={{display: confirmCheck === "email"? "block" : "none"}}>
            <h1>이메일 인증하기</h1>
            <label htmlFor="">이메일주소</label>
            <input className="email-value" placeholder="이메일 주소 입력" type="text" value={email} onChange={handleEmailChange}/>
            <div className="email-btn" onClick={handleEmailClick}>
              <p>이메일 인증</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembershipStep02;