# AI Interview Coach

AI Interview Coach is a full-stack application that helps users practice and get advice for job interviews using AI. It consists of a React frontend and a FastAPI backend powered by Google Gemini.

## Features

- Ask interview questions and get personalized AI responses
- Practice behavioral and technical interviews
- Modern, responsive UI
- Easy local development setup

## Project Structure

```
.
├── .env
├── README.md
├── backend/
│   ├── agent.py
│   ├── config.py
│   ├── main.py
│   ├── requirements.txt
│   └── ...
└── frontend/
    ├── src/
    ├── package.json
    ├── tailwind.config.js
    ├── ...
```

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/ai-interview-coach.git
cd ai-interview-coach
```

### 2. Set Up the Backend

See [backend/README.md](backend/README.md) for detailed instructions.

- Install Python dependencies
- Set up `.env` with your Google Gemini API key
- Run the FastAPI server

### 3. Set Up the Frontend

See [frontend/README.md](frontend/README.md) for detailed instructions.

- Install Node.js dependencies
- Start the React development server

### 4. Usage

- Open [http://localhost:5173](http://localhost:5173) in your browser.
- Ask interview questions and receive AI-powered feedback.

## Environment Variables

Create a `.env` file at the project root with your Gemini API key:

```
GEMINI_API_KEY=your-api-key-here
```

##
