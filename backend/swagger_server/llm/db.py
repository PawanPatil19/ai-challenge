# trying to access the techspecs api

import requests
import json

url = 'https://api.techspecs.io/v4/all/products/?page=0'
api_key =''
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
        
        data = response.json()    
        total_pages = int(data['data']['total_pages'])
        total_results = int(data['data']['total_results'])
        total_results_per_page = int(data['data']['total_results_per_page'])
        all_products = data['data']['items']
        print(all_products)

        try:
            for page_number in range(1, total_pages-500):
                url = f'https://api.techspecs.io/v4/all/products/?page={page_number}'
                response = requests.post(url, headers=headers, json=payload)
                data = response.json()
                all_products.extend(data['data']['items'])

        except Exception as e:
            print(e)

        finally:
            with open('products.txt', 'w') as file:
                for product in all_products:
                    file.write(str(product) + '\n')

            print("Products saved to 'products.txt'.")
         
        

else:
    print(f"Request failed with status code {response.status_code}")
