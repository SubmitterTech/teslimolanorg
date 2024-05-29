import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Directory from "../Directory/Directory";

const AllArticles = () => {
      
  return (
    <div className="flex flex-col md:justify-center md:items-center bg-black w-full">
      <div className="flex flex-col md:max-w-[1200px] md:w-full gap-5">
        <Directory />
        <h1 className="text-3xl text-white p-5">Perspektif Yayınları</h1>

        <div className="flex flex-col gap-10 border-t p-5">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="md:max-w-[300px]">
              <img src="/makale-bebeklermasummu.png" alt="" />
            </div>
            <div>
              <h1 className="text-white font-semibold text-xl">
                <Link to="">
                  Bebekler Masum Mu? Öyleyse Neden Acı Çekiyorlar?
                </Link>
              </h1>
              <p className="text-white mt-5">
                Dünyanın farklı coğrafyalarında, bu hayata acılar içinde gelen
                bebeklerin hikayelerini okuyor ve onlara acıyoruz. Birçok insan
                sefalet, mutsuzluk ve kaosa doğuyor. Her bebek aynı şartlarda
                gelmiyor. Ve kimi insanlar, bu durum karşısında Tanrı’nın
                hikmetini, hatta varlığını sorguluyorlar. Çünkü bozulmuş dinler
                bunlara tam anlamıyla yanıt sağlamıyor. Rabbimiz,...
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 border-t p-5">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="md:max-w-[300px]">
              <img src="/teslimolanorg_banner3.png" alt="" />
            </div>
            <div>
              <h1 className="text-white font-semibold text-xl">
                <Link to="">Tüm Dinler Tek Bir Dinde Birleşti</Link>
              </h1>
              <p className="text-white mt-5">
                Tanrı, insanlığı günahın bedelinden kurtarmak için pek çok
                peygamber gönderdi; Âdem, Nuh, İbrahim, Musa, Davut, İsa,
                Muhammed ve diğerleri. Son peygamber Muhammed’in gelişiyle
                birlikte, Tanrı’nın tüm peygamberleri bu dünyaya gelmiş ve tüm
                mesajlar iletilmiş oldu; Kuran, Son Ahittir.Aradan geçen
                yüzlerce yılda, ne yazık ki peygamberlerin getirdiği mesajlar
                bidatle...
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 border-t p-5">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="md:max-w-[300px]">
              <img src="/sadece-fatiha.png" alt="" />
            </div>
            <div>
              <h1 className="text-white font-semibold text-xl">
                <Link to="">
                  Namazda Ayaktayken Neden Sadece Fatiha Okumalıyız
                </Link>
              </h1>
              <p className="text-white mt-5">
                Ne yazık ki şeytan, milyonlarca Müslümanın namazlarını
                değiştirmeyi başarmış, onları Yaratıcıları ile iletişim
                kurmaktan mahrum bırakmıştır. Önce, El Fatiha'nın sonuna "AMİN"
                kelimesini eklemeye ikna etti. Bu kelime yabancıdır, Arapça
                değildir ve Kuran'da hiç geçmez. Ancak daha fazla harf ve ses
                ekleyerek, Namazda kullanılan kelimelerin sayısal yapısını
                etki..
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllArticles;
