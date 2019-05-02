import random
'''
def make_HTML_heading(f):
    txt = f()
    def inner():
        return '<h1>' + txt + '</h1>'
    return inner

def greet():
    greetings = ["hello", "ayo", "hey"]
    return random.choice(greetings)

greet_heading = make_HTML_heading(greet)
print(greet_heading())
'''
'''
def make_HTML_heading(f):
    def inner():
        return '<h1>' + f() + '</h1>'
    return inner

@make_HTML_heading
def greet():
    greetings = ["hello", "ayo", "hey"]
    return random.choice(greetings)

print(greet())
print(greet)
print(make_HTML_heading)
'''
'''
def memoize(f):
    memo = {}
    def helper(x):
        nonlocal memo
        memo[0] = 0
        memo[1] = 1
        for i in range(2, x+1):
            memo[i] = memo[i-1] + memo[i-2]
        return memo[x]
    return helper

@memoize
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)
        
print(fib(50))
'''

def memoize(f):
    memo = {}
    def helper(x):
        nonlocal memo
        if x not in memo:
            memo[x] = f(x)
        return memo[x]
    return helper

@memoize
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

print(fib(50))
