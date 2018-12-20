import os, sqlite3

db_file = os.path.join(os.path.dirname(__file__), 'shanghai.db')
if os.path.isfile(db_file):
    os.remove(db_file)

# 初始数据:
conn = sqlite3.connect(db_file)
cursor = conn.cursor()
cursor.execute('CREATE TABLE ACCOUNT(ID INT PRIMARY KEY  NOT NULL,ACCOUNT INT NOT NULL);')


cursor.close()
conn.commit()
conn.close()