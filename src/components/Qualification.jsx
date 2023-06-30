import React from "react";
import { UserAuth } from "../context/AuthContext";
import "./memberone.css";

function Qualification() {
  const { user } = UserAuth();
  const {posts} = UserAuth();
  // console.log(posts);

  return (
    <div className="babysitter.1">
     

      <h1>Babysitter Qualifications/Skills</h1>
      
        {/* loop through the Json "posts" */}
        {posts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <h2 className="">{post.title}</h2>
              <p className="">{post.content}</p>
              <img src= {post.url} alt="Bild" />
              
            </div>
          )
        })}
        
      
    </div>
  );
}

export default Qualification;