#Backend
#cd to the Krazy-Kookie directory and run "python flask_app/app.py"
from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def home():
   return render_template('index.html')
if __name__ == '__main__':
   app.run()