import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { uploadVideo } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoServerResponse}) {
  const [video, setVideo] = useState({
    id:"", caption:"", url:"", embbedLink:""
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractLink = (e) => {
    const { value } = e.target
    if (value) {
      const embbed = `https://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({ ...video, embbedLink:embbed })
    } else {
      setVideo({ ...video, embbedLink:"" })
    }
  }
  
  const handleUpload = async () => {
    const { id, caption, url, embbedLink } = video
    console.log(video);
    if (!id || !caption || !url || !embbedLink) {
      toast.warning("Please fill the form completely")
    } else {
      // make api call(asynchronous function)
      const response = await uploadVideo(video)
      if(response.status>=200 && response.status<300){
        // reset state
        setVideo({
          id:"",caption:"",url:"",embbedLink:""
        })
        //set server response
        setUploadVideoServerResponse(response.data)
        // close modal
      handleClose()
      // console.log(response);
      toast.success(`${response.data.caption} is uploaded successfully!`)
      }else{
        toast.error("uploading error...please try after some time")
      }
      
    }

  }
  return (
    <>

      <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button className='btn' onClick={handleShow}><i className='fa-solid fa-circle-plus ms-2 fs-3'></i></button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload a Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='border p-3 rounded border-secondary'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter video Id" onChange={(e) => setVideo({ ...video, id: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter video Caption" onChange={(e) => setVideo({ ...video, caption: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter video Image URL" onChange={(e) => setVideo({ ...video, url: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Youtube video Link" onChange={extractLink} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

    </>

  )
}

export default Add