package com.librarysystem.librarysystembackend.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

@Entity
@Table(name = "book_checkout")
public class BookCheckout {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "book_checkout_id")
    private int id;
    @Column(name = "checkout_date")
    private String checkoutDate;
    @Column(name = "return_date")
    private String returnDate;
    @Column(name = "due_date")
    private String dueDate;

    //JsonBackReference helps ignore the bookReference during serialization to prevent circular references.
    @ManyToOne
    @JoinColumn(name = "book_id")
    @JsonBackReference("bookReference")
    private Book book;

    // JsonBackReference helps ignore the userReference during serialization to prevent circular references
    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonBackReference("userReference")
    private User user;

    public BookCheckout() {

    }

    public BookCheckout(String checkoutDate, String dueDate, Book book, User user) {
        this.checkoutDate = checkoutDate;
        this.dueDate = dueDate;
        this.book = book;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCheckoutDate() {
        return checkoutDate;
    }

    public void setCheckoutDate(String checkoutDate) {
        this.checkoutDate = checkoutDate;
    }

    public String getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(String returnDate) {
        this.returnDate = returnDate;
    }

    public String getDueDate() {
        return dueDate;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book bookId) {
        this.book = bookId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User userId) {
        this.user = userId;
    }

    public int getUserId() {
        return user.getId();
    }

    // Other getters for identifying book titles
    public String getBookTitle() {
        return book.getTitle();
    }

    @Override
    public String toString() {
        return "BookCheckout{" +
                "checkoutDate='" + checkoutDate + '\'' +
                ", dueDate='" + dueDate + '\'' +
                ", bookId=" + book.toString() +
                ", userId=" + user.toString() +
                '}';
    }
}
