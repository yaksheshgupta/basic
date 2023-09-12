#make a software to make a code for every words inputed everytime we start the program
while(1>0):
    w=input(str("word u want to code?       "))
    print("")
    if " " in w:
        w=w.replace(" ","")
    else:
        pass
    w=list(w)#5
    l=len(w)
    print("length of ur msg",l)
    print("")
    p=0
    qq=list()
    import random
    b=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    c=random.sample(range(97,123),26)
    for i in range(0,26):
        c[i]=chr(c[i])

    for i in range(l):
        for q in range(0,26):
            if w[p]==b[q] and l!=p:
                qq.append(c[q])
                p=p+1
                break
            else:
                if l==p:
                    break
    qq=''.join(qq)
    print("ur coded msg is        ",qq)
    print(c)
