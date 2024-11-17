import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';

export const Card = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getContacts();
  }, [actions]); // Aquí no cambia nada, es correcto usar "actions" como dependencia

  return (
    <div>
      {store.contacts.map((item, index) => {
        return (
          <div className="card mb-3" style={{ maxWidth: "540px" }} key={index}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/taylorswiftelection-min-1-65cb635bdccbb.jpg?crop=0.628xw:1.00xh;0.213xw,0&resize=1200:*"
                  className="img-fluid rounded-start"
                  alt="Placeholder"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Phone: {item.phone}</p>
                  <p className="card-text">Email: {item.email}</p>
                  <p className="card-text">Address: {item.address}</p>
                </div>
              </div>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button className="btn btn-primary me-md-2" type="button">Button</button>
              <button className="btn btn-primary" type="button">Button</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
