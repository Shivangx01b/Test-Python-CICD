from fastapi import FastAPI, APIRouter
import httpx
import requests

app = FastAPI()

# APIRouter with prefix - should create grouped APIs
api_v1_router = APIRouter(prefix="/api/v1", tags=["v1"])
api_v2_router = APIRouter(prefix="/api/v2", tags=["v2"])

@api_v1_router.get("/users")
async def get_users_v1():
    # Expected full_path: /api/v1/users
    async with httpx.AsyncClient() as client:
        response = await client.get("https://external-api.com/users")
    return response.json()

@api_v1_router.post("/users")
async def create_user_v1():
    # Expected full_path: /api/v1/users
    requests.post("https://validation-api.com/users")
    return {"status": "created"}

@api_v1_router.get("/users/{user_id}")
async def get_user_v1(user_id: int):
    # Expected full_path: /api/v1/users/{user_id}
    return {"id": user_id}

@api_v2_router.get("/users")
async def get_users_v2():
    # Expected full_path: /api/v2/users
    return {"version": "v2"}

# Direct app routes (no grouping)
@app.get("/health")
async def health():
    # Expected full_path: /health
    return {"status": "healthy"}

@app.get("/status")
async def status():
    # Expected full_path: /status
    return {"status": "ok"}

# Include routers with their prefixes
app.include_router(api_v1_router)
app.include_router(api_v2_router)