import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ListPostsView from './ListPostsView'

const ListPostsController = () => {
    const [blogData,setBlogData] = useState([])
    const [showModal,setShowModal] = useState(false)
    const [modalData, setModalData] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:3030/posts')
        .then(res=> setBlogData(res.data))
    },[])

    //belirli kullanıcı datası çekme
    const showUsers = (param) => {
     const filtredByUser = blogData.filter(data=> data.user == param);
     setModalData(filtredByUser);
     setShowModal(true)
    }

  return (
    <ListPostsView
      showModal={showModal}
      setShowModal={setShowModal}
      modalData={modalData}
      blogData={blogData}
      showUsers={showUsers}
    />
  );
}

export default ListPostsController