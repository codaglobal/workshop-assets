package event.management.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import event.management.beans.Event;

@Repository
public class EventManagementDao {

	@Autowired
	JdbcTemplate jdbcTemplate;

	public List<Event> getEvents() {
		return jdbcTemplate.queryForList("select * from events", Event.class);
	}

}
