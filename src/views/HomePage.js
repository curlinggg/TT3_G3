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
import { useEffect, useState } from "react";

// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
import data from '../dummydata/projectexpenseclaims.json';
import { getClaims } from "utils/api/ClaimAPI";
// reactstrap components
import {
  Card,
  Badge,
  CardHeader,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
// import TableButton from "components/Dashboard/TableButton";
import ClaimRow from "components/Dashboard/ClaimRow";
import { BrowserRouter, Route, Switch, Redirect, useHistory } from "react-router-dom";
import Dashboard from "./Dashboard";
import ClaimsComponent from "./ClaimsComponent";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");
  const [createMode, setCreateMode] = useState(false)
  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  return (
    <>
     <Header />
      <Container className="mt--7" fluid>
        {createMode ? <ClaimsComponent createMode={createMode} setCreateMode={setCreateMode} /> : <Dashboard createMode={createMode} setCreateMode={setCreateMode}/>}
      </Container>
    </>
  );
};

export default Index;
