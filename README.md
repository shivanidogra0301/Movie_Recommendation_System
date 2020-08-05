# Movie_Recommendation_System
A machine-learning based movie recommendation engine integrated with React.js and Flask. 
A complete website with working backend.

### Movie Recommendation Model
The algorithm used in this model is Hybrid Filtering which is the combination of two recommender system. It combines the strengths of more than two Recommender system and also eliminates any weakness which exist when only one recommender system is used.
The two algorithm used are
- <strong>Collaborative Filtering</strong> :It measure the similarity between target users and other users. The key idea behind CF is that similar users share the same interest and that similar items are liked by a user.
- <strong>Content Filtering</strong> : A content-based recommender learns a profile of the new user’s interests based on the features present.In a content-based recommender system the algorithms used are such that it recommends users similar items that the user has liked in the past or is examining currently.
The model used in this project is <a href="https://github.com/shivanidogra0301/Movie_Recommendation_System/blob/master/MovieRecommender.ipynb">MovieRecommender.ipynb</a>

# Building Locally
- Clone this repo
- <strong>Frontend</strong>: go to the frontend folder named <a href="https://github.com/shivanidogra0301/Movie_Recommendation_System/tree/master/React%20(Frontend)/movierecommendor">movierecommendor</a> inside the React(frontend)
- run `npm install` to install dependencies
- `npm start` to start the local server , the server will run at localhost:3000
- <strong>Backend</strong> : go inside the Flask Model(backend) through another terminal. 
-Install Python
-  `pip install -r requirements.txt` (write this command on terminal) to install python dependencies
- run `python app.py` to start the project. It will run on another terminal localhost:5000
- Make sure both server should run simultaneously.

### Flow 
We will send post requests from React server to the flask server to get the data and show to the screen with help of react styling.
