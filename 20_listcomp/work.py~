from functools import reduce

def open(file):
    file = opne(file, 'r')
    text = file.read.split()
    file.close()
    return [x.strip(".?!;,-").lower() for x in text]

# Find the frequency of a single word
def single(word, text):
    word = word.lower()
    list = [1 for x in text if x == word]
    if not len(list):
        return 0
    return reduce((lambda x, y: x+y), list)

# Find the total frequency of a group of words
def group(words, text):
    words = strip(words)
    l = len(words)
    sublists = ([text[index : index + l] for index in range(len(text)-l + 1)])
    count = [1 for x in sublists if x == words]
    if not len(count):
        return 0
    return reduce((lambda x, y: x + y), count)

# Find the most frequently occurring word
def most(text):
    s = set(text)
    freq = [{text.count(x): x} for x in s]
    vals = [list(x.keys())[0] for x in freq]
    m = max(vals)
    for i in freq:
        if m in i:
            return i[m]
