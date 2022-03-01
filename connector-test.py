from sqlalchemy import create_engine
import pymysql
import pandas as pd


db_connection_str = 'mysql+pymysql://{admin}:{mysql_password}@{mysql_host}/{mysql_db}' \
    .format(admin='admin', mysql_password='admin1234', mysql_host='localhost', mysql_db='spotify')
db_connection = create_engine(db_connection_str)

df = pd.read_sql('SELECT * FROM album LIMIT 100', con=db_connection)
print(df.head())