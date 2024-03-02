
import z from "zod"

const postSchema = z.object({
	title: z.string({
		required_error:"The name is required",
		invalid_type_error: "Title isn`t a string"
	})
})



export {postSchema}
