'''
Aleksandra K, Sophia X.
SoftDev2 pd8
K18 --
2019-04-15
'''

'''
pythogorean triples on range [1,n)
'''
def pyth(n):
    return [(a,b,c) for a in range(1,n) for b in range(1,n) for c in range(1,n) if a**2+b**2==c**2]

print(pyth(10))
print(pyth(20))
'''
quicksort (...in 1 line?)
'''
def q_sort(lst):
    if(len(lst) <= 1):
        return lst
    #q_sort(smaller) + pivot + q_sort(larger)
    return q_sort([x for x in lst[1:] if x < lst[0]]) + [lst[0]] + q_sort([x for x in lst[1:] if x >= lst[0]])

print(q_sort([5,2,7,3,8]))
print(q_sort([3,6,2,8,4,9,2,6,8,4]))
