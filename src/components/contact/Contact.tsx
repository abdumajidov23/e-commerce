import { NavLink } from "react-router-dom"
import img_2 from "../../assets/images/Meubel House_Logos-05 (2).png"
import img_1 from "../../assets/images/fon.png"
import CustomerService from "../customer-service/CustomerService"

const Contact = () => {
  return (
    <div>
        <div className="relative bg-cover bg-center h-[330px] flex items-center justify-center" style={{ backgroundImage: `url(${img_1})`}}>
            <div className="flex flex-wrap flex-col justify-center items-center gap-2">
                <img className="w-[60px] h-[40px]" src={img_2} alt="" />
                <h1 className="text-6xl text-black tracking-widest">Contact</h1>
                <p className="mt-2 text-gray-600 text-xl">
                  <NavLink to={"/"}>Home {'>'} <span className="text-black">Contact</span> </NavLink>
                </p>
            </div>
        </div>

        <div className="container mx-auto p-8">
            <div className="w-[60%] m-auto py-12">
                <h2 className="text-5xl font-bold text-center">Get In Touch With Us</h2>
                <p className="text-gray-500 text-center mt-2">
                  For more information about our products & services, please feel free to drop us an email. 
                  Our staff is always there to help you out. Do not hesitate!
                </p>
            </div>

            <div className="flex justify-around md:flex-row py-16">
              {/* Contact Info */}
              <div className="w-[30%] flex flex-col gap-12 space-y-6">
                <div className="w-[40%]">
                  <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
                    📍 Address
                  </h3>
                  <p className="text-gray-600 text-lg">236 5th SE Avenue, New York NY10000, United States</p>
                </div>

                <div>
                  <h3 className="font-bold text-xl flex items-center gap-2 mb-2">
                    📞 Phone
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Mobile: + (84) 546-6789 <br />
                    Hotline: + (84) 456-6789
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl flex items-center gap-2 mb-2">
                    ⏰ Working Time
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Monday-Friday: 9:00 - 22:00 <br />
                    Saturday-Sunday: 9:00 - 21:00
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="w-[40%] p-6 ">
                <form className="space-y-4 flex flex-col gap-4">
                  <div>
                    <label className="block font-medium text-xl">Your name</label>
                    <input 
                      type="text" 
                      placeholder="Last Name"
                      className="w-full px-2 py-4 border rounded-md"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-xl">Email address</label>
                    <input 
                      type="email" 
                      placeholder="Your email"
                      className="w-full px-2 py-4 border rounded-md"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-xl">Subject</label>
                    <input 
                      type="text" 
                      placeholder="This is an optional"
                      className="w-full px-2 py-4 border rounded-md"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-xl">Message</label>
                    <textarea 
                      placeholder="Hi! I’d like to ask about..."
                      className="w-full px-2 py-4 border rounded-md h-24"
                    ></textarea>
                  </div>

                  <button className="w-[50%] bg-yellow-600 text-white py-3 rounded-md hover:bg-yellow-700">
                    Submit
                  </button>
                </form>
              </div>
            </div>
        </div>

        <CustomerService />
    </div>
  )
}

export default Contact