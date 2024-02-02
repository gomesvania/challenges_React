import React, { useState } from "react";

const UploaderFile = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [value, setValue] = useState({ name: "", size: 0 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
    }
    if (file && file.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
      <form>
        <label htmlFor="file">Insira um arquivo</label>
        <input type="file" onChange={handleChange} />
        {file && (
          <p>
            {file.name} {file.size}
          </p>
        )}
        {preview && (
          <img src={preview} alt="preview" style={{ width: "200px" }} />
        )}
      </form>
    </div>
  );
};

export default UploaderFile;
