var storage=require('../storage')

module.exports = {

  getComments(req, res) {
      res.send(storage.getComments(req.params.postId));      
  },
    
  addComment(req, res) {
      storage.addComment(req.params.postId, req.body.comment)
      res.send("Thanks for the comment")
  },
  updateComment(req, res) {
      storage.updateComment(req.params.postId, req.params.commentId, req.body.comment)
      res.send("Comment updated")
  },
  removeComment(req, res) {
      storage.removeComment(req.params.postId, req.params.commentId)
      res.send("Comment deleted")
  }  
}

