from flask import Flask, request, jsonify
import numpy as np
from flask_cors import CORS  # Import CORS
import pickle

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the Logistic Regression model
model = pickle.load(open('ML model/model.pkl', 'rb'))

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json  # Get the data from the POST request
    # Assuming your Logistic Regression model is named 'model'
    
    # Extract the features from the data
    features = [
        data['operating_hours'],
        data['temperature'],
        data['humidity'],
        data['time_since_last_maintenance'],
        
    ]
    
    # Reshape the features into a 2D array because the model expects that shape
    features = np.array(features).reshape(1, -1)
    
    # Make the prediction
    prediction = model.predict(features)
    
    return jsonify({
        'prediction': int(prediction[0])  # Return 0 or 1 for failure or no failure
    })

if __name__ == '__main__':
    app.run(debug=True)
