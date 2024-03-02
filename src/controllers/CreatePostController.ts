


import { Request, Response } from "express";
import { CreatePostService } from "../services/CreatePostService";
import { postSchema } from "../schemas/postSchema";



const CreatePostController = async (request: Request, response: Response) => {
	const { title, categoryId } = request.body;


	const error = postSchema.safeParse({title, categoryId})


	if (!error.success) {
		return response.status(400).json({ message: error.error.issues[0].message })
	}
	const post = await CreatePostService({ title,categoryId });

	if (!post) {
		return response.status(400).json({ message: "Post not created" });
	}

	response.status(201).json({  message: "Post successfully created",data:post });
};
export { CreatePostController }
