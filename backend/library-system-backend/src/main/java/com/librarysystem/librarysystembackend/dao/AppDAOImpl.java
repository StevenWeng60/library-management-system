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
    // max number of objects returned back from database
    private int searchLimit;
    @Autowired
    public AppDAOImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
        this.searchLimit = 25;
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

    // METHODS FOR QUERYING BOOKS BY TITLE, AUTHOR, GENRE BELOW
    @Override
    public List<Book> searchBookResults(String searchAttribute, String searchTitle) {
        System.out.println("Search attribute: " + searchAttribute);
        TypedQuery<Book> query = entityManager.createQuery("SELECT b FROM Book b WHERE b." + searchAttribute + " LIKE :s", Book.class);
        query.setParameter("s", "%" + searchTitle + "%");
        query.setMaxResults(searchLimit);
        return query.getResultList();
    }

    @Override
    public List<Book> getUsersBooks(int userid) {
        TypedQuery<Book> query = entityManager.createQuery("SELECT b FROM User u INNER JOIN u.bookCheckoutList bc INNER JOIN bc.book b WHERE u.id = :userId", Book.class);
        query.setParameter("userId", userid);
        return query.getResultList();
    }

    @Override
    public List<Book> getAllBooks() {
        TypedQuery<Book> query = entityManager.createQuery("SELECT b FROM Book b", Book.class);
        query.setMaxResults(searchLimit);
        return query.getResultList();
    }
}
