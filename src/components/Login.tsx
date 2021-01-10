import React from "react";
import "../Login.css";

interface LogProps {
  StatUpdate: () => void;
  RegUser: () => void;
  email: string;
  password: string;
  confPassword: string;
  handleEmailChange: (e: any) => void;
  handlePassChange: (e: any) => void;
}

interface LogStates {
  // changeForm: () => void;
  // logUser: () => void;
  // regUser: () => void;
  
  // handleEmailChange: () => void;
  // handlePasswordChange: () => void;
  SignUp: boolean;
  handleChange: () => void;
  email: string;
  password: string;
  regForm: boolean
}

export default class Login extends React.Component<LogProps, LogStates> {
  constructor(props: LogProps) {
    super(props);
    this.state = {
      SignUp: true,
      email: "",
      password: "",
      // confPassword: '',
      handleChange(): void{},
      regForm: true
    };
  }

  changeForm = () => {
    this.setState({ SignUp: !this.state.SignUp });
    this.setState({ regForm: !this.state.regForm});
    // alert(this.state.SignUp);
  };

  logUser = () => {
    
    this.props.StatUpdate();
    console.log("logging you in...");

  };

  regUser = () => {
    this.props.RegUser();
    
  };

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    this.setState({
      // email: e.target.value
      })
    console.log(this.props.email)
  }
  
  

  render() {
    return (
      <div className="loginPage">
        <div className="imageWrapper">
          <img
            className="ImgSm"
            src="https://www.verifyid.co.za/assets/newfrontend/images/sms-id.svg"
            alt="bldg"
          />
        </div>
        <div className="formWrapper">
          <div className="form">
            <span className="logo">🏢</span>
            <div className="logo">Comfy</div>
            <form
              onSubmit={(e: React.SyntheticEvent) => {
              e.preventDefault();
              console.log('submitted...');
              {this.state.regForm ? this.regUser() : this.logUser()}
              ;
              }}
              // onSubmit={() => {
              //   this.logUser();
              // }}
            >
              <div>
                <input
                  // value={this.props.email} onChange={e => this.handleChange(e)}
                  onChange={(event) => {
                    const { target } = event;
                    if (target) {
                      //console.log(target.value);
                      this.props.handleEmailChange(target.value);
                    }
                  }}
                  ref="email"
                  type="text"
                  name="email"
                  placeholder="email"
                />
              </div>
              <div>
                <input type="password" name="password" placeholder="password"
                onChange={(event) => {
                  const { target } = event;
                  if (target) {
                    //console.log(target.value);
                    this.props.handlePassChange(target.value);
                  }}}
                 />
              </div>
              {this.state.SignUp ? (
                <div>
                  <input
                    type="password"
                    name="confPassword"
                    placeholder="Confirm password"
                  />
                  <input
                    className="signUpButton"
                    type="submit"
                    value="Register"
                  />
                  or <br></br>
                  <button
                    className="buttonLink"
                    onClick={() => this.changeForm()}
                  >
                    {" "}
                    Login{" "}
                  </button>
                </div>
              ) : (
                <div>
                  <input
                    className="signInButton"
                    type="submit"
                    value="Log in"
                  />
                  or <br></br>
                  <button
                    className="buttonLink"
                    onClick={() => this.changeForm()}
                  >
                    {" "}
                    Register{" "}
                  </button>
                </div>
              )}
            </form>
            <p className="wrongCred">*wrong credentials, please try again!</p>
          </div>
        </div>
      </div>
    );
  }
}
