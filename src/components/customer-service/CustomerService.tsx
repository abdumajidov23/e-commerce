import '../customer-service/CustomerService.scss';

function CustomerService() {
  return (
    <div className="customer-service">
      <div className="container mx-auto">
        <div className="service-item">
          <img src="../images/trophy.svg" alt="Trophy" />
          <div>
            <button className="font-semibold text-left">High Quality</button>
            <p className="text-gray-500">Crafted from top materials</p>
          </div>
        </div>
        <div className="service-item">
          <img src="../images/guarantee.svg" alt="Guarantee" />
          <div>
            <button className="font-semibold text-left">Warranty Protection</button>
            <p className="text-gray-500">Over 2 years</p>
          </div>
        </div>
        <div className="service-item">
          <img src="../images/shipping.svg" alt="Shipping" />
          <div>
            <button className="font-semibold text-left">Free Shipping</button>
            <p className="text-gray-500">Order over $50</p>
          </div>
        </div>
        <div className="service-item">
          <img src="../images/customer_support.svg" alt="Customer Support" />
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
