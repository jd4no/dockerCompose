"""Views page for clicks app."""
from django.http import HttpResponse
import requests


def index(request):
    """Test index page for clicks app."""
    r = requests.post('http://api/visits/')
    visits = r.json()['Visits']
    resp = 'You have been here {} times'.format(visits)
    return HttpResponse(resp)
