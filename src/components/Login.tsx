import React from "react";
import "../Login.css";

interface LogProps {
  StatUpdate: () => void;
  email: string;
  password: string;
  confPassword: string;
}

interface LogStatus {
  // changeForm: () => void;
  // logUser: () => void;
  // regUser: () => void;
  
  // handleEmailChange: () => void;
  // handlePasswordChange: () => void;
  SignUp: boolean;
  handleChange: () => void;
}

export default class Login extends React.Component<LogProps, LogStatus> {
  constructor(props: LogProps) {
    super(props);
    this.state = {
      SignUp: true,
      // email: '',
      // password: '',
      // confPassword: '',
      handleChange(): void{}
    };
  }

  changeForm = () => {
    this.setState({ SignUp: !this.state.SignUp });
    // alert(this.state.SignUp);
  };

  logUser = () => {
    
    this.props.StatUpdate();
    console.log("logging you in...");

  };

  regUser = () => {
    alert("regging you in...");
  };

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    // this.setState({
    //   email: e.target.value
    //   })
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
            <span className="logo">App name</span>
            <form
              onSubmit={(e: React.SyntheticEvent) => {
              e.preventDefault();
              console.log('submitted...');
              
              this.logUser();
              }}
              // onSubmit={() => {
              //   this.logUser();
              // }}
            >
              <div>
                <input
                  value={this.props.email} onChange={e => this.handleChange(e)}
                  ref="email"
                  type="text"
                  name="email"
                  placeholder="email"
                />
              </div>
              <div>
                <input type="password" name="password" placeholder="password" />
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
          </div>
        </div>
      </div>
    );
  }
}
