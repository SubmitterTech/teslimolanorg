import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesRight,
  faArrowDown19,
  faArrowDownAZ,
  faBalanceScale,
  faBan,
  faBars,
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
  faTimes,
  faUserGraduate,
  faUtensils,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import SubMenuItem from "./SubMenuItem";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const { darkMode, toggleDarkMode } = useTheme();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubMenu = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

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
        { subIcon: <FontAwesomeIcon icon={faPerson} />, href: "", label: "İsa Mesih'in Rolü" },
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
        { subIcon: <FontAwesomeIcon icon={faUtensils} />, href: "", label: "Beslenme Yasakları" },
        { subIcon: <FontAwesomeIcon icon={faPray} />, href: "", label: "Neden Namazın Detayı Yok" },
        { subIcon: <FontAwesomeIcon icon={faUserGraduate} />, href: "", label: "Peygamberin Ümmiliği" },
        { subIcon: <FontAwesomeIcon icon={faRing} />, href: "", label: "Çok Eşlilik" },
      ],
    },
    {
      title: "DAHA FAZLA",
      icon: faAnglesRight,
      menuKey: "dahaFazlasi",
      subMenuItems: [
        { subIcon: <FontAwesomeIcon icon={faNewspaper} />, href: "", label: "Haberler" },
        { subIcon: <FontAwesomeIcon icon={faFile} />, href: "", label: "Perspektif Yayınları" },
        { subIcon: <FontAwesomeIcon icon={faBook} />, href: "", label: "Reşad Halife'nin Kitapları" },
        { subIcon: <FontAwesomeIcon icon={faVideo} />, href: "", label: "Antlaşma Elçisi Kanalı" },
        { subIcon: <FontAwesomeIcon icon={faContactBook} />, href: "", label: "Bize Ulaşın" },
      ],
    },
  ];

  return (
    <header>
      <div className="flex justify-between items-center bg-gray-50 dark:bg-black px-3">
        <a
          href="/"
          title="teslimolan anasayfaya gidin"
          className="flex items-center"
        >
          <img src="logo03.jpg" className="h-12 md:h-20" alt="logo" />
          <span className="text-gray-900 dark:text-white ml-3">
            Mutluluk Tanrıya Teslimiyettir
          </span>
        </a>
        <button
          type="button"
          onClick={toggleMenu}
          className="text-white md:hidden"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="hidden md:flex md:gap-4 md:items-center">
          <div className="hidden md:flex items-center">
            <a href="http://submissionperspective.org/" className="text-white">
              ENGLISH
            </a>
          </div>
          <form className="flex gap-1">
            <input
              className="w-[120px] bg-black border border-gray-400 rounded p-2 text-gray-500 text-sm"
              type="text"
              name="searchInput"
              placeholder="Arama Metni"
            />
            <select
              id="options"
              defaultValue="1"
              className="w-[120px] bg-black border border-gray-400 rounded p-2 text-gray-100 text-sm"
            >
              <option defaultValue="option1">Kur'anda</option>
              <option defaultValue="option2">Eklerde</option>
              <option defaultValue="option3">Makalelerde</option>
            </select>
            <button className="text-white border border-gray-400 rounded px-2">
              <FontAwesomeIcon icon={faSearch}/>
            </button>
          </form>
          <button
            onClick={toggleDarkMode}
            className="ml-4 px-4 py-2 rounded-full bg-blue-500 text-white dark:bg-yellow-500"
          >
            {darkMode ? 'Koyu Tema' : 'Açık Tema'}
          </button>
        </div>
      </div>
      <nav
        className={`fixed top-0 right-0 bg-gray-700 text-white w-3/4 h-full transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:static md:translate-x-0 md:flex md:items-center md:justify-center md:w-auto md:bg-gray-700 md:p-3 z-50`}
      >
        <button
          type="button"
          onClick={toggleMenu}
          className="text-white md:hidden absolute top-4 right-4"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <ul className="flex flex-col gap-0  p-4 md:flex-row md:gap-8 md:p-0 md:justify-center md:items-center">
          {menuItems.map((subMenuItem, index) => (
            <SubMenuItem
              key={index}
              title={subMenuItem.title}
              src={subMenuItem.src}
              icon={subMenuItem.icon}
              subMenuItems={subMenuItem.subMenuItems}
              toggleSubMenu={toggleSubMenu}
              expandedMenu={expandedMenu}
            />
          ))}
        </ul>
      </nav>
      {console.log(darkMode)}
    </header>
  );
};

export default Header;
