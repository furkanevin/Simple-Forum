import React from 'react'

const Modal = ({ showModal, setShowModal, modalData }) => {
  return (
    <>
      {showModal && (
        <div className="modal">
          <h1 className="user-info">
            <span> {modalData[0].user} </span> Kullanıcısının diğer postları
          </h1>
          <button onClick={() => setShowModal(false)}>KAPA</button>
          {modalData.map((post) => (
            <div className="post" key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.text}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Modal