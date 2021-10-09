package quanghung.com.backend.api.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import quanghung.com.backend.dao.user.User;
import quanghung.com.backend.dao.user.UserDAO;

import java.util.List;

@RestController("GetAllUsersAPI")
@RequestMapping(path = "users")
public class GetAll {
    @Autowired
    UserDAO userDAO;

    @GetMapping()
    public List<User> getAll() {
        return userDAO.getAll();
    }
}
