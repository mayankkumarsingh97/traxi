import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Register() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h2 className='text-center'>Register</h2>
                    </Col>
                </Row>
                <Row className='my-md-5 my-2 justify-content-center'>
                    <Col md={6}>
                        <div className='py-md-2 card card-body login_bg shadow'>
                            <form method="POST">
                                <div class="mb-3">
                                    <input type="name" class="form-control my-2" id="exampleInputName" placeholder='*Name' aria-describedby="emailHelp" />
                                </div>

                                <div class="mb-3">
                                    <label htmlfor="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder='email' aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text text-white lead">We'll never share your email with anyone else.</div>
                                </div>

                                <div class="mb-3">
                                    <label htmlfor="exampleInputPhone" class="form-label">Phone</label>
                                    <input type="email" class="form-control" id="exampleInputPhone" placeholder='*phone' aria-describedby="emailHelp" />

                                </div>

                                <div class="mb-3">
                                    <label htmlfor="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                </div>
                               
                                <button type="submit" class="btn btn-primary w-100">Submit</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
