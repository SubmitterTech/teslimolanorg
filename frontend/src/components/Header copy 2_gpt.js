import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesRight,
  faBars,
  faChevronDown,
  faExclamationTriangle,
  faHome,
  faPray,
  faQuran,
  faStar,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubMenu = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

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
            <Link to="/" className="navTitleWrapper">
              ANASAYFA
            </Link>
          </li>
          <li>
            <button
              className="flex items-center w-full text-left gap-2"
              onClick={() => toggleSubMenu("teslimiyet")}
            >
              <FontAwesomeIcon icon={faPray} />
              TESLİMİYET
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`ml-auto transition-transform ${
                  expandedMenu === "teslimiyet" ? "rotate-180" : ""
                }`}
              />
            </button>
            {expandedMenu === "teslimiyet" && (
              <ul className="p-4 mt-2 bg-gray-600 md:absolute md:top-full md:left-0 md:mt-0 md:w-screen md:flex md:justify-center md:items-center md:gap-4 md:flex-wrap">
                <li>
                  <Link>Birleştirilmiş Tek Dinin İlanı</Link>
                </li>
                <li>
                  <Link>Dini Görevler</Link>
                </li>
                <li>
                  <Link>Teslimiyet'in İlk Direği</Link>
                </li>
                <li>
                  <Link>Mükemmel Mutluluğun Sırrı</Link>
                </li>
                <li>
                  <Link>Biz Niçin Yaratıldık?</Link>
                </li>
                <li>
                  <Link>Senin Tanrın Kim</Link>
                </li>
                <li>
                  <Link>Adalet Sistemi</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              className="flex items-center w-full text-left gap-3"
              onClick={() => toggleSubMenu("kuran")}
            >
              <FontAwesomeIcon icon={faQuran} />
              KURAN
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`ml-auto transition-transform ${
                  expandedMenu === "kuran" ? "rotate-180" : ""
                }`}
              />
            </button>
            {expandedMenu === "kuran" && (
              <ul className="p-4 mt-2 bg-gray-600 md:absolute md:top-full md:left-0 md:mt-0 md:w-screen md:flex md:justify-center md:items-center md:gap-4 md:flex-wrap">
                <li>
                  <Link to="">Kuran Oku</Link>
                </li>
                <li>
                  <Link to="">Kuran'da Ara</Link>
                </li>
                <li>
                  <Link to="">Ekler</Link>
                </li>
                <li>
                  <Link to="">Kuran Son Ahit'in Türkçe Tercümesini İndir</Link>
                </li>
                <li>
                  <Link to="">Kuran Son Ahit'in Orjinalini İndir </Link>
                </li>
                <li>
                  <Link to="">Kuran Neden Arapça Vahyolundu? </Link>
                </li>
                <li>
                  <Link to="">
                    Kuran: Kurtuluşumuz İçin İhtiyacımız Olan Her Şey
                  </Link>
                </li>
                <li>
                  <Link to="">Dünyanın Sonu (2280)</Link>
                </li>
                <li>
                  <Link to="">Vahyin Kronolojik Sırası</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              className="flex items-center w-full text-left gap-3"
              onClick={() => toggleSubMenu("19mucizesi")}
            >
              <FontAwesomeIcon icon={faStar} />
              19 MUCİZESİ
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`ml-auto transition-transform ${
                  expandedMenu === "19mucizesi" ? "rotate-180" : ""
                }`}
              />
            </button>
            {expandedMenu === "19mucizesi" && (
              <ul className="p-4 mt-2 bg-gray-600 md:absolute md:top-full md:left-0 md:mt-0 md:w-screen md:flex md:justify-center md:items-center md:gap-4 md:flex-wrap">
                <li>
                  <Link to="">Kuran Oku</Link>
                </li>
                <li>
                  <Link to="">Kuran'da Ara</Link>
                </li>
                <li>
                  <Link to="">Ekler</Link>
                </li>
                <li>
                  <Link to="">Kuran Son Ahit'in Türkçe Tercümesini İndir</Link>
                </li>
                <li>
                  <Link to="">Kuran Son Ahit'in Orjinalini İndir </Link>
                </li>
                <li>
                  <Link to="">Kuran Neden Arapça Vahyolundu? </Link>
                </li>
                <li>
                  <Link to="">
                    Kuran: Kurtuluşumuz İçin İhtiyacımız Olan Her Şey
                  </Link>
                </li>
                <li>
                  <Link to="">Dünyanın Sonu (2280)</Link>
                </li>
                <li>
                  <Link to="">Vahyin Kronolojik Sırası</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              className="flex items-center w-full text-left gap-3"
              onClick={() => toggleSubMenu("dinlerdekiBozulma")}
            >
              <FontAwesomeIcon icon={faExclamationTriangle} />
              DİNLERDEKİ BOZULMALAR
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`ml-auto transition-transform ${
                  expandedMenu === "dinlerdekiBozulma" ? "rotate-180" : ""
                }`}
              />
            </button>
            {expandedMenu === "dinlerdekiBozulma" && (
              <ul className="p-4 mt-2 bg-gray-600 md:absolute md:top-full md:left-0 md:mt-0 md:w-screen md:flex md:justify-center md:items-center md:gap-4 md:flex-wrap">
                <li>
                  <Link to="">Kuran Oku</Link>
                </li>
                <li>
                  <Link to="">Kuran'da Ara</Link>
                </li>
                <li>
                  <Link to="">Ekler</Link>
                </li>
                <li>
                  <Link to="">Kuran Son Ahit'in Türkçe Tercümesini İndir</Link>
                </li>
                <li>
                  <Link to="">Kuran Son Ahit'in Orjinalini İndir </Link>
                </li>
                <li>
                  <Link to="">Kuran Neden Arapça Vahyolundu? </Link>
                </li>
                <li>
                  <Link to="">
                    Kuran: Kurtuluşumuz İçin İhtiyacımız Olan Her Şey
                  </Link>
                </li>
                <li>
                  <Link to="">Dünyanın Sonu (2280)</Link>
                </li>
                <li>
                  <Link to="">Vahyin Kronolojik Sırası</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              className="flex items-center w-full text-left gap-3"
              onClick={() => toggleSubMenu("dahafazlasi")}
            >
              <FontAwesomeIcon icon={faAnglesRight} />
              DAHA FAZLA
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`ml-auto transition-transform ${
                  expandedMenu === "dahafazlasi" ? "rotate-180" : ""
                }`}
              />
            </button>
            {expandedMenu === "dahafazlasi" && (
              <ul className="p-4 mt-2 bg-gray-600 md:absolute md:top-full md:left-0 md:mt-0 md:w-screen md:flex md:justify-center md:items-center md:gap-4 md:flex-wrap">
                <li>
                  <Link to="">Kuran Oku</Link>
                </li>
                <li>
                  <Link to="">Kuran'da Ara</Link>
                </li>
                <li>
                  <Link to="">Ekler</Link>
                </li>
                <li>
                  <Link to="">Kuran Son Ahit'in Türkçe Tercümesini İndir</Link>
                </li>
                <li>
                  <Link to="">Kuran Son Ahit'in Orjinalini İndir </Link>
                </li>
                <li>
                  <Link to="">Kuran Neden Arapça Vahyolundu? </Link>
                </li>
                <li>
                  <Link to="">
                    Kuran: Kurtuluşumuz İçin İhtiyacımız Olan Her Şey
                  </Link>
                </li>
                <li>
                  <Link to="">Dünyanın Sonu (2280)</Link>
                </li>
                <li>
                  <Link to="">Vahyin Kronolojik Sırası</Link>
                </li>
              </ul>
            )}
          </li>
          {/* Diğer menü öğeleri burada */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
