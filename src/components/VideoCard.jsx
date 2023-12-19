import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteVideo } from '../services/allAPI';

function VideoCard({ displayVideo }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    // call function to store details to watch history
    const { caption, embededLink } = displayVideo;
    console.log("Caption: ", caption);
    console.log("embededLink:", embededLink);
    const today = new Date;
   const timeStamp = new Intl.DateTimeFormat('en-US', {
     year: 'numeric',
      month: '2-digit'
      , day: '2-digit',
       hour:'2-digit',
        minute: '2-digit',
        second:'2-digit'
      }).format(today)
   console.log(timeStamp);
   let videoDetails={
    caption:caption,
    embededLink:embededLink,
    timestamp:timeStamp
   }
  await addToHistory(videoDetails)
   
  }
  const removeVideo = async (id) => {
    await deleteVideo(id).then(() => { window.location.reload() });
}
const dragStarted = (e,id)=>{
  console.log(`video card with id ${id} started dragging`);
  e.dataTransfer.setData("videoID",id)
}
  return (
    <>


      <Card style={{ width: '16rem' }} 
      className='mb-5'draggable onDragStart={(e)=>dragStarted(e,displayVideo.id)}>
        <Card.Img variant="top" height="300px" src={displayVideo.url} onClick={handleShow} />
        <Card.Body>
          <div className='d-flex justify-content-between'>
            <h5 style={{ fontFamily: "-moz-initial" }}>{displayVideo.caption}</h5>
            <Button variant="danger" className='ms-5' onClick={() => removeVideo(displayVideo.id)}>
              <i class="fa-solid fa-trash"></i>
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>

        </Modal.Header>
        <Modal.Body>
          <iframe width="450px" height="500" src={
            displayVideo.embededLink ? displayVideo.embededLink : "https://www.youtube.com/embed/" + displayVideo.video
          } title="" frameborder="0" allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </>

  )
}

export default VideoCard