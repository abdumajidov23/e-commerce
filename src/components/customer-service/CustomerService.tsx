import '../customer-service/CustomerService.scss';

function CustomerService() {
  return (
    <div className="customer-service bg-[#F9F1E7] h-[250px]">
      <div className="container mx-auto flex justify-between items-center px-4 h-full">
        <div className="service-item flex items-center justify-center">
          <img className="mr-2" src="../images/trophy.svg" alt="Trophy" />
          <div>
            <button className="font-semibold text-left">High Quality</button>
            <p className="text-gray-500">Crafted from top materials</p>
          </div>
        </div>
        <div className="service-item flex items-center justify-center">
          <img className="mr-2" src="../images/guarantee.svg" alt="Guarantee" />
          <div>
            <button className="font-semibold text-left">Warranty Protection</button>
            <p className="text-gray-500">Over 2 years</p>
          </div>
        </div>
        <div className="service-item flex items-center justify-center">
          <img className="mr-2" src="../images/shipping.svg" alt="Shipping" />
          <div>
            <button className="font-semibold text-left">Free Shipping</button>
            <p className="text-gray-500">Order over 50$</p>
          </div>
        </div>
        <div className="service-item flex items-center justify-center">
          <img className="mr-2" src="../images/customer_support.svg" alt="Customer Support" />
          <div>
            <button className="font-semibold text-left">24/7 Support</button>
            <p className="text-gray-500">Dedicated Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerService;
