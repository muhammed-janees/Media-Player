import React, { useEffect, useState } from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAllCategory, updateCategory, getVideo } from '../Services/allAPI';
import VideoCard from './VideoCard';

function Category() {
  const [categories,setCategories] = useState([])
  const [categoryName, setCategoryName] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const insertCategory = async () => {
    if (categoryName) {
      let body = {
        categoryName,allVideos:[]
      }
      //make api call
      const response = await addCategory(body)
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        //reset state
        setCategoryName("")
        //modal hide
        handleClose()
        //alert
        toast.success("New category added successfully")
        //call getcategories
        getCategories()
      }else{
        toast.warning("Uploading error...Please try after some time")
      }
    } else {
      toast.info("Please fill the form")
    }
  }

  const getCategories = async()=>{
    const {data} = await getAllCategory()
    setCategories(data);
  }

  useEffect(()=>{
    getCategories()
  },[])

  const removeCategory = async(id)=>{
    await deleteCategory(id)
    //get all category
    getCategories()
  }

  const dragOverCategory = (e)=>{
    // console.log("Dragging over category");
    e.preventDefault()
  }

  const videoDrop = async (e,categoryId)=>{
    console.log("inside drop function");
    // console.log("Category id:",+categoryId);
    const videoCardId = e.dataTransfer.getData("cardId")
    // console.log("Video card :",+videoCardId);
    //get video details
    const {data} = await getVideo(videoCardId)
    let selectedCategory = categories.find(item=>item.id===categoryId)
    selectedCategory.allVideos.push(data)
    await updateCategory(categoryId,selectedCategory)
    getCategories()
  }

  return (
    <>
      <div className="d-grid">
        <button className="btn btn-info" onClick={handleShow}>Add New Category</button>
      </div>
      {
        categories?categories.map(item=>(
          <div className='border p-3 rounded mt-3 mb-3' droppable onDrop={(e)=>videoDrop(e,item?.id)} onDragOver={(e)=>dragOverCategory(e)}>
            <div className="d-flex justify-content-between">
              <h5>{item?.categoryName}</h5>
              <button onClick={()=>removeCategory(item?.id)} className='btn'> <i className="fa-solid fa-trash text-danger"></i> </button>
            </div>
            <Row>
              {
                item?.allVideos&&item?.allVideos.map(card=>(
                  <Col sm={12} className='p-1 mb-2'>
                    <VideoCard displayData={card} insideCategory={true}/>
                  </Col>
                ))
              }
            </Row>
          </div>
        )): <p className='fw-bolder text-danger mt-3'>Sorry, nothing to display</p>
      }


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='border p-3 rounded border-secondary'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Category Name</Form.Label>
              <Form.Control type="email" placeholder="Enter Category Name" onChange={(e) => setCategoryName(e.target.value)} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={insertCategory} variant="primary">Add</Button>
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

export default Category