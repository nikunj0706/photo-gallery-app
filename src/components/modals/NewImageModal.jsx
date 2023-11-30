import React from "react";
import { Modal } from "antd";

function ImageModal({ img, setModalImg }) {
  return (
    <Modal
      centered
      width={500}
      // closable={false}
      open={true}
      onCancel={() => setModalImg(null)}
      onOk={() => setModalImg(null)}
      footer={null}
    >
      <img style={{ maxWidth: "90%" }} src={img} alt="" />
    </Modal>
  );
}

export default ImageModal;
