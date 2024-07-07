const expressAsyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc  Get all contacts
//@route GET /api/contacts
//@access private

const getContacts = expressAsyncHandler(async(req, res) => {
    const contacts = await Contact.find({user_id: req.user.id});
    res.status(200).json(contacts);
});

//@desc  CREATE NEW contacts
//@route POST /api/contacts
//@access private

const createContact = expressAsyncHandler(async(req, res) => {
    console.log("The request body is ",req.body);
    const {name,email,phone}= req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact = Contact.create({
        name,email,phone,user_id:req.user.id
    });
    res.status(201).json(contact);
});

//@desc  GET contact
//@route GET /api/contacts/:id
//@access private

const getContact = expressAsyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

//@desc  Update contacts 
//@route PUT /api/contacts/:id
//@access private

const updateContact = expressAsyncHandler(async(req, res) => {

    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User do not have persmission to update other user contacts");
    }

    const updatedContact=await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json(updatedContact);
});

//@desc  Delete contacts 
//@route DELETE /api/contacts/:id
//@access private

const deleteContact = expressAsyncHandler(async(req, res) => {

    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User do not have persmission to delete  contacts");
    }
    
    await Contact.findByIdAndDelete(req.params.id);
    //console.log("Contact removed successfully");
    res.status(200).json(contact);
    
});
module.exports= { getContacts,createContact, getContact, updateContact, deleteContact};
