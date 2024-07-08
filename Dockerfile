# Use a minimal base image with a simple HTTP server
FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the current directory contents into the container
COPY . .

# Install the HTTP server
RUN pip install httpserver

# Expose port 8000
EXPOSE 8000

# Command to run the HTTP server
CMD ["python", "-m", "http.server", "8000"]
