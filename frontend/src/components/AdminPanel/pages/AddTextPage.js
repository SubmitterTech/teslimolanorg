import React, { useRef, useState } from "react";
import RichTextEditor from "../components/RichTextEditor";
import { message } from "antd";

const AddTextPage = () => {
  const [file, setFile] = useState(null);
  const [textType, setTextType] = useState("Makale");
  const [tags, setTags] = useState("");
  const [title, setTitle] = useState("");
  const [verses, setVerses] = useState([]);
  const [appendices, setAppendices] = useState([{ link: "", title: "" }]);
  const fileRef = useRef(null);
  const editorRef = useRef();

  const API_URL = process.env.REACT_APP_API_URL;

  const extractBase64Images = (editorContent) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = editorContent;
    const images = tempDiv.querySelectorAll("img");

    const imagePromises = Array.from(images).map(async (img) => {
      const base64 = img.src.split(",")[1];
      const mimeType = img.src.match(/data:(.*?);/)[1];
      const response = await uploadImage(base64, mimeType);
      if (response) {
        img.src = response;
      }
    });

    return Promise.all(imagePromises).then(() => tempDiv.innerHTML);
  };

  const uploadImage = async (base64, mimeType) => {
    const extension = mimeType.split("/")[1];
    const uniqueFilename = `image_${Date.now()}_${Math.floor(
      Math.random() * 1000
    )}.${extension}`;
    const formData = new FormData();
    formData.append("file", base64ToFile(base64, uniqueFilename, mimeType));

    try {
      const response = await fetch(`${API_URL}/api/admin/upload`, {
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

  const base64ToFile = (base64, filename, mimeType) => {
    const bstr = atob(base64);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mimeType });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleAddAppendix = () => {
    setAppendices([...appendices, { link: "", title: "" }]);
  };

  const handleRemoveAppendix = (index) => {
    const newAppendices = appendices.filter((_, i) => i !== index);
    setAppendices(newAppendices);
  };

  const handleVersesChange = (e, index) => {
    const newVerses = [...verses];
    newVerses[index] = e.target.value;
    setVerses(newVerses);
  };

  const handleAppendixChange = (e, index, field) => {
    const newAppendices = [...appendices];
    newAppendices[index][field] = e.target.value;
    setAppendices(newAppendices);
  };

  const handleAddClick = async () => {
    const editorContent = editorRef.current.getContent();
    console.log("Editörde bulunan yazı", editorContent);

    if (title === "" || editorContent === "" || tags === "") {
      message.warning("Gerekli alanları doldurun.");
      return;
    }

    if ((textType === "Makale" || textType === "Video") && !file) {
      message.warning(`${textType} için kapak fotoğrafı seçin.`);
      return;
    }

    let imageUrl = null;
    if (file && (textType === "Makale" || textType === "Video")) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        const base64data = reader.result.split(",")[1];
        const mimeType = file.type;
        imageUrl = await uploadImage(base64data, mimeType);
        if (!imageUrl) {
          alert("Resim yüklenemedi.");
          return;
        }

        const updatedContent = await extractBase64Images(editorContent);
        await savePost(updatedContent, imageUrl);
      };
    } else {
      const updatedContent = await extractBase64Images(editorContent);
      if (textType === "Perspektif") {
        imageUrl = "perspektif.jpg"; // Eğer Perspektifse Varsayılan kapak fotoğrafı
      }
      await savePost(updatedContent, imageUrl);
    }
  };

  const savePost = async (updatedContent, imageUrl) => {
    const postData = {
      postType: textType,
      text: updatedContent,
      title: title,
      tags: tags.split(","),
      imgSrc: imageUrl,
      verses: verses.filter(Boolean),
      appendices: appendices.filter((a) => a.title || a.link),
    };

    try {
      const response = await fetch(`${API_URL}/api/admin/addpost`, {
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
      setVerses([]);
      setAppendices([{ link: "", title: "" }]);
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
          {(textType === "Makale" || textType === "Video") && (
            <>
              <input
                type="file"
                ref={fileRef}
                hidden
                accept="image/*"
                onChange={handleFileChange}
              />
              <button
                className="p-3 bg-cyan-700 text-white rounded"
                onClick={() => fileRef.current.click()}
              >
                Kapak Fotoğrafı
              </button>
            </>
          )}
        </div>
        <input
          type="text"
          placeholder="etiket1,etiket2"
          className="border p-3 w-full md:w-72"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>
      <div className="mt-5">
        <h3 className="text-white mb-2">Ayetler</h3>
        {verses.map((verse, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Ayet ${index + 1}`}
            className="border p-3 w-full mb-2"
            value={verse}
            onChange={(e) => handleVersesChange(e, index)}
          />
        ))}
        <button
          className="p-2 bg-cyan-700 text-white rounded"
          onClick={() => setVerses([...verses, ""])}
        >
          Ayet Ekle
        </button>
      </div>
      <div className="mt-5">
        <h3 className="text-white mb-2">Ek Bilgiler</h3>
        {appendices.map((appendix, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Link"
              className="border p-3 w-1/2"
              value={appendix.link}
              onChange={(e) => handleAppendixChange(e, index, "link")}
              />
              <input
                type="text"
                placeholder="Başlık"
                className="border p-3 w-1/2"
                value={appendix.title}
                onChange={(e) => handleAppendixChange(e, index, "title")}
              />
              <button
                className="p-2 bg-red-700 text-white rounded"
                onClick={() => handleRemoveAppendix(index)}
              >
                Sil
              </button>
            </div>
          ))}
          <button
            className="p-2 bg-cyan-700 text-white rounded"
            onClick={handleAddAppendix}
          >
            Ek Bilgi Ekle
          </button>
        </div>
        {file && (textType === "Makale" || textType === "Video") && (
          <div className="flex justify-center md:justify-normal">
            <img
              src={URL.createObjectURL(file)}
              alt="Selected Cover"
              className="h-32 w-32 object-fit mt-2"
            />
          </div>
        )}
      </div>
    );
  };
  
  export default AddTextPage;