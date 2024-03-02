


import z from "zod";


const schemaCategory = z.object({
	name:z.string({
		required_error:"name is required",
		invalid_type_error:"Name category isn´t a string"
	})
})


export {schemaCategory}
