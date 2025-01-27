import TopBanner from '../../components/top-banner/TopBanner';
import ProductCard from '../../components/product-card/ProductCard';
import CustomerService from '../../components/customer-service/CustomerService';

function Shop() {
  return (
    <div>
      {/* SECTION 1 */}
      <TopBanner currentPage="Shop" />
      <div className="bg-[#F9F1E7] mb-5">
        <div className="container mx-auto flex justify-between py-3">
          <div className="flex items-center">
            <img className="mr-3" src="../images/filter.svg" alt="filter" />
            <img className="mr-3" src="../images/show_grid.svg" alt="show grid" />
            <img className="mr-5" src="../images/show_list.svg" alt="show list" />
            <img className="mr-5" src="../images/line.svg" alt="line" />
            <p className="text-sm text-gray-500">Showing 1-16 of 32 results</p>
          </div>
          <div className="flex items-center">
            <p className="mr-3">Show</p>
            <p className="bg-white text-gray-400 mr-3 py-2 px-3 rounded">16</p>
            <p className="mr-3">Sort By</p>
            <p className="bg-white text-gray-400 py-2 px-3 rounded">Default</p>
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="container mx-auto">
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index} className="mb-5 flex justify-between">
            <ProductCard
              name="Slytherine"
              description="Stylish cafe chair"
              discountPrice="$91.00"
              price="$130.00"
              discount="-30%"
              image="../images/slytherine.png"
            />
            <ProductCard
              name="Leviosa"
              description="Modern dining chair"
              price="$149.00"
              image="../images/leviosa.png"
            />
            <ProductCard
              name="Lolito"
              description="Luxurious three-seat sofa"
              discountPrice="$750"
              price="$1500.00"
              discount="-50%"
              image="../images/lolito.png"
            />
            <ProductCard
              name="Respira"
              description="Spacious corner sofa"
              price="$1199.00"
              new="New"
              image="../images/respira.png"
            />
          </div>
        ))}
        <div className="mb-5 flex justify-center">
          <p className="bg-[#B88E2F] text-white py-2 px-4 rounded-md">1</p>
          <p className="mx-3 py-2 px-4 cursor-pointer bg-[#F9F1E7] rounded-md">2</p>
          <p className="py-2 px-4 cursor-pointer bg-[#F9F1E7] rounded-md">Next</p>
        </div>
      </div>

      {/* SECTION 3 */}
      <CustomerService />
    </div>
  );
}

export default Shop;
