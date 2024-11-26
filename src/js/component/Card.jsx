import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = () => {
  const { store, actions } = useContext(Context);

  
  
    //  actions.getInfoContacts(); 
  

   console.log(store.contacts);

  return (
    <div className="container mt-4">
      {store.contacts && store.contacts.length > 0 ? (
        <div className="d-flex flex-column align-items-center min-vh-100 gap-4"> 
          {store.contacts.map((item, index) => (
            <div className="card w-75" key={index}> 
              <div className="row g-0">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <img
                    src="https://hips.hearstapps.com/hmg-prod/images/taylorswiftelection-min-1-65cb635bdccbb.jpg?crop=0.628xw:1.00xh;0.213xw,0&resize=1200:*"
                    className="img-fluid rounded-circle"
                    alt="Contact"
                    style={{ width: "200px", height: "200px", objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-text fs-4">{item.name}</h5>

                    <p className="card-text d-flex align-items-center">
                      <i className="fa-solid fa-phone me-2"></i>
                      <strong>Phone:</strong> {item.phone}
                    </p>

                    <p className="card-text d-flex align-items-center">
                      <i className="fa-solid fa-envelope me-2"></i>
                      <strong>Email:</strong> {item.email}
                    </p>

                    <p className="card-text d-flex align-items-center">
                      <i className="fa-solid fa-location-dot me-2"></i>
                      <strong>Address:</strong> {item.address}
                    </p>

                    <div className="d-flex flex-column align-items-end gap-2">
                      <button
                        className="btn btn-danger btn-sm w-40"
                        onClick={() => actions.deleteContact(item.id)}
                        type="button"
                        aria-label="Delete contact"
                      >
                        <i className="fa-solid fa-trash"></i> Delete
                      </button>
                      <Link
                        to={`/edit/${item.id}`}
                        className="btn btn-warning btn-sm w-40"
                        aria-label="Edit contact"
                      >
                        <i className="fa-solid fa-pencil"></i> Edit
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No contacts available</p>
      )}
    </div>
  );
};
