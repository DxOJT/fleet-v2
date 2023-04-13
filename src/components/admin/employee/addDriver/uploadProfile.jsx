import { Form, Upload, Modal } from "antd";
import { useState } from "react";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
const UploadProfile = ({ form }) => {
  const [viewPhoto, setViewPhoto] = useState(false);
  const [isUpload, setIsUpload] = useState(true);
  const [imageToView, setImageToView] = useState(null);
  const rules = [
    () => ({
      validator(_, value) {
        if (!value || beforeUpload(value)) {
          return Promise.resolve();
        }
        if (!beforeUpload(value)) {
          return Promise.reject(new Error("Invalid Photo size"));
        }
      },
    }),
  ];
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (value) => {
    if (value.fileList.length === 0) {
      return true;
    }

    const isJpgOrPng =
      value.file.type === "image/jpeg" || value.file.type === "image/png";
    const isLt2M = value.file.size / 1024 / 1024 < 2;
    return isJpgOrPng && isLt2M;
  };
  const profilePhotoRequest = ({ file, onSuccess }) => {
    getBase64(file, (url) => {
      setIsUpload(false);
      setImageToView(url);
      onSuccess("ok");
    });
  };
  const profilePhotoOnRemove = () => {
    setIsUpload(true);
  };
  const togglePhotoModal = () => {
    setViewPhoto(!viewPhoto);
  };
  return (
    <>
      <Modal open={viewPhoto} onCancel={togglePhotoModal} footer={null}>
        {form.getFieldValue().photo && (
          <img alt="example" style={{ width: "100%" }} src={imageToView} />
        )}
      </Modal>
      <Form.Item
        name="photo"
        label="Profile Photo"
        labelCol={{ span: 12 }}
        rules={rules}
      >
        <Upload
          name="profile"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={uploadButton}
          accept="image/png, image/jpeg"
          onPreview={togglePhotoModal}
          maxCount={1}
          customRequest={profilePhotoRequest}
          onRemove={profilePhotoOnRemove}
        >
          {isUpload ? uploadButton : null}
        </Upload>
      </Form.Item>
    </>
  );
};

export default UploadProfile;
