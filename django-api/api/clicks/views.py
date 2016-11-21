"""Views page for clicks app."""
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.connections import get_redis


@api_view(['POST', ])
def index(request):
    """Test index page for clicks app."""
    print("Hit API")
    r = get_redis()
    print("API POST")
    r.incr('clicks')
    return Response()


@api_view(['GET', ])
def index2(request):
    """Test index page for clicks app."""
    print("Hit API")
    r = get_redis()
    print("API GET")
    visits = int(r.get('clicks').decode())
    return Response({'Clicks': visits})
