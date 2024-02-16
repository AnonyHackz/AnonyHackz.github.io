
import cgi
import cgitb #found this but isn't used?
def get():
    form = cgi.FieldStorage()
    name=form.getvalue('name')
    print(name)

    










import mysql.connector
from mysql.connector import (connection)
from mysql.connector import Error

try:
    con = mysql.connector.connect(host='localhost',
                                         database='vjhex',
                                         user='root',
                                         password='dingdong')
    if con.is_connected():
        db_Info = con.get_server_info()
        print("Connected to MySQL Server version ", db_Info)
        cursor = con.cursor()
        cursor.execute("select database();")
        record = cursor.fetchone()
        print("You're connected to database: ",record)

except Error as e:
    print("Error while connecting to MySQL", e)
finally:
    if con.is_connected():
        cursor.close()
        con.close()
        print("MySQL connection is closed")