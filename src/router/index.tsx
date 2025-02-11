import Checkout from "@/components/checkout/Checkout";
import Contact from "@/components/contact/Contact";
import Product from "@/components/product/Product";
import { SuspenseContainer } from "@/config";
import Otp from "@/pages/auth/otp/Otp";
import Profile from "@/pages/auth/profile/Profile";
import Wishlist from "@/pages/wishlist/Wishlist";
import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import MainDetail from "../detail/MainDetail";
import Cart from "@/components/cart/Cart";
import About from "@/components/about/About";
const Home = lazy(() => import("@/pages/home/Home"));
const Shop = lazy(() => import("@/pages/shop/Shop"));
const Layout = lazy(() => import("@/pages/layout/Layout"));
const NotFound = lazy(() => import("@/pages/not-found/NotFound"));
const SignUp = lazy(() => import("@/pages/auth/sign-up/SignUp"));

const Routers = () => {
  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: (
            <SuspenseContainer>
              <Layout />
            </SuspenseContainer>
          ),
          children: [
            {
              path: "/",
              element: (
                <SuspenseContainer>
                  <Home />
                </SuspenseContainer>
              ),
            },
            {
              path: "/shop",
              element: (
                <SuspenseContainer>
                  <Shop />
                </SuspenseContainer>
              ),
            },
            {
              path: "/product",
              element: (
                <SuspenseContainer>
                  <Product />
                </SuspenseContainer>
              ),
            },
            {
              path: "/wishlist",
              element: (
                <SuspenseContainer>
                  <Wishlist />
                </SuspenseContainer>
              ),
            },
            {
              path: "/contact",
              element: (
                <SuspenseContainer>
                  <Contact />
                </SuspenseContainer>
              ),
            },
            {
              path: "/checkout",
              element: (
                <SuspenseContainer>
                  <Checkout />
                </SuspenseContainer>
              ),
            },
            {
              path: "/cart",
              element: (
                <SuspenseContainer>
                  <Cart />
                </SuspenseContainer>
              ),
            },
            {
              path: "/about",
              element: (
                <SuspenseContainer>
                  <About />
                </SuspenseContainer>
              ),
            },
            {
              path: "/product/:id",
              element: (
                <SuspenseContainer>
                  <MainDetail />
                </SuspenseContainer>
              ),
            },
            {
              path: "/auth/sign-up",
              element: (
                <SuspenseContainer>
                  <SignUp />
                </SuspenseContainer>
              ),
            },
            {
              path: "/auth/otp",
              element: (
                <SuspenseContainer>
                  <Otp />
                </SuspenseContainer>
              ),
            },
            {
              path: "/auth/profile",
              element: (
                <SuspenseContainer>
                  <Profile />
                </SuspenseContainer>
              ),
            },
            {
              path: "*",
              element: (
                <SuspenseContainer>
                  <NotFound />
                </SuspenseContainer>
              ),
            },
          ],
        },
      ])}
    </>
  );
};

export default Routers;
