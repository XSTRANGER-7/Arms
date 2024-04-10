import hashlib

def hash_string(string, key): 
    data = string + key
 
    hash_object = hashlib.sha256(data.encode())
 
    hashed_string = hash_object.hexdigest()

    return hashed_string

def dehash_string(hashed_string, key): 
    data = hashed_string + key
 
    hash_object = hashlib.sha256(data.encode()) 

    dehashed_string = hash_object.hexdigest()

    return dehashed_string
 
string = "Hello, World!"
key = "SecretKey"

hashed_string = hash_string(string, key)
print("Hashed string:", hashed_string)

dehashed_string = dehash_string(hashed_string, key)
print("Dehashed string:", dehashed_string)