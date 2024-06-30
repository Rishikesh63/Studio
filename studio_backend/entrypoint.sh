#!/bin/sh

# Exit the script on any error
set -e

# Wait for the PostgreSQL database to be available
until pg_isready -h "$DB_HOST" -p 5432 -U "$POSTGRES_USER"; do
  echo "Postgres is unavailable - sleeping"
  sleep 1
done

# Create database migrations
python manage.py makemigrations

# Run database migrations
python manage.py migrate

# Collect static files without user input
python manage.py collectstatic --noinput

# Execute the command passed as arguments to this script
exec "$@"
