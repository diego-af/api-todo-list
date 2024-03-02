

import { Request, Response } from "express"
import { GetAllCategoriesService } from "../services/GetAllCategoriesService"

const GetAllCategoriesController =  async (request: Request, response: Response) => {
	
	const categories = await GetAllCategoriesService()



	if(!categories) {
		return response.status(404).json({ message: "Categories not found" })
	}
	return response.status(200).json({ message: "Categories found" ,data:categories })
}

export { GetAllCategoriesController }
