import { useEffect, useState } from 'react'
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = ({ setAuthenticate, setUserId }) => {
  const navigator = useNavigate();
  const [email, setEmail] = useState('');
  const logunUser = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    if (setUserId) {
      setUserId(email);
    }
    navigator('/');
  }
  
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={6} lg={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <h5 className="mb-4 text-center">로그인</h5>
              <Form onSubmit={(event) => logunUser(event)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className="w-100" variant="danger" type="submit">
                  로그인
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Login;
