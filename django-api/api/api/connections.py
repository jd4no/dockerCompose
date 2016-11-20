"""Connections."""
from redis import Redis


def get_redis():
    r = Redis(host="redis", db=0, socket_timeout=5)
    return r
