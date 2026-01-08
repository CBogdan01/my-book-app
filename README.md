# 📚 Book List Component

A reusable, accessible React component designed to display a list of books with interactive features. This project demonstrates modern React practices, robust error handling, and accessibility compliance.

## 📖 Scenario Overview

The goal was to create a modular component that renders a list of items (books) with the following capabilities:

* **Toggleable Details:** Users can expand or collapse book descriptions.
* **Dynamic List Updates:** A "Add New Book" feature that instantly updates the UI.
* **Robust Error Handling:** Gracefully handles missing data (descriptions) and broken image URLs.

## ✨ Key Features

### 1. Reusable Component Architecture

The solution is split into two functional components:

* **`BookList`**: Manages the application state (list of books) and handles the logic for adding new items.


* **`BookItem`**: A stateless presentation component that accepts `title`, `description`, and `imageUrl` as props.



### 2. State Management

* Uses `useState` to manage the visibility of the description text locally within each card.


* Uses `useState` in the parent component to manage the list of books in memory (no external database required).



### 3. Graceful Error Handling

* **Images:** If an image URL is invalid or fails to load, the component automatically detects the error via the `onError` event and swaps the broken image for a clean, styled "No Cover" placeholder.


* **Text:** If a description is missing from the props, a default "No description available" message is displayed.



### 4. Accessibility (WCAG Standards)

* **Screen Readers:** The toggle button uses `aria-expanded` to inform assistive technology whether the content is currently expanded or collapsed.


* **Keyboard Navigation:** Native `<button>` elements are used for all interactions, ensuring full keyboard support.
* **Semantic HTML:** The structure uses `<article>`, `<header>`, and `<h3>` tags to maintain a logical document hierarchy.
* **Contrast:** Text colors are explicitly set to ensure readability against the background, regardless of user system themes.

## 🚀 How to Run

This project was built with **Vite** and **TypeScript**.

1. **Install Dependencies:**
```bash
npm install

```


2. **Start the Development Server:**
```bash
npm run dev

```


3. **Run Tests:**
```bash
npm test

```



## 🧪 Testing

A unit test is included using **Jest** and **React Testing Library**.

* **Scope:** The test verifies the interactive functionality of the component.
* **Scenario:** It asserts that the description is hidden by default, becomes visible when the "Show Description" button is clicked, and correctly updates the button text.



## 🛠️ Technologies

* **React (Functional Components + Hooks)**
* **TypeScript** (For type safety and interfaces)
* **CSS3** (Flexbox, Responsive Grid)
* **Jest / React Testing Library**