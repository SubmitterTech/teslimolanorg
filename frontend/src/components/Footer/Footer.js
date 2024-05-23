import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesRight,
  faArrowDown19,
  faArrowDownAZ,
  faBalanceScale,
  faBan,
  faBook,
  faBookOpen,
  faBookQuran,
  faCalculator,
  faContactBook,
  faCow,
  faEarth,
  faExclamationTriangle,
  faFaceSmile,
  faFile,
  faFilePdf,
  faFont,
  faHandsPraying,
  faHome,
  faHouseFlag,
  faKaaba,
  faLanguage,
  faLaptopCode,
  faNewspaper,
  faPager,
  faPeopleArrows,
  faPerson,
  faPersonArrowUpFromLine,
  faPersonCircleQuestion,
  faPlusMinus,
  faPray,
  faQuestion,
  faQuran,
  faRing,
  faSearch,
  faStar,
  faSun,
  faUserGraduate,
  faUtensils,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Designer from "../Designer/Designer";
const Footer = () => {
  const menuItems = [
    {
      title: "ANASAYFA",
      icon: faHome,
      src: "/",
      subMenuItems: [],
    },
    {
      title: "TESLİMİYET",
      icon: faPray,
      menuKey: "teslimiyet",
      subMenuItems: [
        {
          subIcon: <FontAwesomeIcon icon={faHouseFlag} />,
          href: "",
          label: "Birleştirilmiş Tek Dinin İlanı",
        },
        {
          subIcon: <FontAwesomeIcon icon={faHandsPraying} />,
          href: "",
          label: "Dini Görevler",
        },
        {
          subIcon: <FontAwesomeIcon icon={faKaaba} />,
          href: "",
          label: "Teslimiyet'in İlk Direği",
        },
        {
          subIcon: <FontAwesomeIcon icon={faFaceSmile} />,
          href: "",
          label: "Mükemmel Mutluluğun Sırrı",
        },
        {
          subIcon: <FontAwesomeIcon icon={faQuestion} />,
          href: "",
          label: "Biz Niçin Yaratıldık?",
        },
        {
          subIcon: <FontAwesomeIcon icon={faPersonCircleQuestion} />,
          href: "",
          label: "Senin Tanrın Kim",
        },
        {
          subIcon: <FontAwesomeIcon icon={faBalanceScale} />,
          href: "",
          label: "Adalet Sistemi",
        },
      ],
    },
    {
      title: "KURAN",
      icon: faQuran,
      menuKey: "kuran",
      subMenuItems: [
        {
          subIcon: <FontAwesomeIcon icon={faBookQuran} />,
          href: "",
          label: "Kuran Oku",
        },
        {
          subIcon: <FontAwesomeIcon icon={faSearch} />,
          href: "",
          label: "Kuran'da Ara",
        },
        {
          subIcon: <FontAwesomeIcon icon={faPager} />,
          href: "",
          label: "Ekler",
        },
        {
          subIcon: <FontAwesomeIcon icon={faFilePdf} />,
          href: "",
          label: "Kuran Son Ahit'in Türkçe Tercümesini İndir",
        },
        {
          subIcon: <FontAwesomeIcon icon={faFilePdf} />,
          href: "",
          label: "Kuran Son Ahit'in Orjinalini İndir",
        },
        {
          subIcon: <FontAwesomeIcon icon={faLanguage} />,
          href: "",
          label: "Kuran Neden Arapça Vahyolundu?",
        },
        {
          subIcon: <FontAwesomeIcon icon={faSun} />,
          href: "",
          label: "Kuran: Kurtuluşumuz İçin İhtiyacımız Olan Her Şey",
        },
        {
          subIcon: <FontAwesomeIcon icon={faEarth} />,
          href: "",
          label: "Dünyanın Sonu (2280)",
        },
        {
          subIcon: <FontAwesomeIcon icon={faBookOpen} />,
          href: "",
          label: "Vahyin Kronolojik Sırası",
        },
      ],
    },
    {
      title: "19 MUCİZESİ",
      icon: faStar,
      menuKey: "19mucizesi",
      subMenuItems: [
        {
          subIcon: <FontAwesomeIcon icon={faCalculator} />,
          href: "",
          label: "Kuran'ın Matematiksel Koduna Giriş",
        },
        {
          subIcon: <FontAwesomeIcon icon={faPlusMinus} />,
          href: "",
          label: "Basit Gerçekler",
        },
        {
          subIcon: <FontAwesomeIcon icon={faArrowDownAZ} />,
          href: "",
          label: "Kuranî Başlangıç Harfleri (Huruf-u Mukatta)",
        },
        {
          subIcon: <FontAwesomeIcon icon={faVideo} />,
          href: "",
          label: "Reşad Halife 19'u Anlatıyor ",
        },
        {
          subIcon: <FontAwesomeIcon icon={faArrowDown19} />,
          href: "",
          label: "Neden 19",
        },
        {
          subIcon: <FontAwesomeIcon icon={faFont} />,
          href: "",
          label: "Özel Kelimelerin Matematiksel Kodlaması",
        },
        {
          subIcon: <FontAwesomeIcon icon={faPersonArrowUpFromLine} />,
          href: "",
          label: "İnsanüstü Sayısal Kombinasyonlar",
        },
        {
          subIcon: <FontAwesomeIcon icon={faLaptopCode} />,
          href: "",
          label: "İnsanüstü Sayısal Kombinasyonlar Programı ",
        },
        {
          subIcon: <FontAwesomeIcon icon={faFilePdf} />,
          href: "",
          label: "Kuran: Mucizenin Görsel Sunumu (PDF)",
        },
      ],
    },
    {
      title: "DİNLERDEKİ BOZULMALAR",
      icon: faExclamationTriangle,
      menuKey: "dinlerdekiBozulma",
      subMenuItems: [
        {
          subIcon: <FontAwesomeIcon icon={faPerson} />,
          href: "",
          label: "Muhammed Peygamberin Rolü",
        },
        {
          subIcon: <FontAwesomeIcon icon={faBook} />,
          href: "",
          label: "Hadis & Sünnet: Şeytani Bidatler",
        },
        {
          subIcon: <FontAwesomeIcon icon={faBan} />,
          href: "",
          label: "Tanrı'nın Sözü ile Oynandı",
        },
        {
          subIcon: <FontAwesomeIcon icon={faPerson} />,
          href: "",
          label: "İsa Mesih'in Rolü",
        },
        {
          subIcon: <FontAwesomeIcon icon={faCow} />,
          href: "",
          label: "İbrahim'in Oğlunu Kurban Etmesi ",
        },
        {
          subIcon: <FontAwesomeIcon icon={faPeopleArrows} />,
          href: "",
          label: "Şefaat Efsanesi",
        },

        {
          subIcon: <FontAwesomeIcon icon={faUtensils} />,
          href: "",
          label: "Beslenme Yasakları",
        },
        {
          subIcon: <FontAwesomeIcon icon={faPray} />,
          href: "",
          label: "Neden Namazın Detayı Yok",
        },
        {
          subIcon: <FontAwesomeIcon icon={faUserGraduate} />,
          href: "",
          label: "Peygamberin Ümmiliği",
        },
        {
          subIcon: <FontAwesomeIcon icon={faRing} />,
          href: "",
          label: "Çok Eşlilik",
        },
      ],
    },
    {
      title: "DAHA FAZLA",
      icon: faAnglesRight,
      menuKey: "dahaFazlasi",
      subMenuItems: [
        {
          subIcon: <FontAwesomeIcon icon={faNewspaper} />,
          href: "",
          label: "Haberler",
        },
        {
          subIcon: <FontAwesomeIcon icon={faFile} />,
          href: "",
          label: "Perspektif Yayınları",
        },
        {
          subIcon: <FontAwesomeIcon icon={faBook} />,
          href: "",
          label: "Reşad Halife'nin Kitapları",
        },
        {
          subIcon: <FontAwesomeIcon icon={faVideo} />,
          href: "",
          label: "Antlaşma Elçisi Kanalı",
        },
        {
          subIcon: <FontAwesomeIcon icon={faContactBook} />,
          href: "",
          label: "Bize Ulaşın",
        },
      ],
    },
  ];

  return (
    <>
    <div className="hidden  md:flex md:gap-5 md:flex-col bg-gray-700 ">
      <div>
        <img src="bottom-footer-bg.jpg" alt="" />
      </div>
      <div className="p-3"> 
        <p className="text-white font-semibold">
          Teslimolan.org | Teslimiyet Dini | Kuran, tüm Kuran, Kuran dışında
          hiçbir şey
        </p>
      </div>
      <div className="flex  gap-5 text-white p-3 flex-wrap wrap text-sm  justify-between">
        {menuItems.map((items, index) => (
            items.title !=="ANASAYFA" && (
          <div key={index} className="flex flex-col gap-3 max-w-[160px]">
            <div className="flex gap-2">
              <FontAwesomeIcon icon={items.icon} />
              <Link to="">{items.title}</Link>
            </div>
            <hr />
            <ul className="flex flex-col gap-2">
              {items.subMenuItems.map((subMenuItem,index2) => (
                <li key={index2} className="flex gap-2">
                  {subMenuItem.subIcon}
                  <Link to={subMenuItem.href}>{subMenuItem.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        )))}
      </div>
    </div>
    <Designer/>
    </>
  );
};

export default Footer;
