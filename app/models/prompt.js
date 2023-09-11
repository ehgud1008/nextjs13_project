import mongoose, { Schema, model, models } from "mongoose";

const PromptSchema = new Schema ({
    creator : {
        type : String,
        ref : 'user',
    },
    prompt : {
        type : String,
        require : [true, 'prompt 입력은 필수입니다.']
    },
    tag : {
        type : String,
        require : [true, 'tag 입력은 필수입니다.']
    },
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;