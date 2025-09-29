from django.urls import path, include
from django.http import HttpResponse
import requests

# Django URL patterns with grouping via include()
def user_list(request):
    # External API call
    response = requests.get('https://api.users.com/list')
    return HttpResponse("User list")

def user_detail(request, user_id):
    return HttpResponse(f"User {user_id}")

def post_list(request):
    requests.get('https://api.posts.com/list')
    return HttpResponse("Post list")

# URL patterns with grouped structure
api_v1_patterns = [
    path('users/', user_list, name='user-list'),           # Expected: /api/v1/users/
    path('users/<int:user_id>/', user_detail, name='user-detail'), # Expected: /api/v1/users/<int:user_id>/
    path('posts/', post_list, name='post-list'),           # Expected: /api/v1/posts/
]

api_v2_patterns = [
    path('users/', user_list, name='user-list-v2'),        # Expected: /api/v2/users/
]

urlpatterns = [
    path('api/v1/', include(api_v1_patterns)),  # Group prefix
    path('api/v2/', include(api_v2_patterns)),  # Group prefix
    path('health/', lambda r: HttpResponse("OK")), # No grouping
]