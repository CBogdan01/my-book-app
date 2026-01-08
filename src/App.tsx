import React, { useState } from 'react';
import './App.css';

// -- Types --

interface Book {
  id: number;
  title: string;
  description?: string;
  imageUrl?: string;
}

// -- Components --

const BookItem: React.FC<Omit<Book, 'id'>> = ({ title, description, imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState(imageUrl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_xsINPN_63NXZ53IvJUw8mOB8Vwx1nB5SIA&s");

  const handleImageError = () => {
    setImgSrc("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_xsINPN_63NXZ53IvJUw8mOB8Vwx1nB5SIA&s");
  };

  return (
    <article className="book-card">
      <div className="book-header">
        <img 
          src={imgSrc} 
          alt={`Cover for ${title}`} 
          className="book-img" 
          onError={handleImageError}
        />
        <div className="book-info">
          <h3>{title}</h3>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="toggle-btn"
            aria-expanded={isOpen}
          >
            {isOpen ? 'Hide Description' : 'Show Description'}
          </button>
        </div>
      </div>

      {isOpen && (
        <p className="book-desc">
          {description || "No description available."}
        </p>
      )}
    </article>
  );
};


const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([
    {
      id: 1,
      title: "The Great Gatsby",
      description: "A novel about the American dream and the roaring twenties.",
      imageUrl: "https://m.media-amazon.com/images/I/71ptoyWH8dL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 2,
      title: "Invisible Man",
      // Missing description to test fallback logic
      imageUrl: "invalid-url.jpg" // Invalid URL to test image error handling
    },
    {
      id: 3,
      title: "1984",
      description: "Dystopian social science fiction novel and cautionary tale.",
      // Missing image to test placeholder logic
    }
  ]);

  const handleAddBook = () => {
    const newBook: Book = {
      id: Date.now(),
      title: `New Book ${books.length + 1}`,
      description: "This book was added dynamically to test the list update.",
      imageUrl: "" 
    };
    setBooks(prev => [...prev, newBook]);
  };

  return (
    <div className="container">
      <header className="list-header">
        <h1>Reading List</h1>
        <button onClick={handleAddBook} className="add-btn">
          + Add New Book
        </button>
      </header>
      
      <div className="grid">
        {books.map((book) => (
          <BookItem 
            key={book.id}
            title={book.title}
            description={book.description}
            imageUrl={book.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;