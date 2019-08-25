import requests, json

BASE_URI = 'https://api.cognitive.microsoft.com/bing/v7.0/images/visualsearch'
SUBSCRIPTION_KEY = '7fb5f51b56474420921c8d98679ecf9d'
imagePath = r'C:/Users/orenl/Desktop/switch.jpg'

HEADERS = {'Ocp-Apim-Subscription-Key': SUBSCRIPTION_KEY}

file = {'image' : ('myfile', open(imagePath, 'rb'))}

def print_json(obj):
  print(json.dumps(obj, sort_keys=True, indent=2, separators=(',', ': ')))

try:
  response = requests.post(BASE_URI, headers=HEADERS, files=file)
  response.raise_for_status()
  print_json(response.json())

except Exception as ex:
  raise ex