from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/search", methods=["POST"])
def register():
    name = request.form.get("name")
    if not name:
        return render_template("failure.html")
    return render_template("success.html", name=name)

