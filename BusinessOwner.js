const mongoose = require('mongoose');

const BusinessOwnerSchema = mongoose.Schema({
    name: String,
    id: String,
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Todo', BusinessOwnerSchema);