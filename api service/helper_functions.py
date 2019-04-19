import requests
import urllib.parse
from flask import redirect, render_template, request, session
import quandl
import pandas as pd
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

def get_top4_stocks():
    try:
        top4StockCodes = ["RVNL", "POLYCAB", "INFY", "TCS"]
        allData = []
        apiUrl = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=NSE:"
        for item in top4StockCodes:
            data = requests.get(apiUrl + top4StockCodes[item] + "&apikey=569J8U1Q8UH3V5GG")
            print(data)
            allData.append(data.data['Global Quote'])
        print(allData)
        return {
            allData
        }
    except (KeyError, TypeError, ValueError):
        return None       