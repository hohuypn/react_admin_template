import React, { Suspense } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import history from "../../../constant/history";
import CIcon from "@coreui/icons-react";
import { Link } from "react-router-dom";
import axios from 'axios';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
    });
  };

  onLogin = async (e) => {
    e.preventDefault();
    var headers = {'Content-Type': 'application/json'};
    const { email, password} = this.state;
    const data = {
      email: email,
      password: password,
    }
    await axios.post('http://127.0.0.1:8000/api/auth/login', data, headers)
    .then(res => {
      if(res.data){
          localStorage.setItem("token", res.data.access_token);
          history.push("/dashboard");
          window.location.reload(true);
      }
    })


  }

  render() {
    return (
        <div className="c-app c-default-layout flex-row align-items-center">
          <CContainer>
            <CRow className="justify-content-center">
              <CCol md="8">
                <CCardGroup>
                  <CCard className="p-4">
                    <CCardBody>
                      <CForm onSubmit={(e) => this.onLogin(e)}>
                        <h1>Login</h1>
                        <p className="text-muted">Sign In to your account</p>
                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-user" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput
                              type="email"
                              name="email"
                              onChange={this.onChange}
                              placeholder="Email"
                              autoComplete="email"
                            />
                        </CInputGroup>
                        <CInputGroup className="mb-4">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-lock-locked" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput
                              type="password"
                              name="password"
                              onChange={this.onChange}
                              placeholder="Password"
                              autoComplete="password"
                            />
                        </CInputGroup>
                        <CRow>
                          <CCol xs="6">
                            <CButton type="submit" color="primary" className="px-4">
                              Login
                            </CButton>
                          </CCol>
                          <CCol xs="6" className="text-right">
                            <CButton color="link" className="px-0">
                              Forgot password?
                            </CButton>
                          </CCol>
                        </CRow>
                      </CForm>
                    </CCardBody>
                  </CCard>
                  <CCard
                    className="text-white bg-primary py-5 d-md-down-none"
                    style={{ width: "44%" }}
                  >
                    <CCardBody className="text-center">
                      <div>
                        <h2>Sign up</h2>
                        <p>
                          If you don't have account, please register now!
                        </p>
                        <Link to="/register">
                          <CButton
                            color="primary"
                            className="mt-3"
                            active
                            tabIndex={-1}
                          >
                            Register Now!
                          </CButton>
                        </Link>
                      </div>
                    </CCardBody>
                  </CCard>
                </CCardGroup>
              </CCol>
            </CRow>
          </CContainer>
        </div>
    );
  }
}

export default Login;
