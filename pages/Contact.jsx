// // Desc: Login page
// import "./Signup.css";
// import { authContext } from "../src/contexts/AuthContext";
// import { Link } from "react-router-dom";
// // import { useState, useContext } from "react";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

// const FormSchema = yup.object({
//   email: yup.string().required("Email is required"),
//   password: yup
//     .string()
//     .required("Password is required")
//     .min(6, "password must be at least 6 characters"),
//   name: yup.string(),
// });

// const Contact = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(FormSchema),
//   });
//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div
//       style={{
//         margin: "3rem auto",
//       }}
//     >
//       <section>
//         <div
//           style={{
//             textAlign: "center",
//           }}
//         >
//           <h2>Login</h2>
//           <p
//             style={{
//               fontSize: "1rem",
//             }}
//           >
//             New user? <Link to="/signup">Sign Up</Link>
//           </p>
//         </div>

//         <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
//           {/* email */}
//           <div>
//             <label htmlFor="email">Email</label>
//             <input type="email" {...register("email")} id="email" />
//             {errors.email && <p>{errors.email.message}</p>}
//           </div>

//           {/* password */}
//           <div>
//             <label htmlFor="password">Password</label>
//             <input type="password" {...register("password")} id="password" />
//             {errors.password && <p>{errors.password.message}</p>}
//           </div>
//           <button type="submit">Sign In</button>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default Contact;
