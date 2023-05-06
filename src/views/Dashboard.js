import { useEffect, useState } from "react";

// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
import data from '../dummydata/projectexpenseclaims.json';
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

const Dashboard = ({createMode,setCreateMode}) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }
  const handleCreate = (event) => {
    event.preventDefault();
    setCreateMode(true);
    // let path = '/admin/claims';
    // history.push(path);
  }

  const history = useHistory();
  const routeToViewClaim = () => {
    let path = '/admin/claimdetails';
    history.push(path);
  }
  const routeToEditClaim = () => {
    let path = '/admin/editclaim';
    history.push(path);
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };

  const jsonContent = data.tables[0].columns;
  // console.log(jsonContent);
  const [claims, setClaims] = useState(jsonContent)
  console.log(claims)
  // useEffect(()=>{
  //   //load claims
  //   setClaims(jsonContent);
  // })
//   (e) => e.preventDefault()
  // console.log(claims);

  return (
    <>
     <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0 d-inline">Claim Details</h3>
                <button type="button" className="btn btn-primary d-inline float-right" onClick={handleCreate}>Create</button>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Last Updated</th>
                    <th scope="col">Claim ID</th>
                    <th scope="col">Project ID</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Currency</th>
                    <th scope="col">Status</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {claims.map((claimObj)=>{
                    return(
                      <ClaimRow key= {claimObj.ClaimID} claim = {claimObj} />
                    )
                  })}        
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
    </>
  );
};

export default Dashboard;
