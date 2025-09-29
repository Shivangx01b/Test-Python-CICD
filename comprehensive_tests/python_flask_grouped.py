from flask import Flask, Blueprint
import requests

app = Flask(__name__)

# Blueprint with URL prefix - should create grouped APIs
api_v1 = Blueprint('api_v1', __name__, url_prefix='/api/v1')
api_v2 = Blueprint('api_v2', __name__, url_prefix='/api/v2')

@api_v1.route('/users', methods=['GET'])
def get_users_v1():
    # Expected full_path: /api/v1/users
    response = requests.get('https://external-api.com/users')
    return response.json()

@api_v1.route('/users/<int:user_id>', methods=['GET'])
def get_user_v1(user_id):
    # Expected full_path: /api/v1/users/<int:user_id>
    return {"id": user_id}

@api_v1.route('/posts', methods=['POST'])
def create_post_v1():
    # Expected full_path: /api/v1/posts
    requests.post('https://validation-service.com/posts')
    return {"status": "created"}

@api_v2.route('/users', methods=['GET'])
def get_users_v2():
    # Expected full_path: /api/v2/users
    return {"version": "v2"}

# Regular routes (no grouping)
@app.route('/health')
def health():
    # Expected full_path: /health
    return "OK"

app.register_blueprint(api_v1)
app.register_blueprint(api_v2)