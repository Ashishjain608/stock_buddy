import requests
import urllib.parse
from flask import redirect, render_template, request, session

def lookup(symbol):

    # Contact API
    try:
        response = requests.get(f"https://api.iextrading.com/1.0/stock/{(symbol)}/quote")
        response.raise_for_status()
    except requests.RequestException:
        return None

    # Parse response
    try:
        quote = response.json()
        return {
            "name": quote["companyName"],
            "price": float(quote["latestPrice"]),
            "symbol": quote["symbol"]
        }
    except (KeyError, TypeError, ValueError):
        return None

