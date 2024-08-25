package com.react.subway.event;

import com.react.subway.entity.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;

    public List<Event> getEventByAll() {
        return eventRepository.findEventByAll();
    }

    public List<Event> getEventByOpen(String keyword) {
        return eventRepository.findEventByOpen(keyword);
    }
}
