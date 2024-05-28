import RelatedVerses from "../RelatedVerses/RelatedVerses";
import RelatedAppendices from "../RelatedAppendices/RelatedAppendices";
import RelatedArticles from "../RelatedArticles/RelatedArticles";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import RelatedTags from "../RelatedTags/RelatedTags";
import RelatedArticlesRightPanel from "../RelatedArticles/RelatedArticleRightPanel";
import Directory from "../Directory/Directory";
import Footer from "../Footer/Footer";

const PerspectiveContent = () => {
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
      imgSrc: "makale1banner.png",
      title: "KURAN'IN MÜKEMMEL KORUNMASI",
    },
    {
      link: "/",
      imgSrc: "makalemanset1.png",
      title:
        "Kendilerini Aldatıyorlar: İKİYÜZLÜLER İLAN EDERLER: ‘’Bizim Bir Elçiye İhtiyacımız Yok’’",
    },
  ];
  const videos = [
    {
      link: "/",
      imgSrc: "hqdefault1.jpg",
      title: "Kadim Mesaj Yeni Elçi (Reşad Halife)",
    },
    {
      link: "/",
      imgSrc: "hqdefault2.jpg",
      title: "Reşad Halife ile Dünya Haber Bülteni",
    },
    {
      link: "/",
      imgSrc: "hqdefault3.jpg",
      title: "Büyük Tartışma",
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
            <img src="/sp_1990mart_1.png" alt="" />
          </div>
          <div id="content-container" className="flex flex-col gap-5 mt-5">
            <div id="title" className="text-white">
              <h1 className="text-3xl font-semibold">1990 - Mart Ayı</h1>
            </div>
            <div id="content-text" className="text-white">
              <p>Kuran’da “Tanrı” Kelimesi İNKÂRCILAR DAHA NE İSTİYOR?</p>
              <p>
                1. Tanrı 74:25-30'da Kuran'ın doğruluğunun 19 sayısıyla
                kanıtlanacağını bildiriyor. 2. Tanrı, 19 sayısına dayanan bu
                kodu “En büyük mucizelerden biri” (74:35) olarak
                tanımlamaktadır. 3. “Tanrı” (Allah) kelimesi Kuran’da 2698 defa
                geçmektedir ve bu sayı 19x142’ye eşittir. 4. “Tanrı” kelimesinin
                geçtiği her yerde ayet numaralarının toplamı 118123 veya 19x6217
                olur. 5. Numaraları 19'un katı olan tüm ayetlerde (yani 19, 38,
                57, 76 vb. ayetlerde) “Tanrı” kelimesinin geçişlerinin toplamı
                133 veya 19x7. 6. Numaraları 19'un katı OLMAYAN tüm ayetlerde
                “Tanrı” kelimesinin geçişlerinin toplamı 117990 veya 19x6210. 7.
                Ayet sayısı 19'a bölünen sureler 47, 82, 87 ve 96. surelerdir.
                “Tanrı” kelimesi bu surelerde sırasıyla 27, 1, 1 ve 1 defa
                geçmektedir. Bu sure numaralarını ve “Tanrı” kelimesinin geçtiği
                yerleri topladığımızda toplam 342 veya 19x18 olur. 8. İlk Kuranî
                Başlangıç setinden (2’nci surenin A.L.M.'si) son Kuranî
                Başlangıca (68’nci surenin N.'si) kadar, “Tanrı” kelimesinin
                geçiş sayısı 2641 defadır veya 19x139. 9. Kuran'ın başlangıç
                harfli kısmı dışında (bir yanda Sure 1, diğer yanda Sure 69-114)
                “Tanrı” kelimesi 57 defa geçmektedir, yani 19x3. 10. “Tanrı”
                kelimesinin bu 57 kez geçtiği sure ve ayetlerin numaraları da
                toplandığında (yukarıdaki 9. madde) toplam 2432 olur, yani
                19x128. 11. Kuran'ın mesajı şudur: "Tanrı Tektir." “Tek” (Vahid)
                kelimesi Kuran’da 25 defa geçmektedir, bunlardan 6’sı Tanrı’yı
                kastetmiyor, Tanrı’yı kastedenler ise tam olarak 19 tanesidir.
                9’ncu sure 127 ayetten mi oluşuyor, yoksa 129 ayetten mi? İşte
                daha fazla kanıt 12. Ayet sayısı “7” rakamıyla biten tüm
                sureleri alın. Bunlar 1, 9*, 25, 26, 45, 86 ve 107. surelerdir.
                Ayet sayıları sırasıyla 7, 127*, 77, 227, 37, 17 ve 107'dir. Bu
                surelerde “Tanrı” kelimesinin toplam geçiş sayısı 209, yani
                19x11. 13. Ayet sayısı “9” rakamıyla biten tüm sureleri alın.
                Bunlar 10, 15, 29, 43, 44, 48, 52, 57, 81, 82, 87, 96 ve 104.
                surelerdir. Bunlar sırasıyla 109, 99, 69, 89, 59, 29, 49, 29,
                29, 19, 19, 19 ve 9 ayetten oluşmaktadır. Bu surelerde “Tanrı”
                kelimesinin toplam geçiş sayısı 190 yani 19x10'dur. 14. Kuran'ın
                başından Sure 9'un (9:127’nin) sonuna kadar "Tanrı" kelimesinin
                geçiş sayısı 1273'tür, yani 19x67. 15. Sure numarası (9) artı
                ayetleri (127) artı Sure 9'daki (168) “Tanrı” kelimesi 304'ü
                verir veya 19x16. 16. “Tanrı” kelimesi 85 surede geçmektedir;
                Her sure numarasının toplamı ile “Tanrı” kelimesinin geçtiği son
                ayetin numarasının toplamı 3910 + 5191 = 9101 yani 19x479
                sonucunu verir. 17. “Tanrı” kelimesinin geçtiği 85 sureyi alın.
                Her surenin numarasını ve “Tanrı” kelimesinin geçtiği ilk
                ayetten son ayete kadar olan ayetlerin sayısını ekleyin ve 3910
                + 4260 = 8170 veya 19x430 elde edersiniz.
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
          <RelatedVerses verses={verses} />
          <RelatedAppendices appendices={appendices} />
          <RelatedArticles articles={articles} />
          <RelatedVideos videos={videos} />
          <RelatedTags tags={tags} />
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
};

export default PerspectiveContent;
