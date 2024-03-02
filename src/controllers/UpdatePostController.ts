



import { Request, Response } from "express";
import { UpdatePostService } from "../services/UpdatePostService";
import { updateSchemaBody, updateSchemaParams } from "../schemas/updateSchema";


const UpdatePostController = async(request: Request, response: Response) => {


	const { id } = request.params;


	const error = updateSchemaParams.safeParse({id})

	if(!error.success){
		return response.status(400).json({message: error.error.issues[0].message})
	}


	const { title, completed } = request.body;

	const errorBody = updateSchemaBody.safeParse({title, completed})


	if(!errorBody.success){
		return response.status(400).json({message: errorBody.error.issues[0].message})
	} 

	const post = await UpdatePostService({id, title, completed});



	if(!post){
		return response.status(500).json({message: "Not possible to update"})
	}

	return response.status(200).json({message: "Post updated successfully", data: post})
}

export { UpdatePostController }
