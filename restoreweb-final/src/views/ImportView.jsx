import React, { useRef, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast
import '../styles/ImportView.css';

const ImportView = ({ onFileSelect, onBothFilesUploaded }) => {
  const fileInputRef = useRef(null);
  const fileTypeRef = useRef(null);
  const [fileData, setFileData] = useState({
    demand: null,
    sales: null,
  });
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      console.log("No file selected");
      return;
    }

    const fileType = fileTypeRef.current.value; // Get file type

    console.log(`Selected ${fileType} file:`, file); // Debug log

    setLoading(true); // Show loading screen

    try {
      const data = await uploadFile(file, fileType);
      if (data) {
        setFileData(prevState => {
          const updatedFileData = { ...prevState, [fileType]: data };
          if (updatedFileData.demand && updatedFileData.sales) {
            console.log('Both files uploaded'); // Debug log
            onBothFilesUploaded(); // Notify parent component that both files are uploaded
            toast.success('Both files uploaded successfully!'); // Notify user about successful upload
            setTimeout(() => navigate('/forecast'), 2000); // Redirect after 2 seconds
          }
          return updatedFileData;
        });
        if (onFileSelect) {
          onFileSelect(fileType, data); // Notify parent component with file type and data
        }
        toast.success(`${fileType.charAt(0).toUpperCase() + fileType.slice(1)} file uploaded successfully!`);
      } else {
        toast.error(`Failed to upload ${fileType} file.`);
      }
    } catch (error) {
      toast.error(`Failed to upload ${fileType} file.`);
    } finally {
      setLoading(false); // Hide loading screen
    }
  };

  const uploadFile = async (file, fileType) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      console.log(`Uploading ${fileType} file:`, file.name); // Debug log
      const endpoint = fileType === 'demand' ? 'http://127.0.0.1:5000/upload_demand' : 'http://127.0.0.1:5000/upload';
      const response = await axios.post(endpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(`${fileType} file upload success:`, response.data);
      return response.data; // Return data
    } catch (error) {
      console.error(`Error uploading ${fileType} file:`, error);
      return null;
    }
  };

  return (
    <div className="import-view">
      {loading && (
        <div className="loading-screen">
          <p>Loading...</p>
        </div>
      )}
      <div className="file-upload">
        <h2>Choose <span className="highlight">CSV/Excel</span> Files Here</h2>
        <div className="button-group">
          <select ref={fileTypeRef} defaultValue="demand" style={{ color: 'black' }}>
            <option value="demand">Demand File</option>
            <option value="sales">Sales File</option>
          </select>
          <button
            className="browse-button"
            onClick={handleBrowseClick}
            disabled={loading} // Disable button while loading
          >
            Browse Files
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept=".csv, .xlsx, .xls"
            onChange={handleFileChange}
          />
        </div>
      </div>
      <div className="note">
        <h1>Note:</h1>
        <p>Accepted File Formats: CSV, Excel</p>
        <p>Data entry must not exceed 35,000 rows.</p>
        <p>To import files successfully, files must have column names (header). e.g. (product_Name, productSales, product_price)</p>
      </div>
    </div>
  );
};

export default ImportView;
