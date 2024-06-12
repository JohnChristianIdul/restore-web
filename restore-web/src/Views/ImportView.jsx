import React from "react";

const FileSelectorView = ({ onSelectFile }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onSelectFile(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default FileSelectorView;