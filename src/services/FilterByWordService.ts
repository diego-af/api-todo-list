import { prisma } from "../database/prisma"

const FilterByWordService = async ({word: word}: {word: string}) => {

	const postFiltered = await prisma.todo.findMany({
		where: {
			title: {
				startsWith: word
			}
		}
	})
	

	return postFiltered
}



export {FilterByWordService}
