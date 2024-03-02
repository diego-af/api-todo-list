
import { Request, Response } from "express";
import { GetPostByIdService } from "../services/GetPostByIdService";

const GetPostsByIdController = async(request: Request, response: Response) => {

	const {id}= request.params;

	const post = await  GetPostByIdService({id});
	console.log(post)

	if(!post){
		return response.status(404).json({message: "Post not found"})
	}
	return response.status(200).json({ message: "Post found",data:post})
}


export {GetPostsByIdController}
