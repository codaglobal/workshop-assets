package event.management.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;

import org.springframework.stereotype.Repository;

import event.management.beans.User;

@Repository
public class UserDao {

	Connection connection;

	public UserDao() throws Exception {
		this.connection = MysqlConfig.getConnection();
	}

	public boolean addUser(User user) {
		try {
			String insertUserQuery = "insert into users(event_id, first_name, last_name, register_no, "
					+ "department, email) values(?,?,?,?,?,?)";
			PreparedStatement updateemp = connection.prepareStatement(insertUserQuery);
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
