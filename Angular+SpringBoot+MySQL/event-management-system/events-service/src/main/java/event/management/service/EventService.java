package event.management.service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import event.management.beans.Event;
import event.management.dao.EventDao;

@Controller
public class EventService {

	@Autowired
	EventDao eventManagementDao;

	public List<Event> getEvents() throws SQLException {
		List<Event> events = eventManagementDao.getEvents();
		return events;
	}

	public boolean addEvent(Event event) {
		boolean isUpdated = eventManagementDao.addEvent(event);
		return isUpdated;
	}

}
