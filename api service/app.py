from flask import Flask, render_template, request, jsonify
from helper_functions import fetch_stock, get_top4_stocks, fetch_historic_data
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

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
    return fetch_historic_data()
    # return render_template("visualize.html")

@app.route("/v1/fetchStockDetails", methods=["POST"])
def fetch_stock_details():
    stock_Id = request.form.get("name")
    data = fetch_stock(stock_Id)
    # jsonify(data)
    # print(data)

    # return None    
    return render_template("success.html", data=data)

@app.route("/v1/fetchTop4Stock")
def fetchTop4Stock():
    data = get_top4_stocks()  
    print(data)
    return data


app.run(host='127.0.0.1', port=8085)