import { useState } from "react";
import "./App.css";

const App = () => {
  const [loadingPdf, setLoadingPdf] = useState(false);
  const [loadingDocx,setLoadingDocx] = useState(false)

  const handleDownloadPdf = async () => {
    setLoadingPdf(true);
    try {
      const response = await fetch("http://localhost:3000/doc/pdf", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to download file");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "output.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download error:", error);
    } finally {
      setLoadingPdf(false);
    }
  };

  const handleDownloadDocx = async()=>{
    setLoadingDocx(true);
    try {
      const response = await fetch("http://localhost:3000/doc/docx", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to download file");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "output.docx";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download error:", error);
    } finally {
      setLoadingDocx(false);
    }

  }

  return (
    <div className="container">
      <div className="ButtonContainer">
        <button style={{margin:"1rem"}} onClick={handleDownloadPdf} disabled={loadingPdf}>
          {loadingPdf ? "Downloading..." : "Download PDF"}
        </button>
        <button style={{margin:"1rem"}} onClick={handleDownloadDocx} disabled={loadingDocx}>
          {loadingDocx ? "Downloading..." : "Download Document"}
        </button>
      </div>
    </div>
  );
};

export default App;
