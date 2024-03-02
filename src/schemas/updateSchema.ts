import z from "zod"



const updateSchemaParams = z.object({
id: z.string({
	required_error: "id is required",
	invalid_type_error:"id not exists"
})
})

const updateSchemaBody = z.object({
title: z.string({
	required_error:"the title is required",
	invalid_type_error: "title isn`t a string"
}),
completed:z.boolean({
	required_error: "completed is required",
	invalid_type_error: "completed isn`t a boolean"

})
})



export {updateSchemaParams, updateSchemaBody}
