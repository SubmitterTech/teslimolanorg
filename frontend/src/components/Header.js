import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesRight,
  faBalanceScale,
  faBars,
  faBookOpen,
  faBookQuran,
  faEarth,
  faExclamationTriangle,
  faFaceSmile,
  faFilePdf,
  faHandsPraying,
  faHome,
  faHouseFlag,
  faKaaba,
  faLanguage,
  faPager,
  faPersonCircleQuestion,
  faPray,
  faQuestion,
  faQuran,
  faSearch,
  faStar,
  faSun,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import SubMenuItem from "./SubMenuItem";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubMenu = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  const menuItems = [
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
        { href: "", label: "Kuran'ın Matematiksel Koduna Giriş" },
        { href: "", label: "Basit Gerçekler" },
        { href: "", label: "Kuranî Başlangıç Harfleri (Huruf-u Mukatta)" },
        {
          href: "",
          label: "Neden 19",
        },
        {
          href: "",
          label: "Özel Kelimelerin Matematiksel Kodlaması",
        },
        { href: "", label: "nsanüstü Sayısal Kombinasyonlar" },
        {
          href: "",
          label: "İnsanüstü Sayısal Kombinasyonlar Programı ",
        },
        { href: "", label: "Kuran: Mucizenin Görsel Sunumu (PDF)" },
      ],
    },
    {
      title: "DİNLERDEKİ BOZULMALAR",
      icon: faExclamationTriangle,
      menuKey: "dinlerdekiBozulma",
      subMenuItems: [
        { href: "", label: "Muhammed Peygamberin Rolü" },
        { href: "", label: "Hadis & Sünnet: Şeytani Bidatler" },
        { href: "", label: "İsa Mesih'in Rolü" },
        {
          href: "",
          label: "İbrahim'in Oğlunu Kurban Etmesi ",
        },
        {
          href: "",
          label: "Şefaat Efsanesi",
        },
        { href: "", label: "Beslenme Yasakları" },
        {
          href: "",
          label: "Neden Namazın Detayı Yok",
        },
        { href: "", label: "Peygamberin Ümmiliği" },
        { href: "", label: "Çok Eşlilik" },
      ],
    },
    {
      title: "DAHA FAZLA",
      icon: faAnglesRight,
      menuKey: "dahaFazlasi",
      subMenuItems: [
        { href: "", label: "Haberler" },
        { href: "", label: "Perspektif Yayınları" },
        { href: "", label: "Reşad Halife'nin Kitapları" },
        {
          href: "",
          label: "Antlaşma Elçisi Kanalı",
        },
        {
          href: "",
          label: "Bize Ulaşın",
        },
      ],
    },
  ];

  return (
    <header className="relative">
      <div className="flex justify-between items-center bg-black px-3">
        <a
          href="/"
          title="teslimolan anasayfaya gidin"
          className="flex items-center"
        >
          <img src="logo03.jpg" className="h-12 md:h-20" alt="logo" />
          <span className="text-white ml-3">
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
              value="1"
              className="w-[120px] bg-black border border-gray-400 rounded p-2 text-gray-100 text-sm"
            >
              <option value="option1">Kur'anda</option>
              <option value="option2">Eklerde</option>
              <option value="option3">Makalelerde</option>
            </select>
            <button className="text-white border border-gray-400 rounded px-2">
              Ara
            </button>
          </form>
        </div>
      </div>
      <nav
        className={`fixed top-0 right-0 bg-gray-700 text-white w-3/4 h-full transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:static md:translate-x-0 md:flex md:items-center md:justify-center md:w-auto md:bg-gray-700 md:p-3`}
      >
        <button
          type="button"
          onClick={toggleMenu}
          className="text-white md:hidden absolute top-4 right-4"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <ul className="flex flex-col gap-4 p-4 md:flex-row md:gap-8 md:p-0">
          <li className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faHome} />
            <Link
              to="/"
              className="navTitleWrapper"
              onClick={() => setExpandedMenu(null)}
            >
              ANASAYFA
            </Link>
          </li>
          {menuItems.map((subMenuItem, index) => (
            <SubMenuItem
              key={index}
              title={subMenuItem.title}
              icon={subMenuItem.icon}
              subMenuItems={subMenuItem.subMenuItems}
              toggleSubMenu={toggleSubMenu}
              expandedMenu={expandedMenu}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
