from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from agent import get_interview_response

app = FastAPI()

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # <-- This is the correct Vite dev URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Prompt(BaseModel):
    message: str

@app.post("/api/interview")
async def interview_chat(prompt: Prompt):
    response = get_interview_response(prompt.message)
    return {"reply": response}
