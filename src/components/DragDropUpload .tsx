import { useState, useRef } from "react";
import "../styles/DragDropUpload.css";

interface DragDropUploadProps {
  accept?: string;
  onFileSelect?: (file: File) => void;
}

const DragDropUpload = ({
  accept = "audio/*",
  onFileSelect,
}: DragDropUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    setFileName(file.name);
    onFileSelect?.(file);
  };
  const getAcceptLabel = (accept: string) => {
    const map: Record<string, string> = {
      "audio/wav": "WAV only",
      "audio/mp3": "MP3 only",
      "audio/mpeg": "MP3 only",
      "audio/ogg": "OGG only",
      "audio/*": "MP3, WAV, OGG",
      "image/*": "JPG, PNG, GIF",
      "image/png": "PNG only",
      "image/jpeg": "JPG only",
      "video/*": "MP4, AVI, MOV",
      ".pdf": "PDF only",
    };
    return map[accept] ?? accept;
  };
  const getPlaceholderText = (accept: string) => {
    if (accept.startsWith("audio")) return "Drag & drop your audio file here";
    if (accept.startsWith("image")) return "Drag & drop your image here";
    if (accept.startsWith("video")) return "Drag & drop your video file here";
    if (accept.includes("pdf")) return "Drag & drop your PDF here";
    return "Drag & drop your file here";
  };

  const getPlaceholdericon = (accept: string) => {
    if (accept.startsWith("audio")) return "bi bi-music-note-beamed iconsize20";
    if (accept.startsWith("image")) return "bi bi-image iconsize20";
    if (accept.startsWith("video")) return "bi bi-camera-video iconsize20";
    if (accept.includes("pdf")) return "bi bi-filetype-pdf iconsize20";
    return "bi bi-file iconsize20";
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
      <div className="fontmusic">
        <i className={getPlaceholdericon(accept)}></i>
      </div>
      <p className=".music_icon">{fileName || getPlaceholderText(accept)}</p>
      <p className="lblfont">
        or <span className="linkfont">click to browse</span>{" "}
        {getAcceptLabel(accept)}
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
