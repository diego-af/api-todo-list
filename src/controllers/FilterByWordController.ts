import { Request, Response } from "express";
import { FilterByWordService } from "../services/FilterByWordService";


const FilterByWordController = async  (request: Request, response: Response) => {


	const { word } = request.params;



	if(!word){
		return response.status(400).json({message: "Word not found"})
	}

	const postFiltered = await FilterByWordService({word})


	if(!postFiltered){
		return response.status(404).json({message: "Post not found"})
	}

	return response.status(200).json({message: "Post filtered successfully", data: postFiltered})
}



export {FilterByWordController}
