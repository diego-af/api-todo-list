import { prisma } from "../database/prisma"




const DeletPostService = async({id}: {id: string}) => {
	const post = await prisma.todo.delete({
		where: {
			id
		}
	})


	return post
}

export {DeletPostService}
