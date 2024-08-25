import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as commonImages from 'src/image/common/commonImage';
import * as detailImages from 'src/image/news/detail/detailImage';
import * as eventImages from 'src/image/news/eventImage';
import 'src/components/content/news/EventDetail.css';

const EventDetail = () => {
  const location = useLocation();
  
  // useState로 상태 관리
  const [events, setEvents] = useState([]);
  const [index, setIndex] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    // console.log("events a1 : ", events);
    if (location.state) {
      setEvents(location.state.events || []);
      setIndex(location.state.index || 0);
    }
  }, [location.state]);

  useEffect(() => {
    if (index !== null && events.length > 0) {
      setSelectedEvent(events[index]);
    }
  }, [index, events]);
    console.log("selectedEvent a1 : ", selectedEvent);

  return (
    <div className='event-detail-wrap'>
      <div className='event-detail-content'>
        <div className='event-detail-left'>
          <div className='event-detail-1' style={{display: index === 0 ? 'block' : 'none'}}>
          {selectedEvent ? (
            <>
              <div><h2>{selectedEvent.event_name}</h2></div>
              <div className='event-detail-date'>{selectedEvent.event_date}</div>
              <div className='event-detail-img-wrap'>
                <div className='event-detail-title'>
                  <img src={detailImages.detail001} alt="" />
                </div>
                <div className='event-detail-content'>
                  <img src={detailImages.detail002} alt="" />
                </div>
                <div className='event-detail-bottom'>
                  <img src={detailImages.detail003} alt="" />
                </div>
              </div>
            </>
            ) : (
              <div>Loading...</div> // 데이터를 로드 중일 때 표시할 내용
            )}
          </div>
        </div>
        <div className='event-detail-right'>
          {/* { console.log("selectedEvent a2 : ", selectedEvent)} */}
        {selectedEvent ? (
        <>
          <div className='event-detail-right-prev-wrap'>
            <div className='event-detail-right-prev-title'>
              <span class="arr"></span>PREV
              <div className='event-detail-right-up-img'>
                <img className='arr-up-img' src={commonImages.iconArrUp01} alt="" />
              </div>  
            </div>
            <div className='event-detail-right-img'>
              <img src={eventImages[`${selectedEvent.event_img}`]} alt="" />
            </div>
            <div className='event-detail-right-info'>
              <p className='event-detail-right-name'>{selectedEvent.event_name}</p>
              <p className='event-detail-right-date'>{selectedEvent.event_date}</p>
            </div>
          </div>
        </>
          ) : (
            <div>Loading...</div> // 데이터를 로드 중일 때 표시할 내용
          )}
        </div>
      </div>
    </div>
  );
}

export default EventDetail;