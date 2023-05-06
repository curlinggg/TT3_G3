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

// reactstrap components
import React from "react";
import ImageUploading from "react-images-uploading";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  Form,
} from "reactstrap";
// core components

import UserHeader from "components/Headers/UserHeader.js";

const ClaimsComponent = ({createMode, setCreateMode}) => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onImageChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  //go back to dashboard
  // setCreateMode(false)
  
  return (
    <>
     <Row>
          {/*  */}
          <Col className="order-xl-1" xl="">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Claim </h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Employee Information
                  </h6>
                  <div className="pl-lg-4">
                    <Row></Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-project-id"
                          >
                            Project ID
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-project-id"
                            placeholder="First name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-employee-id"
                          >
                            Employee ID
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-employee-id"
                            placeholder="Employee ID"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Claims Information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="2">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-claim-id"
                          >
                            Claim ID
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="nput-claim-id"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="2">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-claim-id"
                          >
                            Expense Date
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="nput-claim-id"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="2">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Currency ID
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="New York"
                            id="input-city"
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Amount
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="United States"
                            id="input-country"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      {/* <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Postal code
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-postal-code"
                              placeholder="Postal code"
                              type="number"
                            />
                          </FormGroup>
                        </Col> */}
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-project-id"
                          >
                            Purpose
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-project-id"
                            placeholder="First name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-employee-id"
                          >
                            Charge to Default Department
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-employee-id"
                            placeholder="Employee ID"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-employee-id"
                          >
                            Alternative Department Code
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-employee-id"
                            placeholder="Employee ID"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="pb-2">
                      <Col>
                        <div className="App">

                         
                          <ImageUploading
                          id="input-photo"
                            multiple
                            value={images}
                            onChange={onImageChange}
                            maxNumber={maxNumber}
                            dataURLKey="data_url"
                          >
                            {({
                              imageList,
                              onImageUpload,
                              onImageRemoveAll,
                              onImageUpdate,
                              onImageRemove,
                              isDragging,
                              dragProps,
                            }) => (
                              // write your building UI
                              <div className="upload__image-wrapper">
                                 <label
                            className="form-control-label"
                            htmlFor="input-photo"
                          >
                            Upload image of claim expenses
                          </label>
                                <Row className="px-3">
                                <Button
                                  outline
                                  color="default"
                                  type="button"
                                  style={
                                    isDragging ? { color: "red" } : undefined
                                  }
                                  onClick={onImageUpload}
                                  {...dragProps}
                                >
                                  Upload 
                                </Button>
                                </Row>
                               
                              </div>
                            )}
                          </ImageUploading>
                        </div>
                      
                      </Col>
                    </Row>
                    <hr className="my-3" />
                    <Row className="px-3 py-2">
                      <Button color="primary" type="submit" className="btn-primary">
                        Submit Claim
                      </Button>
                    </Row>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
    </>
  );
};

export default ClaimsComponent;
