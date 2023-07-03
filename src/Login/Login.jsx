import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";

import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";

import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { PiSignInBold } from "react-icons/pi";
import { MdAdminPanelSettings } from "react-icons/md";
import { Link } from "react-router-dom";

import "./Login.css";
const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="wrapper">
      <div className="login-bg"></div>
      <div className="vw-100 vh-100 d-flex flex-column justify-content-center align-items-center bg-text">
        <section className=" d-flex flex-column justify-content-center align-items-center p-5 form-section-login">
          <p className="fw-bold fs-3 pb-2 login-heading pe-1 text-danger">
            Hey Admin
            <span>
              {" "}
              <MdAdminPanelSettings />
            </span>
          </p>
          <div className="px-3 py-2 mb-4 border rounded w-100">
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle sx={{ color: "red", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Username"
                variant="standard"
              />
            </Box>
          </div>
          <div className="ps-3 border rounded">
            <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      style={{ color: "red" }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className="w-100">
            <Link className="text-primary cursor-pointer mb-4 float-right">
              Forget password?
            </Link>
          </div>
          <Link to="/admin/dashboard" type="button" class="btn btn-danger fw-bold">
            Sign In <PiSignInBold />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Login;
