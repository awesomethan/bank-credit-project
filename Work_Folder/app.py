from flask import Flask, render_template
from flask import request
from flask import jsonify

temp = {"help": "me", "ads": "dhbf"}

app = Flask(__name__, template_folder='Templates')

@app.route('/test', methods=['POST'])
def testft():
  
    print(request.get_json())  # parse as JSON
    return 'Sucesss', 200

@app.route('/test2', methods=['GET'])
def testfn():
    message = temp
    return jsonify(message)  # serialize and use JSON headers

 
if __name__ == "__main__":
    app.run(
        debug=True
    )