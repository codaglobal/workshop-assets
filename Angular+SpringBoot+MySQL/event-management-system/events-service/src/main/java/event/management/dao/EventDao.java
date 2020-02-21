package event.management.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import event.management.beans.Event;
import event.management.constants.ApplicationConstants;

@Repository
public class EventDao {

	Connection connection;

	public EventDao() throws ClassNotFoundException, SQLException {
		Class.forName(ApplicationConstants.DRIVER_NAME);
		this.connection = DriverManager.getConnection(ApplicationConstants.MYSQL_HOSTNAME,
				ApplicationConstants.MYSQL_USERNAME, ApplicationConstants.MYSQL_PASSWORD);
	}

	public List<Event> getEvents() throws SQLException {
		List<Event> events = new ArrayList<>();
		Statement stmt = connection.createStatement();
		String query = "select * from events";
		ResultSet rs = stmt.executeQuery(query);
		while (rs.next()) {
			Event event = new Event();
			event.setId(rs.getInt("id"));
			event.setName(rs.getString("name"));
			event.setType(rs.getString("type"));
			event.setVenue(rs.getString("venue"));
			event.setDate(rs.getString("date"));
			events.add(event);
		}
		return events;
	}

	public boolean addEvent(Event event) {
		try {
			PreparedStatement updateemp = connection
					.prepareStatement("insert into events(name, type, venue, date) values(?,?,?,?)");
			updateemp.setString(1, event.getName());
			updateemp.setString(2, event.getType());
			updateemp.setString(3, event.getVenue());
			updateemp.setString(4, event.getDate());
			 return updateemp.executeUpdate() > 0;
		} catch (Exception e) {
			e.printStackTrace();
		}
		 return false;
	}

}
