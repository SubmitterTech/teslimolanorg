import React, { useEffect, useRef, useState } from "react";
import RichTextEditor from "../components/RichTextEditor";
import { message } from "antd";
import { useParams, useNavigate } from "react-router-dom";

const HutbeEditPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [tags, setTags] = useState("");
  const [title, setTitle] = useState("");
  const [initialContent, setInitialContent] = useState("");
  const editorRef = useRef();
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchHutbe = async () => {
      try {
        const response = await fetch(`${API_URL}/api/hutbeler/getir/${slug}`);
        if (!response.ok) {
          throw new Error(`Hutbe yüklenirken hata oluştu: ${response.statusText}`);
        }
        const data = await response.json();
        setTitle(data.title);
        setTags(data.tags.join(", "));
        setInitialContent(data.text); // Editor içeriğini ayarla
        setLoading(false);
      } catch (error) {
        message.error("Hutbe yüklenirken hata oluştu.");
        navigate("/admin/hutbeler");
      }
    };

    fetchHutbe();
  }, [API_URL, slug, navigate]);

  const handleUpdateClick = async () => {
    const editorContent = editorRef.current.getContent();

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
      const response = await fetch(`${API_URL}/api/hutbeler/guncelle/${slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
      });

      if (response.ok) {
        message.success("Hutbe başarıyla güncellendi.");
        navigate("/admin/hutbeler");
      } else {
        const errorData = await response.json();
        message.error(`Hutbe güncellenirken hata oluştu: ${errorData.message}`);
      }
    } catch (error) {
      message.error("Hutbe güncellenirken hata oluştu.");
    }
  };

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div className="flex flex-col gap-5 p-4">
      <div className="flex justify-between">
        <button
          className="p-3 bg-cyan-700 text-white rounded"
          onClick={handleUpdateClick}
        >
          GÜNCELLE
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
        <RichTextEditor ref={editorRef} initialContent={initialContent} />
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

export default HutbeEditPage;