f = open("employee.txt", "r")
a=f.readlines()
try:
    for i in range(1,4):
        b=a[i].split(",")
        if int(b[5])>50000:
            print("employee name",b[1])
            break
        else:
            pass
        print(b)
except :
    print()

f.close()


f = open("employee.txt", "r")
a=f.readlines()
try:
    for i in range(1,4):
        b=a[i].split(",")
        if int(b[5])>35000 and int(b[6])>=3:
            print("employee name",b[1])
            break
        else:
            pass
        print(b)
except :
    print()

f.close()
