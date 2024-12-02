// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from "@/lib/mongodb";

export default function handler(req, res) {
  // connectMongo();
  // if (connectMongo) console.log("Connected to MongoDB");
  res.status(200).json({ name: "John Doe" });
}
