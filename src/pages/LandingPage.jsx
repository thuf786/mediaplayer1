import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';





function LandingPage() {
    return (
        <div className='container mb-5 mt-5'>
            <Row className='icons mt-3 ms-5'>
                <Col> <h3 style={{ fontFamily: "-moz-initial" }}>Welcome to <span className='text-warning'> Media Player</span></h3>
                    <p style={{ textAlign: "justify" }}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Iste et, nesciunt dignissimos debitis nisi culpa
                        ullam ducimus voluptatum impedit placeat, eius alias reiciendis
                        delectus quaerat! Fugiat quo magni veniam in!.. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Iste et, nesciunt dignissimos debitis nisi culpa
                        ullam ducimus voluptatum impedit placeat, eius alias reiciendis
                        delectus quaerat! Fugiat quo magni veniam in!
                    </p>
                    <Link to={'./home'}>
                        <button className='btn btn-warning mt-5'>
                            Get Started <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </Link>

                </Col>

                <Col>
                    <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt='' />
                </Col>
            </Row>

            <div className='container'>
                <h3 style={{fontFamily:"-moz-initial"}}> Features</h3>
            </div>
           <div className='d-flex align-items-center justify-content-evenly mt-5 mb-4'>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

            </div>
            <div className='conatainer mb-5 mt-5 border border-2 border-secondory rounded p-5'>
                <Row className='d-flex align-itmes-center justify-content-evenly'>
                    <div className='col-md-6'>
                        <h2 className='text-warning' style={{fontFamily:"-moz-initial"}}>Simple and powerful</h2>
                        <p><span className='fw-bolder fs-5' style={{fontFamily:"-moz-initial"}}>Play Everything:  </span> <span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repudiandae vel corporis 
                            expedita unde repellendus excepturi, natus, aperiam 
                            quidem enim itaque esse adipisci aliquam ipsa deserunt. Omnis, quo sed? Minima!</span></p>
                            <p><span className='fw-bolder fs-5' style={{fontFamily:"-moz-initial"}}>Play Everything:  </span> <span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repudiandae vel corporis 
                            expedita unde repellendus excepturi, natus, aperiam 
                            quidem enim itaque esse adipisci aliquam ipsa deserunt. Omnis, quo sed? Minima!</span></p>
                            <p><span className='fw-bolder fs-5' style={{fontFamily:"-moz-initial"}}>Play Everything:  </span> <span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repudiandae vel corporis 
                            expedita unde repellendus excepturi, natus, aperiam 
                            quidem enim itaque esse adipisci aliquam ipsa deserunt. Omnis, quo sed? Minima!</span></p>

                    </div>
                    <div className='col-md-6'>
                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/Dydmpfo68DA" title="ANIMAL (OFFICIAL TEASER): Ranbir Kapoor |Rashmika M, Anil K, Bobby D |Sandeep Reddy Vanga |Bhushan K" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                </Row>
            </div>

        </div>
    )
}
export default LandingPage;