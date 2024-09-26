
# Equipment Failure Prediction Using Logistic Regression
Overview
This project is a machine learning model designed to predict equipment failure based on various factors such as operating hours, temperature, humidity, and the time since the last maintenance. The model is built using Logistic Regression, a commonly used algorithm for binary classification tasks. The goal is to help maintenance teams in industries such as manufacturing and healthcare anticipate equipment breakdowns and perform preventive maintenance, reducing downtime and costs.

# Features
Logistic Regression Model: Trained to predict equipment failure (0 for no failure, 1 for failure).
Preprocessing Pipeline: Handles missing data, scales numerical features, and encodes categorical variables.
Performance Evaluation: Includes accuracy, confusion matrix, and classification report for comprehensive evaluation.
User Interaction: Allows users to input new data to predict whether the equipment will fail.

# Technologies Used
Python: Programming language used to develop the model.
scikit-learn: For Logistic Regression, data preprocessing, and model evaluation.
pandas & NumPy: For data handling and manipulation.
Matplotlib: For data visualization (if required).
Jupyter Notebook: For running and testing the model.

# Dataset
The dataset used for this project contains features such as:

Operating Hours: Total operating time of the equipment.
Temperature: Operating temperature of the equipment.
Humidity: Relative humidity in the environment.
Time Since Last Maintenance: Time elapsed since the equipment's last maintenance.
Category: Categorical information about the type of equipment.
Failure: Target variable, representing equipment failure (1 for failure, 0 for no failure).

# Usage
Training the Model:

Load the dataset and preprocess the data (handle missing values, scale features, etc.).
Split the data into training and testing sets.
Train the Logistic Regression model on the training set.
Evaluating the Model:

Test the model on the test set.
Evaluate its performance using metrics like accuracy, confusion matrix, and classification report.
Making Predictions on New Data:

You can input new feature values (e.g., operating hours, temperature) to predict whether the equipment will fail.


# Results
The model achieved an accuracy of X% on the test set, demonstrating its potential to predict equipment failures effectively. The classification report and confusion matrix provide deeper insight into precision, recall, and F1-score.

# Further Work
A mobile application is currently in development to make it easier for users to interact with the model on the go. This app will allow maintenance personnel to input equipment data and receive real-time failure predictions directly from their mobile devices, streamlining the process of preventive maintenance.

# Contributing
Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or submit a pull request.
