#Backend
#cd to the Krazy-Kookie directory and run "python flask_app/app.py"
from flask import Flask, render_template
from firebase import firebase

firebase = firebase.FirebaseApplication('https://hackmercedix-5aa06-default-rtdb.firebaseio.com/', None)

app = Flask(__name__)

@app.route("/")
def home():
  result = firebase.get('/countries', None)
  return render_template("index.html", places=result)

@app.route("/members")
def members():
   return {"members": ["Member 1", "Members 2", "Members 3"]}

@app.route('/test')
def test():
   return render_template('index.html')


if __name__ == '__main__':
   app.run(debug=True)