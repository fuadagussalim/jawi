import { createComment } from "../../lib/comments";

export default async function handler(req, res) {
  console.log(req.body); // Log the request body
  try {
    const body = JSON.parse(req.body);
    //Perform validation later
    if (!body.author || !body.authorEmail || !body.content || !body.postId) {
      // Handle validation failure
      res.status(400).json({ error: "Incomplete data" });
      return;
    }
    // Handle creating comment
    const resJson = await createComment(body); // Uncomment this line if needed
    res.status(200).json({ success: true });
    if(resJson.errors){
        return res.status(500).json({
            message: resJson.errors[0].message
        })
    }
  } catch (error) {
    console.error("Error parsing JSON:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
