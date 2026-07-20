import multer from "multer";
import path from "path";
import { ApiError } from "../utils/ApiError";

/**
 * Temporary storage for uploaded CSV files.
 * Files are deleted after parsing.
 */
const storage = multer.diskStorage({

    destination(req, file, cb) {
        cb(null, "uploads/");
    },

    filename(req, file, cb) {

        const uniqueName =
            Date.now() +
            "-" +
            Math.round(Math.random() * 1e9) +
            path.extname(file.originalname);

        cb(null, uniqueName);

    }

});

/**
 * Accept only CSV files.
 */
const fileFilter: multer.Options["fileFilter"] = (
    req,
    file,
    cb
) => {

    const isCsv =
        file.mimetype === "text/csv" ||
        file.originalname.toLowerCase().endsWith(".csv");

    if (!isCsv) {

        return cb(
            new ApiError(
                400,
                "Only CSV files are allowed."
            )
        );

    }

    cb(null, true);

};

const upload = multer({

    storage,

    fileFilter,

    limits: {

        fileSize: 5 * 1024 * 1024 // 5 MB

    }

});

export default upload;