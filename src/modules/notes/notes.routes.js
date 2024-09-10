import express from "express";
import { addNote, deleteNote, getAllNotes, getSingleNote, updateNote } from "./notes.controllers.js";
import { protectedRoutes } from "../../middleware/auth.js";
import { allowedTo } from "../../middleware/allowedTo.js";

let noteRouter=express.Router()

noteRouter.route("/")
    .post(protectedRoutes,allowedTo("user"),addNote)
    .get(protectedRoutes,allowedTo("user","admin"),getAllNotes)
noteRouter.route("/:id")
    .put(protectedRoutes,allowedTo("user"),updateNote)
    .delete(protectedRoutes,allowedTo("user"),deleteNote)
    .get(protectedRoutes,allowedTo("user","admin"),getSingleNote)

export default noteRouter