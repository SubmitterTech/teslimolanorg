const mongoose = require("mongoose");

const postSchema = mongoose.Schema(

    {
        postType:{
            type:String,
            required:true
        },
        text:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        tags:{
            type:String,
        },
        imgSrc: {
            type: String,
            required: true
        }
    },

    {
        timestamps: true
    }
);

module.exports = mongoose.model('postModel',postSchema);