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

<br></br>
# Getting Started with Frontend React App
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
