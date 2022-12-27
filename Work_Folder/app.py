from flask import Flask, render_template
from flask import request
from flask import jsonify

app = Flask(__name__, template_folder='Templates')


@app.route('/test', methods=['POST'])
def test():
    gender = request.get_json()
    print(gender)
    return "hello"


@app.route('/receive', methods=['GET'])
def receive():
    return jsonify("wefrgdnhs")


if __name__ == "__main__":
    app.run(
        debug=True
    )
