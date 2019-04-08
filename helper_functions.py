import requests
import urllib.parse
from flask import redirect, render_template, request, session

def lookup(symbol):

    # Contact API
    try:
        response = requests.get(f"https://api.iextrading.com/1.0/stock/{(symbol)}/chart/1d/quote")
        response.raise_for_status()
    except requests.RequestException:
        return None

    # Parse response
    try:
        quote=response.json()
        data=[]
        for i in range(len(quote)):
            data.append({
                 "open": quote[i]["marketAverage"]
            })
        return {
            "data": data
        }
    except (KeyError, TypeError, ValueError):
        return None
