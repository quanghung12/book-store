package quanghung.com.backend.api.user;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import quanghung.com.backend.dao.user.User;
import quanghung.com.backend.dao.user.UserDAO;

@RestController("CreateUsersAPI")
@RequestMapping(path = "/users")

public class Create {
    @Autowired
    UserDAO userDAO;

    @PostMapping()
    public User create(@RequestBody Request request) {
        User user = new User(request.name, request.age, request.address, request.phone, request.email);
        return userDAO.saveOrUpdate(user);
    }

    public static class Request {
        public String name;
        public int age;
        public String address;
        public String phone;
        public String email;
    }

}
