import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as eventImages from 'src/image/news/eventImage';
import * as commonImages from 'src/image/common/commonImage';
import 'src/components/content/news/EventSlide.css';

const EventSlide = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [keyword, setKeyword] = useState("open");
  const [currentIndex, setCurrentIndex] = useState(0);
	const images = [eventImages.event001, eventImages.event002, eventImages.event003, eventImages.event004];
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${apiUrl}/event/openevents`, {
          params: {
            keyword: keyword,
          },
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

	const handleSlidePageClick = (index) => {
		setCurrentIndex(index);
	}

const handleSlideNextPageClick = () => {
  if (currentIndex < (events.length - 1)) {
    setCurrentIndex(currentIndex + 1);
  }
}

const handleSlidePrevPageClick = () => {
  if (currentIndex !== 0) {
    setCurrentIndex(currentIndex - 1);
  }
}

const handleDetailClick = (events, index) => {
  navigate('/news/event/detail', {
    state: { events, index }
  });
}

  return (
    <div className='event-slide-wrap'>
      <div className='event-slide-content-wrap'>
        <h2 class="event-slide-title">이벤트ㆍ프로모션</h2>
        <div className='event-slide-content'>
          <ul>
            {events.map((eventx, index) => {
              return (
                <li key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
                  <div className='event-slide-wrap'>
                    <div className='event-slide-img'>
                      <img
                        src={eventImages[`${eventx.event_img}`]}
                        alt={`Slide ${index}`}
                        className="event-slide-image"
                      />
                    </div>
                    <div className='event-slide-info'>
                      <div className='event-slide-date'>
                        <em>{eventx.event_date}</em>
                      </div>
                      <div><strong>{eventx.event_name}</strong></div>
                      <p className='event-slide-summary' dangerouslySetInnerHTML={{ __html: eventx.event_summary }} ></p>
                      <div className='event-slide-detail' onClick={() => handleDetailClick(events, index)}><span>자세히보기</span> <img className='event-slide-detail-img' src={commonImages.iconArrRight01} alt="" /></div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className='event-slide-control'>
            <div className='event-slide-left-btn' onClick={() => handleSlidePrevPageClick()}>
              <img src={commonImages.iconSlideArr} alt="" />
            </div>
            <div className='event-slide-right-btn' onClick={() => handleSlideNextPageClick()}>
              <img src={commonImages.iconSlideArr} alt="" />
            </div>
          </div>
        </div>
        <div className="event-slide-page">
          {images.map((image, index) => {
            return (
              <div key={index} className={`slide-item ${index === currentIndex ? 'active' : ''}`} onClick={() => handleSlidePageClick(index)}>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default EventSlide;