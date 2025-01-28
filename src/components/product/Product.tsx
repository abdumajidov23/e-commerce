import img_2 from "../../assets/images/Meubel House_Logos-05 (2).png"
import img_1 from "../../assets/images/fon.png"
import { NavLink } from "react-router-dom"
import CustomerService from "../customer-service/CustomerService"



const Product = () => {
  return (
     <>
        {/* Department - 1 */}
        <div className="relative bg-cover bg-center h-[330px] flex items-center justify-center" style={{ backgroundImage: `url(${img_1})`}}>
            <div className="flex flex-wrap flex-col justify-center items-center gap-2">
                <img className="w-[80px] h-[50px]" src={img_2} alt="" />
                <h1 className="text-6xl text-black">Product Comparison</h1>
                <p className="mt-2 text-gray-600 text-xl">
                  <NavLink to={"/"}>Home {'>'} <span className="text-black">Comparison</span> </NavLink>
                </p>
            </div>
        </div>
            
        {/* Department - 2 */}
        <div className="container flex flex-col md:flex-row items-center justify-between py-14">
            <div className="flex flex-col md:flex-row items-center justify-between w-[223px]">
                <div className="text-left">
                  <h2 className="text-3xl font-semibold">Go to Product page for more Products</h2>
                  <NavLink to={"/"} className="underline mt-2 inline-block text-xl text-slate-500">
                    View More
                  </NavLink>
                </div>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {products.map((product) => (
                <ProductCard key={product.id} value={product} />
                ))}
            </div> */}

            <div className="mt-4">
                <h3 className="text-2xl font-bold">Add A Product</h3>
                <select className="mt-2 p-2 border text-lg rounded-md bg-yellow-500 text-white">
                  <option>Choose a Product</option>
                  <option>Asgaard Sofa</option>
                  <option>Outdoor Sofa Set</option>
                </select>
            </div>
        </div>


        {/* Department - 3 */}
        <div className="container py-12">
            <div className="flex flex-col gap-6">
                {/* 1 */}
                <div className=" border-2 bg-white p-6 rounded-lg shadow-md">
                  <div className="grid grid-cols-3 gap-4 border-b pb-4">
                    <div className="font-semibold text-2xl">General</div>
                  </div>
                  <div className="flex flex-wrap justify-between pt-4">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-lg">Sales Package</h2>
                        <h2 className="text-lg">Model Number</h2>
                        <h2 className="text-lg">Secondary Material</h2>
                        <h2 className="text-lg">Configuration</h2>
                        <h2 className="text-lg">Upholstery Material</h2>
                        <h2 className="text-lg">Upholstery Color</h2>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-lg">Filling</h2>
                        <h2 className="text-lg">Finish</h2>
                        <h2 className="text-lg">Headrest</h2>
                        <h2 className="text-lg">Seat Capacity</h2>
                        <h2 className="text-lg">Origin</h2>
                        <h2 className="text-lg">Dimensions</h2>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-lg">Manufacturing Warranty</h2>
                        <h2 className="text-lg">Service</h2>
                        <h2 className="text-lg">Covered</h2>
                        <h2 className="text-lg">Not Covered</h2>
                        <h2 className="text-lg">Domestic Warranty</h2>
                        <h2 className="text-lg">Weight</h2>
                        
                    </div>
                  </div>
                </div>

                {/* 2 */}
                <div className=" border-2 bg-white p-6 rounded-lg shadow-md">
                  <div className="grid grid-cols-3 gap-4 border-b pb-4">
                    <div className="font-semibold text-2xl">Product</div>
                  </div>
                  <div className="flex flex-wrap justify-between pt-4">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-lg">1 Sectional Sofa</h2>
                        <h2 className="text-lg">TFCBOURGESSH8</h2>
                        <h2 className="text-lg">Solid Wood</h2>
                        <h2 className="text-lg">L-shaped</h2>
                        <h2 className="text-lg">Fabric + Cotton</h2>
                        <h2 className="text-lg">Bright Grey & Lion</h2>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-lg">Matt</h2>
                        <h2 className="text-lg">Bright Grey & Lion</h2>
                        <h2 className="text-lg">Yes</h2>
                        <h2 className="text-lg">350 kg</h2>
                        <h2 className="text-lg">India</h2>
                        <h2 className="text-lg">285.32 cm x 76</h2>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-lg">1 Year Manufacturing Warranty</h2>
                        <h2 className="text-lg">Email support</h2>
                        <h2 className="text-lg">Only manufacturing defects</h2>
                        <h2 className="text-lg">Damage due to improper storage, misus</h2>
                        <h2 className="text-lg">3 Months</h2>
                        <h2 className="text-lg">3 Months</h2>
                    </div>
                  </div>
                </div>


                {/* 3 */}
                <div className=" border-2 bg-white p-6 rounded-lg shadow-md">
                  <div className="grid grid-cols-3 gap-4 border-b pb-4">
                    <div className="font-semibold text-2xl">Dimensions</div>
                  </div>
                  <div className="flex flex-wrap justify-between pt-4">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-lg">285.32 cm x 76 cm x 187.76 cm</h2>
                        <h2 className="text-lg">85 kg</h2>
                        <h2 className="text-lg">45.25 cm x 5.46 cm</h2>
                        <h2 className="text-lg">12 Year Manufacturing Warranty</h2>
                        <h2 className="text-lg">Email support</h2>
                        <h2 className="text-lg">Only manufacturing defects</h2>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-lg">187.76 cm</h2>
                        <h2 className="text-lg">13.5 kg</h2>
                        <h2 className="text-lg">4.8 cm x 3.6 cm</h2>
                        <h2 className="text-lg">12 Year Manufacturing Warranty</h2>
                        <h2 className="text-lg">Email support</h2>
                        <h2 className="text-lg">Only manufacturing defects</h2>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-lg">187.76 cm</h2>
                        <h2 className="text-lg">13.5 kg</h2>
                        <h2 className="text-lg">4.8 cm x 3.6 cm</h2>
                        <h2 className="text-lg">12 Year Manufacturing Warranty</h2>
                        <h2 className="text-lg">Email support</h2>
                        <h2 className="text-lg">Only manufacturing defects</h2>
                    </div>
                  </div>
                  
                </div>

                {/* 4 */}
                <div className=" border-2 bg-white p-6 rounded-lg shadow-md">
                  <div className="grid grid-cols-3 gap-4 border-b pb-4">
                    <div className="font-semibold text-2xl">Warranty</div>
                  </div>
                  <div className="flex flex-wrap justify-between pt-4">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-lg">285.32 cm x 76 cm x 187.76 cm</h2>
                        <h2 className="text-lg">85 kg</h2>
                        <h2 className="text-lg">45.25 cm x 5.46 cm</h2>
                        <h2 className="text-lg">12 Year Manufacturing Warranty</h2>
                        <h2 className="text-lg">Email support</h2>
                        <h2 className="text-lg">Only manufacturing defects</h2>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-lg">187.76 cm</h2>
                        <h2 className="text-lg">13.5 kg</h2>
                        <h2 className="text-lg">4.8 cm x 3.6 cm</h2>
                        <h2 className="text-lg">12 Year Manufacturing Warranty</h2>
                        <h2 className="text-lg">Email support</h2>
                        <h2 className="text-lg">Only manufacturing defects</h2>
                        <button className="bg-orange-500 py-2 rounded-md text-white">Add to Cart</button>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-lg">187.76 cm</h2>
                        <h2 className="text-lg">13.5 kg</h2>
                        <h2 className="text-lg">4.8 cm x 3.6 cm</h2>
                        <h2 className="text-lg">12 Year Manufacturing Warranty</h2>
                        <h2 className="text-lg">Email support</h2>
                        <h2 className="text-lg">Only manufacturing defects</h2>
                        <button className="bg-orange-500 py-2 rounded-md text-white">Add to Cart</button>
                    </div>

                    </div>
                  
                  </div>
               </div>
          </div>
  
        <CustomerService />
       </>
    )
  }
  
  export default Product
  