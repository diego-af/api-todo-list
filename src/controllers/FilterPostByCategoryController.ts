
import { Request, Response } from "express"
import { FilterPostByCategoryService } from "../services/FilterPostByCategoryService"


const FilterPostByCategoryController = async (request:Request, response: Response) => {
	

	const {categoryId} = request.params

	const postFilteredById = await FilterPostByCategoryService({categoryId})


	if(!postFilteredById){
		return response.status(404).json({message: "Not possible apply filter"})
	}
	return response.status(200).json({message: "Success filtered",data:postFilteredById})
}



export { FilterPostByCategoryController }
