import { prisma } from "../database/prisma"




const FilterPostByCategoryService = async ({categoryId}: {categoryId: string}) => {


	const postFilteredByCategoryId = await prisma.todo.findMany({
		where:{
			categoryId: categoryId
		}
	})


	return postFilteredByCategoryId
}




export { FilterPostByCategoryService }
