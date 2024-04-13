import { createComment } from "../comments";
export default async function handler(req, res){
    const body = JSON.parse(req.body);
    //Perform validation later

    if(!body.author || !body.authorEmail || !body.content || !body.postId){
        return res.status(400).json({
            message: "name, email, and message are required!"
        });
    }
    //
    const resJson = await createComment(body);

    if(resJson.errors){
        return res.status(500).json({
            message: resJson.errors[0].message
        })
    }
    else if (resJson.data.createComment  !== null && resJson.data.createComment.sucess== true){
        return res.status(200).json({
            message: "Your comment is awaiting approval"
        })
    }
    return res.status(500).json({
        message: "Error"
    })


    
}