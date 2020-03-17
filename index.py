from flask import (
    Flask,
    make_response,
    jsonify,
    request,
    send_file,
    send_from_directory,
    abort,
)
import requests
import json
import time
from datetime import datetime
from flask_cors import CORS

from bson.json_util import loads, dumps
import pymongo

app = Flask(__name__)
CORS(app)


myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["robot"]
mycol = mydb["corona"]


def response_body(status, data):
    response_body = {
        "status": status,
        "data": data
    }
    print(response_body)
    res = make_response(jsonify(response_body), 200)
    return res


def add_data():
    post = {
        "id": 0,
        "vietnam": 1,
        "hanoi": 2,
        "thegioi": 3,
        "top10": [
            {"quoc_gia": "Trung Quốc", "ca_nhiem": 40, "tu_vong": 40},
            {"quoc_gia": "Trung Quốc", "ca_nhiem": 40, "tu_vong": 40},
            {"quoc_gia": "Trung Quốc", "ca_nhiem": 40, "tu_vong": 40},
            {"quoc_gia": "Trung Quốc", "ca_nhiem": 40, "tu_vong": 40},
            {"quoc_gia": "Trung Quốc", "ca_nhiem": 40, "tu_vong": 40},
            {"quoc_gia": "Trung Quốc", "ca_nhiem": 40, "tu_vong": 40},
            {"quoc_gia": "Trung Quốc", "ca_nhiem": 40, "tu_vong": 40},
            {"quoc_gia": "Trung Quốc", "ca_nhiem": 40, "tu_vong": 40}]
    }
    a = mycol.insert_one(post)
    print(a.acknowledged, post)
    return (a.acknowledged, post)


@app.route("/api/init_data", methods=['GET'])
def init_data():
    add_data()
    return response_body(1, 1)


@app.route("/api/get_data", methods=['GET'])
def get_data():
    data = mycol.find_one({})
    data = json.loads(dumps(data))
    return response_body(1, data)


@app.route("/api/edit_data", methods=['POST'])
def edit_data():
    try:
        body_req = request.get_json(force=True)
    except:
        return response_body(status="error", data="body error")

    query = {"id": 0}
    new_value = {"$set": body_req}

    a = mycol.update_one(query, new_value)

    if a.acknowledged:
        return response_body(1, "ok")
    else:
        return response_body(0, "update error")


if __name__ == "__main__":
    app.run(debug=True, port=3011)
