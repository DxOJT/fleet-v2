import { Form, Upload, Image } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const ChangeProfile = ({ imageToView, setImageToView }) => {
  console.log("Here");
  //upload form item rules
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

  //get base64 of uploaded image
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  //before upload function to check if the file is smaller than 2MB
  const beforeUpload = (value) => {
    if (value.fileList.length === 0) {
      return true;
    }
    const isJpgOrPng =
      value.file.type === "image/jpeg" || value.file.type === "image/png";
    const isLt2M = value.file.size / 1024 / 1024 < 2;
    return isJpgOrPng && isLt2M;
  };

  //custom request to set image to base64 and set it to imageToView state
  const profilePhotoRequest = ({ file, onSuccess }) => {
    getBase64(file, (url) => {
      setImageToView(url);
      onSuccess("ok");
    });
  };

  //remove uploaded function to remove base64 to the imageToView state
  const profilePhotoOnRemove = () => {
    setImageToView(null);
  };

  return (
    <>
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
          showUploadList={false}
          accept="image/png, image/jpeg"
          maxCount={1}
          customRequest={profilePhotoRequest}
          onRemove={profilePhotoOnRemove}
        >
          {!imageToView ? (
            uploadButton
          ) : (
            <Image alt="profile" src={imageToView} />
          )}
        </Upload>
      </Form.Item>
    </>
  );
};

export default ChangeProfile;
