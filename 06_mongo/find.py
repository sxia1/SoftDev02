import pymongo

SERVER_ADDR = "lisa.stuy.edu"
connection=pymongo.MongoClient(SERVER_ADDR)
db=connection.test
collection=db.restaurants

BK = collection.find({"borough": "Brooklyn"})
print(BK)
collection.find({"address.zipcode": "11211"})
