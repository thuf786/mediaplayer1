import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import VideoCard from './VideoCard'
import { getAllVideo } from '../services/allAPI'
function View({uploadVideoStatus}) {
  const [allVideo, setAllVideo] = useState([])
  // const [deleteVideoStatus, setDeleteVideoStatus]= useState(false)


  const getAllVideoFromDB = async () => {
    const response = await getAllVideo();
    console.log(response);
    setAllVideo(response.data);
  }
  useEffect(() => {
    getAllVideoFromDB();
 }, [uploadVideoStatus])

  return (
    <>
      <Row>{
        allVideo.length > 0 ?
          allVideo.map((videos) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <VideoCard displayVideo = {videos} />
            </Col>

          ))
          :
          <p>nothing to display</p>
      }

      </Row>
    </>
  )
}

export default View


