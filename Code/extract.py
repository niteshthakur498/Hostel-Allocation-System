import pymongo
import json
import pandas as pd

def import_excel():
    mng_client = pymongo.MongoClient('localhost', 27017)
    mng_db = mng_client['students'] # Replace mongo db name
    collection_name = 'cgpi' # Replace mongo db collection name
    db_cm = mng_db[collection_name]
    data = pd.read_excel('cgpi.xls')
    data_json = json.loads(data.to_json(orient='records'))
    db_cm.insert(data_json)

if __name__=='__main__':
    import_excel()
	
