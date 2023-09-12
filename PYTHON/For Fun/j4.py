print('''
                  ::::            :::::::            :::::::::::::::::       ::::                   ::::    ::::::::::::::        :::::::::::::::::::::
                  ::::           :::: ::::           ::::           ::::      ::::                 ::::          :::::          ::::::::::::
                  ::::          ::::   ::::          ::::            ::::      ::::               ::::           :::::        ::::::::::
                  ::::         ::::     ::::         ::::            ::::       ::::             ::::            :::::          ::::::::::
                  ::::        ::::       ::::        ::::        ::::             ::::          ::::             :::::           ::::::::::::::::::
                  ::::      ::::::::::::::::::       :::::::::::::::::             ::::        ::::              :::::                       ::::::::::
::::              ::::     ::::            ::::      ::::::::                       ::::      ::::               :::::                         ::::::::::
::::              ::::    ::::              ::::     ::::   ::::                     ::::    ::::                :::::                        ::::::::::
::::              ::::   ::::                ::::    ::::       ::::                  ::::  ::::                 :::::                      ::::::::::
::::::::::::::::::::::  ::::                  ::::   ::::         ::::                 ::::::::             ::::::::::::::        ::::::::::::::::::::
''')
import speech_recognition as sr
import pyttsx3
import time as t
import datetime
import wikipedia
import os
import pandas as pd
from selenium import webdriver
import keyboard as k
import pyautogui as pp
aa=0
data = pd.read_csv('Book1.csv', error_bad_lines=False)
r = sr.Recognizer()
engine = pyttsx3.init()
voices = engine.getProperty('voices')
en_voice_id = "com.apple.speech.synthesis.voice.rishi"
engine.setProperty('voice', en_voice_id)
rate = engine.getProperty('rate')
engine.setProperty('rate', 200)
volume = engine.getProperty('volume')
engine.setProperty('volume',5.0)
total_text=""
text=""
engine.say("at your service sir")
engine.runAndWait()
while text!="bye" :
    with sr.Microphone() as source:
        print("Jarvis ::")
        r.adjust_for_ambient_noise(source,0.1)
        try:
            audio = r.listen(source)
            text = r.recognize_google(audio)
            text=text.lower()
            print("You said : {}".format(text))
            a="did not recognise"
            print(text)
            try:
                if "wikipedia" in text:
                    t=text.replace("Wikipedia ","")
                    ans=wikipedia.summary(t)
                    print("wikipedia::::")
                    engine.say(ans)
                    print(ans)
                elif "web" in text:
                    t=text.replace("web ","")
                    engine.say("opening")
                    ww=("http://{}.com".format(t))
                    print(ww)
                    webbrowser.open(ww)
                elif "play" in text:
                    se=text.replace("play ","")
                    os.system("open https://wynk.in/music")
                    t.sleep(3)
                    for i in range(1,6):
                        k.press_and_release("tab")
                    k.write(se)
                    k.press_and_release("enter")
                    t.sleep(3)
                    pp.click(195,442)
                    pp.click(195,442)
                elif "time" in text or "date" in text:
                    if "date" in text:
                        time=datetime.datetime.now().strftime("%D")
                    else:
                        time=datetime.datetime.now().strftime("%H%M")
                    print(time)
                    time=time.replace(" ","minute")
                    engine.say("the time is {}".format(time))
                elif "bye" in text :
                    engine.say("bye sir")
                    exit()
                elif "search" in text:
                    se=text.replace("search ","")
                    driver = webdriver.Chrome("/Users/sushilkumargupta/Downloads/chromedriver")
                    driver.get("https://www.google.com/search?sxsrf=ALeKk02T9UleDxuzvsbtwMi1XlU_SBApFA%3A1593467321225&source=hp&ei=uWH6XqbnC86b4-EP-Jel6Ac&q={}&oq={}&gs_lcp=CgZwc3ktYWIQAzIECCMQJzIFCAAQkQIyBQgAELEDMgcIABCxAxAKMgUIABCxAzIFCAAQsQMyBwgAELEDEAoyBAgAEAoyBQgAELEDMgIIADoFCAAQgwE6BAgAEENQ2Q1Y3iFgmSRoAXAAeACAAckBiAH7CJIBBTAuNC4ymAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab&ved=0ahUKEwjmp5CtgKjqAhXOzTgGHfhLCX0Q4dUDCAc&uact=5".format(se,se))
                elif "speedtest" in text:
                    engine.say("checking")
                    os.system("speedtest")
                elif "new message" in text:
                    qq=text.replace("new message ","")
                    f = open("song.txt", "a")
                    f.write("{}".format(qq))
                    f.close()
                    engine.say("done")
                elif "repeat message" in text:
                    bb=text.replace("repeat message ","")
                    f = open("song.txt", "r")
                    msg=f.read()
                    engine.say(msg)
                elif "instagram" in text:
                    os.system("open https://www.instagram.com/")
                elif "instagram message" in text:
                    os.system("open https://www.instagram.com/direct/inbox/")
                elif "school class" in text:
                    os.system("open https://gdgkanpur.edunexttechnologies.com/StudentDashboardApp/EConnectStudentMeeting")
                    t.sleep(4)
                    pp.click(1060,370)

                elif "mute" in text:
                    engine.say("muting sir")
                    k.press_and_release("shift+a")
                    t.sleep(5)
                    k.press_and_release("shift+a")
                elif "song search" in text:
                    os.system("open https://www.aha-music.com/")
                    engine.say("play the song please")
                    pp.click()
                    t.sleep(10)
                    engine.say("analysing your song please wait")
                    t.sleep(3)
                    pp.click()
                    k.press_and_release("command+3")
                    k.press_and_release("command+w")

                elif "a"=="a":
                 for i in range(data.shape[0]):
                        if(data.Questions[i]==text):
                            a = data.Answers[i]
                            print(a)
                            engine.say(a)
                engine.runAndWait()
            except:
                if text!="bye":
                    engine.say("did not get")
                else:
                    pass
            engine.runAndWait()
        except:
            pass
