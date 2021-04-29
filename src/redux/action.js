import database from '../database/config'


export function startAddingPost(post) {
  return async (dispatch) => {
    try {
      await database.ref('post').update({ [post.id]: post })
      dispatch(addPost(post))
    } catch (error) {
      console.log(error)
    }
  } 
}

export function startLoadingPost() {
  return async (dispatch) => {
    const snapshot = await database.ref('posts').once('value')
    let posts = []
    snapshot.forEach((childSnapshot) => {
      posts.push(childSnapshot.val())
    })
    dispatch(loadPosts(posts))
  }
}

export function loadPosts(posts) {
  return {
    type: 'LOAD_POST',
    posts: posts 
  }
}

export function removePost(index) {
  return {
    type: "REMOVE_POST",
    index: index,
  };
}

export function addPost(post) {
  return {
    type: "ADD_POST",
    post: post,
  };
}

export function addComment(comment, postId) {
  return {
    type: "ADD_COMMENT",
    comment,
    postId,
  };
}
