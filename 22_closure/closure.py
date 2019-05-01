
'''
1. Write a closure with outer function named 'repeat' such that the function calls shown below will yield the outputs shown.

r1(2) -> hellohello
r2(2) -> goodbyegoodbye
repeat('cool')(3) -> coolcoolcool

'''
def repeat(s):
    def nest(n):
        if(n == 1):
            return s
        else:
            return nest(n-1) +s
    return nest

r1 = repeat("hello")
r2 = repeat("goodbye")

print(r1(2))
print(r2(2))
print(repeat("cool")(2))


'''
 Define fxn make_counter() such that the function calls shown below will yield the outputs shown.

ctr1 = make_counter()
ctr1() -> 1
ctr1() -> 2
ctr2 = make_counter()
ctr2() -> 1
ctr1() -> 3
ctr2() -> 2

3. Add accessor functionality to #2.
'''

def make_counter():
    x = 0
    def incr():
        nonlocal x
        x += 1
        print(x)
    return incr

ctr1 = make_counter()
ctr1()
ctr1()

ctr2 = make_counter()
ctr2()
ctr1()
ctr2()
