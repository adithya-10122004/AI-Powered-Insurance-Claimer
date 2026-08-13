from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="AI Insurance Claim Estimator",
    description="AI-powered vehicle damage and insurance claim estimation system",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "message": "AI Insurance Claim Estimator API is running!"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }