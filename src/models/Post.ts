import { Schema, Types, model } from "mongoose";

export interface IPost{
    title: string
    content: string
    author: Types.ObjectId
    createdAt: String
}


const postSchema = new Schema<IPost>({
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
        ref : 'User'
    },
    createdAt: {
        type: String,
        default: Date.now()
    }
})


const Post = model<IPost>('Post', postSchema);

export default Post;