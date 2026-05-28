# Order From China 🛍️

A professional e-commerce platform similar to AliExpress - enabling users to order products directly from China with real-time tracking, secure payments, and comprehensive management features.

## 🎯 Project Overview

**Order From China** is a full-stack web and mobile application that provides:
- User registration and authentication
- Product browsing and search
- Shopping cart and checkout
- Secure payment integration (Stripe/PayPal)
- Order tracking and management
- Real-time notifications
- User reviews and ratings
- Admin dashboard

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js with TypeScript
- **Database**: MongoDB + PostgreSQL
- **Authentication**: JWT + OAuth2
- **Payment**: Stripe API
- **Real-time**: Socket.io
- **API Documentation**: Swagger/OpenAPI

### Frontend
- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **State Management**: Redux Toolkit
- **UI Library**: Material-UI (MUI) / Tailwind CSS
- **API Client**: Axios + React Query
- **Real-time**: Socket.io Client

### DevOps & Tools
- **Version Control**: Git
- **CI/CD**: GitHub Actions
- **Containerization**: Docker & Docker Compose
- **Code Quality**: ESLint, Prettier
- **Testing**: Jest, React Testing Library

## 📁 Project Structure

```
order-from-china/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── services/
│   │   ├── utils/
│   │   └── app.ts
│   ├── .env.example
│   ├── package.json
│   ├── tsconfig.json
│   ├── Dockerfile
│   └── README.md
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── store/
│   │   ├── types/
│   │   ├── utils/
│   │   └── App.tsx
│   ├── public/
│   ├── .env.example
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── Dockerfile
│   └── README.md
│
├── docs/
│   ├── API.md
│   ├── DATABASE.md
│   ├── DEPLOYMENT.md
│   └── ARCHITECTURE.md
│
├── .github/
│   └── workflows/
│       ├── backend-ci.yml
│       ├── frontend-ci.yml
│       └── deploy.yml
│
├── docker-compose.yml
├── .gitignore
└── LICENSE

```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Docker & Docker Compose
- Git

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

### Docker Setup
```bash
docker-compose up -d
```

## 📚 Core Features

### 1. User Management
- Registration & Login
- Email Verification
- Password Reset
- Profile Management
- Role-based Access Control (Admin, User, Seller)

### 2. Product Catalog
- Product listing with filters
- Advanced search
- Product categories
- Inventory management
- Image management

### 3. Shopping Cart & Orders
- Add to cart
- Checkout process
- Order history
- Order status tracking
- Return/Refund management

### 4. Payments
- Stripe integration
- PayPal integration
- Multiple payment methods
- Secure payment processing
- Invoice generation

### 5. Real-time Features
- Live notifications
- Order status updates
- Chat support
- Real-time inventory updates

### 6. Reviews & Ratings
- User reviews
- Product ratings
- Star system (1-5 stars)
- Review moderation

### 7. Admin Dashboard
- User management
- Product management
- Order management
- Analytics & reports
- Revenue tracking

## 🔐 Security Features
- JWT token authentication
- Password hashing (bcrypt)
- CORS protection
- Rate limiting
- Input validation & sanitization
- SQL injection prevention
- XSS protection

## 📊 Database Schema

### MongoDB Collections
- Users
- Products
- Orders
- Reviews
- Notifications

### PostgreSQL Tables
- Users (auth)
- Orders
- Transactions
- Audit logs

## 🧪 Testing

```bash
# Backend tests
cd backend && npm test

# Frontend tests
cd frontend && npm test

# Integration tests
npm run test:integration
```

## 📝 API Documentation

Full API documentation is available at:
- **Local**: `http://localhost:5000/api/docs`
- **Production**: `https://api.orderfromchina.com/docs`

## 🌐 Deployment

See [DEPLOYMENT.md](./docs/DEPLOYMENT.md) for detailed deployment instructions.

### Production Checklist
- [ ] Environment variables configured
- [ ] Database migrations run
- [ ] SSL certificates installed
- [ ] CDN configured
- [ ] Monitoring setup
- [ ] Backup strategy

## 📱 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Refresh token

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product details
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id` - Update order status (Admin)
- `DELETE /api/orders/:id` - Cancel order

### Reviews
- `POST /api/reviews` - Create review
- `GET /api/products/:id/reviews` - Get product reviews
- `PUT /api/reviews/:id` - Update review
- `DELETE /api/reviews/:id` - Delete review

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 Development Guidelines

- Follow TypeScript strict mode
- Write unit tests for new features
- Use meaningful commit messages
- Keep code DRY and modular
- Document complex logic

## 🐛 Bug Reports

Found a bug? Please create an issue with:
- Description of the bug
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Project Lead**: as1028392
- **Contributors**: [Add contributors here]

## 📞 Contact & Support

- **Email**: support@orderfromchina.com
- **Issues**: [GitHub Issues](https://github.com/as1028392/order-from-china/issues)
- **Discussions**: [GitHub Discussions](https://github.com/as1028392/order-from-china/discussions)

## 🎉 Acknowledgments

- [Express.js](https://expressjs.com/)
- [React](https://react.dev/)
- [Material-UI](https://mui.com/)
- [MongoDB](https://www.mongodb.com/)
- [Stripe](https://stripe.com/)

---

**Last Updated**: May 2026
**Status**: 🟡 In Development
