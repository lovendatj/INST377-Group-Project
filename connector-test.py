from sqlalchemy import create_engine
from urllib.parse import quote
import pandas as pd

import os
from dotenv import load_dotenv
load_dotenv(dotenv_path='.env')

REMOTE_HOST = os.getenv('ISCHOOL_REMOTE_HOST')
REMOTE_PORT = int(os.getenv('ISCHOOL_PORT'))

USERNAME = os.getenv('ISCHOOL_USERNAME')
PASSWORD = os.getenv('ISCHOOL_PASSWORD')

DB_NAME = os.getenv('ISCHOOL_DB_NAME')

db_connection_str = f'mysql+pymysql://{USERNAME}:{quote(PASSWORD)}@{REMOTE_HOST}/{DB_NAME}'
db_connection = create_engine(db_connection_str)

df = pd.read_sql('SELECT * FROM album', con=db_connection)
print(df.info())

db_connection.dispose()