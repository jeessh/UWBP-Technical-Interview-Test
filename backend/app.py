from flask import Flask, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
# Simplify CORS configuration to allow all origins during development
CORS(app)

@app.route('/', methods=['GET'])
def get_candidates():
    try:
        current_dir = os.path.dirname(os.path.abspath(__file__))
        database_path = os.path.join(current_dir, '..', 'data', 'database.json')
        
        with open(database_path, 'r') as file:
            candidates = json.load(file)
            return jsonify(candidates)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)
