package event.management.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import org.springframework.stereotype.Repository;

import event.management.beans.User;
import event.management.constants.ApplicationConstants;

@Repository
public class UserDao {

	Connection connection;

	public UserDao() throws ClassNotFoundException, SQLException {
		Class.forName(ApplicationConstants.DRIVER_NAME);
		this.connection = DriverManager.getConnection(ApplicationConstants.MYSQL_HOSTNAME,
				ApplicationConstants.MYSQL_USERNAME, ApplicationConstants.MYSQL_PASSWORD);
	}

	public boolean addUser(User user) {
		try {
			PreparedStatement updateemp = connection
					.prepareStatement("insert into users(event_id, first_name, last_name, register_no, "
							+ "department, email) values(?,?,?,?,?,?)");
			updateemp.setInt(1, user.getEventId());
			updateemp.setString(2, user.getFirstName());
			updateemp.setString(3, user.getLastName());
			updateemp.setString(4, user.getRegisterNo());
			updateemp.setString(5, user.getDepartment());
			updateemp.setString(6, user.getEmail());
			return updateemp.executeUpdate() > 0;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}

}
