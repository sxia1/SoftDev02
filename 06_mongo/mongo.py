'''
Saleks
Sophia Xia, Aleksandra Koroza
SoftDev2 pd8
K06 -- Yummy Mongo Py
2018-02-28
'''

import pymongo

SERVER_ADDR = "127.0.0.0"
connection=pymongo.MongoClient(SERVER_ADDR)
db=connection.test
collection=db.restaurants

def find_borough(borough):
    return list(collection.find({"borough", borough}))

def find_zipcode(zipcode):
    return list(collection.find({"address.zipcode", zipcode}))

def find_zipcode_grade(zipcode, grade):
    return list(collection.find({"$and": [{"address.zipcode": zipcode}, {"grades.grade": grade}]}));

def find_zipcode_score(zipcode, score):
    return list(collection.find({"$and": [{"address.zipcode": zipcode}, {"grades.score": {%lt: score}}]}));

//TEST
print(find_borough("Brooklyn"))
print(find_zipcode("10282"))
print(find_zipcode_grade("10282", "A"))
print(find_zipcode_score("10282", "10"))
