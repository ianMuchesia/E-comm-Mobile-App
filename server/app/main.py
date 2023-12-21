from fastapi import FastAPI
from .database import engine
from . import models
from .routers import product



models.Base.metadata.create_all(bind=engine)
app = FastAPI()
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["https://1f84-197-232-104-16.ngrok-free.app"]  # Correct format

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(product.router)


@app.get("/")
def root():
    return {"message":"this is fastapi"}