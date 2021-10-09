package quanghung.com.backend.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.Query;
import javax.transaction.Transactional;
import java.util.List;

@Transactional
public class AbstractDAO<T> {
    @Autowired
    protected SessionFactory sessionFactory;

    private Class<T> tClass;

    public AbstractDAO(Class<T> tClass) {
        this.tClass = tClass;
}

    public T findById(Integer id) {
        Session session = sessionFactory.getCurrentSession();
        T entity = session.get(tClass, id);
        return entity;
    }

    public List<T> getAll() {
        Session session = sessionFactory.getCurrentSession();
        Query qry = session.createQuery("from " + tClass.getName());
        List<T> entities = qry.getResultList();
        return entities;
    }

    public T saveOrUpdate(T entity) {
        Session session = sessionFactory.getCurrentSession();
        session.saveOrUpdate(entity);
        return entity;
    }

    public void delete(Integer id) {
        Session session = sessionFactory.getCurrentSession();
        T entity = findById(id);
        if(entity != null) {
            session.delete(entity);
        }
    }

}
