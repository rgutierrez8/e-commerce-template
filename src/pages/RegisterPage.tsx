import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const RegisterPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form className="p-4 border rounded shadow bg-light" style={{maxWidth: "500px", width: "100%"}}>
        <h2 className="text-center mb-4">Registro</h2>
        <div className="form-group mb-3">
          <label htmlFor="registerEmail">Email</label>
          <input type="email" className="form-control" id="registerEmail" placeholder="name@example.com" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="registerUsername">Username</label>
          <input type="text" className="form-control" id="registerUsername" placeholder="Username" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="registerPassword">Password</label>
          <input type="password" className="form-control" id="registerPassword" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary w-100 mb-2">Registrarse</button>
      </form>
    </div>
  );
}
