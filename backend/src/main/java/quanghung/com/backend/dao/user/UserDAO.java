package quanghung.com.backend.dao.user;


import org.springframework.stereotype.Repository;
import quanghung.com.backend.dao.AbstractDAO;

import javax.transaction.Transactional;

@Repository
@Transactional
public class UserDAO extends AbstractDAO<User> {

    public UserDAO() {
        super(User.class);
    }
}
