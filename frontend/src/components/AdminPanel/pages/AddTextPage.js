import React, { useRef, useState } from "react";
import RichTextEditor from "../components/RichTextEditor";

const AddTextPage = () => {
  const [file, setFile] = useState(null);
  const [textType, setTextType] = useState("Makale");
  const [tags, setTags] = useState("");
  const [title, setTitle] = useState("");
  const fileRef = useRef(null);
  const editorRef = useRef();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleAddClick = () => {
    const editorContent = editorRef.current.getContent(); // RichTextEditor içeriğini al
    console.log("Başlık:", title);
    console.log("Yazı Tipi:", textType);
    console.log("Etiketler:", tags);
    console.log("Editör İçeriği:", editorContent);
    
    if(file){
      console.log("Dosya Adı:",file.name);
    }

    // Clear form fields after submission
    setFile(null);
    setTextType("Makale");
    setTags("");
    setTitle("");
    editorRef.current.clearContent();

  };



  return (
    <div className="flex flex-col gap-5 p-4">
      <div className="flex justify-between">
        <div>
          <span className="mr-3">Yazı Tipi:</span>
          <select
            className="border p-3"
            value={textType}
            onChange={(e) => setTextType(e.target.value)}
          >
            <option>Makale</option>
            <option>Perspektif</option>
            <option>Video</option>
          </select>
        </div>
        <button
          className="p-3 bg-cyan-700 text-white rounded"
          onClick={handleAddClick}
        >
          EKLE
        </button>
      </div>
      <div>
        <input type="text" placeholder="Başlık" className="border p-3 w-full" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </div>
      <div>
        <RichTextEditor ref={editorRef} />
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-5 mt-5">
        <div className="flex flex-row gap-5">
          <input
            type="file"
            ref={fileRef}
            hidden
            accept="image/*"
            onChange={handleFileChange}
          />
          <button
            className="p-3 bg-cyan-700 text-white rounded max-w-40 max-h-12 "
            onClick={() => fileRef.current.click()}
          >
            Kapak Fotoğrafı
          </button>
        </div>
        <input
          type="text"
          placeholder="Etiketler"
          className="border p-3 w-full md:w-72"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>
      <div className="flex justify-center md:justify-normal">
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt="Selected Cover"
            className="h-32 w-32 object-fit mt-2"
          />
        )}
      </div>
    </div>
  );
};

export default AddTextPage;
