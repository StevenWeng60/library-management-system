package com.librarysystem.librarysystembackend.rest;

import com.librarysystem.librarysystembackend.dao.AppDAO;
import com.librarysystem.librarysystembackend.entity.Book;
import com.librarysystem.librarysystembackend.entity.BookCheckout;
import com.librarysystem.librarysystembackend.entity.User;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class LibraryRestController {

    private AppDAO appDAO;
    @Autowired
    public LibraryRestController(AppDAO appDAO){
        this.appDAO = appDAO;
    }

    @GetMapping("/")
    public String sayHello() {
        return "Hello World";
    }

    // Post mapping for creating a user
    @PostMapping("/createUser")
    public String createUser() {
        User theUser = new User("bobbiwasabi", "Steven", "Weng", "stevenweng50@gmail.com", 21, "2023-08-11");
        appDAO.save(theUser);

        return theUser.toString();
    }

    // Post mapping for checking out a book
    @PostMapping("/bookCheckout")
    public String checkoutBook() {
        Book tempBook = appDAO.findBookById(3);
        User tempUser = appDAO.findUserById(3);
        BookCheckout theBookCheckout = new BookCheckout("2023-08-10", "2023-08-17", tempBook, tempUser);
        appDAO.save(theBookCheckout);

        return theBookCheckout.toString();
    }

    // Get mapping for getting all checkouts of a book
    @GetMapping("/getCheckouts")
    public String getCheckout() {
        Book tempBook = appDAO.findBookById(3);

        return tempBook.getCheckouts().toString();
    }

    // Example get mapping for an initial render on the client side
    @GetMapping("/getBookResults")
    public List<Book> bookResults() {
        return appDAO.getAllBooks();
    }

    // Get mapping which takes in a search parameter and returns the results from the database
    @GetMapping("/searchBooks/{searchText}")
    public List<Book> searchBookResults(@PathVariable String searchText) {
        return appDAO.searchBookResults(searchText);
    }


    // Post mapping for adding a book with title, author, published date, copies available
    @GetMapping("/book")
    public Book getBook() {
        Book tempBook = appDAO.findBookById(1);

        return tempBook;
    }

    // Post mapping for adding a book with title, author, published date, copies available
    @PostMapping("/book")
    public String createBook() {
        Book aBook = new Book("Dinosaurs Before Dark","Mary", "Osborne", "1992-07-28", 2, "Fiction");
        appDAO.save(aBook);

        return aBook.toString();
    }

    // Put mapping for modifying a book
    @PutMapping("/book")
    public String modifyBook() {
        return "Updating book";
    }

    // Delete mapping for deleting a book
    @DeleteMapping("/book")
    public String deleteBook() {
        appDAO.deleteBookById(9);
        return "Deleting book";
    }

    // expose "/" that returns "Hello World"

}
