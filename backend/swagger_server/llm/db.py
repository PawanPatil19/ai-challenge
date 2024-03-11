# trying to access the techspecs api

import requests
import json

url = 'https://api.techspecs.io/v4/all/products/?page=0'
api_key = ''
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
        total_pages = int(data['data']['total_pages'])
        total_results = int(data['data']['total_results'])
        total_results_per_page = int(data['data']['total_results_per_page'])
        all_products = data['data']['items']
        print(all_products)

        # for page_number in range(1, total_pages-100):
        # url = f'https://api.techspecs.io/v4/all/products/?page={1}'
        # response = requests.post(url, headers=headers, json=payload)
        # data = response.json()
        # print(data['data']['items'])
            # if 'data' in data and 'items' in data['data']:
            #     all_products.extend(data['data']['items'])
            # else:
            #     print(f"Response structure is not as expected for page {page_number}")
        
    except json.decoder.JSONDecodeError as e:
        print(f"Error decoding JSON: {e}")
else:
    print(f"Request failed with status code {response.status_code}")
