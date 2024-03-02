import { prisma } from "../database/prisma";

const GetAllPostService = async () => {
const todos = await prisma.todo.findMany({
	include:{
		category: true
	}
});

return todos


}


export { GetAllPostService }
