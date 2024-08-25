import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as eventImages from 'src/image/news/eventImage';
import 'src/components/content/news/EventList.css';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [selectedKeyword, setSelectedKeyword] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${apiUrl}/event/events`, {
        });
        setEvents(response.data);
        if (response.data.length > 0) {
        }
      } catch (error) {
        console.error('Error fetching stores:', error);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    if (events.length > 0) {
      handleFilterClick("all");
    }  
  }, [events]);

  const handleListMoreClick = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  }

  const handleFilterClick = (keyword) => {
    if (events.length > 0) {
      if (keyword === "open") {
        const filteredEvents = events.filter(event => event.event_stat === "open");
        setSelectedEvents(filteredEvents);
      } else if (keyword === "close") {
        const filteredEvents = events.filter(event => event.event_stat === "close");
        setSelectedEvents(filteredEvents);
      } else {
        setSelectedEvents(events);
      }
    }
    setSelectedKeyword(keyword);
  }

  return (
    <div className='event-wrap'>
      <div className="event-title">
        <ul>
          <li className={`${selectedKeyword === 'all' ? 'active' : ''}`} onClick={() => handleFilterClick("all")}>전체</li>
          <li className={`${selectedKeyword === 'open' ? 'active' : ''}`} onClick={() => handleFilterClick("open")}>진행중인 이벤트</li>
          <li className={`${selectedKeyword === 'close' ? 'active' : ''}`} onClick={() => handleFilterClick("close")}>종료된 이벤트</li>
        </ul>
      </div>
      <div className='event-list'>
        <ul>
          {/* {console.log(events)} */}
          {selectedEvents.slice(0, visibleCount).map((eventx, index) => (
            <li key={index} className={`${eventx.event_stat === 'close' ? 'close' : ''}`}>
              <div className='event-img'>
                <img src={eventImages[`${eventx.event_img}`]} alt="no image" />
              </div>
              <p className='event-name'>{eventx.event_name}</p>
              <p className='event-date'>{eventx.event_date === ''? '이벤트가 종료되었습니다.': eventx.event_date}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {visibleCount < events.length && (
          <div className='event-list-more' onClick={handleListMoreClick}>더보기</div>
        )}
      </div>
    </div>
  );
}

export default EventList;