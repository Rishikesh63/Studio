# Dockerfile for Backend
FROM python:3.9-slim

WORKDIR /app

# Install the PostgreSQL client tools
RUN apt-get update && apt-get install -y postgresql-client

COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Copy the entrypoint and wait scripts into the container
COPY entrypoint.sh /app/entrypoint.sh
COPY wait_for_db.sh /app/wait_for_db.sh

# Make the entrypoint and wait scripts executable
RUN chmod +x /app/entrypoint.sh /app/wait_for_db.sh

# Set the entrypoint to the script
ENTRYPOINT ["/app/entrypoint.sh"]

# Default command to run the development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
