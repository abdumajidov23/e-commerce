import CustomerService from "../customer-service/CustomerService"

const About = () => {
  return (
    <>
        <section className="bg-gradient-to-r from-blue-50 to-gray-100 pt-16 pb-24">
            <div className="max-w-7xl mx-auto text-center px-6">
              <div className="w-[90%] m-auto pb-20">
                <h2 className="text-5xl font-semibold text-gray-800 mb-4 animate__animated animate__fadeIn animate__delay-1s">
                  About Us
                </h2>
                <p className="text-xl text-gray-600 mb-8 animate__animated animate__fadeIn animate__delay-2s">
                  Our goal is to provide high-quality and modern furniture at affordable prices. Over the years, we have focused on offering the best service to our customers and creating comfortable and contemporary interior solutions for them.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-8 animate__animated animate__fadeIn animate__delay-3s">
                <div className="w-[30%] bg-white p-6 text-center rounded-xl transform hover:scale-105 transition duration-500 ease-in-out">
                  <h3 className="text-3xl font-semibold text-gray-800 mb-2">High Quality</h3>
                  <p className="text-gray-600 text-xl">
                    Each of our products is made from high-quality materials, and our main goal is to create durable and comfortable furniture.
                  </p>
                </div>
                <div className="w-[30%] bg-white p-6 text-center rounded-xl transform hover:scale-105 transition duration-500 ease-in-out">
                  <h3 className="text-3xl font-semibold text-gray-800 mb-2">Innovative Design</h3>
                  <p className="text-gray-600 text-xl">
                    Our furniture designs are always modern and innovative, offering solutions that meet the needs of our customers.
                  </p>
                </div>
                <div className="w-[30%] h-full bg-white p-6 text-center rounded-xl transform hover:scale-105 transition duration-500 ease-in-out">
                  <h3 className="text-3xl font-semibold text-gray-800 mb-2">Customer Service</h3>
                  <p className="text-gray-600 text-xl">
                    We always prioritize customer satisfaction and strive to fully meet their needs.offering solutions that meet the needs of our customers.
                  </p>
                </div>
              </div>
            </div>
        </section>

        <CustomerService />
    </>
  )
}

export default About