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
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const { darkMode, toggleDarkMode } = useTheme();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubMenu = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
    navigate(`/ara?bul=${searchInput}`);
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
          href: "https://kuransonahit.org/ek/15",
          label: "Dini Görevler",
        },
        {
          subIcon: <FontAwesomeIcon icon={faKaaba} />,
          href: "https://kuransonahit.org/ek/13",
          label: "Teslimiyet'in İlk Direği",
        },
        {
          subIcon: <FontAwesomeIcon icon={faFaceSmile} />,
          href: "",
          label: "Mükemmel Mutluluğun Sırrı",
        },
        {
          subIcon: <FontAwesomeIcon icon={faQuestion} />,
          href: "https://kuransonahit.org/ek/7",
          label: "Biz Niçin Yaratıldık?",
        },
        {
          subIcon: <FontAwesomeIcon icon={faPersonCircleQuestion} />,
          href: "https://kuransonahit.org/ek/27",
          label: "Senin Tanrın Kim",
        },
        {
          subIcon: <FontAwesomeIcon icon={faBalanceScale} />,
          href: "https://kuransonahit.org/ek/37",
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
          href: "https://kuransonahit.org/ekler",
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
          href: "https://kuransonahit.org/ek/4",
          label: "Kuran Neden Arapça Vahyolundu?",
        },
        {
          subIcon: <FontAwesomeIcon icon={faSun} />,
          href: "https://kuransonahit.org/ek/18",
          label: "Kuran: Kurtuluşumuz İçin İhtiyacımız Olan Her Şey",
        },
        {
          subIcon: <FontAwesomeIcon icon={faEarth} />,
          href: "https://kuransonahit.org/ek/25",
          label: "Dünyanın Sonu (2280)",
        },
        {
          subIcon: <FontAwesomeIcon icon={faBookOpen} />,
          href: "https://kuransonahit.org/ek/23",
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
          href: "https://www.youtube.com/watch?v=IL3CKqvEZIQ",
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
          href: "https://bilisimhocamyusufbalyemez.com/kuran19/kuran.php",
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
          href: "https://kuransonahit.org/ek/12",
          label: "Muhammed Peygamberin Rolü",
        },
        {
          subIcon: <FontAwesomeIcon icon={faBook} />,
          href: "https://kuransonahit.org/ek/19",
          label: "Hadis & Sünnet: Şeytani Bidatler",
        },
        {
          subIcon: <FontAwesomeIcon icon={faBan} />,
          href: "https://kuransonahit.org/ek/24",
          label: "Tanrı'nın Sözü ile Oynandı",
        },
        {
          subIcon: <FontAwesomeIcon icon={faPerson} />,
          href: "https://kuransonahit.org/ek/22",
          label: "İsa Mesih'in Rolü",
        },
        {
          subIcon: <FontAwesomeIcon icon={faCow} />,
          href: "https://kuransonahit.org/ek/9",
          label: "İbrahim'in Oğlunu Kurban Etmesi ",
        },
        {
          subIcon: <FontAwesomeIcon icon={faPeopleArrows} />,
          href: "https://kuransonahit.org/ek/8",
          label: "Şefaat Efsanesi",
        },
        {
          subIcon: <FontAwesomeIcon icon={faUtensils} />,
          href: "https://kuransonahit.org/ek/16",
          label: "Beslenme Yasakları",
        },
        {
          subIcon: <FontAwesomeIcon icon={faPray} />,
          href: "https://kuransonahit.org/ek/9",
          label: "Neden Namazın Detayı Yok",
        },
        {
          subIcon: <FontAwesomeIcon icon={faUserGraduate} />,
          href: "https://kuransonahit.org/ek/28",
          label: "Peygamberin Ümmiliği",
        },
        {
          subIcon: <FontAwesomeIcon icon={faRing} />,
          href: "https://kuransonahit.org/ek/30",
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
          href: "https://www.youtube.com/channel/UCm6kh1SANzI-h6zHeScPcNw",
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
    <header className="bg-gray-50 dark:bg-black md:relative md:z-auto fixed top-0 left-0 w-full z-50" style={{zIndex:1000}}>
      <div className="flex justify-between items-center bg-gray-50 dark:bg-black pr-1 md:px-10">
        <a
          href="/"
          title="teslimolan anasayfaya gidin"
          className="flex items-center"
        >
          <img src="/teslimiyet-logo.png" className="h-12 md:h-20" alt="logo" />
          <span className="text-gray-900 dark:text-white ml-3">
            Mutluluk Tanrıya Teslimiyettir
          </span>
        </a>
        <button
          type="button"
          onClick={toggleMenu}
          className="border py-1 px-3 rounded dark:text-white md:hidden"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="hidden md:flex md:gap-4 md:items-center">
          {isAuthenticated && (
            <div className="hidden md:flex items-center">
              <Link
                to="/admin"
                className="text-white p-2 rounded-lg bg-gray-700 hover:opacity-90"
              >
                Yönetici Paneli
              </Link>
            </div>
          )}
          <form className="flex gap-1" onSubmit={searchHandler}>
            <input
              className="w-[120px] bg-gray-50 text-gray-900 dark:bg-black border border-gray-400 rounded p-2 dark:text-gray-500 text-sm"
              type="text"
              name="searchInput"
              placeholder="Arama Metni"
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="text-gray-900 dark:text-white border border-gray-400 rounded px-2">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          <button
            onClick={toggleDarkMode}
            className="ml-4 px-4 py-2 rounded-full bg-blue-500 text-white dark:bg-yellow-500"
          >
            {darkMode ? "Açık Tema" : "Koyu Tema"}
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
        <ul className="flex flex-col gap-0 p-4 md:flex-row md:gap-8 md:p-0 md:justify-center md:items-center">
          {menuItems.map((subMenuItem, index) => (
            <SubMenuItem
              key={index}
              title={subMenuItem.title}
              src={subMenuItem.src}
              icon={subMenuItem.icon}
              subMenuItems={subMenuItem.subMenuItems}
              toggleSubMenu={toggleSubMenu}
              expandedMenu={expandedMenu}
              onClick={
                subMenuItem.title === "ANASAYFA" ? toggleMenu : undefined
              }
            />
          ))}
          {isAuthenticated && (
            <div className="flex items-center justify-center mt-5 md:hidden">
              <div className="flex items-center">
                <Link
                  to="/admin"
                  className="text-white p-2 rounded-lg bg-gray-500 hover:opacity-90"
                >
                  Yönetici Paneli
                </Link>
              </div>
            </div>
          )}
          <form
            className="flex gap-1 md:hidden my-5 justify-center"
            onSubmit={searchHandler}
          >
            <input
              className="w-[200px] bg-gray-700 text-gray-50 border border-gray-400 rounded p-2 text-sm"
              type="text"
              name="searchInput"
              placeholder="Arama Metni"
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="text-gray-50 dark:text-white border border-gray-400 rounded px-2">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          <button
            onClick={toggleDarkMode}
            className="my-2 px-3 py-2 md:hidden rounded-full bg-blue-500 text-white dark:bg-yellow-500"
          >
            {darkMode ? "Açık Tema" : "Koyu Tema"}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;