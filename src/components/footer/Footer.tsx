export default function Footer() {
  return (
    <footer className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Funiro.</h2>
            <address className="not-italic text-gray-600">
              <p className="text-[#9F9F9F]">
                400 University Drive Suite 200 Coral
              </p>
              <p className="text-[#9F9F9F]">Gables,</p>
              <p className="text-[#9F9F9F]">FL 33134 USA</p>
            </address>
          </div>

          {/* Links */}
          <div className="space-y-8">
            <h3 className="text-gray-500">Links</h3>
            <nav className="flex flex-col space-y-3">
              <a href="/" className="text-gray-900 hover:underline">
                Home
              </a>
              <a href="/shop" className="text-gray-900 hover:underline">
                Shop
              </a>
              <a href="/about" className="text-gray-900 hover:underline">
                About
              </a>
              <a href="/contact" className="text-gray-900 hover:underline">
                Contact
              </a>
            </nav>
          </div>

          {/* Help */}
          <div className="space-y-8">
            <h3 className="text-gray-500">Help</h3>
            <nav className="flex flex-col space-y-3">
              <a
                href="/paynet-options"
                className="text-gray-900 hover:underline"
              >
                Payment Options
              </a>
              <a href="/returns" className="text-gray-900 hover:underline">
                Returns
              </a>
              <a
                href="/privacy-policies"
                className="text-gray-900 hover:underline"
              >
                Privacy Policies
              </a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <h3 className="text-gray-500">Newsletter</h3>
            <form className="flex flex-wrap gap-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 border-b border-gray-300 pb-1 focus:border-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="whitespace-nowrap border-b border-gray-900 pb-1 text-sm font-semibold hover:border-gray-600"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-100 pt-8">
          <p className="text-gray-600 text-center md:text-left">
            2023 furino. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}













// import { NavLink } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="w-full py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {/* Company Info */}
//           <section className="space-y-4">
//             <h2 className="text-2xl font-semibold text-gray-800">Funiro.</h2>
//             <address className="not-italic text-gray-600">
//               <p className="text-[#9F9F9F]">400 University Drive Suite 200 Coral</p>
//               <p className="text-[#9F9F9F]">Gables,</p>
//               <p className="text-[#9F9F9F]">FL 33134 USA</p>
//             </address>
//           </section>

//           {/* Links */}
//           <section className="space-y-8">
//             <h3 className="text-gray-500">Links</h3>
//             <nav className="flex flex-col space-y-3">
//               <NavLink to="/" className="text-gray-900 hover:underline">
//                 Home
//               </NavLink>
//               <NavLink to="/shop" className="text-gray-900 hover:underline">
//                 Shop
//               </NavLink>
//               <NavLink to="/about" className="text-gray-900 hover:underline">
//                 About
//               </NavLink>
//               <NavLink to="/contact" className="text-gray-900 hover:underline">
//                 Contact
//               </NavLink>
//             </nav>
//           </section>

//           {/* Help */}
//           <section className="space-y-8">
//             <h3 className="text-gray-500">Help</h3>
//             <nav className="flex flex-col space-y-3">
//               <NavLink to="/paynet-options" className="text-gray-900 hover:underline">
//                 Payment Options
//               </NavLink>
//               <NavLink to="/returns" className="text-gray-900 hover:underline">
//                 Returns
//               </NavLink>
//               <NavLink to="/privacy-policies" className="text-gray-900 hover:underline">
//                 Privacy Policies
//               </NavLink>
//             </nav>
//           </section>

//           {/* Newsletter */}
//           <section className="space-y-8">
//             <h3 className="text-gray-500">Newsletter</h3>
//             <form className="flex flex-wrap gap-2">
//               <input
//                 type="email"
//                 placeholder="Enter Your Email Address"
//                 className="flex-1 border-b border-gray-300 pb-1 focus:border-gray-900 focus:outline-none"
//                 aria-label="Enter your email"
//               />
//               <button
//                 type="submit"
//                 className="whitespace-nowrap border-b border-gray-900 pb-1 text-sm font-semibold hover:border-gray-600"
//                 aria-label="Subscribe to the newsletter"
//               >
//                 SUBSCRIBE
//               </button>
//             </form>
//           </section>
//         </div>

//         {/* Copyright */}
//         <div className="mt-12 border-t border-gray-100 pt-8">
//           <p className="text-gray-600 text-center md:text-left">
//             2023 Funiro. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }
