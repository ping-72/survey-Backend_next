import connectMongo from "../../lib/mongodb";
import Survey from "../../lib/surveySchema";

export default async function handler(req, res) {
  connectMongo();

  if (req.method === "POST") {
    try {
      await connectMongo();

      const survey = await Survey.create(req.body);

      res.status(201).json({ success: true, data: survey });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
