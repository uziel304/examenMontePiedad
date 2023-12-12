import material from "../models/material.model.js";

export const getMaterials = async (req,res) => {
    const materials = await material.find()
    res.json(materials)
}

export const getMaterial = async (req,res) => {
    console.log(req.params.id);
    const materials = await material.findById(req.params.id)
    if(!materials) return res.status(404).json({message:'material not found'})
    res.json(materials)
}

export const createMaterial = async (req,res) => {
    const { nombre, precio } = req.body
    const newMaterial = new material({nombre,precio,user:req.user.id})
    const materialSave = await newMaterial.save()
    res.json(materialSave)
}

export const updateMaterial = async (req,res) => {
    const materials = await material.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })
    if(!materials) return res.status(404).json({message:'material not found'})
    res.json(materials)
}

export const deleteMaterial = async (req,res) => {
    const materials = await material.findByIdAndDelete(req.params.id)
    if(!materials) return res.status(404).json({message:'material not found'})
    res.json(materials)
}