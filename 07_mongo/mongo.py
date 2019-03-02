'''
Jdaughters
Sophia Xia, Hui Min Wu
SoftDev2 pd8
K06 -- Yummy Mongo Py
2018-02-28
'''

import pymongo

SERVER_ADDR = "127.0.0.0"
connection=pymongo.MongoClient(SERVER_ADDR)
db=connection.test
collection=db.jdaughters

def find_type(poketype):
    return list(collection.find({"pokemon.type", poketype}))

def find_weakness(weakness):
    return list(collection.find({"pokemon.weakness", weakness}))

def find_weakness_pokemon(weakness, multiplier):
    return list(collection.find({"$and": [{"pokemon.weakness": weakness}, {"pokemons.multiplier": {%gt: multiplier}}]}));

def find_weakness_avg_spawns(weakness, avg_spawns):
    return list(collection.find({"$and": [{"pokemon.weakness": weakness}, {"pokemons.avg_spawns": {%lt: avg_spawns}}]}));

//TEST
print(find_type("Grass"))
print(find_weakness("Poison"))
print(find_weakness_multiplier("Fire", "1.5"))
print(find_weakness_avg_spawns("Poison", "50"))
