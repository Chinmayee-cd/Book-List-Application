# Booklist Application

A lightweight full-stack web application that displays a collection of books. Built with an Angular frontend and a C# (.NET) backend.

## 🚀 Features
* **Simple UI**: Clean HTML layout built with Angular to render data.
* **REST API**: C# backend that serves book data via a simple GET request.

## 🛠️ Tech Stack
* **Frontend**: Angular, HTML, TypeScript
* **Backend**: C# / .NET Web API

## 💻 Getting Started

Follow these steps to run both the frontend and backend servers locally.

### Prerequisites
* [Node.js](https://nodejs.org) (v18 or higher)
* [Angular CLI](https://angular.dev) (`npm install -g @angular/cli`)
* [.NET SDK](https://microsoft.com) (v8.0 or higher)

### 1. Backend Setup (C#)
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Restore dependencies and run the server:
   ```bash
   dotnet run
   ```

### 2. Frontend Setup (Angular)
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the required packages:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   ng serve
   ```
4. Open your browser and navigate to `http://localhost:4200/`.

## 📡 API Endpoints

### Get All Books
* **URL**: `/api/books`
* **Method**: `GET`
* **Response Body**:
  ```json
  [
    { "id": 1, "title": "Book One", "author": "Author One" },
    { "id": 2, "title": "Book Two", "author": "Author Two" }
  ]
  ```
