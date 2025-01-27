# Grade-Guide - AI-Powered Learning Platform

## Overview
Grade-Guide is a modern, AI-powered learning platform designed to enhance students' educational experience through interactive features, personalized learning, and smart study tools. Built with Nuxt.js and powered by Google's Gemini AI, it offers a comprehensive suite of learning tools and features.

## Key Features

### 1. AI Tutor
- Interactive chat interface with AI tutor
- Real-time responses and explanations
- File upload support for contextual learning
- Markdown and code syntax highlighting support

### 2. Smart Quiz Generator
- AI-powered quiz generation based on subject matter
- Customizable difficulty levels
- Support for multiple file uploads
- Detailed explanations for each answer
- Performance tracking and analytics

### 3. Zen Study Mode
- Pomodoro timer for focused study sessions
- Task management system
- Motivational quotes
- Session summaries and productivity tracking

### 4. Study Groups
- Real-time group chat
- Collaborative learning environment
- Subject-based group organization
- File sharing capabilities

### 5. Progress Tracking
- Detailed performance analytics
- Learning progress visualization
- Strength and weakness analysis
- Personalized study recommendations

## Technical Stack

### Frontend
- Nuxt.js 3
- Vue.js
- Tailwind CSS
- Chart.js for analytics
- Markdown-it for content rendering
- Highlight.js for code syntax highlighting

### Backend
- Nuxt Server Routes
- Google Gemini AI API
- Firebase Integration
- File handling with h3-formidable

### Authentication
- Firebase Authentication
- Protected routes
- User profile management

## Project Structure

### Core Components
- Chat Interface (`components/tutor/ChatInterface.vue`)
- Quiz Generator (`pages/subjects/[subjectID]/quiz.vue`)
- Task Board (`components/TaskBoard.vue`)
- Calendar (`components/calendar.vue`)
- Formatted Message (`components/tutor/FormattedMessage.vue`)

### API Integration
The project uses several API endpoints:
- `/api/chat` - AI tutor interactions
- `/api/generate-quiz` - Quiz generation
- `/api/generate-analysis` - Performance analysis
- `/api/quotes` - Motivational quotes

### Styling
- Custom Tailwind configuration
- Responsive design
- Modern UI components
- Gradient effects and animations

## Getting Started

### Prerequisites
- Node.js (Latest LTS version)
- NPM or other package manager
- Google Gemini API key
- Firebase project credentials

### Installation
1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with required credentials:
```env
GEMINI_API_KEY=your_gemini_api_key
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id
```

4. Start the development server:
```bash
npm run dev
```

## Features in Detail

### AI Tutor
The AI tutor provides intelligent responses using Google's Gemini AI model. It can:
- Answer subject-specific questions
- Explain complex concepts
- Analyze uploaded materials
- Provide code examples with syntax highlighting

### Quiz System
The quiz generator creates personalized quizzes with:
- Multiple difficulty levels
- Custom question counts
- File upload support for context
- Detailed explanations
- Performance tracking

### Progress Tracking
The system tracks and analyzes:
- Quiz performance
- Study patterns
- Strengths and weaknesses
- Learning progress over time

## Contributing
Contributions are welcome!