const { z } = require("zod")

const update_userSchema = z.object({
    user_name : z.string().optional(),
    bio : z.string().max(50).optional(),
    photo_profil : z.string().optional()
})

module.exports = update_userSchema