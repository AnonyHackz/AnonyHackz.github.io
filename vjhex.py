
from flask import Flask, render_template,request
from flask import Response
from werkzeug.serving import make_server
from multiprocessing import Process

import mysql.connector
from mysql.connector import (connection)
from mysql.connector import Error




app = Flask(__name__,template_folder='templates', static_folder='static')






def shutdown_server():
    func = request.environ.get('werkzeug.server.shutdown')
    if func is None:
        raise RuntimeError('Not running with the Werkzeug Server')
    func()




@app.route('/')
def login():
    return render_template('login.html')


@app.route('/send', methods=['POST'])
def check():
   
    global UserName
    global  pwd
    UserName = request.form.get('name')
    pwd  = request.form.get('pass')

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
            cursor.execute("select PASSWORD from users where USER_NAME = '%s';"%UserName)
            user=cursor.fetchall()
            print(user)
            cursor.execute("select AGE from users where USER_NAME = '%s';"%UserName)
            Age=cursor.fetchall()
            print(Age)
            con.commit()

    except Error as e:
        print("Error while connecting to MySQL", e)

    finally:
        if con.is_connected():
                cursor.close()
                con.close()
                print("MySQL connection is closed")
                


    return render_template('index.html')
   
    #return render_template('check.html',Uname=UserName,pswd=pwd)



"""@app.get('/shutdown')
def shutdown():
    ...
    shutdown_hook = request.environ.get('werkzeug.server.shutdown')
    if shutdown_hook is not None:
        shutdown_hook()
    return Response("Bye", mimetype='text/plain')"""

    

if __name__ == '__main__':
    app.debug=True
    app.run()
   
    




    
    
    










