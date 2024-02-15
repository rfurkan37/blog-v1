import { Schema, model } from "mongoose";
import { hash } from "bcrypt";
const userSchema = new Schema({
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
});
userSchema.pre('save', async function (next) {
    try {
        const hashedPassword = await hash(this.password, 10);
        this.password = hashedPassword;
        next();
    }
    catch (error) {
        next(error);
    }
});
const User = model('User', userSchema);
export default User;
