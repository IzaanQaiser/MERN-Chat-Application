import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
  },
  { timesamps: true }
);

const Conversation = mongoose.model("Conversation:", conversationSchema);

export default Conversation;
