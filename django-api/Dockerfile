# Start with Python 3.5 base image
FROM python:3.5

# Set the application directory
WORKDIR /app

# Install our requirements.txt
ADD requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

# Copy our code from the current folder to /app inside the container
ADD . /app

# Make port 80 available for links and/or publish
EXPOSE 80

# Move into the api project folder
WORKDIR /app/api

# Define our command to be run when launching the container
CMD ["gunicorn", "api.wsgi:application", "-b", "0.0.0.0:80", "--log-file", "-", "--access-logfile", "-", "--workers", "2", "--keep-alive", "0"]
