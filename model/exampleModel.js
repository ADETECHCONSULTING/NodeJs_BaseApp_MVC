let mongoose = require('mongoose');

//setup schema
let exampleSchema = mongoose.Schema({
   name: {
       type: String,
       required: true
   },
    email: {
      type: String,
      required: true
    },
    gender: String,
    phone: String,
    create_date: {
       type: Date,
        default: Date.now()
    }
});

//export example model
let Example = module.exports = mongoose.model('example', exampleSchema);

module.exports.get = function (callback, limit) {
    Example.find(callback).limit(limit);
};
