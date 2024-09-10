import { noteModel } from "../../../database/models/notes.model.js"

const addNote=async(req,res,next)=>{
    req.body.createdBy=req.user._id
    await noteModel.insertMany(req.body)
    res.json({message:"note added successfully"})
}
const updateNote=async(req,res,next)=>{
    let updatedNote= await noteModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(!updatedNote)return res.json({message:"this note not found"})
    res.json({message:"note updated successfully",updatedNote})
}
const deleteNote=async(req,res,next)=>{
    let note=await noteModel.findByIdAndDelete(req.params.id)
    if(!note)return res.json({message:"this note not found"})
    res.json({message:"note delete successfully",note})
}
const getAllNotes=async(req,res,next)=>{
    let notes=await noteModel.find().populate("createdBy","name -_id")
    res.json({message:"this is all notes",notes})
}
const getSingleNote=async(req,res,next)=>{
    let note=await noteModel.findById(req.params.id).populate('createdBy', 'name email'); 
    if(!note)return res.json({message:"this note not found"})
    if(req.user._id.toString() !== note.createdBy._id.toString())return res.json({message:"you are not allowed to open this note"})
    res.json({message:"this is your note",note})

}
const getNotesForSpecificUser=async(req,res,next)=>{
    let notes=await noteModel.find({createdBy:req.user._id})
    if(notes.length==0)return res.json({message:"there is no notes"})
    res.json({message:"this is all notes belonging to you ",notes})
}

export{
    addNote,
    updateNote,
    deleteNote,
    getAllNotes,
    getSingleNote,
    getNotesForSpecificUser
}