import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landingpage() {
  const navigateByUrl = useNavigate()

  const navigate = ()=>{
    navigateByUrl('/home')
  }
  return (
    <>
      <Row className='mt-5 mb-5 align-items-center'>
        <Col></Col>
        <Col md={4}>
          <h3 className='mb-3'>Welcome to <span className='text-warning'>Veedio.com</span></h3>
          <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, doloribus magni. Velit quia provident temporibus adipisci dolorem repellat praesentium doloremque suscipit, ratione harum unde soluta animi illum ut esse explicabo.</p>
          <button onClick={navigate} className='btn btn-info fw-bolder mt-2'>Get Started</button>
        </Col>
        <Col></Col>
        <Col md={6}>
          <img className='img-fluid' src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="landing" />
        </Col>
      </Row>

      <div className="container mt-5 mb-5 d-flex flex-column justify-content-center align-items-center">
        <h3>Features</h3>
        <div className="features mt-5 d-flex justify-content-between w-100">
          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img style={{ height: '300px', width: '300px' }} variant="top" src="https://i.pinimg.com/originals/53/97/7e/53977ec36a46d13a45ceeb5974b3d117.gif" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img style={{ height: '300px', width: '300px' }} variant="top" src="https://cdn.statically.io/img/www.blogson.com.br/wp-content/uploads/2017/10/584b607f5c2ff075429dc0e7b8d142ef.gif" />
            <Card.Body>
              <Card.Title>Categorise Video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img style={{ height: '300px', width: '300px' }} variant="top" src="https://redtechnologiesinc.com/wp-content/uploads/2018/09/video-icon-gif2.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

        </div>


      </div>

      <div className="container border rounded p-5 mt-5 mb-5 d-flex justify-content-between align-items-center">
        <div className="content">
          <h4 className='text-warning mb-5'>Simple, Fast and Powerful</h4>
          <h6 className='mb-3'><span className='fs-5 me-3'>Play Everything: </span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel ipsam ipsum placeat.</h6>
          <h6 className='mb-3'><span className='fs-5 me-3'>Categorise Video: </span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel ipsam ipsum placeat.</h6>
          <h6><span className='fs-5 me-3'>Managing History: </span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel ipsam ipsum placeat.</h6>
        </div>
        <div className="video ms-5">
        <iframe width="700" height="350" src="https://www.youtube.com/embed/hCiC1UrQHDA" title="2024 Mustang GT Performance vs Camaro SS 1LE // DRAG RACE and LAP TIMES" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        </div>
      </div>

    </>
  )
}

export default Landingpage