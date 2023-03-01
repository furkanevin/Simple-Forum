import React from 'react'
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';


const ListPostsView = ({ blogData, showUsers, showModal, setShowModal,modalData }) => {
  return (
    <div>
      <Header addLink />
      <div className="container">
        
        {blogData.map((post) => (
          <div key={post.id} className="post">
            <div className="title">
              <h1> {post.title} </h1>
              <p onClick={() => showUsers(post.user)}> {post.user} </p>
            </div>
            <p className="text"> {post.text} </p>
          </div>
        ))}

      </div>
      <Modal
        setShowModal={setShowModal}
        showModal={showModal}
        modalData={modalData}
      />
    </div>
  );
};

export default ListPostsView