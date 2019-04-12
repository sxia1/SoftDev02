'''
Sophia Xia
SoftDev2 pd8
K16 -- Do You Even List?
2019-4-11
'''

NUMBERS = {x for x in "0123456789"}
LC_LETTERS = {x for x in "abcdefghijklmnopqrstuvwxyz"}
UC_LETTERS = {x for x in "ABCDEFGHIJKLMNOPQRSTUVWXYZ"}
SP_CHARS = {x for x in ".?!&#,;:-_*"}

def pwdValid(pwd):
    types = [1 if x in UC_LETTERS else 2 if x in NUMBERS else 3 if x in LC_LETTERS else 0 for x in pwd]
    if 1 in types and 2 in types and 3 in types:
        return True
    return False

def pwdStr(pwd):
    if pwdValid(pwd):
        types = [1 if x in UC_LETTERS else 2 if x in NUMBERS else 3 if x in SP_CHARS else 0 for x in pwd]
        num = types.count(2)
        up = types.count(1)
        sp = types.count(3)
        strength = num + up + sp
        if strength > 10:
            return 10
        else:
            return strength
    else:
        return 0
    
    
print(pwdValid("dorayaki"))
print(pwdValid("GingerBread123"))
print(pwdValid("MoonCake!!!"))
print(pwdValid("I<3NasiLemak!"))
print(pwdValid("#UmeOchazuke:13e5t9ir1"))

print(pwdStr("dorayaki"))
print(pwdStr("GingerBread123"))
print(pwdStr("MoonCake!!!"))
print(pwdStr("I<3NasiLemak!"))
print(pwdStr("#UmeOchazuke:13e5t9ir1"))
