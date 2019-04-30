from functools import reduce

def openfile(file):
    file = open(file, 'r')
    text = file.read().split()
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
    words = words.split()
    l = len(words)
    sublists = ([text[index : index + l] for index in range(len(text)-l + 1)])
    #print(sublists)
    count = [1 for x in sublists if x == words]
    if not len(count):
        return 0
    return reduce((lambda x, y: x + y), count)

# Find the most frequently occurring word
def most(text):
    #get rid of duplicates
    s = set(text)
    freq = [text.count(x) for x in s]

# Test Cases
print(single("moby", openfile("moby.txt")))
print(group("moby dick", openfile("moby.txt")))
print(most(openfile("moby.txt")))
