import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa"; // Ikonkalar uchun react-icons
import { FaUserCog } from "react-icons/fa";
import { IoPeople } from "react-icons/io5"; 
import flag from "../../assets/uk.png"

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md border-b border-gray-200 sticky top-0">
      {/* Qidiruv paneli */}
      <div className="flex items-center gap-2 bg-gray-100 rounded-md px-3 py-1">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent border-none outline-none text-gray-700 w-40"
        />
      </div>

      {/* O‘ng taraf: Bayroq, qo‘ng‘iroq, foydalanuvchi ikonkalari */}
      <div className="flex items-center gap-4">
        {/* Til tanlash (Bayroq) */}
        <img
          src={flag}
          alt="UK Flag"
        />

        {/* Bildirishnoma (Qo‘ng‘iroq) */}
        <div className="relative">
          <FaBell className="text-gray-500 text-xl" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center">
            2
          </span>
        </div>

        {/* Foydalanuvchi guruhi ikonkasi */}
        <IoPeople className="text-gray-500 text-xl" />

        {/* Foydalanuvchi profil rasmi */}
        <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center">
          <FaUserCog  className='flex items-center justify-center'/>
        </div>
      </div>
    </div>
  );
};

export default Header;
