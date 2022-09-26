
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import 'react-phone-number-input/style.css'
import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import 'react-toastify/dist/ReactToastify.css';
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import { ToastContainer } from "react-toastify";


const root = ReactDOM.createRoot(document.getElementById("root"));
localStorage.setItem("data", JSON.stringify({ role: 'user', name: 'abc' }))

var hours = 2;
var now = new Date().getTime();
var setupTime = localStorage.getItem('setupTime');
if (setupTime == null) {
  localStorage.setItem('setupTime', now)
} else {
  if (now - setupTime > hours * 60 * 60 * 1000) {
    localStorage.clear()
    localStorage.setItem('setupTime', now);
  }
}

root.render(
  <React.Fragment>
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        {/* <Route path="/user" render={(props) => <UserLayout {...props} />} /> */}
        <Redirect from="/" to="/auth/homePage" />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
);
