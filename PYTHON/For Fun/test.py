# class product:
#     first = 0
#     second = 0
#     def hello(self, f, s):
#         self.first = f
#         self.second = s
#         return f*s
# I1=int(input())
# I2=int(input())
# a=product()
# b=a.hello(I1,I2)
# print(b)

# fo= open("sample.txt", "r+")
# str = fo.read(10)
# print(str)
# pos= fo.tell()
# print(pos)
# pos= fo.seek(4, 0)
# str = fo.read(5)
# print(str)
# fo.close()

a=[222,222,222,43,222,43,33,44,222]
c=0
bb=[]
dic=[]
for i in range(0,len(a)):
    # print(i)
    if a[i]not in bb:
        for k in range(len(a),-1,-1):
            # print(k)
            if a[i]==a[-k]:
                print(i,k)
                bb.append(a[i])
                print(a[i],a[-k])
                c+=1
            else:
                pass
        dic.value[]

print(c)
