package com.librarysystem.librarysystembackend.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "user")
public class User {
    // set variables
    // to string methods
    // getters and setters
    // default constructor
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int id;
    @Column(name = "user_password")
    private String password;
    @Column(name = "firstname")
    private String firstName;
    @Column(name = "lastname")
    private String lastName;
    @Column(name = "email")
    private String email;
    @Column(name = "age")
    private int age;
    @Column(name = "created_at")
    private String date;

    @Column(name = "username")
    private String username;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonManagedReference("userReference")
    private List<BookCheckout> bookCheckoutList = new ArrayList<>();


    public User() {}

    public User(String password, String firstName, String lastName, String email, int age, String date, String username) {
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.age = age;
        this.date = date;
    }

    public User(String username, String firstName, String lastName, int age, String password){
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<BookCheckout> getBookCheckoutList() {
        return bookCheckoutList;
    }

    public void setBookCheckoutList(List<BookCheckout> bookCheckoutList) {
        this.bookCheckoutList = bookCheckoutList;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", password=" + password +
                ", firstName='" + firstName + '\'' +
                ", email='" + email + '\'' +
                ", username='" + username + '\'' +
                ", age=" + age +
                ", date='" + date + '\'' +
                '}';
    }
}
