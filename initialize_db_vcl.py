import mysql.connector
import os

from dotenv import load_dotenv
load_dotenv(dotenv_path='.env')

REMOTE_HOST = os.getenv('ISCHOOL_REMOTE_HOST')
REMOTE_PORT = int(os.getenv('ISCHOOL_PORT'))

USERNAME = os.getenv('ISCHOOL_USERNAME')
PASSWORD = os.getenv('ISCHOOL_PASSWORD')

DB_NAME = os.getenv('ISCHOOL_DB_NAME')

## Execute a sql file
# Proivded by: 
# https://stackoverflow.com/questions/4408714/execute-sql-file-with-python-mysqldb
def exec_sql_file(cursor, sql_file):
    print ("\n[INFO] Executing SQL script file: '%s'" % (sql_file))
    statement = ""

    for line in open(sql_file, encoding='utf-8'):
        if re.match(r'--', line):  # ignore sql comment lines
            continue
        if not re.search(r';$', line):  # keep appending lines that don't end in ';'
            statement = statement + line
        else:  # when you get a line ending in ';' then exec statement and reset for next statement
            statement = statement + line
            #print "\n\n[DEBUG] Executing SQL statement:\n%s" % (statement)
            try:
                cursor.execute(statement)
            except (OperationalError, ProgrammingError) as e:
                print ("\n[WARN] MySQLError during execute statement \n\tArgs: '%s'" % (str(e.args)))

            statement = ""

mydb = mysql.connector.connect(
    host=REMOTE_HOST,
    port=REMOTE_PORT,
    user=USERNAME,
    passwd=PASSWORD,
)
mycur = mydb.cursor()
mycur.execute("CREATE DATABASE IF NOT EXISTS {}".format(DB_NAME))
mycur.execute("USE {}".format(DB_NAME))

exec_sql_file(mycur, 'inst327_project.sql')

mycur.close()
mydb.close()