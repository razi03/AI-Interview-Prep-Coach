# AI Interview Coach Backend

This is the backend API for the AI Interview Coach project. It uses FastAPI and Google Gemini to provide AI-powered interview coaching and advice.

## Features

- FastAPI REST API for interview questions and advice
- Integration with Google Gemini (Generative AI) via API key
- CORS enabled for local frontend development
- Configurable via `.env` file

## Requirements

- Python 3.10+
- Google Gemini API key (set in `.env` at project root)

## Setup

1. **Clone the repository** and navigate to the backend folder:

   ```sh
   cd backend
   ```

2. **Create and activate a virtual environment** (recommended):

   ```sh
   python3 -m venv venv

   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**:

   ```sh
   pip install -r requirements.txt
   ```

4. **Set up your `.env` file**  
   Ensure the project root `.env` file contains your Google Gemini API key:
   ```
   GEMINI_API_KEY=your-api-key-here
   ```

## Running the Backend

Start the FastAPI server with Uvicorn:

```sh
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`.

## API Endpoint

- **POST** `/api/interview`
  - Request JSON: `{ "message": "Your interview question or request" }`
  - Response JSON: `{ "reply": "AI coach's response" }`

## File Structure

- `main.py` — FastAPI app and API routes
- `agent.py` — Gemini model integration and response logic
- `config.py` — Loads API key from `.env`
- `requirements.txt` — Python dependencies

## Troubleshooting

- Ensure your `.env` file is at the project root and contains a valid API key.
- If you see errors about missing API key, check your `.env` and restart the server.
- For CORS issues, make sure the frontend is running on `http://localhost:5173`.

---
