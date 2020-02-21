package event.management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import event.management.beans.Event;
import event.management.dao.EventManagementDao;

@Controller
public class EventManagementService {

	@Autowired
	EventManagementDao eventManagementDao;

	public List<Event> getEvents() {
		List<Event> events = eventManagementDao.getEvents();
		return events;
	}

}
