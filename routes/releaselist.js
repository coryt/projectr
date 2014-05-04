var mongoose = require('mongoose')
    , release = require('../models/release.js');

module.exports = ReleaseList;

function ReleaseList(connection) {
    mongoose.connect(connection);
}

ReleaseList.prototype = {
    showReleases: function(req, res) {
        release.find({}, function foundReleases(err, data) {
            res.render('index', {title: 'ProjectR', releases: data})
        });
    }
}