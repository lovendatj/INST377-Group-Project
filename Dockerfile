FROM mysql/mysql-server:latest

# Pass SQL files from host to container
ADD ./startup-scripts/ /docker-entrypoint-initdb.d/