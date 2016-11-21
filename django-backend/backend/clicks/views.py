"""Views page for clicks app."""
from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests


@api_view(['POST', ])
def index(request):
    """Test index page for clicks app."""
    print("Hit backend")
    print("Backend POST")
    r = requests.post('http://api/clicks/')
    if r.status_code == 200:
        return Response()


@api_view(['GET', ])
def index2(request):
    """Test index page for clicks app."""
    print("Hit backend")
    print("Backend GET")
    r = requests.get('http://api/visits/')
    count = r.json()['Clicks']
    return Response({'Clicks': count})
