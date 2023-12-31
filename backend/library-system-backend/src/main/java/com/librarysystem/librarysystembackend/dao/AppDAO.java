package com.librarysystem.librarysystembackend.dao;


import com.librarysystem.librarysystembackend.entity.Book;
import com.librarysystem.librarysystembackend.entity.BookCheckout;
import com.librarysystem.librarysystembackend.entity.User;

import java.util.List;

public interface AppDAO {
    void save(Book theBook);
    void save(User theUser);
    void save(BookCheckout theBookCheckout);
    Book findBookById(int id);
    User findUserById(int id);
    BookCheckout findBookCheckoutById(int id);
    User findUserByUsername(String username);

    void deleteBookById(int id);

    void deleteCheckoutById(int id);
    List<Book> getAllBooks();
    List<Book> searchBookResults(String searchAttribute, String searchTitle);

    List<Book> getUsersBooks(int userid);

    List<BookCheckout> getUsersBookCheckouts(int userid);

}
