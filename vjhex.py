
from flask import Flask, render_template,request
from flask import Response
import json 

from multiprocessing import Process

import mysql.connector
from mysql.connector import (connection)
from mysql.connector import Error





def check():
   
    global UserName
    global  pwd
    UserName = "VijayVeerappa" 
    pwd  = 'KVAFamily'

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
            cursor.execute(" select PASSWORD from users where USER_NAME = '%s';"%UserName)
            user=cursor.fetchall()
            print(user)
            cursor.execute("select AGE from users;")
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
                


    '''return render_template('index.html')'''
   
    #return render_template('check.html',Uname=UserName,pswd=pwd)


check()




    
    










