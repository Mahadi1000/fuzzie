"use client";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import * as UC from "@uploadcare/file-uploader";

type Props = {
  onUpload: (e: string) => any;
};

UC.defineComponents(UC);
const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter();
  const ctxProviderRef = useRef<HTMLElement>(null); // Use ref for the uc-upload-ctx-provider

  useEffect(() => {
    const handleUpload = async (e: any) => {
      const fileUrl = e.detail.cdnUrl; // Getting the URL from the event
      await onUpload(fileUrl); // Passing the URL to the onUpload prop
      console.log(fileUrl);

      if (fileUrl) {
        router.refresh(); // Refreshing the page if upload successful
      }
    };

    const ctx = ctxProviderRef.current;
    if (ctx) {
      // Attach event listener to uc-upload-ctx-provider
      ctx.addEventListener("file-upload-success", handleUpload);
    }

    return () => {
      if (ctx) {
        // Cleanup the event listener
        ctx.removeEventListener("file-upload-success", handleUpload);
      }
    };
  }, [onUpload, router]);

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@uploadcare/file-uploader@v1/web/uc-file-uploader-regular.min.css"
      />

      <div>
        {/* The upload context provider */}
        <uc-upload-ctx-provider
          ctx-name="uc-light"
          ref={ctxProviderRef}
        ></uc-upload-ctx-provider>

        {/* The file uploader component */}
        <uc-config
          ctx-name="uc-light"
          pubkey="ea6697e7f72930b5cc66"
        ></uc-config>
        <uc-file-uploader-regular ctx-name="uc-light"></uc-file-uploader-regular>
      </div>
    </div>
  );
};

export default UploadCareButton;
