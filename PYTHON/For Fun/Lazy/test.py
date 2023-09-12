from ast import For
import keyboard as k
import pyautogui as p
import time as t
t.sleep(3)
for x in range(0,40):
    k.write("A")
    k.press_and_release("enter")
    k.write("C")
    k.press_and_release("enter")