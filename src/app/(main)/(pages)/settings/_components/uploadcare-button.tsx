"use client";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { FileUploaderRegular } from "@uploadcare/react-uploader";
type Props = {
  onUpload: (e: string) => any;
};


const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter();
  useEffect(() => {
    const handleUpload = async (e: any) => {
      const file = await onUpload(e.detail.cdnUrl);
      if (file) {
        router.refresh();
      }
    };
  
  }, []);

  return (
    <div>
      <div>
        <FileUploaderRegular
          sourceList="local, url, camera, dropbox"
          classNameUploader="uc-light"
          pubkey="ea6697e7f72930b5cc66"
        />
      </div>
    </div>
  );
};

export default UploadCareButton;
