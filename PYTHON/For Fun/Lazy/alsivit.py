# to open vit portals submission (coz i was frustated from 15min shit)XD
import keyboard as k
import os
import time as t
import pyautogui as p
os.system("open vit.app")
t.sleep(2)
p.click(725,460)
t.sleep(1)
k.press_and_release("tab")#15min
k.press_and_release("enter")
t.sleep(2)
k.press_and_release("tab")
k.press_and_release("enter")#login page
while(1>0):
    if k.read_key() == ",":#when capcha is there
        for i in range(0,4):
            k.press_and_release("tab")
        while(1>0):
            if k.read_key() == "enter":
                print("loop 2 end")
                break
            else:
                continue
        print("if end")
        break
    elif k.read_key() == "/":
        for i in range(0,7):
            k.press_and_release("tab")
        k.press_and_release("enter")
        break
    else:
        continue

t.sleep(4)
print("yes")
k.press_and_release("tab")
k.press_and_release("enter")#open menu
for i in range(0,7):
    k.press_and_release("tab")
k.press_and_release("enter")
t.sleep(1)
for i in range(0,11):
    k.press_and_release("tab")
k.press_and_release("enter")
