from flask import Flask, render_template, request
from helper_functions import fetch_stock


app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

# @app.route("/search", methods=["POST"])
# def register():
#     name = request.form.get("name")
#     data = lookup(name)
    
#     return render_template("success.html", data=data)

@app.route("/visualize")
def visualize():
    return render_template("visualize.html")

@app.route("/v1/fetchStockDetails", methods=["POST"])
def fetch_stock_details():
    stock_Id = request.form.get("name")
    data = fetch_stock(stock_Id)
    # jsonify(data)
    # print(data)

    # return None
    
    return render_template("success.html", data=data)
