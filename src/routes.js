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
import Index from "views/HomePage";
import Claims from "views/ClaimsComponent.js";
import ClaimDetails from "views/ClaimDetails.js";
import EditClaim from "views/EditClaim.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";

var routes = [
  {
    path: "/claims-dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/claims",
    name: "Claims (just here for testing purposes)",
    icon: "ni ni-tv-2 text-primary",
    component: Claims,
    layout: "/admin"
  },
  {
    path: "/claimdetails",
    name: "Claim Details",
    icon: "ni ni-tv-2 text-primary",
    component: ClaimDetails,
    layout: "/admin"
  },
  {
    path: "/editclaim",
    name: "Edit Claim",
    icon: "ni ni-tv-2 text-primary",
    component: EditClaim,
    layout: "/admin"
  },

];
export default routes;
