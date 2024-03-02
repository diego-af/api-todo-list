import { Request, Response } from "express";
import { GetAllPostService } from "../services/GetAllPostService";




const GetAllPostController = async (request: Request, response: Response) => {
	const post = await GetAllPostService();


	if(!post) {
		return response.status(404).json({ message: "There are no posts" });
	}

	return response.status(200).json({message: "Posts found" ,data:post });
}


export { GetAllPostController }
