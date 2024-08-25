import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'; // Leaflet 라이브러리 import
import 'leaflet/dist/leaflet.css';
import 'src/components/content/store/MapComponent.css';
import btnPosition from 'src/image/menu/btn_position.png';

// 커스텀 아이콘 설정
const customIcon = new L.Icon({
  iconUrl: btnPosition,
  iconSize: [32, 55], // 아이콘 크기
  iconAnchor: [16, 32], // 아이콘의 앵커 포인트
  popupAnchor: [0, -32], // 팝업의 앵커 포인트
});

// 커스텀 훅을 사용하여 지도 이동 제어
const ChangeView = ({ center }) => {
  const map = useMap(); // 현재 맵 객체를 가져옵니다
  useEffect(() => {
    if (center) {
      map.setView(center, map.getZoom()); // 맵의 중심과 확대 수준을 설정합니다
    }
  }, [center, map]);
  return null;
};

const MapComponent = ({storeProp}) => {
  const [position, setPosition] = useState([storeProp.latitude, storeProp.longitude]);

  useEffect(() => {
    // 좌표 값을 숫자로 변환
    const latitude = parseFloat(storeProp.latitude);
    const longitude = parseFloat(storeProp.longitude);

    if (!isNaN(latitude) && !isNaN(longitude)) {
      setPosition([latitude, longitude]);
    }
  }, [storeProp.latitude, storeProp.longitude]);

  const formatPhoneNumber = (phoneNumber) => {
    // 070 전화번호 포맷(11자리)
    if (phoneNumber.length === 11) {
      return phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    }
    // 일반적인 지역번호(031, 02 등) 포맷(10자리)
    return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  }

  const formatTime = (Time) => {
    return Time.replace(/(\d{2})(\d{2})/, '$1:$2');
  }

  return (
    <MapContainer center={position} zoom={17} zoomControl={false} style={{ height: "700px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <ChangeView center={position} /> 
      <Marker position={position}  icon={customIcon}>
        <Popup>
          <div className='map-wrap'>
            <h3>{storeProp.storeName}</h3>
            <br />
            <div>
              <span className='map-title'>주소</span>
              <span>{storeProp.address}</span>
            </div>
            <br />
            <div>
              <span className='map-title'>연락처</span>
              <span>{formatPhoneNumber(storeProp.contact)}</span>
            </div>
            <br />
            <div>
              <span className='map-title'>영업시간</span>
              <span>{formatTime(storeProp.openTime)} - {formatTime(storeProp.closeTime)}</span>
            </div>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
