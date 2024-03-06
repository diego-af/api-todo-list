
import { Request, Response } from "express"
import { DeletPostService } from "../services/DeletPostService"


const DeletControllerPost = async(req:Request, res:Response)=>{
	

	const {id} = req.params

	const postDeleted = await DeletPostService({id})


	if(!postDeleted){
		return res.status(404).json({message: "Post not found"})
	}
	return res.status(200).json({message: "Post deleted"})
}


export {DeletControllerPost}
