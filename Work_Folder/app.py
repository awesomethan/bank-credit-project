from flask import Flask, render_template
from flask import request
from flask import jsonify

app = Flask(__name__, template_folder='Templates')


@app.route('/test', methods=['GET', 'POST'])
def testfn():
    # POST request
    if request.method == 'POST':
        print(request.get_json())  # parse as JSON
        return 'Sucesss', 200
        # GET request
    if request.method == 'GET':
        message = {'greeting':'Hello from Flask!'}
        return jsonify(message)  # serialize and use JSON headers


if __name__ == "__main__":
    app.run(
        debug=True
    )