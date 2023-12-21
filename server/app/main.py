from fastapi import FastAPI
from .database import engine
from . import models
from .routers import product



models.Base.metadata.create_all(bind=engine)
app = FastAPI()

app.include_router(product.router)


@app.get("/")
def root():
    return {"message":"this is fastapi"}