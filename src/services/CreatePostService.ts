
import {prisma} from "../database/prisma";




const CreatePostService = ({title, categoryId}: {title: string, categoryId: string}) => {
	

	const post = prisma.todo.create({
		data: {
			title: title,
			categoryId: categoryId
			
		}
	})


	return post
}



export { CreatePostService }
