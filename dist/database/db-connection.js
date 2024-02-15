import { config } from "dotenv";
import { connect } from "mongoose";
config();
export async function connectToDB() {
    try {
        await connect(process.env.MONGO_URI);
        console.log("Database connected successfully.");
    }
    catch (err) {
        throw new Error('Failed to connect database.');
    }
}
