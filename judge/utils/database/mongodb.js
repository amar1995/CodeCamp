<<<<<<< HEAD
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/OnlineJudge')
module.exports = {
  mongoose
=======
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/OnlineJudge',{useMongoClient:true})
module.exports = {
  mongoose
>>>>>>> upstream/master
}