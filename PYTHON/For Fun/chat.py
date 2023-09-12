import keyboard as k
import pyautogui as p
import time as t
t.sleep(5)
k.write('''
def is_embedded(string1, string2):
    if string1 in string2:
        return "YES"
    else:
        return "NO"

string1 = input()
string2 = input()
print(is_embedded(string1, string2))


''')
