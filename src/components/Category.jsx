import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addCategory, deleteCategory, getCategory, getVideoDetails, updateCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import VideoCard from './VideoCard'



function Category() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [allCategory, setAllCategory] = useState([]);
  const [isDelete, setisDelete] = useState([])
  const [Category, setCategory] = useState({
    id: "",
    categoryName: "",
    allVideos:[]
  })
  console.log("==category==");
  const uploadCategory = async () => {


    const { id, categoryName } = Category;
    if (!id || !categoryName) {
      toast.warning("Please fill the form completely");
    }
    else {
      const response = await addCategory(Category);
      console.log(response);
      if (response.status == 201) {
        toast.success(`${response.data.categoryName} is sucessfully uploaded`);
        handleClose();
      }
      else {
        toast.error('Something went wrong!');
      }
    }
  }
  const getCategoryFromDB = async () => {
    const response = await getCategory();
    const { data } = response;
    setAllCategory(data)
    console.log(data);
  }
  useEffect(() => {
    getCategoryFromDB();
  }, [isDelete])
  const deleteCategoryItem = async (id) => {
    const response = await deleteCategory(id);
    if (response.status === 200) {
      setisDelete(!isDelete)
      toast.info("Deleted Successfully")
    } else {
      toast.error("Error in deleting")
    }
  }
  const dragOver = (e)=>{
    // to prevent page refresh , by default onDragOver will do page refresh
    e.preventDefault();
    console.log("dragover");
  }
   const videoDrop =async (e,id)=>{
    e.preventDefault() ;
    console.log(`dropped ${id}`);
    const videoid=e.dataTransfer.getData('videoID');
    console.log(`Video Id : ${videoid}`)
    const response = await getVideoDetails(videoid);
    const {data} = response;
    console.log("video details");
    console.log(data);
      const selectedCategory = allCategory?.find((item)=>item.id== id);
      console.log("selected category",selectedCategory);
      selectedCategory.allVideos.push(data)
      console.log("==selected category with draged video details==");
      console.log(selectedCategory);
      await updateCategory(id,selectedCategory)
      getCategoryFromDB();
   }
  return (
    <>
      <div>
        <button className='btn btn-warning' style={{ fontFamily: "-moz-initial" }} onClick={handleShow}>Add New Category</button>
      </div>
      {
        allCategory.length > 0 ?
          allCategory.map((item) => (
            <div className='d-grid ms-3' style={{ width: "275px" }} droppable onDragOver={(e)=>dragOver(e)}
            onDrop={(e)=>videoDrop(e,item.id)}
            
            >
              <div className='m-5 border border-secondary rounded p-3'>
                <div className='d-flex justify-content-between align-items-center'>
                  <h5 style={{ fontFamily: "-moz-initial" }} className='m-1'>{item.categoryName}</h5>
                  <button class='btn btn-outline-danger' onClick={() => deleteCategoryItem(item.id)}><i class="fa-solid fa-trash" ></i></button>
                </div>
                <Row>
                  <Col sm={12}>
                    {
                      item.allVideos?.length >0?
                      item.allVideos.map(video=>(<VideoCard displayVideo={video}/>))
                      :
                      <p>No item</p>
                    }
                  </Col>
                </Row>
              </div>
            </div>
          ))
          :
          <p>No Data</p>
      }

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: "-moz-initial" }}><i class="fa-solid fa-pencil text-warning me-3"></i>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ fontFamily: "-moz-initial" }}>
          Fill the following details.
          <Form className='border border-secondary p-3'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Category ID" onChange={(e) => setCategory({ ...Category, id: e.target.value })} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Category Name" onChange={(e) => setCategory({ ...Category, categoryName: e.target.value })} />
            </Form.Group>


          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{ fontFamily: "-moz-initial" }}>
            Cancel
          </Button>
          <Button variant="primary" style={{ fontFamily: "-moz-initial" }} onClick={uploadCategory} >Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category