import React, { useRef, useState } from "react";
import RichTextEditor from "../components/RichTextEditor";
import { message } from "antd";

const AddHutbePage = () => {
  const [tags, setTags] = useState("");
  const [title, setTitle] = useState("");
  const editorRef = useRef();

  const API_URL = process.env.REACT_APP_API_URL;

  const handleAddClick = async () => {
    const editorContent = editorRef.current.getContent();
    console.log("Editörde bulunan yazı", editorContent);

    if (title === "" || editorContent === "" || tags === "") {
      message.warning("Gerekli alanları doldurun.");
      return;
    }

    const postData = {
      text: editorContent,
      title,
      tags: tags.split(",").map(tag => tag.trim())
    };

    try {
      const response = await fetch(`${API_URL}/api/hutbeler/ekle`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
      });

      if (response.ok) {
        const data = await response.json();
        message.success("Hutbe başarıyla eklendi.");
        console.log("Hutbe başarıyla eklendi:", data);
        
        // Formu temizle
        setTags("");
        setTitle("");
        editorRef.current.clearContent();
      } else {
        const errorData = await response.json();
        message.error(`Hutbe eklenirken hata oluştu: ${errorData.message}`);
        console.error("Hutbe eklenirken hata oluştu:", errorData);
      }
    } catch (error) {
      message.error("Hutbe eklenirken hata oluştu.");
      console.error("Hutbe eklenirken hata oluştu:", error);
    }
  };

  return (
    <div className="flex flex-col gap-5 p-4">
      <div className="flex justify-between">
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
        <input
          type="text"
          placeholder="etiket1,etiket2"
          className="border p-3 w-full md:w-72"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>
    </div>
  );
};

export default AddHutbePage;