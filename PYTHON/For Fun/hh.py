import time
import webbrowser
import keyboard
import pyautogui
print("DO NOT TOUCH          I'M RUNNING")
i=1
while (i>0):
    t = time.localtime()
    print("hello")
    current_time = time.strftime("%H:%M", t)
    a="11:22"
    print(a)
    if str(current_time)==a:
        print("vyhbjn")
        time.sleep(2)
        keyboard.press_and_release("enter")
        time.sleep(1)
        keyboard.write(" ")
        time.sleep(1)
        keyboard.write(" ")
        time.sleep(1)
        keyboard.write(" ")
        time.sleep(1)
        keyboard.write(" ")
        time.sleep(1)
        keyboard.write(" ")
        time.sleep(1)
        keyboard.write("m")
        keyboard.press_and_release('enter')
        time.sleep(2)
        pyautogui.moveTo(763,644)
        pyautogui.click(763,644)
        webbrowser.open("https://teams.microsoft.com/l/meetup-join/19%3aPaz5HJpHNN1hovpFX3SlKkcdl5zPS7DfG8MzuV7hrQQ1%40thread.tacv2/1632448075954?context=%7b%22Tid%22%3a%22d4963ce2-af94-4122-95a9-644e8b01624d%22%2c%22Oid%22%3a%22ae35f2ab-2501-4249-ba15-df18f0a02c62%22%7d")
        time.sleep(3)
        break
    else:
        if str(current_time)!=a:
            continue
time.sleep(2)
for i in range(21):
    keyboard.press_and_release('command+3')
    time.sleep(180)
