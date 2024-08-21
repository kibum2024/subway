import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'src/components/content/store/MapComponent.css';
import btnMore from 'src/image/menu/btn_more.png';

// 지도에서 사용할 위치
const position = [37.2994408, 127.0435693]; // 서울 시청의 위도와 경도

// 커스텀 아이콘 설정
const customIcon = new L.Icon({
  iconUrl: btnMore,
  iconSize: [32, 32], // 아이콘 크기
  iconAnchor: [16, 32], // 아이콘의 앵커 포인트
  popupAnchor: [0, -32], // 팝업의 앵커 포인트
});

const MapComponent = () => {
  return (
    <MapContainer center={position} zoom={13} style={{ height: "700px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
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
