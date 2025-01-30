import { NavLink } from "react-router-dom"
import img_2 from "../../assets/images/Meubel House_Logos-05 (2).png"
import img_1 from "../../assets/images/fon.png"
import CustomerService from "../customer-service/CustomerService"

const Checkout = () => {
  return (
    <div>
        <div className="relative bg-cover bg-center h-[330px] flex items-center justify-center" style={{ backgroundImage: `url(${img_1})`}}>
            <div className="flex flex-wrap flex-col justify-center items-center gap-2">
                <img className="w-[60px] h-[40px]" src={img_2} alt="" />
                <h1 className="text-6xl text-black tracking-widest">Checkout</h1>
                <p className="mt-2 text-gray-600 text-xl">
                  <NavLink to={"/"}>Home {'>'} <span className="text-black">Checkout</span> </NavLink>
                </p>
            </div>
        </div>

        <div className="container mx-auto py-14">
            <div className="flex justify-between gap-12">
              {/* Billing Details */}
              <div className="w-[
            45%]">
                <h2 className="text-4xl font-bold mb-6">Billing details</h2>
                <form className="space-y-4 text-lg flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="First Name" className="w-full px-2 py-4 border rounded-md" />
                      <input type="text" placeholder="Last Name" className="w-full px-2 py-4 border rounded-md" />
                  </div>

                  <input type="text" placeholder="Company Name (Optional)" className="w-full px-2 py-4 border rounded-md" />

                  <select className="w-full px-2 py-4 border rounded-md">
                    <option>Toshkent</option>
                    <option>Sirdaryo</option>
                    <option>Jizzax</option>
                    <option>Samarqand</option>
                    <option>Qashqadaryo</option>
                    <option>Surxondaryo</option>
                  </select>

                  <input type="text" placeholder="Street address" className="w-full px-2 py-4 border rounded-md" />

                  <input type="text" placeholder="Town / City" className="w-full px-2 py-4 border rounded-md" />

                  <select className="w-full px-2 py-4 border rounded-md">
                    <option>Western Province</option>
                  </select>

                  <input type="text" placeholder="ZIP code" className="w-full px-2 py-4 border rounded-md" />

                  <input type="text" placeholder="Phone" className="w-full px-2 py-4 border rounded-md" />

                  <input type="email" placeholder="Email address" className="w-full px-2 py-4 border rounded-md" />

                  <textarea placeholder="Additional information" className="w-full px-2 py-3 border rounded-md h-24"></textarea>
                </form>
              </div>

              {/* Order Summary */}
              <div className="bg-white w-[50%] flex flex-col gap-4 py-6 px-12 overflow-auto">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold mb-6">Product</h2>
                    <p className="text-2xl mb-6">Subtotal</p>
                </div>

                <div className="flex justify-between text-lg border-b pb-2">
                  <span>Asgaard sofa × 1</span>
                  <span>Rs. 250,000.00</span>
                </div>

                <div className="flex text-lg justify-between border-b py-2">
                  <span>Subtotal</span>
                  <span>Rs. 250,000.00</span>
                </div>

                <div className="flex text-lg justify-between font-bold text-yellow-600 py-2">
                  <span>Total</span>
                  <span>Rs. 250,000.00</span>
                </div>

                <div className="mt-6 text-lg">
                  <label className="flex items-center">
                    <input type="radio" name="payment" checked className="mr-2" />
                    Direct Bank Transfer
                  </label>
                  <p className="text-gray-500 text-[16px] ml-6">
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                  </p>
                </div>

                <div className="mt-4 flex flex-col gap-2 text-lg">
                  <label className="flex items-center">
                    <input type="radio" name="payment" checked className="mr-2" />
                    Direct Bank Transfer
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="payment" className="mr-2" />
                    Cash On Delivery
                  </label>
                </div>

                <p className="text-gray-500 text-[17p6] mt-4">
                  Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="text-black font-bold">privacy policy</span>.
                </p>

                <div className="w-full text-center">
                    <button className="w-[50%] mt-6 border-2 text-lg text-black py-3 rounded-md hover:text-white hover:bg-gray-800">
                      Place order
                    </button>
                </div>
              </div>
            </div>
        </div>

    <CustomerService />
    </div>
  )
}

export default Checkout