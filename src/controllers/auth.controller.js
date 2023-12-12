import User from '../models/users.model.js'
import bcrypt from 'bcryptjs'
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req,res) => {
    const {username,email,password} = req.body
    try {
        const paswordHash = await bcrypt.hash(password,10)
        const newUser = new User({username,email,password:paswordHash})
        const userSave = await newUser.save()
        const token = await createAccessToken({id:userSave._id})

        res.cookie('token',token)
        res.json({
            id: userSave._id,
            username: userSave.username,
            email: userSave.email,
            createdAt:userSave.createdAt,
            updateAt:userSave.updatedAt
        })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const login = async (req,res) => {
    const {email,password} = req.body
    try {

        const userFound =await User.findOne({ email })
        if(!userFound) return res.status(400).json({message: 'User not found'})

        const isMatch = await bcrypt.compare(password,userFound.password)
        if(!isMatch) return res.status(400).json({message: 'Invalid credentials'})
        const token = await createAccessToken({id:userFound._id})

        res.cookie('token',token)
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt:userFound.createdAt,
            updateAt:userFound.updatedAt
        })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const logout = (req,res) => {
    res.cookie('token',"",{
        expires: new Date(0)
    })
    return res.sendStatus(200)
}

export const profile = async (req,res) => {
    console.log(req.user);
    const userFound = await User.findById(req.user.id)
    if(!userFound) return res.status(400).json({message:'User not found'})
    res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt:userFound.createdAt,
        updateAt:userFound.updatedAt
    })
}