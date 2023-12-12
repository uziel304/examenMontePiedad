import { z } from "zod";

export const createMaterialSchema = z.object({
    nombre:z.string({
        required_error: 'Name is required'
    }),
    precio:z.number({
        required_error: 'Price is required'
    })
})
