import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="container-lg py-5">
      <div className="row">
        <div className="col-md-6 py-5">
          <h1 className="display-2 my-5">
            Deliver your products as fast as the sparkle of thunder
          </h1>
        </div>
        <div className="col-md-6 d-flex justify-content-center justify-content-md-end align-items-center">
          <form action="none" className="hero-form p-3 rounded">
            <div className="form-floating">
              <input
                type="text"
                name="mobile"
                id="mobile"
                className="form-control mt-2"
                placeholder="Mobile"
                autoComplete="phone"
              />
              <label htmlFor="mobile">Mobile</label>
            </div>
            <div className="clearfix w-100 text-center py-2">Or</div>
            <div className="form-floating">
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
                placeholder="Email"
                autoComplete="email"
              />
              <label htmlFor="email">Email</label>
            </div>
            <button type="submit" className="btn btn-primary btn-lg w-100 mt-3">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// <header className="hero">
//   <div className="hero-left">
//     <h1 className="hero-title">
//       <span className="colored">Deliver</span> your product as{" "}
//       <span className="colored">fast</span> as the{" "}
//       <span className="colored">sparkle</span> of thunder
//     </h1>
//     <div className="hero-left-bottom">
//       <Button
//         label="Register"
//         onClickFnc={function () {
//           navigate("/registration", { replace: true });
//         }}
//       />
//       <Button
//         label="Login"
//         secondary
//         onClickFnc={function () {
//           navigate("/login", { replace: true });
//         }}
//       />
//     </div>
//   </div>
//   <img src={heroImg} alt="Hero" className="hero-img" />
// </header>
