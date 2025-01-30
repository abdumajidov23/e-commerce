import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { links } from "../../static";
import logo from "/logo.svg";
import { AiOutlineClose, AiOutlineDelete, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import useOnlineonline from "@/hooks/useOnlineStatus";
import "./Header.scss";
import HeaderSearch from "./HeaderSearch";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";

const Header = () => {
  const token = useSelector((state: RootState) => state.token.access_token)
  const {online, firstEnter} = useOnlineonline();
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  
  // Modalni ochish va yopish uchun funksiyalar
  // Modal holatini boshqarish
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modalni ochish va yopish uchun toggle funksiyasi
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Cardni o'chirish
  const removeFromCart = () => {
    // O'zingizning o'chirish logikangizni shu yerda amalga oshiring
    console.log("Item deleted");
    toggleModal(); // Modalni yopish
  };

  // Comparison tugmasi bosilganda modalni yopib, /product sahifasiga yo'naltirish
  const handleComparisonClick = () => {
    setIsModalOpen(false); // Modalni yopish
    navigate("/product"); // /product sahifasiga yo'naltirish
  };


  // const { isCartOpen, toggleCart, cartItems, removeFromCart } = useCart();
  // const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);


  return (
    <div
      className={`bg-white w-full shadow-sm sticky  left-0 z-50 ${
        !online && firstEnter ? "top-6" : "top-0"
      } ${online && firstEnter ? "header-animete" : ""}`}
    >
      <div className="container mx-auto h-20 flex justify-between items-center font-poppins max-[520px]:justify-center">
        <div
          onClick={() => navigate("/")}
          className="flex items-center hover:opacity-70 duration-300"
        >
          <img src={logo} alt="logo.svg" className="h-14 w-14 cursor-pointer" />
          <h2 className="ml-1 text-[30px] font-montserrat font-semibold cursor-pointer">
            Furnishings
          </h2>
        </div>
        <div className="flex items-center gap-12 max-[986px]:hidden">
        {links?.map((link) => (
          <NavLink
            to={link.href}
            key={link.href}
            className={({ isActive }) =>
              `text-center font-medium text-lg hover:text-bg-primary duration-300 ${
                isActive ? "text-bg-primary font-bold" : ""
              }`
            }
            >
            {link.title}
          </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-6 max-[520px]:hidden">
          <NavLink to={token ? "/auth/profile" : "/auth/sign-up"}>
            <LuUser className="h-6 w-6 hover:text-bg-primary duration-300" />
          </NavLink>
          <FiSearch
            className="h-6 w-6 cursor-pointer hover:text-bg-primary duration-300"
            onClick={() => setSearchOpen(true)}
          />


          <NavLink to={"/wishlist"}>
            <AiOutlineHeart className="h-6 w-6 hover:text-bg-primary duration-300" />
          </NavLink>
          


          <div onClick={toggleModal}>
            <AiOutlineShoppingCart className="h-6 w-6 hover:text-bg-primary duration-300" />
          </div>
          {/* Modal Overlay (Qoplama) */}
          {isModalOpen && (
            <div
              className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out"
              onClick={toggleModal} // Overlayga bosganda modalni yopish
            >
              {/* Modal */}
              <div
                className={`absolute top-0 right-0 w-[30%] h-auto bg-white border border-gray-300 shadow-lg p-4 rounded-md z-50 transition-all duration-500 ease-in-out transform ${
                  isModalOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                }`}
                onClick={(e) => e.stopPropagation()} // Modal ichiga bosganda yopilmasligi uchun
              >
                <div className="p-4 flex justify-between items-center border-b">
                  <h2 className="text-lg font-semibold">Shopping Cart</h2>
                  <button onClick={toggleModal}>
                    <AiOutlineClose className="h-6 w-6 hover:text-red-600 transition" />
                  </button>
                </div>
              
                {/* Card product */}
                <div className="p-4 space-y-4">
                  <div className="flex items-center border-b pb-2">
                    <img
                      className="w-16 h-16 object-cover rounded-md"
                      src="https://via.placeholder.com/80"
                      alt="Product"
                    />
                    <div className="ml-4 flex-1">
                      <p className="font-medium">No Name</p>
                      <p className="text-gray-500 text-sm">
                        1 x <span className="text-yellow-600">Rs. 100,000</span>
                      </p>
                    </div>
                    <button
                      onClick={removeFromCart} // O'chirish uchun
                      className="text-gray-500 hover:text-red-600"
                    >
                      <AiOutlineDelete className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              
                {/* Subtotal va tugmalar */}
                <div className="p-4 border-t">
                  <div className="flex justify-between font-semibold">
                    <span>Subtotal</span>
                    <span className="text-yellow-600">Rs. 200,000</span>
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <NavLink to={"/cart"} onClick={handleComparisonClick} className="flex-1 border py-2 rounded-md hover:bg-gray-100 px-2 border-green-950">Cart</NavLink>
                    <NavLink to={"/checkout"} onClick={handleComparisonClick} className="flex-1 border py-2 rounded-md hover:bg-gray-100 px-2 border-green-950">Checkout</NavLink>
                    <NavLink to={"/product"} onClick={handleComparisonClick} 
                      className="flex-1 border py-2 rounded-md hover:bg-gray-100 px-2 border-green-950">
                      Comparison
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          )}


        </div>
      </div>
      <HeaderSearch setSearchOpen={setSearchOpen} searchOpen={searchOpen} />
    </div>
  );
};

export default Header;
