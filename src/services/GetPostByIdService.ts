import { prisma } from "../database/prisma"

const GetPostByIdService = async({id: id}: {id: string}) => {
	

	const post = await  prisma.todo.findUnique({
		where:{
			id:id
		}
	})

	return post
}

export {GetPostByIdService}
