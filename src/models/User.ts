import { Date, Schema,Types, model } from "mongoose";
import { hash } from "bcrypt";
import { IPost } from "./Post.js"

export interface IUser
{
    username: string
    email: string
    password: string
    createdAt: String
}


const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        default: Date.now()
    }
})

userSchema.pre('save', async function(next) {
    try {
        const hashedPassword = await hash(this.password, 10);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});


const User = model<IUser>('User', userSchema);

export default User;

