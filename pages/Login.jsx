// Desc: Login page
import "./signup.css";
import { authContext } from "../src/contexts/AuthContext";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";

const Login = () => {
    const emptyForm = {
        email: "",
        password: "",
      };
      const [formData, setFormData] = useState(emptyForm);
      const [showPassword, setShowPassword] = useState(false);
    
    //   const navigate = useNavigate();
      const { login, submitting } = useContext(authContext);
    
      //   HANDLE INPUT CHANGE
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
        console.log(formData);
      };
    
      //   HANDLE TOGGLE PASSWORD
      const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
      };
    
      //   SUBMIT LOGIN FORM
      const handleSubmit = async (e) => {
        e.preventDefault();
        login(formData);
        setFormData(emptyForm);
      };
    
      return (
        <div
          style={{
            margin: "3rem auto",
          }}
        >
          <section>
            <div
              style={{
                textAlign: "center",
              }}
            >
              <h2>Login</h2>
              <p style={{
                fontSize: "1rem"
              }}>New user? <Link to="/signup">Sign Up</Link></p>
            </div>
    
            <form className="signup-form" onSubmit={handleSubmit}>
              {/* email */}
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="john@gmail.com"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
    
              {/* password */}
              <div>
                <label htmlFor="password">Password</label>
                <div className="password-input">
                  <input
                    value={formData.password}
                    type={showPassword ? "text" : "password"}
                    placeholder="*******"
                    id="password"
                    name="password"
                    onChange={handleInputChange}
                  />
                  <span onClick={handleTogglePassword}>
                    {showPassword ? (
                      <i class="fa-solid fa-eye"></i>
                    ) : (
                      <i class="fa-solid fa-eye-slash"></i>
                    )}
                  </span>
                </div>
              </div>    
              <button type="submit" disabled={submitting}>
                {submitting ? <span>Submitting...</span> : <span>Sign In</span>}
              </button>
            </form>
          </section>
        </div>
      );
    };
    

export default Login
