package quanghung.com.backend.dao.user;


import org.hibernate.Session;
import org.springframework.stereotype.Repository;
import quanghung.com.backend.dao.AbstractDAO;

import javax.persistence.Query;
import javax.transaction.Transactional;

@Repository
@Transactional
public class UserDAO extends AbstractDAO<User> {

    public UserDAO() {
        super(User.class);
    }

    public User getUserByEmail(String email) {
        Session session = sessionFactory.getCurrentSession();
        Query query = session.createQuery("from User where email = :emailRequest");
        query.setParameter("emailRequest", email);
        User user = (User) query.getSingleResult();
        return user;
    }
}
