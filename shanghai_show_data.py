import sqlite3

conn = sqlite3.connect('shanghai.db')
cursor = conn.cursor()
cursor.execute( 'select * from ACCOUNT' )
values = cursor.fetchall()
print(values)
cursor.close()
conn.commit()
conn.close()