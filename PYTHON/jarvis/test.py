import pyttsx3
engine = pyttsx3.init()
engine.setProperty('voice', "com.apple.speech.synthesis.voice.rishi")  # use whatever voice_id you'd like
engine.say('The quick brown fox jumped over the lazy dog.')
engine.runAndWait()