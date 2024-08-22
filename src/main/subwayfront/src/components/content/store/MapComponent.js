import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'; // Leaflet 라이브러리 import
import 'leaflet/dist/leaflet.css';
import 'src/components/content/store/MapComponent.css';
import btnMore from 'src/image/menu/btn_more.png';

// 커스텀 아이콘 설정
const customIcon = new L.Icon({
  iconUrl: btnMore,
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

const MapComponent = ({latitudeProp, longitudeProp}) => {
  const [position, setPosition] = useState([latitudeProp, longitudeProp]);

  useEffect(() => {
    // 좌표 값을 숫자로 변환
    const latitude = parseFloat(latitudeProp);
    const longitude = parseFloat(longitudeProp);

    if (!isNaN(latitude) && !isNaN(longitude)) {
      setPosition([latitude, longitude]);
    }
  }, [latitudeProp, longitudeProp]);

  return (
    <MapContainer center={position} zoom={17} zoomControl={false} style={{ height: "700px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <ChangeView center={position} /> 
      <Marker position={position}  icon={customIcon}>
        <Popup>
          광교경기대후문<br />
          <br />
          주소 : 경기도 수원시 영통구 대학로 34<br />
          <br />
          연락처 : 070-7750-2040<br />
          <br />
          영업시간 :08:00 - 22:00<br />
          <br />
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
