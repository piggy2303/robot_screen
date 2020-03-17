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


def response_body(status, data):
    response_body = {
        "status": status,
        "data": data
    }
    print(response_body)
    res = make_response(jsonify(response_body), 200)
    return res


@app.route("/blank_page", methods=['GET'])
def blank_page():
    # ROS here
    # neu muon lam man hinh den => return response_body(trt, "hello")
    # neu muon lam man hinh binh thuong => return response_body(0, "hello")
    return response_body(0, "blank_page")


@app.route("/thuyet_minh", methods=['GET'])
# duong link se dang ntn
# http://0.0.0.0:5000/thuyet_minh?id=1
def thuyet_minh():
    id = request.args.get('id', default=1, type=int)
    print("thuyet_minh", id)
    # id la id cua khu can thuyet minh
    # ROS here
    # cai nay goi file thuyet minh
    # luon luon return  response_body(1, "hello")
    return response_body(1, "thuyet_minh")


@app.route("/stop_thuyet_minh", methods=['GET'])
def stop_thuyet_minh():
    # ROS here
    # luon luon return  response_body(1, "hello")
    return response_body(1, "stop_thuyet_minh")


@app.route("/chi_duong", methods=['GET'])
# duong link se dang ntn
# http://0.0.0.0:5000/chi_duong?id=1
def chi_duong():
    id = request.args.get('id', default=1, type=int)
    print("chi_duong", id)
    # id la id cua khu can chi_duong
    # ROS here
    # cai nay goi file chi_duong
    # luon luon return  response_body(1, "hello")
    return response_body(1, "chi_duong")


@app.route("/wake_up", methods=['GET'])
def wake_up():
    # ROS here
    # luon luon return  response_body(1, "hello")
    return response_body(1, "hello")


@app.route("/nhac_rua_tay", methods=['GET'])
def nhac_rua_tay():
    # ROS here
    # luon luon return  response_body(1, "hello")
    return response_body(1, "hello")


if __name__ == "__main__":
    app.run(debug=True, port=3008,host="0.0.0.0")
