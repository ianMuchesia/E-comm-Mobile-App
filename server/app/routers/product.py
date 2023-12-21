from .. import models,schemas
from ..database import get_db
from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends, HTTPException,status
from typing import List


router = APIRouter(
    prefix="/products",
    tags=["products"]
)

@router.get("/", response_model=List[schemas.ProductResponse])
def get_posts(db:Session = Depends(get_db)):
    products = db.query(models.Product).all()
    return products


@router.post("/", status_code=status.HTTP_201_CREATED, response_model=schemas.ProductResponse)
def create_products(product: schemas.CreateProduct, db: Session = Depends(get_db)):
    new_product = models.Product(**product.model_dump())
    print(new_product)
    db.add(new_product)
    db.commit()
    db.refresh(new_product)
    return new_product





@router.get("/{product_id}", response_model=schemas.ProductResponse)
def get_products(product_id:str, db:Session = Depends(get_db)):
    product = db.query(models.Product).filter(models.Product.id == product_id).first()
    
    
    if not product:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Product not found")

    return product
    