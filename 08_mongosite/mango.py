# headphones_cause_vaccines -- Peter Cwalina and Raunak Chowdhury
# Softdev2 pd8
# K#07: Import/Export Bank
#2019-03-01

'''
Dataset: PokemonGO Pokedex
Contents:
    - id: pokedex id, as an octal number
    - num: same as pokedex id, but as a string
    - name: name of the pokemon
    - img: Link to the sprite image
    - type: a list of types of the pokemon
    - height: height
    - weight: weight
    - candy: the candy of the pokemon
    - candy_count: # candies needed
    - egg: distance needed to be walked for egg to hatch
    - spawn_chance: How often it spawns
    - spawn_time: the time at which it spawns
    - weaknesses: list of weaknesses the pokemon has
    - next_evolution: further evolutions of that pokemon
Link to Dataset: https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json
To import:
    1. Edit the dataset by eliminating the "pokemon:" field from the database as well as the first and last curly braces.
        Note: If either stays, mongoDB will recognize and import the json as a single document; this results the entire db returning for every call that you make.
    2. Enclose the json with []. This is needed for the next step.
    3. Include the --jsonArray flag when mongoimporting. As the json file is already arranged in an array-like format and all you did was switch the first pair of {} to [], mongo will recognize this as an array and import the documents correctly.
        Note: Ignore this step if you don't import on the Droplet.
'''

import pymongo
import json


SERVER_ADDR="157.230.0.112"
connection =pymongo.MongoClient(SERVER_ADDR)
db = connection['headphones_cause_vaccines']
collection = db['pokemon-test']

# open json
file = open('db.json').read()
data = json.loads(file)

x = collection.insert_many(data)

def setup(ip):
    '''
    modifies globals to reflect the new IP.
    '''
    # modify globals
    global SERVER_ADDR
    global connection
    global db
    global collection

    SERVER_ADDR=ip
    connection =pymongo.MongoClient(SERVER_ADDR)
    db = connection['headphones_cause_vaccines']
    collection = db['pokemon-test']
    # open json
    file = open('db.json').read()
    data = json.loads(file)

    x = collection.insert_many(data)

def find_pokemon_by_id(id):
    '''
    finds pokemon by num.
    '''
    pokemon = collection.find({'id':id})
    return [poke for poke in pokemon]

def find_pokemon_by_steps(steps):
    '''
    finds pokemon by the # of steps needed to hatch their egg.
    parameter should be given as <float> km.
    '''
    pokemon = collection.find({'egg':steps})
    return [poke for poke in pokemon]

def type_find(first_type, second_type):
    '''
    finds pokemon by types and returns them in a list.
    '''
    pokemon = collection.find(
        {'$and':[
            {'type':first_type},
            {'type':second_type},
            ]
        }
    )
    return [poke for poke in pokemon]

def type_spawn_find(type, rate):
    '''
    finds pokemon by type and less than the given spawn rate and returns them in a list.
    '''
    pokemon = collection.find(
        {'$and':[
            {'type':type},
            {'spawn_chance':{'$lt':rate}}, #nums are scores
            ]
        }
    )
    return [poke for poke in pokemon]

def type_id_weakness_find(type, id, weakness):
    '''
    finds pokemon by type, and greater than the id, and weakness and returns them in a list.
    '''
    pokemon = collection.find(
        {'$and':[
            {'type':type},
            {'id':{'$gt':id}}, #nums are scores
            {'weaknesses': weakness},
            ]
        }
    )
    return [poke for poke in pokemon]


if __name__ == '__main__':
    print('Printing num...')
    print(find_pokemon_by_id(49))
    print('Printing steps....')
    print(find_pokemon_by_steps("5 km"))
    print('Printing dual types...')
    print(type_find('Ground', 'Rock'))
    print('Printing type and spawn...')
    print(type_spawn_find('Normal', 0.2))
    print('Printing type, id, and weakness...')
    print(type_id_weakness_find('Water', 12, 'Rock'))
