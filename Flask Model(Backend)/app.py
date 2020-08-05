from flask import Flask,request,render_template,url_for,jsonify
import model 
from flask import jsonify
from flask_cors import CORS
import json
app=Flask(__name__)

CORS(app)



@app.route("/",methods=["POST"])
def home():

        # print(request.data)
        req_data=request.get_json();
        movie_name=req_data['movie']
        recommend_movies=json.dumps(model.get_recommendations(movie_name))
        return jsonify({"movies_data":recommend_movies})
        
    
    
    

    




if(__name__=="__main__"):
    app.run(debug=True)