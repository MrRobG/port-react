import './App.css';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Row,
  Col,
  Image,
  Button,
  Card,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <header>
        <Navbar expand='lg' className='bg-body-tertiary'>
          <Container>
            <Navbar.Brand href='#home'>Robert Guerra</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link href='#home'>Home</Nav.Link>
                <Nav.Link href='#link'>Link</Nav.Link>
                <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.2'>
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.3'>
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action/3.4'>
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
          <Row className='px-4 my-5'>
            <Col sm={7}>
              <Image
                src='https://picsum.photos/900/400'
                fluid
                rounded
                className=''
              />
            </Col>
            <Col sm={5}>
              <h1 class='font-weight-light'>Tagline</h1>
              <p class='mt-4'>
                This is a template that is great for small businessess. It does
                not have too much fancy flare to it, but makes a great use of
                the standard Bootstrap components. Feel free to use this
                template for any project you want!
              </p>
              <Button variant='outline-primary'>Call to action</Button>
            </Col>
          </Row>
          <Row>
            <Card className='text-center bg-secondary text-white my-5 py-4'>
              <Card.Body>
                This is a call to action card that is great to showcase some
                important information or diplay a clever tagline.
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  variant='top'
                  src='https://picsum.photos/id/201/320/200'
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant='primary'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src='https://picsum.photos/320/200' />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant='primary'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src='https://picsum.photos/286/180' />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant='primary'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <footer class='py-5 my-5 bg-dark'>
        <Container className='px-4'>
          <p class='text-center text-white'>
            Copyright and TM Your Website 2023
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
