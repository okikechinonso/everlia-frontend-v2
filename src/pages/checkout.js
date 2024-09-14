import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { CardElement } from "@stripe/react-stripe-js";
import Link from "next/link";
import { useState, useContext } from "react";
import LoginModal from "@component/modal/LoginModal";
import { FaCopy } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";

import {
  IoReturnUpBackOutline,
  IoArrowForward,
  IoBagHandle,
  IoWalletSharp,
} from "react-icons/io5";
import { ImCreditCard } from "react-icons/im";

//internal import
import Layout from "@layout/Layout";
import Label from "@component/form/Label";
import Error from "@component/form/Error";
import CartItem from "@component/cart/CartItem";
import InputArea from "@component/form/InputArea";
import InputShipping from "@component/form/InputShipping";
import InputPayment from "@component/form/InputPayment";
import useCheckoutSubmit from "@hooks/useCheckoutSubmit";
import useTranslation from "next-translate/useTranslation";
import { UserContext } from "@context/UserContext";
import { copyToClipboard } from "@utils/utils";

const Checkout = () => {
  const [modalOpen, setModalOpen] = useState(true);

  const {
    state: { userInfo },
  } = useContext(UserContext);

  useEffect(() => {
    if (userInfo) {
      setModalOpen(false);
    }
  }, [modalOpen]);

  const {
    handleSubmit,
    submitHandler,
    handleShippingCost,
    register,
    errors,
    showCard,
    setShowCard,
    error,
    stripe,
    couponInfo,
    couponRef,
    handleCouponCode,
    discountAmount,
    shippingCost,
    total,
    isEmpty,
    items,
    cartTotal,
    currency,
    isCheckoutSubmit,
  } = useCheckoutSubmit();

  const { t } = useTranslation();

  return (
    <>
      <Layout title="Checkout" description="this is checkout page">
        {!modalOpen && (
          <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        )}
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          <div className="py-10 lg:py-12 px-0 2xl:max-w-screen-2xl w-full xl:max-w-screen-xl flex flex-col md:flex-row lg:flex-row">
            <div className="md:w-full lg:w-3/5 flex h-full flex-col order-2 sm:order-1 lg:order-1">
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form onSubmit={handleSubmit(submitHandler)}>
                  <div className="form-group">
                    <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                      01. {t("common:personalDetails")}
                    </h2>
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          label="Full Name"
                          name="name"
                          type="text"
                          placeholder="John Doe"
                        />
                        <Error errorName={errors.firstName} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          label={t("common:emailAddress")}
                          name="email"
                          type="email"
                          placeholder="youremail@gmail.com"
                        />
                        <Error errorName={errors.email} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          label={t("common:phoneNumber")}
                          name="contact"
                          type="tel"
                          placeholder="+062-6532956"
                        />

                        <Error errorName={errors.contact} />
                      </div>
                    </div>
                  </div>

                  <div className="form-group mt-12">
                    <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                      02. {t("common:shippingDetails")}
                    </h2>

                    <div className="grid grid-cols-6 gap-6 mb-8">
                      <div className="col-span-6">
                        <InputArea
                          register={register}
                          label={t("common:streetAddress")}
                          name="address"
                          type="text"
                          placeholder="123 Boulevard Rd, Beverley Hills"
                        />
                        <Error errorName={errors.address} />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <InputArea
                          register={register}
                          label={t("common:city")}
                          name="city"
                          type="text"
                          placeholder="Los Angeles"
                        />
                        <Error errorName={errors.city} />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <InputArea
                          register={register}
                          label="Country"
                          name="country"
                          type="text"
                          placeholder="United States"
                        />
                        <Error errorName={errors.country} />
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <AccountDetail />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <InputArea
                          register={register}
                          label="Payment Receipt"
                          name="file"
                          type="file"
                          placeholder="United States"
                        />
                        <Error errorName={errors.country} />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-6 gap-4 lg:gap-6 mt-10">
                    <div className="col-span-6 sm:col-span-3">
                      <Link href="/">
                        <a className="bg-indigo-50 border border-indigo-100 rounded py-3 text-center text-sm font-medium text-gray-700 hover:text-gray-800 hover:border-gray-300 transition-all flex justify-center font-serif w-full">
                          <span className="text-xl mr-2">
                            <IoReturnUpBackOutline />
                          </span>
                          {t("common:continueShoppingBtn")}
                        </a>
                      </Link>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <button
                        type="submit"
                        disabled={isEmpty || !stripe || isCheckoutSubmit}
                        className="bg-emerald-500 hover:bg-emerald-600 border border-emerald-500 transition-all rounded py-3 text-center text-sm font-serif font-medium text-white flex justify-center w-full"
                      >
                        {isCheckoutSubmit ? (
                          <span className="flex justify-center text-center">
                            {" "}
                            <img
                              src="/loader/spinner.gif"
                              alt="Loading"
                              width={20}
                              height={10}
                            />{" "}
                            <span className="ml-2">
                              {t("common:processing")}
                            </span>
                          </span>
                        ) : (
                          <span className="flex justify-center text-center">
                            {t("common:confirmOrderBtn")}{" "}
                            <span className="text-xl ml-2">
                              {" "}
                              <IoArrowForward />
                            </span>
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="md:w-full lg:w-2/5 lg:ml-10 xl:ml-14 md:ml-6 flex flex-col h-full md:sticky lg:sticky top-28 md:order-2 lg:order-2">
              <div className="border p-5 lg:px-8 lg:py-8 rounded-lg bg-white order-1 sm:order-2">
                <h2 className="font-semibold font-serif text-lg pb-4">
                  {t("common:orderSummary")}
                </h2>

                <div className="overflow-y-scroll flex-grow scrollbar-hide w-full max-h-64 bg-gray-50 block">
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} currency={currency} />
                  ))}

                  {isEmpty && (
                    <div className="text-center py-10">
                      <span className="flex justify-center my-auto text-gray-500 font-semibold text-4xl">
                        <IoBagHandle />
                      </span>
                      <h2 className="font-medium font-serif text-sm pt-2 text-gray-600">
                        No Item Added Yet!
                      </h2>
                    </div>
                  )}
                </div>
                <div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
                  {t("common:subtotal")}
                  <span className="ml-auto flex-shrink-0 text-gray-800 font-bold">
                    {currency}
                    {cartTotal?.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
                  {t("common:shippingCost")}
                  <span className="ml-auto flex-shrink-0 text-gray-800 font-bold">
                    {currency}
                    {shippingCost.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
                  {t("common:discount")}
                  <span className="ml-auto flex-shrink-0 font-bold text-orange-400">
                    {currency}
                    {discountAmount.toFixed(2)}
                  </span>
                </div>
                <div className="border-t mt-4">
                  <div className="flex items-center font-bold font-serif justify-between pt-5 text-sm uppercase">
                    {t("common:totalCost")}
                    <span className="font-serif font-extrabold text-lg">
                      {currency}
                      {parseFloat(total).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

const PersonalDetails = () => {
  return;
};

const ShippingDeail = () => {
  return;
};

const AccountDetail = () => {
  const [text, setText] = useState("5676793985");
  const [copySuccess, setCopySuccess] = useState("");

  return (
    <>
      <div className="md:w-full lg:w-2/5 lg:ml-10 xl:ml-14 md:ml-6 flex flex-col h-full md:sticky lg:sticky top-28 md:order-2 lg:order-2">
        <div className="border p-5 lg:px-8 lg:py-8 rounded-lg bg-white order-1 sm:order-2">
          <h2 className="font-semibold font-serif text-lg pb-4">
            Account Details
          </h2>

          <div className="flex items-center py-2 text-sm w-full  text-gray-500 last:border-b-0 last:text-base last:pb-0">
            Account Name:
            <span className="ml-auto flex-shrink-0 text-gray-800 font-bold">
              Chiroma Obinna
            </span>
          </div>
          <div className="flex items-center py-2 text-sm w-full  text-gray-500 last:border-b-0 last:text-base last:pb-0">
            Bank:
            <span className="ml-auto flex-shrink-0">Access Bank</span>
          </div>

          <div className="flex items-center py-2 text-sm w-full  text-gray-500 last:border-b-0 last:text-base last:pb-0">
            Account Number
            <span className="ml-auto flex-shrink-0 text-gray-800 font-bold">
              {text}
            </span>
            <span
              onClick={() => {
                copyToClipboard({text, setCopySuccess});
              }}
              className="ml-auto flex-shrink-0 text-gray-800"
            >
             {copySuccess != "" ? "copied" : <MdOutlineContentCopy /> } 
            </span>
          </div>
          <div className="flex items-center py-2 text-sm w-full  text-gray-500 last:border-b-0 last:text-base last:pb-0">
            Description:
            <span className="ml-auto flex-shrink-0">everlia-Gen</span>
          </div>
        </div>
      </div>
    </>
  );
};

const Payment = () => {
  <div className="form-group mt-12">
    <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
      03. {t("common:paymentDetails")}
    </h2>
    {showCard && (
      <div className="mb-3">
        <CardElement /> <p className="text-red-400 text-sm mt-1">{error}</p>
      </div>
    )}
    <div className="grid grid-cols-6 gap-6">
      <div className="col-span-6 sm:col-span-3">
        <InputPayment
          setShowCard={setShowCard}
          register={register}
          name={t("common:cashOnDelivery")}
          value="Cash"
          Icon={IoWalletSharp}
        />
        <Error errorName={errors.paymentMethod} />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <InputPayment
          setShowCard={setShowCard}
          register={register}
          name={t("common:creditCard")}
          value="Card"
          Icon={ImCreditCard}
        />
        <Error errorName={errors.paymentMethod} />
      </div>
    </div>
  </div>;
};

export default dynamic(() => Promise.resolve(Checkout), { ssr: false });
