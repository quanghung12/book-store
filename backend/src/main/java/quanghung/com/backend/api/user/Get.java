package quanghung.com.backend.api.user;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import quanghung.com.backend.dao.user.User;
import quanghung.com.backend.dao.user.UserDAO;

@RestController("GetUsersAPI")
@RequestMapping(path = "/users")
public class Get {
    @Autowired
    UserDAO userDAO;

    @GetMapping(path = "/{userId}")
    public User get(@PathVariable int userId) {
        return userDAO.findById(userId);
    }
}
