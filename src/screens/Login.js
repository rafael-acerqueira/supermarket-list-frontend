import React, { Component } from 'react'
import api from '../services/api'
import { login } from '../services/auth'

import Login from '../components/Login/Login'

class ScreensLogin extends Component {

  constructor(props) {
    super(props)

    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.handleSignIn = this.handleSignIn.bind(this)

    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  onChangeEmail(email) {
    this.setState({ email })
  }

  onChangePassword(password) {
    this.setState({ password })
  }

  async handleSignIn(e) {
    e.preventDefault()
    const { email, password } = this.state
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" })
    } else {
      try {
        const response = await api.post("/login", { email, password })
        login(response.data.token)
        this.props.history.push("/")
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais"
        })
      }
    }
  }
  render() {
    return (
      <Login 
        handleSignIn={this.handleSignIn}
        onChangeEmail={this.onChangeEmail}
        onChangePassword={this.onChangePassword}
        error={this.state.error}
        />
    )
  }
}
export default ScreensLogin