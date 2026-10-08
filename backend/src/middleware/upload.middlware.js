const multer = require("multer")
const path = require("path")
const crypto = require("crypto")

const storage = multer.diskStorage({
    destination : (req, file, cb) =>{
        cb(null, "uploads/profiles")
    },
    filename : (req, file, cb) =>{
        const extension = path.extname(file.originalname);
        const filename = crypto.randomBytes(16).toString("hex") + extension;
        cb(null, filename)
    }
})

const filefilter = (req, file, cb) =>{
    const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/jpg",
        "image/webp"
    ];
    if(allowedTypes.includes(file.mimetype)){
        cb(null, true)
    }else{
        cb(new Error("format d'image non pris en charge"))
    }
}

const upload = multer({
    storage,
    filefilter,
    limits : {
        fileSizes : 5 * 1024 * 1024
    }
})

module.exports = upload