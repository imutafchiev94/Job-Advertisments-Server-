const mongoose = require('mongoose');

const JobAdvertismentKindSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, jobAdvertisments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "JobAdvertisment"
    }], createdAt: {
        type: Date,
        default: new Date(Date.now()).toUTCString()
    }, deletedAt: {
        type: Date,
        required: false
    }
})

module.exports = mongoose.model('JobAdveritsmentKind', JobAdvertismentKindSchema);