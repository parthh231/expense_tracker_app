# 💸 Expense Tracker — Full Stack App

A full-stack personal finance management application built with **React**, **Node.js**, **Express**, and **MongoDB**. Track your income and expenses, visualize your financial data with charts, and manage your balance — all in one place.

---

## 🖥️ Live Preview

> Run locally by following the setup instructions below.

---

## ✨ Features

- 🔐 **Authentication** — Register and Login with local storage-based session management
- 📊 **Dashboard** — Overview of total income, expenses, and balance with a line chart
- 💰 **Income Management** — Add, view, and delete income entries with categories
- 💳 **Expense Management** — Add, view, and delete expense entries with categories
- 📈 **Transaction History** — Recent 3 transactions displayed on the dashboard
- 🎨 **Animated UI** — Floating orb background, smooth transitions, glassmorphism design
- 📅 **Date Picker** — Select custom dates for each transaction
- 📉 **Min/Max Stats** — See minimum and maximum salary and expense at a glance

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| styled-components | CSS-in-JS styling |
| Chart.js + react-chartjs-2 | Data visualization |
| Axios | HTTP requests |
| react-datepicker | Date selection |
| moment.js | Date formatting |
| react-router-dom v7 | Routing |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express | REST API server |
| MongoDB + Mongoose | Database |
| dotenv | Environment variables |
| CORS | Cross-origin requests |
| bcrypt / bcryptjs | Password hashing |
| jsonwebtoken | JWT authentication |
| nodemon | Development auto-reload |

---

## 📁 Project Structure

```
expense-tracker_fullstack-master/
├── backend/
│   ├── controllers/
│   │   ├── income.js          # Income CRUD logic
│   │   └── expense.js         # Expense CRUD logic
│   ├── models/
│   │   ├── IncomeModel.js     # Mongoose Income schema
│   │   ├── ExpenseModel.js    # Mongoose Expense schema
│   │   └── Usermodel.js       # Mongoose User schema
│   ├── routes/
│   │   ├── transactions.js    # Income & expense routes
│   │   └── Authroutes.js      # Auth routes (register/login)
│   ├── db/
│   │   └── db.js              # MongoDB connection
│   ├── app.js                 # Express app entry point
│   └── package.json
│
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── Components/
    │   │   ├── Dashboard/     # Main dashboard view
    │   │   ├── Income/        # Income page & form
    │   │   ├── Expenses/      # Expense page & form
    │   │   ├── Chart/         # Line chart component
    │   │   ├── Navigation/    # Sidebar navigation
    │   │   ├── Login/         # Login & register forms
    │   │   ├── IncomeItem/    # Reusable transaction card
    │   │   ├── Button/        # Reusable button
    │   │   └── Orb/           # Animated background orb
    │   ├── context/
    │   │   └── globalContext.js  # Global state (income, expenses)
    │   ├── History/
    │   │   └── History.js     # Recent transaction list
    │   ├── styles/
    │   │   ├── GlobalStyle.js # Global CSS variables & resets
    │   │   └── Layouts.js     # Layout styled-components
    │   ├── utils/
    │   │   ├── Icons.js       # FontAwesome icon exports
    │   │   ├── menuItems.js   # Navigation menu config
    │   │   ├── dateFormat.js  # Date formatting helper
    │   │   └── useWindowSize.js # Window resize hook
    │   ├── App.js
    │   └── index.js
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14+
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- npm or yarn

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/expense-tracker-fullstack.git
cd expense-tracker-fullstack
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost/your_db_name
JWT_SECRET=your_jwt_secret_key
```

Start the backend server:

```bash
npm start
```

The API will run at `http://localhost:5000`

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

The app will open at `http://localhost:3000`

---

## 🔌 API Endpoints

Base URL: `http://localhost:5000/api/v1`

### Income
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/add-income` | Add a new income |
| `GET` | `/get-incomes` | Get all incomes |
| `DELETE` | `/delete-income/:id` | Delete income by ID |

### Expenses
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/add-expense` | Add a new expense |
| `GET` | `/get-expenses` | Get all expenses |
| `DELETE` | `/delete-expense/:id` | Delete expense by ID |

---

## 📊 Income Categories

`Salary` · `Freelancing` · `Investments` · `Stocks` · `Bitcoin` · `Bank Transfer` · `YouTube` · `Other`

## 💸 Expense Categories

`Education` · `Groceries` · `Health` · `Subscriptions` · `Takeaways` · `Clothing` · `Travelling` · `Other`

---

## 🎨 UI Highlights

- **Glassmorphism** cards with backdrop blur and white borders
- **Animated gradient orb** background that moves across the screen
- **Color-coded transactions** — green for income, red for expenses
- **Responsive line chart** showing income vs. expenses over time
- **FontAwesome icons** for each transaction category

---

## 🔒 Authentication

Authentication is currently implemented using **localStorage** on the frontend:

- Users register and credentials are saved in `localStorage`
- On login, credentials are validated client-side
- The backend has JWT infrastructure (`jsonwebtoken`, `bcrypt`) ready for full server-side auth integration

> ⚠️ **Note:** The current auth flow uses localStorage for simplicity. For production, connect the frontend login/register forms to the backend `/api/auth` routes with JWT token handling.

---

## 🐛 Known Issues / Future Improvements

- [ ] Connect login/register to backend JWT authentication
- [ ] Add user-specific data isolation (each user sees only their transactions)
- [ ] Add pagination for long transaction lists
- [ ] Add edit functionality for existing transactions
- [ ] Make the UI fully responsive for mobile
- [ ] Add data export (CSV/PDF)

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Parth**

> Built with ❤️ using React, Node.js, and MongoDB
