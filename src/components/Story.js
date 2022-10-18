import React from 'react';
import { useGlobalContext } from "./ContextApi";

const Story = () => {

  const { hits, nbPages, isLoading, removePost } = useGlobalContext();
  // let isLoading = true;

  if(isLoading){
    return(
      <h1>Loading....</h1>
    )
  }
  return (
    <div>
      {hits.map(( currentPost ) => {
        const { title, author, objectID, url, num_comments } = currentPost;
        return <>
          <div className="card" key={objectID}>
            <h2>{title}</h2>
            <p>
              By <span>{author}</span> | <span>{num_comments}</span> comments
            </p>
            <div className="card-button">
              <a href={url} target="_blank">
                Read More
              </a>
              <a href='#' onClick={() => removePost(objectID)}>Remove</a>
            </div>
          </div>
        </>
      })}
    </div>
  )
}

export default Story