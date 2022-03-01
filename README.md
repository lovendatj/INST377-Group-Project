# INST377-Group-Project
## Getting Started
To create your database and interact with the [iSchool VCL Service](https://eit.umd.edu/vcl). Model your .env file as the following:
```text
# Remote Information
ISCHOOL_REMOTE_HOST = [HOST ADDRESS]
ISCHOOL_PORT = [HOST PORT]
ISCHOOL_DB_NAME = [DATABASE NAME]

# Configure Credentials
ISCHOOL_USERNAME = [USERNAME]
ISCHOOL_PASSWORD = [PASSWORD]
```

## Initializing the Database
The `initialize_db_vcl.py` script will establish a connection with the specified host address and createa a database if it does not already exist. 

To test the application, head over to the `conneector-test.py` script in order to query data from a specific table.