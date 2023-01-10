from flask import Flask, render_template
from flask import request
from flask import jsonify

app = Flask(__name__, template_folder='Templates')

@app.route('/test', methods=['POST'])
def testfn():
    print(request.get_json())  # parse as JSON
    data = request.get_json()
    return data, 200
 
if __name__ == "__main__":
    app.run(
        debug=True
    )
