import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        }
    }
)