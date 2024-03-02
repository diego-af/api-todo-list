import { prisma } from "../database/prisma"



const UpdatePostService = async({id, title, completed}: {id: string, title: string, completed: boolean}) => {


	const post = await prisma.todo.update({
		where:{
			id:id
		},
		data:{
			title: title,
			completed: completed
		}
	})


	return post
}

export {UpdatePostService}
