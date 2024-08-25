package com.react.subway.event;

import com.react.subway.entity.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/event")
public class EventController {

    @Autowired
    private EventService eventService;

    @GetMapping("/events")
    public List<Event> getEvents() {
        return eventService.getEventByAll();
    }

    @GetMapping("/openevents")
    public List<Event> getOpenEvents(@RequestParam("keyword") String keyword) {
        return eventService.getEventByOpen(keyword);
    }
}
