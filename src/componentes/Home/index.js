
import React, {Component} from "react"
import axios from "axios";

import { Link } from "react-router-dom";



import { Navbar, Input, InputGroup, InputGroupAddon, Container, Col, Form, Button, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Spinner} from "reactstrap";

import { MdSearch, MdStar } from "react-icons/md"

class Home extends Component {
    state = {
        carregando: false,
        meteoro: []
    }
 

    meteoroDaPaixao = async (evento) => {
        evento.preventDefault()

        this.setState({carregando: true})

        const form = evento.target
        const inputGroup = form.children[0]
        const input = inputGroup.children[0]
        
        // const { data: seguidores } = await axios (`https://api.github.com/users/${input.value}/followers`)
        // Aqui a desistruturação foi realizada.

        const meteoro = await axios (`https://api.nasa.gov/planetary/apod?date=${input.value}&api_key=2aPUGswDqU6gb7lJ7W67AL2nzbix9amxQo1FBePx`)


        this.setState({meteoro: [meteoro.data, ...this.state.meteoro ], carregando: false } )

        console.log(meteoro.data)
    }

    


    render (){
        return (
            <>

            <Navbar color="dark">
                <Container className="d-flex justify-content-center">
                  
                    <img className="routed-circle boder border-white mr-3  " width="50" src="https://www.thispersondoesnotexist.com/" alt="pessoa-aleatória"/>
                        Logado como 
                        <Link className="text-white font-weight-bold ml-3" to="/">
                        { this.props.match.params.usuario }
                        </Link>
                        
                    <span className="text-white">  
                    { this.props.match.params.usuario }
                    </span>


            
                  </Container>

            </Navbar>
            

           
            
            {/* ultizar o fragmente para react.fragmente */}

            <Navbar color="dark" fixed="bottom">
              <Container className="d-flex justify-content-center">
                  <Col xs="12" md="6">
                      <Form onSubmit={this.meteoroDaPaixao}>
                        <InputGroup>
                            <Input type="date"/>
                                <InputGroupAddon addonType="append">
                                    <Button variant="white" color="danger">
                                    {this.state.carregando ? (<Spinner color="light" size="sm"/>) : (<MdSearch size="20"/>) }
                                    
                                    </Button>
                                </InputGroupAddon>
                        </InputGroup>
                      </Form>
                  </Col>
              </Container>
            </Navbar>

                        {this.state.carregando ? (
                    <Container className="h-100 d-flex flex-colunm justify-content-center align-items-center">
                        <Spinner color="dark" size="lg"/>
                        <span>Carregando...</span>
                    </Container>
                ) : (

                    <Container className="mt-3 mb-5">
                        <Row>
                        { this.state.meteoro.map((meteoro) => ( 
                        
                            <Col className="d-flex" xs="12" md="4">
                                <Card className="text-white mb-2" color="dark">
                                    <CardImg top width="100%" height="35%" src={meteoro.url} alt={meteoro.title} /> 
                                        <CardBody>
                                        <CardTitle className="h3 text-center">{meteoro.title}</CardTitle>
                                        <CardSubtitle className="text-muted text-center">{meteoro.date.split("-").reverse().join("/")}</CardSubtitle>
                                        <CardText className="text-justify">{meteoro.explanation}</CardText>
                                    </CardBody>
                            
                                </Card>
                            </Col>

                        ) ) }
                        </Row>
                    </Container>
                ) }

                {this.state.meteoro.length === 0 && (
                    <Container className="h-100 d-flex flex-colunm justify-content-center align-items-center">
                    <MdStar color="#000" size="150"/>
                    <h3>escolha a data...</h3>
                    </Container>
                ) }



                {/* {this.state.carregando && (
                    <container className="h-100 d-flex flex-colunm justify-content-center align-items-center">
                        <Spinner color="dark" size="lg"/>
                        <span>Carregando...</span>
                    </container>
                ) } */}

                




                
           
    
            </>
            

        )
    }
}

export default Home;
