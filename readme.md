# E-commerce Product API

A RESTful API backend designed for managing product data in an e-commerce store, built with Node.js, Express, and MongoDB. This API enables efficient product management with robust features like advanced filtering, sorting, field selection, numeric filtering, and pagination. Ideal for e-commerce applications, it allows users to fetch and query product data dynamically based on various criteria.
## Features

-   **Product Management:** Create, read, update, and delete products.
-   **Filtering:** Filter products by features, company, name, and numeric attributes (price, rating).
-   **Sorting:** Sort products by name, price, or creation date.
-   **Pagination:** Retrieve products in paginated format.
-   **Search:** Search products by name using regex.
-   **Validation:** Basic validation for query parameters.
-   **Environment Variables:** Securely manage configuration using `.env` files.

## Project Structure

```
store-api/
├── controllers/
│   └── products.js       # Product API controllers
├── models/
│   └── product.js        # Product Mongoose model
├── routes/
│   └── products.js       # Product API routes
├── middleware/
│   ├── notfound.js       # 404 Not Found middleware
│   └── errorhandler.js   # Error handling middleware
├── db/
│   └── connect.js        # MongoDB connection setup
├── .env                  # Environment variables
├── app.js                # Main application file
└── package.json          # Node dependencies
```

## Backend Setup

### Prerequisites

-   Node.js (v14 or higher)
-   MongoDB database

### Installation

1.  Clone the repository:

    ```bash
    git clone [https://github.com/bhanuudhay/E-commerce-product-API](https://github.com/bhanuudhay/E-commerce-product-API)
    cd store-api
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Create a `.env` file in the root directory with the following variables:

    ```
    PORT=3000
    MONGODB_URI=your_mongodb_connection_string
    ```

4.  Start the backend server:

    ```bash
    npm start
    ```

    The backend server will run on `http://localhost:3000`.

## API Documentation

The backend provides a RESTful API with the following main endpoints:

-   **`GET /api/v1/products`:** Retrieve a list of products with optional filtering, sorting, and pagination.
    -   **Query Parameters:**
        -   `featured` (boolean): Filter products by featured status.
        -   `company` (string): Filter products by company.
        -   `name` (string): Search products by name (regex).
        -   `sort` (string): Sort products by specified fields (e.g., `price,-name`).
        -   `fields` (string): Select specific fields to return (e.g., `name,price`).
        -   `numericfilters` (string): Filter products by numeric attributes (e.g., `price>30,rating>=4`).
        -   `page` (number): Page number for pagination.
        -   `limit` (number): Number of products per page.
-   **`GET /api/v1/products/static`:** Retrieve a static list of products for testing.

### Example Usage

-   **Get all products:**

    ```bash
    curl http://localhost:3000/api/v1/products
    ```

-   **Filter by company and sort by price:**

    ```bash
    curl "http://localhost:3000/api/v1/products?company=ikea&sort=price"
    ```

-   **Filter by price greater than 50 and limit to 10 products per page:**

    ```bash
    curl "http://localhost:3000/api/v1/products?numericfilters=price>50&limit=10"
    ```

## Technologies Used

-   Node.js and Express
-   MongoDB with Mongoose

## License

This project is licensed under the MIT License.

## Made By

Created by Bhanu Udhay Singh
