import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './MembershipStep02.css';

const MembershipStep02 = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.onload = () => {
      window.Kakao.init('78c17c6c2ffdd5fe383edf297c5be8f5'); // 카카오 앱 키
    };
    document.body.appendChild(script);
  }, []);

  const handleLogin = () => {
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

  return (
    <div className='kakao-wrap'>
      <div className='kakao-confirm'>
        <h1>Kakao 인증하기</h1>
        <div className="kakao-btn" onClick={handleLogin}>
          <p>Kakao 인증확인</p>
        </div>
      </div>
    </div>
  );
}

export default MembershipStep02;