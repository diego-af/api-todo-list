
import { Request, Response, request } from "express";
import { CreateCategoryService } from "../services/CreateCategoryService";
import z from "zod";
import { schemaCategory } from "../schemas/categorySchema";




const CreateCategoryController = async (request:Request, res:Response, )=>{



	const {name} = request.body

	 const error = schemaCategory.safeParse({name})

	console.log(error)
	if(!error.success) return res.status(400).json({message: error.error.issues[0].message})

	const category = await CreateCategoryService({name})

	if(!category){
		return res.status(400).json({message: "Category not created"})
	}


	return res.status(201).json({message: "Category sucessfully created", data:category})
}


export {CreateCategoryController}
