package event.management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import event.management.beans.Event;
import event.management.service.EventManagementService;

@RestController
@RequestMapping("/events")
public class EventManagementController {

	@Autowired
	EventManagementService eventManagementService;

	@GetMapping
	public List<Event> getEvents() {
		List<Event> events = eventManagementService.getEvents();
		return events;
	}
}
