import { prisma } from "../database/prisma"




const CreateCategoryService = async({name}: {name: string}) => {
	
	const category = await prisma.category.create({
		data: {
			name:name
		}
	})


	return category
}



export { CreateCategoryService }
