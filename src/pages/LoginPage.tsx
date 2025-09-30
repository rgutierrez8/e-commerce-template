import { useState } from "react";
import { useNavigate } from "react-router";
import { Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export const LoginPage =() => {

    //Alerts
    const [showAlert, setShowAlert] = useState(false);

    
    const users = [
        {
            id: 1,
            name: "Christian Leiva",
            username: "cleiva",
            password: "1234"
        },
        {
            id: 2,
            name: "Ramon Gutierrez",
            username: "rgutierrez",
            password: "1234"
        }
    ]
    
    const [user1, setUser1] = useState({
        username:"",
        password:"",
        
    });

    const navigate = useNavigate();
    
    const handleInputUsername = (e) =>{
      setUser1({...user1, username: e.target.value})    
    };
    
    const handleInputPassword = (e) =>{
        setUser1({...user1, password: e.target.value})
    };
    
    const handleSubmit = (e) =>{
      e.preventDefault();

      const userLoged = users.find( (user) => user.username === user1.username);
      if(!userLoged || user1.password !== userLoged.password){
        setShowAlert(true);
        setUser1({
            username: "",
            password: ""
        });
      }else{
        navigate("/home");
      }
    }

    const handlerRegister = (e) => {
        e.preventDefault();
        navigate("/register");
    }


  return (
  <div className="d-flex justify-content-center align-items-center vh-100">
    <div style={{position: "absolute", top: 30, width: "100%", display: "flex", justifyContent: "center"}}>
      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible style={{maxWidth: "400px", width: "100%"}}>
          <Alert.Heading>Error de login</Alert.Heading>
          <p>Usuario o contraseña incorrectos. Intenta nuevamente.</p>
        </Alert>
      )}
    </div>
    <form className="p-4 border rounded shadow bg-light" style={{maxWidth: "500px", width: "100%"}}>
            <div className="form-group mb-3">
                <label className="text-start" htmlFor="inputUsername">Username</label>
                <input
                type="text"
                className="form-control"
                id="inputUsername"
                placeholder="Username"
                value={user1.username}
                onChange={(e) => handleInputUsername(e)}
                />
            </div>
            <div className="form-group mb-3">
                <label className="text-start" htmlFor="exampleInputPassword1">Password</label>
                <input
                type="password"
                className="form-control"
                id="InputPassword"
                placeholder="Password"
                value={user1.password}
                onChange={(e) => handleInputPassword(e)}
                />
            </div>
            <button onClick={(e) => handleSubmit(e)} type="submit" className="btn btn-primary w-100 mb-2">Login</button>
            <label className="custom-control-label d-block text-center mt-3">Don´t have an acount? 
                <button 
                    className="btn btn-primary w-100 mb-2"
                    onClick={(e) => handlerRegister(e)}
                >Sign Up</button>
            </label>
        </form>
    </div>
  );
}

export default LoginPage;