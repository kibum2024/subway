import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as commonImages from 'src/image/common/commonImage';
import * as detailImages from 'src/image/news/detail/detailImage';
import * as eventImages from 'src/image/news/eventImage';
import 'src/components/content/news/EventDetail.css';

const EventDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [index, setIndex] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [prevEvent, setPrevEvent] = useState(null);
  const [nextEvent, setNextEvent] = useState(null);

  useEffect(() => {
    if (location.state) {
      setEvents(location.state.events || []);
      setIndex(location.state.index || 0);
      setSelectedEvent(location.state.index + 1 || 1)
    }
  }, [location.state]);

  useEffect(() => {
    if (index !== null && events.length > 0) {
      setSelectedEvent(events[index]);
      if (index >= 0 && index < (events.length - 1)) {
        setNextEvent(events[index + 1])
      }
      if (index > 0 && index <= (events.length - 1)) {
        setPrevEvent(events[index - 1])
      }
    }
  }, [index, events]);
    // console.log("selectedEvent a1 : ", selectedEvent);

  const handePrevClick = () => {
    if (index > 0) {
      setIndex(index - 1);    
    }
  }

  const handeNextClick = () => {
    if (index < (events.length - 1)) {
      setIndex(index + 1);    
    }
  }

  const handleListClick = () => {
    navigate("/news/event");
  }

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
                  <img src={detailImages.detail004} alt="" />
                </div>
                <div className='event-detail-content1'>
                  <img src={detailImages.detail005} alt="" />
                </div>
                <div className='event-detail-content2'>
                  <img src={detailImages.detail006} alt="" />
                </div>
                <div className='event-detail-bottom'>
                  <img src={detailImages.detail007} alt="" />
                </div>
              </div>
            </>
            ) : (
              <></>
            )}
          </div>
          <div className='event-detail-2' style={{display: index === 1 ? 'block' : 'none'}}>
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
              <></>
            )}
          </div>
          <div className='event-detail-2' style={{display: index === 2 ? 'block' : 'none'}}>
          {selectedEvent ? (
            <>
              <div><h2>{selectedEvent.event_name}</h2></div>
              <div className='event-detail-date'>{selectedEvent.event_date}</div>
              <div className='event-detail-img-wrap'>
                <div className='event-detail-title'>
                  <img src={detailImages.detail013} alt="" />
                </div>
              </div>
            </>
            ) : (
              <></>
            )}
          </div>
          <div className='event-detail-1' style={{display: index === 3 ? 'block' : 'none'}}>
          {selectedEvent ? (
            <>
              <div><h2>{selectedEvent.event_name}</h2></div>
              <div className='event-detail-date'>{selectedEvent.event_date}</div>
              <div className='event-detail-img-wrap'>
                <div className='event-detail-title'>
                  <img src={detailImages.detail008} alt="" />
                </div>
                <div className='event-detail-content1'>
                  <img src={detailImages.detail009} alt="" />
                </div>
                <div className='event-detail-content2'>
                  <img src={detailImages.detail010} alt="" />
                </div>
                <div className='event-detail-content2'>
                  <img src={detailImages.detail011} alt="" />
                </div>
                <div className='event-detail-bottom'>
                  <img src={detailImages.detail012} alt="" />
                </div>
              </div>
            </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className='event-detail-right'>
          {/* { console.log("selectedEvent a2 : ", selectedEvent)} */}
        {prevEvent ? (
        <>
          <div className='event-detail-right-prev-wrap' style={{display: index !== 0 ? 'flex' : 'none'}} onClick={handePrevClick}>
            <div className='event-detail-right-prev-title'>
              <span class="arr-up"></span>PREV
              <div className='event-detail-right-up-img'>
                <img className='arr-up-img' src={commonImages.iconArrUp01} alt="" />
              </div>  
            </div>
            <div className='event-detail-right-img'>
              <img src={eventImages[`${prevEvent.event_img}`]} alt="" />
            </div>
            <div className='event-detail-right-info'>
              <p className='event-detail-right-name'>{prevEvent.event_name}</p>
              <p className='event-detail-right-date'>{prevEvent.event_date}</p>
            </div>
          </div>
        </> ) : (<> </>)
        }  
        {nextEvent ? (
        <>
          <div className='event-detail-right-next-wrap'style={{marginTop: index === 0 ? '100px' : '30px'}} onClick={handeNextClick}>
            <div className='event-detail-right-next-title'>
              <span class="arr-down"></span>NEXT
              <div className='event-detail-right-down-img'>
                <img className='arr-down-img' src={commonImages.iconArrDown01} alt="" />
              </div>  
            </div>
            <div className='event-detail-right-img'>
              <img src={eventImages[`${nextEvent.event_img}`]} alt="" />
            </div>
            <div className='event-detail-right-info'>
              <p className='event-detail-right-name'>{nextEvent.event_name}</p>
              <p className='event-detail-right-date'>{nextEvent.event_date}</p>
            </div>
          </div>
        </>
          ) : ( <></> )
        }
        </div>
      </div>
      <div className='event-detail-list'>
        <div className='event-detail-list-btn' onClick={handleListClick}><span>목록보기</span></div>
      </div>
    </div>
  );
}

export default EventDetail;