from flask import Flask, render_template, request
from helper_functions import lookup

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/search", methods=["POST"])
def register():
    name = request.form.get("name")
    data = lookup(name)
    
    return render_template("success.html", data=data)
