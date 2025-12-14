# NoteBook App - Frontend

<div align="center">

**A modern, responsive notebook application built with React and Tailwind CSS**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Available-green?style=for-the-badge)](https://note-book-app-frontend.vercel.app/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

</div>

## 📋 Overview

NoteBook App is a clean, modern, and intuitive note-taking application that allows users to create, view, and manage their notes in an organized way. Built with React 18 and Vite, it features a responsive design with both landing and application pages.

**Live Demo:** [https://note-book-app-frontend.vercel.app/](https://note-book-app-frontend.vercel.app/)

## ✨ Features

- **📝 Note Management**: Create, read, and delete notes
- **🎨 Modern UI**: Clean, responsive interface built with Tailwind CSS
- **📱 Fully Responsive**: Works seamlessly on desktop, tablet, and mobile
- **⚡ Fast Performance**: Built with Vite for optimal performance
- **🔍 Search & Filter**: Easily find your notes with filtering capabilities
- **🛡️ Rate Limiting**: Built-in rate limiting UI for API protection
- **🎯 Landing Page**: Professional landing page to showcase features
- **📄 Note Detail View**: View and manage individual notes in detail

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Library |
| **Vite** | Build Tool & Dev Server |
| **Tailwind CSS** | Styling Framework |
| **React Router** | Client-side Routing |
| **Axios** | HTTP Client |
| **ESLint** | Code Quality |

## 📁 Project Structure

```
├── public/                    # Static assets
│   ├── screenshot-for-readme.png
│   └── vite.svg
├── src/
│   ├── components/           # Reusable components
│   │   ├── Navbar.jsx        # Navigation bar
│   │   ├── NoteCard.jsx      # Individual note display
│   │   ├── NotesNotFound.jsx # Empty state component
│   │   ├── RateLimitedUI.jsx # Rate limiting UI
│   │   └── landing/         # Landing page components
│   │       ├── CTA.jsx       # Call to action
│   │       ├── Features.jsx  # Features section
│   │       ├── Footer.jsx    # Page footer
│   │       └── Header.jsx    # Landing header
│   ├── pages/               # Page components
│   │   ├── app/             # Application pages
│   │   │   ├── CreatePage.jsx     # Create new note
│   │   │   ├── HomePage.jsx       # Notes dashboard
│   │   │   └── NoteDetailPage.jsx # Note detail view
│   │   └── landing/         # Landing pages
│   │       └── LandingPage.jsx    # Main landing page
│   ├── lib/                 # Utilities and configurations
│   │   ├── axios.js        # API client configuration
│   │   └── utils.js        # Utility functions
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
└── configuration files      # Build and styling configs
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/MohammadAli-14/NoteBook-App-Frontend.git
cd NoteBook-App-Frontend
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables
```bash
# Create a .env file in the root directory
touch .env

# Add your backend API URL
echo "VITE_API_URL=http://localhost:5000/api" >> .env
```

### 4. Start Development Server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## ⚙️ Environment Configuration

Create a `.env` file in the root directory:

```env
# Backend API Configuration
VITE_API_URL=http://localhost:5000/api

# Optional: Feature flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_DEBUG=true
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build locally

# Code Quality
npm run lint       # Run ESLint for code quality
npm run format     # Format code with Prettier

# Testing (if configured)
npm test           # Run tests
```

## 🎨 Key Components

### **NoteCard.jsx**
Displays individual notes in a card format with title, content preview, and actions.

### **Navbar.jsx**
Responsive navigation bar with links to different sections of the application.

### **RateLimitedUI.jsx**
User interface component that displays when API rate limits are exceeded.

### **CreatePage.jsx**
Page for creating new notes with form validation and submission.

### **HomePage.jsx**
Main dashboard displaying all notes with search and filter functionality.

## 🔌 Backend Integration

This frontend is designed to work with a backend API that provides the following endpoints:

- `GET /api/notes` - Retrieve all notes
- `GET /api/notes/:id` - Retrieve a specific note
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

### Example API Integration
```javascript
// Using the configured axios instance from src/lib/axios.js
import api from '../lib/axios';

const getNotes = async () => {
  const response = await api.get('/notes');
  return response.data;
};

const createNote = async (noteData) => {
  const response = await api.post('/notes', noteData);
  return response.data;
};
```

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop (>1024px)**: Full-width layout with sidebar navigation
- **Tablet (768px-1024px)**: Compact layout with adjusted spacing
- **Mobile (<768px)**: Single-column layout with mobile-friendly controls

## 🚀 Deployment

The application is deployed and live at: [https://note-book-app-frontend.vercel.app/](https://note-book-app-frontend.vercel.app/)

### **Deploy to Vercel (Recommended)**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on each push

### **Build for Production**
```bash
npm run build
# Output will be in the 'dist' directory
```

### **Docker Deployment**
```dockerfile
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🧪 Testing

### **Run Tests**
```bash
# If testing is configured
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 🤝 Contributing

We welcome contributions to improve the NoteBook App! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### **Development Guidelines**
- Follow existing code style and conventions
- Add comments for complex logic
- Update documentation for new features
- Test changes thoroughly
- Ensure responsive design compatibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Mohammad Ali** - *Full Stack Developer* - [MohammadAli-14](https://github.com/MohammadAli-14)

## 🙏 Acknowledgments

- **Vite Team** for the excellent build tool and development experience
- **Tailwind CSS** for the utility-first CSS framework
- **React Community** for the amazing ecosystem and tools

## 🔗 Important Links

- **Live Demo**: [https://note-book-app-frontend.vercel.app/](https://note-book-app-frontend.vercel.app/)
- **Frontend Repository**: [NoteBook-App-Frontend](https://github.com/MohammadAli-14/NoteBook-App-Frontend)
- **Backend Repository**: [Check main repository for backend link]

---
<div align="center">

**Built with ❤️ by [Mohammad Ali](https://github.com/MohammadAli-14)**

⭐ **Star this repo if you found it useful!** ⭐

</div>

**Note**: This frontend requires a backend API for full functionality. Make sure to configure the backend URL in the environment variables before running the application. The application is designed to handle API rate limiting gracefully with appropriate user feedback.
