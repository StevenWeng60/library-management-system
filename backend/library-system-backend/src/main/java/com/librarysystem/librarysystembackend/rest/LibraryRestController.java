package com.librarysystem.librarysystembackend.rest;

import com.librarysystem.librarysystembackend.dao.AppDAO;
import com.librarysystem.librarysystembackend.entity.Book;
import com.librarysystem.librarysystembackend.entity.BookCheckout;
import com.librarysystem.librarysystembackend.entity.User;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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
    // Limit of 25 books per search request
    @GetMapping("/getBookResults")
    public ResponseEntity<List<Book>> bookResults() {
        List<Book> books = appDAO.getAllBooks();
        System.out.println(books);
        return ResponseEntity.ok(books);
    }

    // Get mapping which takes in a search parameter and returns the results from the database
    // Limit of 25 books per search request
    @GetMapping("/searchBooks/{searchAttribute}/{searchText}")
    public List<Book> searchBookResults(@PathVariable String searchAttribute, @PathVariable String searchText) {
        System.out.println(searchAttribute);
        String attribute = "title";
        if (searchAttribute.equals("Title")){
            attribute = "title";
        } else if (searchAttribute.equals("Author's first name")){
            attribute = "authorFirstName";
        } else if (searchAttribute.equals("Author's last name")) {
            attribute = "authorLastName";
        } else if (searchAttribute.equals("Genre")){
            attribute = "genre";
        }
        return appDAO.searchBookResults(attribute, searchText);
    }

    // Mapping for getting all of the books a user has checked out
    @GetMapping("/getUsersBooks/{userId}")
    public List<Book> getUsersBooks(@PathVariable int userId) {
        return appDAO.getUsersBooks(userId);
    }

    // Mapping for getting all of the users checkout history (maybe there is a limit of 25?)
    @GetMapping("/getUsersBookCheckouts/{userId}")
    public List<BookCheckout> getBookCheckouts(@PathVariable int userId) {
        return appDAO.getUsersBookCheckouts(userId);
    }


    // Post mapping for adding a book with title, author, published date, copies available
    @GetMapping("/book")
    public Book getBook() {
        Book tempBook = appDAO.findBookById(1);

        return tempBook;
    }

    // Post mapping for adding a book with title, author, published date, copies available
    @PostMapping(
            value = "/book",
            consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public Book createBook(@RequestBody Book book) {
//        Book aBook = new Book("Dinosaurs Before Dark","Mary", "Osborne", "1992-07-28", 2, "Fiction");
        System.out.println(book.toString());
        book.setCheckouts(null);
        appDAO.save(book);

        return book;
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
