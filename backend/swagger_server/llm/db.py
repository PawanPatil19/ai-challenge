# trying to access the techspecs api

import requests
import json

url = 'https://api.techspecs.io/v4/all/products/?page=0'
api_key = ''  #Bearer token
headers = {
    'Authorization': api_key,
    'accept': 'application/json',
    'content-type': 'application/json',
}

payload = {
    'category': ['Smartphones']
}

response = requests.post(url, headers=headers, json=payload)

if response.status_code == 200:
    try:
        data = response.json()
        print(data)
    except json.decoder.JSONDecodeError as e:
        print(f"Error decoding JSON: {e}")
else:
    print(f"Request failed with status code {response.status_code}")
