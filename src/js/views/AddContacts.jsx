import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router-dom";

export const AddContact = () => {
    const { actions, store } = useContext(Context);
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);
    

    const [formData, setFormData] = useState({
        name: "", 
        email: "",
        phone: "",
        address: "",
        agenda_slug: "jessica", 
    });

    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!id){

            await actions.addContact(formData); 
        } else{
            await actions.updateContact(formData, id); 

        }
        navigate("/"); 
    };
useEffect(()=>{
    setFormData(
        {
            name: "", 
            email: "",
            phone: "",
            address: "",
            agenda_slug: "jessica", 
        }
    )
    if(store.contacts && id){
        if (store.contacts.length > 0){
            const result = store.contacts.find(item => item.id == id)
            if(result){
                setFormData(result)
            }
        }
    }
},[store.contacts,id])
    return (
        <div className="container">
            <h1>{!id ? "Add New Contact" : `Editing Contact: ${id}`}</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                        type="text"
                        name="address"
                        className="form-control"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Save Contact
                </button>
            </form>
        </div>
    );
};

