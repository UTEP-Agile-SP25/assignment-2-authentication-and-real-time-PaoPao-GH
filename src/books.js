import { collection, addDoc, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "./config.js";

// Reference to "books" collection
const booksCollection = collection(db, "books");

// Add Book
const addBookForm = document.getElementById("addBookForm");
if (addBookForm) {
  addBookForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.getElementById("bookTitle").value;
    const author = document.getElementById("bookAuthor").value;

    try {
      await addDoc(booksCollection, { title, author });
      console.log("Book added!");
      addBookForm.reset();
    } catch (error) {
      console.error("Error adding book:", error.message);
    }
  });
}

// Real-time updates
const bookList = document.getElementById("bookList");
if (bookList) {
  onSnapshot(booksCollection, (snapshot) => {
    bookList.innerHTML = "";
    snapshot.forEach((docSnap) => {
      const book = docSnap.data();
      bookList.innerHTML += `
        <li>
          ${book.title} by ${book.author}
          <button onclick="deleteBook('${docSnap.id}')">Delete</button>
        </li>
      `;
    });
  });
}

// Delete Book
async function deleteBook(id) {
  try {
    await deleteDoc(doc(db, "books", id));
    console.log("Book deleted!");
  } catch (error) {
    console.error("Error deleting book:", error.message);
  }
}
window.deleteBook = deleteBook; // Needed for the delete buttons
