import requests

r = requests.get(
    'http://hp-api.herokuapp.com/api/characters')

print(r.status_code)
# print(r.json())

# skeletons = r.json()['civilizations'][0]['name']
# expansion_name = r.json()['civilizations'][0]['expansion']

# print(f"Kingdom name: {kingdom_name}, Expansion name: {expansion_name}")
