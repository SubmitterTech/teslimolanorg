import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { message } from "antd";
import RichTextEditor from "../components/RichTextEditor";

const PostEdit = () => {
  const { id } = useParams();
  const [file, setFile] = useState(null);
  const [textType, setTextType] = useState("Makale");
  const [tags, setTags] = useState("");
  const [title, setTitle] = useState("");
  const [initialContent, setInitialContent] = useState("");
  const [verses, setVerses] = useState([]);
  const [appendices, setAppendices] = useState([{ link: "", title: "" }]);
  const fileRef = useRef(null);
  const editorRef = useRef();

  const API_URL = process.env.REACT_APP_API_URL;
  const uploadSrc = process.env.REACT_APP_UPLOAD_SRC;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${API_URL}/api/admin/yazilar/id/${id}`);
        const data = await response.json();
        console.log(data.text)
        if (data && data.text) {
          const updatedText = data.text.replace(
            /<img [^>]*src="([^"]*)"/g,
            (match, p1) => {
              return `<img src="${uploadSrc}${
                p1.startsWith("/") ? p1.slice(1) : p1
              }"`;
            }
          );
          data.text = updatedText;
        }

        setTitle(data.title);
        setTextType(data.postType);
        setTags(data.tags.join(","));
        setInitialContent(data.text);
        setVerses(data.verses || []);
        setAppendices(data.appendices || [{ link: "", title: "" }]);
        setFile(data.imgSrc ? { name: data.imgSrc, url: data.imgSrc } : null);
      } catch (error) {
        console.error("Post bilgileri alınamadı:", error);
      }
    };

    fetchPost();
  }, [id, API_URL, uploadSrc]);

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

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`${API_URL}/api/admin/upload`, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Resim yükleme başarısız.");
      }
      const data = await response.json();
      return data.filePath; // Burada dosya yolunun doğru döndüğünden emin olun
    } catch (error) {
      console.error("Image upload failed:", error);
      return null;
    }
  };

  const extractBase64Images = (editorContent) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = editorContent;
    const images = tempDiv.querySelectorAll("img");

    const imagePromises = Array.from(images).map(async (img) => {
      const base64 = img.src.split(",")[1];
      const mimeType = img.src.match(/data:(.*?);/)[1];
      const response = await uploadImage(base64ToFile(base64, `image_${Date.now()}_${Math.floor(Math.random() * 1000)}.${mimeType.split("/")[1]}`, mimeType));
      if (response) {
        //bu kısım veritabanına kayıt biçimini ayarlıyor.
        img.src = `${response}`;
      }
    });

    return Promise.all(imagePromises).then(() => tempDiv.innerHTML);
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

  const handleUpdateClick = async () => {
    let editorContent = editorRef.current.getContent();
    editorContent = await extractBase64Images(editorContent);

    let imageUrl = file && file.url ? file.url : null;
    if (file && !file.url) {
      imageUrl = await uploadImage(file);
      if (!imageUrl) {
        message.error("Resim yüklenemedi.");
        return;
      }
    }

    const postData = {
      postType: textType,
      text: editorContent,
      title: title,
      tags: tags.split(","),
      imgSrc: imageUrl,
      verses: verses.filter(Boolean),
      appendices: appendices.filter((a) => a.title || a.link),
    };

    try {
      const response = await fetch(
        `${API_URL}/api/admin/yazilar/duzenle/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );
      if (!response.ok) {
        throw new Error("Post güncelleme başarısız.");
      }
      const data = await response.json();
      message.success("Post başarıyla güncellendi.");
      console.log("Post başarıyla güncellendi:", data);
    } catch (error) {
      message.error("Post güncellenemedi.");
      console.error("Post güncellenemedi:", error);
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
          placeholder="Etiketler"
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
      <div className="flex justify-center md:justify-normal">
        {file && (
          <img
            src={
              file.url ? `${uploadSrc}${file.url}` : URL.createObjectURL(file)
            }
            alt="Selected Cover"
            className="h-32 w-32 object-cover mt-2"
          />
        )}
      </div>
    </div>
  );
};

export default PostEdit;