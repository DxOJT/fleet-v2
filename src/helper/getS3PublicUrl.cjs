import { S3 } from "aws-sdk";
import axios from "axios";

const s3 = new S3({
  apiVersion: "2006-03-01",
  credentials: {
    accessKeyId: import.meta.env.VITE_REACT_APP_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_REACT_APP_SECRET_ACCESS_KEY,
  },
  region: import.meta.env.VITE_REACT_APP_REGION,
  signatureVersion: "v4",
});

export const getS3PublicUrl = async (file) => {
  const ext = file?.type.split("/")[1];
  const Key = `${crypto.randomUUID()}.${ext}`;
  let s3Params = {
    Bucket: import.meta.env.VITE_REACT_APP_BUCKET_NAME,
    Key,
    Expires: 300,
  };

  if (["jpeg", "jpg", "png", "heic", "tiff"].includes(ext)) {
    s3Params = {
      ...s3Params,
      ContentType: `image/${ext}`,
    };
  } else {
    s3Params = {
      ...s3Params,
      ContentType: `application/${ext}`,
    };
  }

  const uploadUrl = s3.getSignedUrl("putObject", s3Params);

  const res = await axios.put(uploadUrl, file);
  if (res?.status === 200) {
    return `https://${
      import.meta.env.VITE_REACT_APP_BUCKET_NAME
    }.s3.amazonaws.com/${Key}`;
  }
};
