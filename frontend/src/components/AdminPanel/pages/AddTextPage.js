import React, { useRef, useState } from "react";
import RichTextEditor from "../components/RichTextEditor";
import { message } from 'antd';

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

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`http://localhost:5001/api/admin/upload`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      return data.filePath;
    } catch (error) {
      console.error("Image upload failed:", error);
      return null;
    }
  };

  const handleAddClick = async () => {
    const editorContent = editorRef.current.getContent();

    if (title === "" || editorContent === "" || tags === "") {
      message.warning("Gerekli alanları doldurun.");
      return;
    }

    let imageUrl = null;
    if (file) {
      imageUrl = await uploadImage(file);
      if (!imageUrl) {
        alert("Resim yüklenemedi.");
        return;
      }
    }

    const postData = {
      postType: textType,
      text: editorContent,
      title: title,
      tags: tags,
      imgSrc: imageUrl,
    };

    try {
      const response = await fetch(`http://localhost:5001/api/admin/addpost`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      const data = await response.json();
      message.success("Yazı eklendi.");
      console.log("Post başarıyla kaydedildi:", data);
      // Formu temizle
      setFile(null);
      setTextType("Makale");
      setTags("");
      setTitle("");
      editorRef.current.clearContent();
    } catch (error) {
      message.error("Yazı ekleme işlemi başarısız.");
      console.error("Post kaydedilemedi:", error);
    }
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
        <input
          type="text"
          placeholder="Başlık"
          className="border p-3 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
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
            className="p-3 bg-cyan-700 text-white rounded max-w-40 max-h-12"
            onClick={() => fileRef.current.click()}
          >
            Kapak Fotoğrafı
          </button>
        </div>
        <input
          type="text"
          placeholder="etiket1,etiket2"
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