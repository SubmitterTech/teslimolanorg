import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {message } from 'antd';
const About = () => {
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    instagram: "",
    youtube: "",
    x: "",
    discord: "",
    email:"",
  });

  const [formData, setFormData] = useState({
    to:"",
    subject: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const fetchSocialMediaLinks = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/admin/ayarlar/sosyalmedya`);
        const data = await response.json();
        setSocialLinks({
          facebook: data.facebook || "https://www.facebook.com/",
          instagram: data.instagram || "https://www.instagram.com/",
          youtube: data.youtube || "https://www.youtube.com/",
          x: data.x || "https://www.x.com/",
          discord: data.discord || "https://www.discord.com/",
          email:data.email,
        });
      } catch (error) {
        console.log("Error fetching social media links", error);
      }
    };
    fetchSocialMediaLinks();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(socialLinks.email);
    try {
      const response = await fetch('http://localhost:5001/api/emailGonder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...formData,to:socialLinks.email}),
      });

      const data = await response.json();
      if (response.ok) {
        message.success("Mesajınız gönderildi.")
        setFormData({ subject: "", email: "", message: "" });
      } else {
        message.error(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <hr className="mb-5 dark:border-gray-200 border-gray-900" />
      <div className="grid grid-cols-1 md:grid-cols-2 text p-3 gap-5">
        <div className="flex flex-col text-gray-900 dark:text-white gap-5">
          <h1 className="text-3xl">Biz Kimiz</h1>
          <p>
            Tanrı’nın tüm peygamberleri bu dünyaya geldi ve tüm kutsal yazılar iletildi. Aradan geçen yüzlerce yılda, peygamberlerin ilettiği kutsal yazılar ve mesajlar bidatlerle, geleneklerle ve sahte, putperest doktrinlerle bozuldu. Tanrı’nın peygamberleri tarafından iletilen tüm mesajların arındırılıp tek bir mesajda birleştirilmesinin ve bundan böyle Tanrı’nın kabul ettiği tek dinin “Teslimiyet” olduğunun duyurulmasının vakti geldi. “Teslimiyet,” Tanrı’nın mutlak otoritesinin farkına vardığımız ve tüm güce sahip olanın YALNIZCA Tanrı olduğuna; O’ndan bağımsız başka hiçbir varlığın herhangi bir güce sahip olmadığına dair sarsılmaz bir kanaate ulaştığımız dindir. Böyle bir farkındalığın doğal sonucu, yaşamlarımızı ve tapınmamızı mutlak bir şekilde YALNIZCA Tanrı’ya adamaktır. Bundan böyle, Tanrı’nın kabul ettiği tek bir din vardır: Teslimiyet. Tanrı’ya teslim olan ve tapınmasını YALNIZCA Tanrı’ya adayan herkes bir “Teslim Olan”dır. Bu nedenle, birisi Teslim Olan bir Yahudi, Teslim Olan bir Hristiyan, Teslim Olan bir Budist, Teslim Olan bir Hindu veya Teslim Olan bir Müslüman olabilir.
          </p>
        </div>
        <div className="flex flex-col gap-20 py-10">
          <div className="border rounded">
            <div className="w-full text-white font-semibold bg-gray-600 p-3">
              Bize Soru Sorun
            </div>
            <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Konu Başlık"
                className="p-3 dark:bg-black border"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="E-posta adresiniz"
                className="p-3 dark:bg-black border"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="p-3 dark:bg-black border"
                placeholder="Mesajınız"
              ></textarea>
              <button type="submit" className="text-white p-3 dark:bg-none bg-gray-700">
                Mesajımı Gönder
              </button>
            </form>
          </div>
          <div className="border rounded">
            <div className="w-full text-white font-semibold bg-gray-600 p-3">
              Bize Sosyal Medyadan da Ulaşabilirsiniz...
            </div>
            <div className="flex justify-center text-gray-900 dark:text-white text-3xl p-5 gap-5">
              <Link to={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link to={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link to={socialLinks.x} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faX} />
              </Link>
              <Link to={socialLinks.discord} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faDiscord} />
              </Link>
              <Link to={socialLinks.youtube} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;