import pickle
import numpy as np
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
import json
with open("./Model/Collaborative_Similarity",'rb')as f:
    item_similarity_1=pickle.load(f)


with open("./Model/Content_Similarity",'rb')as f:
    item_similarity_2=pickle.load(f)

with open("./Datasets/Movies",'rb')as f:
    movies=pickle.load(f)
print(movies.head())



def similar_movies(movie_name):
    a_1 = np.array(item_similarity_1.loc[movie_name]).reshape(1, -1)
    a_2 = np.array(item_similarity_2.loc[movie_name]).reshape(1, -1)

# calculate the similartity of this movie with the others in the list
    score_1 = cosine_similarity(item_similarity_1, a_1).reshape(-1)
    score_2 = cosine_similarity(item_similarity_2, a_2).reshape(-1)

# an average measure of both content and collaborative 
    hybrid = ((score_1 + score_2)/2.0)

# form a data frame of similar movies 
    dictDf = {'hybrid': hybrid} 
    similar = pd.DataFrame(dictDf, index = item_similarity_1.index )

#sort it on the basis of either: content, collaborative or hybrid, 
# here : content
    similar.sort_values('hybrid', ascending=False, inplace=True)
    return(similar[1:].head(20).index)

def get_recommendations(movie,movies_df=movies):
    similar_m=similar_movies(movie)
    movies_list=[]
    for movie in similar_m:
        movie_id=str(movies_df.loc[movies_df['title']==movie,'movieId'].iloc[0])
        movie_dict={"title":movie,"movieId":movie_id}
        movies_list.append(movie_dict)
    return movies_list;

