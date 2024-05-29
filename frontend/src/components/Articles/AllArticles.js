import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Directory from "../Directory/Directory";
import ReadMore from "../ReadMore/ReadMore";

const AllArticles = () => {
  const articles = [
    {
      imgSrc: "makale-bebeklermasummu.png",
      articleTitle: "Bebekler Masum Mu? Öyleyse Neden Acı Çekiyorlar?",
      articleText:
        "Dünyanın farklı coğrafyalarında, bu hayata acılar içinde gelen bebeklerin hikayelerini okuyor ve onlara acıyoruz. Birçok insan sefalet, mutsuzluk ve kaosa doğuyor. Her bebek aynı şartlarda gelmiyor. Ve kimi insanlar, bu durum karşısında Tanrı’nın hikmetini, hatta varlığını sorguluyorlar. Çünkü bozulmuş dinler bunlara tam anlamıyla yanıt sağlamıyor. Rabbimiz,",
    },
    {
      imgSrc: "teslimolanorg_banner3.png",
      articleTitle: "Tüm Dinler Tek Bir Dinde Birleşti",
      articleText:
        "Tanrı, insanlığı günahın bedelinden kurtarmak için pek çok peygamber gönderdi; Âdem, Nuh, İbrahim, Musa, Davut, İsa, Muhammed ve diğerleri. Son peygamber Muhammed’in gelişiyle birlikte, Tanrı’nın tüm peygamberleri bu dünyaya gelmiş ve tüm mesajlar iletilmiş oldu; Kuran, Son Ahittir.Aradan geçen yüzlerce yılda, ne yazık ki peygamberlerin getirdiği mesajlar bidatle...",
    },
    {
      imgSrc: "sadece-fatiha.png",
      articleTitle: "Tüm Dinler Tek Bir Dinde Birleşti",
      articleText:
        "Tanrı, insanlığı günahın bedelinden kurtarmak için pek çok peygamber gönderdi; Âdem, Nuh, İbrahim, Musa, Davut, İsa, Muhammed ve diğerleri. Son peygamber Muhammed’in gelişiyle birlikte, Tanrı’nın tüm peygamberleri bu dünyaya gelmiş ve tüm mesajlar iletilmiş oldu; Kuran, Son Ahittir.Aradan geçen yüzlerce yılda, ne yazık ki peygamberlerin getirdiği mesajlar bidatle...",
    },
  ];

  return (
    <div className="flex flex-col md:justify-center md:items-center bg-black w-full">
      <div className="flex flex-col md:max-w-[1200px] md:w-full gap-5">
        <Directory />
        <h1 className="text-3xl text-white p-5">Perspektif Yayınları</h1>
        {articles.map((article, index) => (
          <div key={index} className="flex flex-col gap-10 border-t p-5">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="md:max-w-[300px]">
                <Link to="/makale/namazda-ayaktayken-neden-sadece-fatiha-okumaliyiz">
                <img src={`/${article.imgSrc}`} alt={article.articleTitle} />
                </Link>
              </div>
              <div>
                <h1 className="text-white font-semibold text-xl">
                  <Link to="">{article.articleTitle}</Link>
                </h1>
                <p className="text-white mt-5">
                  <ReadMore
                    text={article.articleText}
                    limit={100}
                    to="/makale/namazda-ayaktayken-neden-sadece-fatiha-okumaliyiz"
                  />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AllArticles;
