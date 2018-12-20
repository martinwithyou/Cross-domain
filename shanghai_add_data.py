import sqlite3

conn = sqlite3.connect('shanghai.db')
cursor = conn.cursor()

# cursor.execute("INSERT INTO ACCOUNT (ID, ACCOUNT) VALUES ("+4+","+12000+" )")
cursor.execute("INSERT INTO ACCOUNT (ID, ACCOUNT) VALUES ("+"4"+","+"12000"+" )")
conn.commit()
conn.close()