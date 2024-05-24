import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Content() {
  return (
    <div className="flex justify-center items-center bg-black p-3">
      <div id="container" className="flex flex-col md:flex-row  gap-3">
        <div id="left-side" className="flex gap-5 flex-col md:max-w-[800px]">
          <div
            id="directory"
            className="px-3 py-1 bg-gray-800 text-sm text-white"
          >
            <span className="flex flex-row gap-3">
              <span><Link to="/">Kuran</Link></span>
              <span>
                <FontAwesomeIcon icon={faGreaterThan} className="text-xs" />
              </span>
              <span><Link to="/">Makaleler</Link></span>
              <span>
                <FontAwesomeIcon icon={faGreaterThan} className="text-xs" />
              </span>
              <span><Link to="/">Namazda Ayaktayken Neden Sadece Fatiha Okumalıyız</Link></span>
            </span>
          </div>
          <div id="img-content">
            <img src="/sadece-fatiha.png" alt="" />
          </div>
          <div id="content-container" className="flex flex-col gap-5">
            <div id="title" className="text-white">
              Namazda Ayaktayken Neden Sadece Fatiha Okumalıyız
            </div>
            <div id="content-text" className="text-white">
              <p>Ne yazık ki şeytan, milyonlarca Müslümanın namazlarını
              değiştirmeyi başarmış, onları Yaratıcıları ile iletişim kurmaktan
              mahrum bırakmıştır. Önce, El Fatiha'nın sonuna "AMİN" kelimesini
              eklemeye ikna etti. Bu kelime yabancıdır, Arapça değildir ve
              Kuran'da hiç geçmez. Ancak daha fazla harf ve ses ekleyerek,
              Namazda kullanılan kelimelerin sayısal yapısını etkili bir şekilde
              bozar. İkincisi, ister Sünni ister Şii olsun, tüm düşünce
              okullarının tüm (mezhep) imamları, namazda El Fatiha'dan sonra
              Kur'an'ın okunmasının zorunlu olmadığı konusunda ittifak
              etmişlerdir. 20:14'te Yaratıcımız, Namazın yalnızca Kendisine
              adanmasını emrediyor. Kuran'da Meryem, Muhammed, İsa, Musa,
              İbrahim ve daha birçok isim zikredilmekte ve Kuran'ın namazda
              kullanılması Tanrı'dan başka isimlerin de anılmasına yol
              açmaktadır. Bu, Namazı bozar. Namazda Tanrı'nın yanında başka
              isimler anmamakla emrolunduk (Kur'an 72:18).</p><br></br>

              <p>Yukarıdaki ifadeler, editörlüğünü Reşad Halife’nin yaptığı Şubat 1986 sayılı Muslim Perspective yayınından alıntılanmıştır.

Aşağıdaki makaleyse, yine editörlüğünü Reşad Halife’nin yaptığı Mayıs 1986 tarihli Muslim Perspective yayınından alıntılanmıştır.</p>
            </div>
          </div>
          <div
            id="related-verses"
            className="md:min-w-[400px]  bg-gray-700 p-5"
          >
            <div className="text-white border-b p-3 text-3xl">
              İlgili Ayetler
            </div>
            <ul className="flex flex-col gap-4">
              <li className="text-white border-b p-3">
                Anahtar (El-Fatiha) [1:1] ;En Lütufkâr, En Merhametli olan
                Tanrı’nın adıyla..
              </li>
              <li className="text-white border-b p-3">
                Anahtar (El-Fatiha) [1:1] ;En Lütufkâr, En Merhametli olan
                Tanrı’nın adıyla..
              </li>
              <li className="text-white border-b p-3">
                Anahtar (El-Fatiha) [1:1] ;En Lütufkâr, En Merhametli olan
                Tanrı’nın adıyla..
              </li>
              <li className="text-white border-b p-3">
                Anahtar (El-Fatiha) [1:1] ;En Lütufkâr, En Merhametli olan
                Tanrı’nın adıyla..
              </li>
              <li className="text-white border-b p-3">
                Anahtar (El-Fatiha) [1:1] ;En Lütufkâr, En Merhametli olan
                Tanrı’nın adıyla..
              </li>
            </ul>
          </div>
          <div
            id="related-appendices"
            className="md:min-w-[400px]  bg-gray-900 p-5"
          >
            <div className="text-white border-b p-3 text-3xl">İlgili Ekler</div>
            <div className="flex flex-row items-center gap-3 border-b p-3">
              <img src="/ekler.png" alt="" className=" w-20 h-20" />
              <span className=" text-white text-xl">
                Ek 15 - Dini Görevler: Tanrı’dan Bir Armağan
              </span>
            </div>
          </div>
        </div>
        <div
          id="right-side"
          className="flex flex-col gap-5 md:min-w-[300px] md:max-w-[350px] h-[400px] p-3"
        >
          <h1 className="text-white text-3xl">İlgili Makaleler</h1>
          <hr />
          <div id="article" className="flex gap-3 items-center">
            <img
              src="/sadece-fatiha.png"
              alt=""
              className=" w-24 h-24 rounded-full"
            />
            <h1 className="text-white">
              Namazda Ayaktayken Neden Sadece Fatiha Okumalıyız
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
