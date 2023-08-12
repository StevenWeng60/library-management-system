package com.librarysystem.librarysystembackend.dao;

import com.librarysystem.librarysystembackend.entity.Book;
import com.librarysystem.librarysystembackend.entity.BookCheckout;
import com.librarysystem.librarysystembackend.entity.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
public class AppDAOImpl implements AppDAO{

    // define field for entity manager
    private EntityManager entityManager;
    @Autowired
    public AppDAOImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    // inject entity manager using constructor injections
    @Override
    @Transactional
    public void save(Book theBook) {
        entityManager.persist(theBook);
    }

    @Override
    @Transactional
    public void save(User theUser) {entityManager.persist(theUser);}

    @Override
    @Transactional
    public void save(BookCheckout theBookCheckout) {entityManager.persist(theBookCheckout);}

    public Book findBookById(int id) {
        Book tempBook = entityManager.find(Book.class, id);
        return tempBook;
    }

    public User findUserById(int id) {
        User tempUser = entityManager.find(User.class, id);
        return tempUser;
    }

    @Override
    @Transactional
    public void deleteBookById(int id) {
        Book tempBook = entityManager.find(Book.class, id);

        entityManager.remove(tempBook);
    }

    @Override
    public List<Book> getAllBooks() {
        TypedQuery<Book> query = entityManager.createQuery("SELECT b FROM Book b", Book.class);
        return query.getResultList();
    }
}
