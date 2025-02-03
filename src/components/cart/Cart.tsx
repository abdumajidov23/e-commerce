import { NavLink } from "react-router-dom"
import img_2 from "../../assets/images/Meubel House_Logos-05 (2).png"
import img_1 from "../../assets/images/fon.png"
import CustomerService from "../customer-service/CustomerService"

const Cart = () => {
  return (
    <div>
        <div className="relative bg-cover bg-center h-[330px] flex items-center justify-center" style={{ backgroundImage: `url(${img_1})`}}>
            <div className="flex flex-wrap flex-col justify-center items-center gap-2">
                <img className="w-[60px] h-[40px]" src={img_2} alt="" />
                <h1 className="text-6xl text-black tracking-widest">Cart</h1>
                <p className="mt-2 text-gray-600 text-xl">
                  <NavLink to={"/"}>Home {'>'} <span className="text-black">Cart</span> </NavLink>
                </p>
            </div>
        </div>

        <div className="container mx-auto py-16">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Cart Items */}
              <div className="w-full md:w-2/3">
                <div className="w-full">
                  <div className=" text-xl rounded-lg bg-[#F9F1E7]">
                    <div className="bg-beige text-left flex items-center justify-around">
                      <p className="p-4">Product</p>
                      <p className="p-4">Price</p>
                      <p className="p-4">Quantity</p>
                      <p className="p-4">Subtotal</p>
                    </div>
                  </div>

                  <div className="border-2 mt-8 rounded-lg">
                    <div className="flex items-center justify-between">
                      <td className="p-4 flex items-center gap-4">
                        <img
                          src="https://via.placeholder.com/60" 
                          alt="Asgaard sofa"
                          className="w-16 h-16 rounded-md"
                        />
                        <span className="text-slate-500">Asgaard sofa</span>
                      </td>
                      <td className="p-4 text-slate-500">Rs. 250,000.00</td>
                      <td className="p-4">
                        <input
                          type="number"
                          defaultValue="1"
                          className="w-12 border text-center"
                        />
                      </td>
                      <td className="p-4">Rs. 250,000.00</td>
                      <td className="p-4 text-red-500 cursor-pointer">
                        🗑
                      </td>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cart Totals */}
              <div className="w-full flex flex-col justify-center gap-6 md:w-1/3 bg-beige px-16 py-8 rounded-md text-center bg-[#F9F1E7]">
                <h2 className="text-3xl font-bold mb-4">Cart Totals</h2>
                <div className="flex items-end justify-between border-b py-2">
                  <span className="text-2xl">Subtotal</span>
                  <span className="text-gray-500">Rs. 250,000.00</span>
                </div>
                <div className="flex items-end justify-between py-2">
                  <span className="font-bold text-2xl">Total</span>
                  <span className="text-lg text-orange-500 font-bold">Rs. 250,000.00</span>
                </div>
                <NavLink to={"/checkout"} className="w-full mt-4 py-3 border text-lg border-black rounded-lg hover:bg-black hover:text-white">
                  Check Out
                </NavLink>
              </div>
            </div>
        </div>

        <CustomerService />
    </div>
  )
}

export default Cart
