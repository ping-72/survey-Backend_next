import mongoose from "mongoose";

const SurveySchema = new mongoose.Schema(
  {
    form1Data: {
      type: Object,
      required: true,
    },
    form2Data: {
      type: Object,
      required: true,
    },
    form3Data: {
      type: Object,
      required: true,
    },
    form4Data: {
      type: Object,
      required: true,
    },
    form5Data: {
      type: Object,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "surveys" }
);

const Survey = mongoose.models.Survey || mongoose.model("Survey", SurveySchema);

export default Survey;
