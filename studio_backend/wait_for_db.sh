#!/bin/sh

set -e

host="$DB_HOST"
shift
cmd="$@"

# Function to check if PostgreSQL is ready
wait_for_postgres() {
    until pg_isready -h "$host" -U "$POSTGRES_USER"; do
        >&2 echo "Postgres is unavailable - sleeping"
        sleep 1
    done
    >&2 echo "Postgres is up - executing command"
}

# Call the function to wait for PostgreSQL
wait_for_postgres

# Execute the command passed as arguments to this script
exec $cmd
