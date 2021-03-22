import React, { createContext, useContext, useState} from 'react'
import { commentContextType, commentsType, commentType } from '../types'

const contextDefaultValues: commentContextType = {
  comments: [],
  addComment: () => {},
  getCommentCount: () => {}
};

const CommentContex = createContext<commentContextType>(
  contextDefaultValues
)

const CommentContexProvider = (props:any) => {
  
  const [comments, setComments] = useState<commentsType[]>(contextDefaultValues.comments);
  const addComment = (photoId:number, newComment: commentType) => {
    let comment = comments.find((comment) => comment.photoId === photoId)
    if(comment){
      comment.comments.push(newComment)
    }else{
      setComments((comment) => [...comment, {
        photoId:photoId,
        comments:[newComment],
      }]);
    }
  }
  const getCommentCount = (photoId:number) => {
    let commentExist = comments.find((comment) => comment.photoId === photoId)
    let count = 0
    if(commentExist){
      count = commentExist.comments.length
    }
    return count
  }

  return (
    <CommentContex.Provider value={{
      comments,
      addComment,
      getCommentCount
    }}>
      {props.children}
    </CommentContex.Provider>
  );
};

export const useComments = () => {
  const {comments} = useContext(CommentContex)

  return comments
}

export const useGetCommentById = (photoId:number) => {
  const {comments} = useContext(CommentContex)

  return comments.find((comment) => comment.photoId === photoId)
}

export const useGetCountById = () => {
  const {getCommentCount} = useContext(CommentContex)

  return (photoId:number) => getCommentCount(photoId)
}

export const useAddComments = () => {
  const {addComment} = useContext(CommentContex)

  return (photoId:number, comment:commentType) => {
    addComment(photoId, comment);
  };
}

export default CommentContexProvider
