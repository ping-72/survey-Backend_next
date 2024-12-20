import nc from "next-connect";
import mongoose from "mongoose";

// Middleware to handle requests
const handler = nc();

// MongoDB connection
const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("MongoDB connection error:", error);
      throw new Error("Could not connect to MongoDB");
    }
  }
};

// Define the Survey schema
const SurveySchema = new mongoose.Schema({
  formData: { type: Object, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Create the Survey model
const Survey = mongoose.models.Survey || mongoose.model("Survey", SurveySchema);

// Handle POST requests to save survey data
handler.post(async (req, res) => {
  try {
    await connectToDatabase();
    const survey = new Survey({ formData: req.body });
    await survey.save();
    return res.status(201).json({ message: "Survey data saved successfully" });
  } catch (error) {
    console.error("Error saving survey data:", error);
    return res.status(500).json({ error: "Failed to save survey data" });
  }
});

export default handler;
