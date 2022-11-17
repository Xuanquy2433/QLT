
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
import { toast, ToastContainer } from "react-toastify";
import AddressDetail from "views/pillarAddress/AddressDetail";
import jwt_decode from "jwt-decode";


const root = ReactDOM.createRoot(document.getElementById("root"));
// localStorage.setItem("data", JSON.stringify({ role: 'admin', name: 'abc' }))

// var hours = 2;
// var now = new Date().getTime();
// var setupTime = localStorage.getItem('setupTime');
// if (setupTime == null) {
//   localStorage.setItem('setupTime', now)
// } else {
//   if (now - setupTime > hours * 60 * 60 * 1000) {
//     localStorage.clear()
//     toast.warning('Phiên đăng nhập đã hết hạn ', { autoClose: 1000 })
//     setTimeout(() => {
//       window.location.reload();
//     }, 1700);
//     localStorage.setItem('setupTime', now);
//   }
// }
let token = localStorage.getItem('token')
let decoded;

if (token !== null) {
  decoded = jwt_decode(token);
}
function isTokenExpired(token) {
  const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
  return (Math.floor((new Date).getTime() / 1000)) >= expiry;
}
if (token && isTokenExpired(token)) {
  localStorage.clear()
  toast.warning('Phiên đăng nhập đã hết hạn !', { autoClose: 1000 })
  setTimeout(() => {
    window.location.reload();
  }, 1600);
}

if (token && decoded.roles == '[ROLE_ADMIN]') {
  document.title = "Quản lý trụ quảng cáo | Admin";
} else if (token && decoded.roles == '[ROLE_USER]') {
  document.title = "ACN | Trụ quảng cáo";
} else if (!token && !decoded) {
  document.title = "ACN | Trụ quảng cáo";
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
    <BrowserRouter >
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        {/* <Route path="/user" render={(props) => <UserLayout {...props} />} /> */}
        <Redirect from="/" to="/auth/homePage" />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
);
