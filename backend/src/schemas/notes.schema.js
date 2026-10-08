const { z } = require("zod")

const schema_notes = z.object({
    titre : z.string().min(3, "titre doit contenir au moins 3 caractere"),
    sous_titre : z.string().max(50).optional(),
    note : z.string("veuillez ajouter une note"),
    // date : z.date()
})

module.exports = schema_notes