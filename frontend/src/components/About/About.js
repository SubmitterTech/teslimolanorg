import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faX } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
     <hr className="mb-5 dark:border-gray-200 border-gray-900"/>
    <div className="grid grid-cols-1 md:grid-cols-2 text p-3 gap-5">
      <div className="flex flex-col text-gray-900 dark:text-white gap-5">
        <h1 className="text-3xl">Biz Kimiz</h1>
        <p>
          Tanrı’nın tüm peygamberleri bu dünyaya geldi ve tüm kutsal yazılar
          iletildi. Aradan geçen yüzlerce yılda, peygamberlerin ilettiği kutsal
          yazılar ve mesajlar bidatlerle, geleneklerle ve sahte, putperest
          doktrinlerle bozuldu. Tanrı’nın peygamberleri tarafından iletilen tüm
          mesajların arındırılıp tek bir mesajda birleştirilmesinin ve bundan
          böyle Tanrı’nın kabul ettiği tek dinin “Teslimiyet” olduğunun
          duyurulmasının vakti geldi. “Teslimiyet,” Tanrı’nın mutlak
          otoritesinin farkına vardığımız ve tüm güce sahip olanın YALNIZCA
          Tanrı olduğuna; O’ndan bağımsız başka hiçbir varlığın herhangi bir
          güce sahip olmadığına dair sarsılmaz bir kanaate ulaştığımız dindir.
          Böyle bir farkındalığın doğal sonucu, yaşamlarımızı ve tapınmamızı
          mutlak bir şekilde YALNIZCA Tanrı’ya adamaktır. Bundan böyle,
          Tanrı’nın kabul ettiği tek bir din vardır: Teslimiyet. Tanrı’ya teslim
          olan ve tapınmasını YALNIZCA Tanrı’ya adayan herkes bir “Teslim
          Olan”dır. Bu nedenle, birisi Teslim Olan bir Yahudi, Teslim Olan bir
          Hristiyan, Teslim Olan bir Budist, Teslim Olan bir Hindu veya Teslim
          Olan bir Müslüman olabilir.
        </p>
      </div>
      <div className="flex flex-col gap-20 py-10">
        <div className="border rounded">
            <div className="w-full text-white font-semibold bg-gray-600 p-3">Bize Soru Sorun</div>
            <form className="flex flex-col gap-1">
                <input type="text" placeholder="Kendinizi Tanıtın"  className="p-3 dark:bg-black border"/>
                <input type="text" placeholder="Kendinizi Tanıtın" className="p-3 dark:bg-black border"/>
                <textarea className="p-3 dark:bg-black border" placeholder="Mesajınız"></textarea>
                <button className="text-white p-3 dark:bg-none bg-gray-700">Mesajımı Gönder</button>
            </form>
        </div>
        <div className="border rounded">
            <div className="w-full text-white font-semibold bg-gray-600 p-3">Bize Sosyal Medyadan da Ulaşabilirsiniz...</div>
            <div className="flex justify-center text-gray-900 dark:text-white text-3xl p-5 gap-5">
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faInstagram}/>
                <FontAwesomeIcon icon={faX}/>
                <FontAwesomeIcon icon={faYoutube}/>
                <FontAwesomeIcon icon={faDiscord}/>
            </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
