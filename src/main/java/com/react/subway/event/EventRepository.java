package com.react.subway.event;

import com.react.subway.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EventRepository extends JpaRepository<Event, Long> {
    @Query(value = "select * from event", nativeQuery = true)
    List<Event> findEventByAll();

    @Query(value = "select * from event " +
                    " where event_stat = :keyword " +
                    " and event_summary is not null " +
                    " order by event_date desc ", nativeQuery = true)
    List<Event> findEventByOpen(@Param("keyword") String keyword);
}
