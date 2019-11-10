import quandl
import requests
from flask import jsonify
import csv
import json
import os.path
quandl.ApiConfig.api_key = 'VbsmWFysHcxq6F1vZNPX'

# def lookup(symbol):

    # Contact API
    # try:
    #     response = requests.get(f"https://api.iextrading.com/1.0/stock/{(symbol)}/chart/1d/quote")
    #     response.raise_for_status()
    # except requests.RequestException:
    #     return None

    # # Parse response
    # try:
    #     quote=response.json()
    #     data=[]
    #     for i in range(len(quote)):
    #         data.append({
    #              "open": quote[i]["marketAverage"]
    #         })
    #     return {
    #         "data": data
    #     }
    # except (KeyError, TypeError, ValueError):
    #     return None

def fetch_historic_data():
    try:
        data = []
        my_path = os.path.abspath(os.path.dirname(__file__))
        path = os.path.join(my_path, "static/data/INFY_2016to2019.csv")
        with open(path) as f:
            for row in csv.DictReader(f):
                data.append(row)
        json_data = json.dumps(data)
        print(json_data)
        return json_data

    except Exception as e:
        raise e


def fetch_stock(stock_Id):
    try:
        apiUrl = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=NSE:"
        data = requests.get(apiUrl + stock_Id + "&apikey=569J8U1Q8UH3V5GG")
        data = data.json()
        print(data)
        return {
            "data": data
        }  
    except (KeyError, TypeError, ValueError):
        return None

apiKeys = ["569J8U1Q8UH3V5GG", "KVXXX2H1I9OJK0TV"]
apiIndex = 0

def get_top4_stocks():
    try:
        top4StockCodes = ["RVNL", "POLYCAB", "INFY", "TCS"]
        allData = []
        finalData = []
        apiUrl = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=NSE:"
        for item in top4StockCodes:
            data = requests.get(apiUrl + item + "&apikey="+ apiKeys[0])
            jsondata = data.json()
            allData.append(jsondata["Global Quote"])

        for record in allData:
            formatedData = {}
            formatedData["stockSymbol"] = record["01. symbol"].split(".NS")[0]
            formatedData["changePercent"] = record["10. change percent"]
            formatedData["change"] = record["09. change"]
            formatedData["price"] = record["05. price"]
            formatedData["open"] = record["02. open"]
            formatedData["high"] = record["03. high"]
            formatedData["low"] = record["04. low"]
            formatedData["volume"] = record["06. volume"]
            formatedData["close"] = record["08. previous close"]
            formatedData["latestTradingDay"] = record["07. latest trading day"]
            finalData.append(formatedData)
        print(finalData)

        return jsonify(finalData)
       
    except Exception as e:

        raise e