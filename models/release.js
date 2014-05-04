var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var ReleaseSchema = new Schema({
    name      : String
    , qaSignOff : { type: Boolean, default: false }
    , codeSignOff : { type: Boolean, default: false }
    , releasedOnDate      : { type: Date }
});

module.exports = mongoose.model('ReleaseModel', ReleaseSchema);