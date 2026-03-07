import { useState, useRef } from "react";
import "../styles/DragDropUpload.css";

interface DragDropUploadProps {
  accept?: string;
  onFileSelect?: (file: File) => void;
}

const DragDropUpload = ({
  accept = "audio/wav", // ✅ WAV only
  onFileSelect,
}: DragDropUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    setFileName(file.name);
    onFileSelect?.(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFileName("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      className={`drag-drop-zone ${isDragging ? "dragging" : ""}`}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleChange}
        style={{ display: "none" }}
      />
      <div className="fontmusic">🎵</div>
      <p className=".music_icon">
        {fileName || "Drag & drop your WAV file here"}
      </p>
      <p className="lblfont">
        or <span className="linkfont">click to browse</span> — WAV only
      </p>
      {fileName && (
        <button
          onClick={handleClear}
          className="btnFileUpload"
          title="Clear file"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default DragDropUpload;
