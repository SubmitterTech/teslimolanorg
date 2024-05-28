import RelatedArticlesRightPanel from "../RelatedArticles/RelatedArticleRightPanel";
import RelatedVerses from "../RelatedVerses/RelatedVerses";
import RelatedAppendices from "../RelatedAppendices/RelatedAppendices";
import RelatedTags from "../RelatedTags/RelatedTags";
import Directory from "../Directory/Directory";
import Footer from "../Footer/Footer";

function Content() {
  const verses = [
    "Anahtar (El-Fatiha) [1:1] ;En Lütufkâr, En Merhametli olan Tanrı’nın adıyla..",
    "Anahtar (El-Fatiha) [1:1] ;En Lütufkâr, En Merhametli olan Tanrı’nın adıyla..",
    "Anahtar (El-Fatiha) [1:1] ;En Lütufkâr, En Merhametli olan Tanrı’nın adıyla..",
    "Anahtar (El-Fatiha) [1:1] ;En Lütufkâr, En Merhametli olan Tanrı’nın adıyla..",
  ];
  const appendices = [
    {
      link: "",
      title: "Ek 15 - Dini Görevler: Tanrı’dan Bir Armağan",
    },
    {
      link: "",
      title: "Ek 16 - Dini Görevler: Tanrı’dan Bir Armağan",
    },
  ];
  const articles = [
    {
      link: "/",
      imgSrc: "sadece-fatiha.png",
      title: "Namazda Ayaktayken Neden Sadece Fatiha Okumalıyız",
    },
    
  ];
  const tags = [
    {
      link: "",
      name: "reşathalife",
    },
    {
      link: "",
      name: "ondokuzmucizesi",
    },
    
  ];
  return (
    <div className="flex justify-center items-center flex-col bg-black">
      <div id="container" className="flex flex-col md:flex-row gap-3 px-5">
        <div id="left-side" className="flex flex-col md:max-w-[800px]">
        <Directory/>
          <div id="img-content">
            <img src="/sadece-fatiha.png" alt="" />
          </div>
          <div id="content-container" className="flex flex-col gap-5 mt-5">
            <div id="title" className="text-white">
              Namazda Ayaktayken Neden Sadece Fatiha Okumalıyız
            </div>
            <div id="content-text" className="text-white">
              <p>
                Ne yazık ki şeytan, milyonlarca Müslümanın namazlarını
                değiştirmeyi başarmış, onları Yaratıcıları ile iletişim
                kurmaktan mahrum bırakmıştır. Önce, El Fatiha'nın sonuna "AMİN"
                kelimesini eklemeye ikna etti. Bu kelime yabancıdır, Arapça
                değildir ve Kuran'da hiç geçmez. Ancak daha fazla harf ve ses
                ekleyerek, Namazda kullanılan kelimelerin sayısal yapısını
                etkili bir şekilde bozar. İkincisi, ister Sünni ister Şii olsun,
                tüm düşünce okullarının tüm (mezhep) imamları, namazda El
                Fatiha'dan sonra Kur'an'ın okunmasının zorunlu olmadığı
                konusunda ittifak etmişlerdir. 20:14'te Yaratıcımız, Namazın
                yalnızca Kendisine adanmasını emrediyor. Kuran'da Meryem,
                Muhammed, İsa, Musa, İbrahim ve daha birçok isim zikredilmekte
                ve Kuran'ın namazda kullanılması Tanrı'dan başka isimlerin de
                anılmasına yol açmaktadır. Bu, Namazı bozar. Namazda Tanrı'nın
                yanında başka isimler anmamakla emrolunduk (Kur'an 72:18).
              </p>
              <br></br>

              <p>
                Yukarıdaki ifadeler, editörlüğünü Reşad Halife’nin yaptığı Şubat
                1986 sayılı Muslim Perspective yayınından alıntılanmıştır.
                Aşağıdaki makaleyse, yine editörlüğünü Reşad Halife’nin yaptığı
                Mayıs 1986 tarihli Muslim Perspective yayınından
                alıntılanmıştır.
              </p>
            </div>
          </div>
          <RelatedVerses verses={verses}/>
          <RelatedAppendices appendices={appendices}/>
          <RelatedTags tags={tags}/>
        </div>
        <div
          id="right-side"
          className="flex flex-col gap-5 md:min-w-[300px] md:max-w-[350px] h-[400px] p-3"
        >
          <RelatedArticlesRightPanel articles={articles}/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Content;
