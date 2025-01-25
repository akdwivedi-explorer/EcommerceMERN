# E-Commerce Website

This is a full-stack e-commerce website built using the **MERN** stack (MongoDB, Express.js, React.js, Node.js). The application allows users to browse products, add them to a cart, and purchase them while providing an admin interface for managing products, users, and orders.

## Features

### User Features
- User authentication and authorization (Login/Signup with JWT)
- Browse products with categories and search functionality
- Add products to the cart
- Checkout and payment integration
- Order history and tracking

### Additional Features
- Responsive design for desktop and mobile
- Secure API endpoints
- Efficient database queries

---

## Technologies Used

### Frontend
- **React.js**: For building the user interface
- **Redux**: For state management
- **Axios**: For making API requests
- **Tailwind CSS**: For styling

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web framework for building the RESTful API

### Database
- **MongoDB**: NoSQL database for storing user, product, and order data
- **Mongoose**: ODM for MongoDB

---

## Installation

### Prerequisites
- Node.js installed
- MongoDB installed or access to a MongoDB Atlas cluster
- npm or yarn package manager

### Steps

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/akdwivedi-explorer/EcommerceMERN.git]
   cd EcommerceMERN
   ```

2. **Install dependencies**:
   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the `backend` directory with the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLIENT_URL=http://localhost:3000
   ```

4. **Run the application**:
   ```bash
   # Run backend server
   cd server
   npm run dev

   # Run frontend
   cd ../client
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`.

---

## Folder Structure

```
├── server
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── index.js
│   └── .env
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── redux
│   │   ├── App.js
│   │   └── index.js
├── README.md
└── package.json
```

---

## Scripts

### Backend Scripts
- `npm start`: Starts the backend server in production mode

### Frontend Scripts
- `npm start`: Runs the React development server

---

## API Endpoints

### Authentication
- `POST /api/users/login`: Login user
- `POST /api/users/register`: Register user

### Products
- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get single product
- `POST /api/products`: Add a new product (Admin only)

### Orders
- `POST /api/orders`: Create a new order
- `GET /api/orders/myorders`: Get user orders

---

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact

For any questions or feedback, feel free to reach out:
- **Email**: akumardwivedi77@gmail.com
- **GitHub**: [Ashutosh Dwivedi](https://github.com/akdwivedi-explorer)

---

Happy coding!
