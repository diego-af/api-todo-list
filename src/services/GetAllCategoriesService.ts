import { prisma } from "../database/prisma"


const GetAllCategoriesService = async () => {

	const categories = prisma.category.findMany()


	return categories
}



export { GetAllCategoriesService }
