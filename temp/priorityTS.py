from pymongo import MongoClient
from datetime import datetime

client = MongoClient('localhost',27017)

db = client.priority_database
collection = db.priority_collection

curr_time  = datetime.now()
curr_time_str = curr_time.strftime("%Y-%m-%d %H:%M:%S")

priority_list = [
   {
       "overdue_in": "15",
       "html_color": "pink",
       "createdat": curr_time_str,
       "updatedat": curr_time_str,
       "name": "P1",
       "description": "P1"
   },
   {
       "overdue_in": "20",
       "html_color": "red",
       "createdat": curr_time_str,
       "updatedat": curr_time_str,
       "name": "P2",
       "description": "P2"
   },
   {
       "overdue_in": "25",
       "html_color": "yellow",
       "createdat": curr_time_str,
       "updatedat": curr_time_str,
       "name": "P3",
       "description": "P3"
   },
   {
       "overdue_in": "35",
       "html_color": "white",
       "createdat": curr_time_str,
       "updatedat": curr_time_str,
       "name": "P4",
       "description": "P4"
   },
   {
       "overdue_in": "30",
       "html_color": "blue",
       "createdat": curr_time_str,
       "updatedat": curr_time_str,
       "name": "E",
       "description": "E"
   },
   {
       "overdue_in": "40",
       "html_color": "green",
       "createdat": curr_time_str,
       "updatedat": curr_time_str,
       "name": "SFRE",
       "description": "SFRE"
   },
   {
       "overdue_in": "45",
       "htm_color": "violet",
       "createdat": curr_time_str,
       "updatedat": curr_time_str,
       "name": "TQ1",
       "description": "TQ1"
   },
   {
       "overdue_in": "50",
       "html_color": "black",
       "createdat": curr_time_str,
       "updatedat": curr_time_str,
       "name": "TQ2",
       "description": "TQ2"
   }
]

res = collection.insert(priority_list)
print(res)