function ensureAuthenticated(req) {
  return req.isAuthenticated()
}

function getUser(req) {
  return req.user
}

function removeRepeatComment(resComments) {
  const comments = []
  for (let resComment of resComments) {
    const check = comments.find(
      comment => comment.RestaurantId === resComment.RestaurantId
    )
    if (!check) {
      comments.push(resComment)
    }
  }
  return comments
}

module.exports = {
  ensureAuthenticated,
  getUser,
  removeRepeatComment
}
