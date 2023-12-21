from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class ProductBase(BaseModel):
    title: str
    description: str 
    price: float
    image:str
    supplier:str
    location:str
    
    
class CreateProduct(ProductBase):
    pass




class ProductResponse(ProductBase):
    id:int
    created_at:datetime
    
    class Config:
        from_attributes = True