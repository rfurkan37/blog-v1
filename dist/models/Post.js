import { Schema, model } from "mongoose";
const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: String,
        default: Date.now()
    }
});
const Post = model('Post', postSchema);
export default Post;
