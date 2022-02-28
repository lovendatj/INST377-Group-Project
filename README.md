# INST377-Group-Project
## Getting Started
Docker an platform for development that enables you to separate your application from your infrastructure allowing you to share contains seemlessly across platforms.

Make sure you have Docker installed. To install docker visit [here](https://www.docker.com/).


1. Clone the [repository](https://github.com/lovendatj/INST377-Group-Project.git) and CD into the local directory. 
```bash
git clone https://github.com/lovendatj/INST377-Group-Project.git
cd INST377-Group-Project
```

2. With docker daemon running in the background, start the container using the following command. For this example we will be running the inst-container (the name of the docker container) detached.
```bash
docker-compose up -d -t inst-container
```
3.  To check if the docker container is running, login with the credentials set in the docker-compose.yml file.
```bash
docker exec -it [docker container name] bash
```

4. To check if mysql initialized correctly, login to mysql using the following command:
<br>
**Note: Press enter after typing '-p', you will then be asked to enter a password.**
```bash
mysql -u [username] -p
```
5. If all works well, you should be able to access the MySQL database.