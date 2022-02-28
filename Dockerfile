FROM mysql/mysql-server:latest

# Pass SQL files from host to container
COPY sql/create_database.sql /docker-entrypoint-initdb.d/
# Pass Script files from host to container
COPY script/* /docker-entrypoint-initdb.d/