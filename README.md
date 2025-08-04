# Whisper - Real-Time Chat Application

A modern, real-time chat application built with the MERN stack featuring instant messaging, user authentication, and online status tracking.

## ✨ Features

-   🌟 **Modern Tech Stack**: MERN (MongoDB, Express, React, Node.js) + Socket.io + TailwindCSS + DaisyUI
-   🔐 **Secure Authentication**: JWT-based authentication and authorization
-   ⚡ **Real-Time Messaging**: Instant message delivery with Socket.io
-   🟢 **Online Status**: Live user online/offline status tracking
-   🎯 **State Management**: Efficient global state management with Zustand
-   🛡️ **Error Handling**: Comprehensive error handling on both client and server
-   📱 **Responsive Design**: Beautiful, mobile-friendly UI
-   🚀 **Production Ready**: Optimized for deployment with environment configuration

## 🛠️ Tech Stack

- **Frontend**: React, Vite, TailwindCSS, DaisyUI, Zustand
- **Backend**: Node.js, Express, Socket.io, JWT
- **Database**: MongoDB with Mongoose
- **Real-time**: Socket.io for instant messaging

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Whisper-Real-time-Chat-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**

   Create `.env` file in the root directory:
   ```env
   PORT=4000
   MONGO_DB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```

4. **Build the frontend**
   ```bash
   npm run build
   ```

5. **Start the application**
   ```bash
   npm start
   ```

6. **Access the app**
   - Open `http://localhost:4000` in your browser
   - Register a new account or login
   - Start chatting in real-time!

## 🔧 Development

### Frontend Development
```bash
cd frontend
npm run dev
```

### Backend Development
```bash
npm run server
```

## 🌐 Deployment

### Environment Variables for Production

#### Backend (.env)
```env
PORT=4000
MONGO_DB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=production
FRONTEND_URL=https://your-frontend-domain.com
```

#### Frontend (.env)
```env
VITE_BACKEND_URL=https://your-backend-domain.com
```

### Recommended Deployment Platforms

- **Full-Stack**: Render, Railway, Heroku
- **Frontend Only**: Vercel, Netlify
- **Backend Only**: Render, Railway, DigitalOcean

> **Note**: Vercel doesn't support WebSocket connections, so for full-stack deployment, use Render or Railway.

## 📁 Project Structure

```
├── backend/
│   ├── controllers/     # API controllers
│   ├── models/         # MongoDB models
│   ├── routes/         # API routes
│   ├── socket/         # Socket.io configuration
│   └── server.js       # Express server
├── frontend/
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── context/    # React contexts
│   │   ├── hooks/      # Custom hooks
│   │   └── zustand/    # State management
│   └── dist/           # Built frontend
└── package.json
```

## 🔒 Security Features

- JWT token-based authentication
- Password hashing with bcrypt
- CORS configuration for production
- Environment variable protection
- Input validation and sanitization

## 🎯 Key Features Implemented

- ✅ **Real-time messaging** without page refresh
- ✅ **User authentication** with JWT
- ✅ **Online/offline status** tracking
- ✅ **Message persistence** in MongoDB
- ✅ **Responsive design** for all devices
- ✅ **Production-ready** configuration
- ✅ **Error handling** and validation
- ✅ **Socket.io integration** for instant updates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

---

**Built with ❤️ using the MERN stack**
