const db = require('../models')
const Category = db.Category

const categoryService = {
  getCategories: (req, res, callback) => {
    return Category.findAll({
      raw: true,
      nest: true
    }).then(categories => {
      if (req.params.id) {
        Category.findByPk(req.params.id)
          .then((category) => {
            return res.render('admin/categories', callback({
              categories: categories,
              category: category.toJSON()
            }))
          })
      } else {
        return res.render('admin/categories', callback({ categories: categories }))
      }
    })
  }
}



module.exports = categoryService