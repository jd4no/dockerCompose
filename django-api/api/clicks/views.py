"""Views page for clicks app."""
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.connections import get_redis


@api_view(['POST', ])
def index(request):
    """Test index page for clicks app."""
    r = get_redis()
    r.incr('visits')
    visits = int(r.get('visits').decode())
    return Response({'Visits': visits})
