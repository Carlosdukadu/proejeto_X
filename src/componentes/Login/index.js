import React, { Component } from 'react';

import { Container, Form, Input, Button} from "reactstrap"


export default class Login extends Component {
    logar = (evento) => {
        evento.priventDefault();

        const form = evento.target[0];

        const input = form.children[0]

        this.props.history.push(`/home/${input.value}`)
        // Aqui direcionaos qual será a proxima tela.


    }


  render() {

    return (
        <Container className="h-100">
        <Form
          className="h-100 d-flex flex-column align-items-center justify-content-center"
          onSubmit={this.logar}
        >
          <Input
            className="text-center mt-2"
            placeholder="Seu login do GitHub"
          />
          <Button className="w-100" color="dark">
            Logar
          </Button>
        </Form>
      </Container>
    )
  }
}
