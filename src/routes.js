/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.jsx";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import AdminCustomer from "views/controller/AdminCustomer";
import AdminCustomerOrders from "views/controller/AdminCustomerOrders";
import AdminPillar from "views/controller/AdminPillar";
import HomePage from "Home/HomePage";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/pillars",
    name: " Địa chỉ",
    icon: "ni ni-archive-2 text-pink",
    component: AdminPillar,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Trụ đã cho thuê",
    icon: "ni ni-delivery-fast text-blue",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Trụ chưa cho thuê",
    icon: "ni ni-money-coins text-black",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/customerOrders",
    name: "Khách đã thuê",
    icon: "ni ni-calendar-grid-58 text-green",
    component: AdminCustomerOrders,
    layout: "/admin"
  },
  {
    path: "/customers",
    name: "Khách hàng",
    icon: "ni ni-badge text-red",
    component: AdminCustomer,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Đơn đặt trụ",
    icon: "ni ni-single-copy-04 text-cyan",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  },
  {
    path: "/homePage",
    name: "Home Page",
    icon: "ni ni-circle-08 text-pink",
    component: HomePage,
    layout: "/auth"
  }
];
export default routes;
