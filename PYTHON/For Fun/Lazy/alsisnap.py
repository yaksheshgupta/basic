# to send snaps(time pass) XD
import keyboard as k
import pyautogui as p
import time as t
p.click(311,13)
t.sleep(2)
k.write("./adb shell am start -n com.snapchat.android/com.snap.mushroom.MainActivity")
k.press_and_release("enter")
t.sleep(2)
k.write("./adb shell input keyevent CAMERA")
k.press_and_release("enter")
t.sleep(1)
k.write("./adb shell input tap 903 2338")
k.press_and_release("enter")
t.sleep(1)
k.write("./adb shell input tap 108 300")
k.press_and_release("enter")
t.sleep(1)
k.write("./adb shell input tap 852 422")
k.press_and_release("enter")
t.sleep(1)
k.write("./adb shell input tap 990 2330")
k.press_and_release("enter")
