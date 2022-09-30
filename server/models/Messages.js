const {mongoose, Schema} = require('mongoose')

const Messages = new Schema({
    message: {type: String},
    image: {type: String}
}, { timestamps: true } )

module.exports = mongoose.model('Messages', Messages)

