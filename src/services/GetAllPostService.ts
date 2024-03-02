import { prisma } from "../database/prisma";

const GetAllPostService = async () => {
const todos = await prisma.todo.findMany({
	
});

return todos


}


export { GetAllPostService }
