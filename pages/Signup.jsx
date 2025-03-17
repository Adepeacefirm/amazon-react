import { useContext, useEffect, useState } from "react";
import "./signup.css";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { authContext } from "../src/contexts/AuthContext";

const Signup = () => {
  const emptyForm = {
    name: "",
    email: "",
    gender: "",
    password: "",
  };
  const [formData, setFormData] = useState(emptyForm);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { signup, submitting } = useContext(authContext);

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

  //   SUBMIT SIGNUP FORM
  const handleSubmit = async (e) => {
    e.preventDefault();
    signup(formData);
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
          <h2>Signup</h2>
          <p>Provide you details below to register.</p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          {/* full name */}
          <div>
            <label htmlFor="name">Fullname</label>
            <input
              type="text"
              placeholder="john doe"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
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

          {/* gender */}
          <div>
            <select
              value={formData.gender}
              name="gender"
              id="gender"
              onChange={handleInputChange}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <button type="submit" disabled={submitting}>
            {submitting ? <span>Submitting...</span> : <span>Sign up</span>}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Signup;
