import axios from "axios";

export default {
//    Gets all books
  searchAll: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?", { params: { q: query } });
  },
  getBooks: function() {
    return axios.get("/api/booksearch");
  },
     // Gets the book with the given id
   getBook: function(id) {
     return axios.get("/api/booksearch/" + id);
   },
    // Deletes the book with the given id
   deleteBook: function(id) {
     return axios.delete("/api/booksearch/" + id);
   },
    // Saves a book to the database
   saveBook: function(bookData) {
     return axios.post("/api/booksearch", bookData);
   }
};
