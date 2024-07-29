import React from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

//internal import
import Layout from "@layout/Layout";
import PageHeader from "@component/header/PageHeader";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <Layout title="About Us" description="This is about us page">
      <PageHeader title="about-page-title" />

      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
          <div className="grid grid-flow-row lg:grid-cols-2 gap-4 lg:gap-16 items-center">
            <div className="">
              <h3 className="text-xl lg:text-3xl mb-2 font-serif font-semibold">
                {t("common:about-section-title")}
              </h3>
              <div className="mt-3 text-base opacity-90 leading-7">
                <p>{t("common:about-section-top-paragraph1")}</p>

                <p>{t("common:about-section-top-paragraph2")}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-2 xl:gap-6 mt-8">
                <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                  <span className="text-3xl block font-extrabold font-serif mb-4 text-gray-800">
                    10K
                  </span>
                  <h4 className="text-lg font-serif font-bold mb-1">
                    {t("common:about-listed-products-box-title")}
                  </h4>
                  <p className="mb-0 opacity-90 leading-7">
                    {t("common:about-listed-products-box-text")}
                  </p>
                </div>
                <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                  <span className="text-3xl block font-extrabold font-serif mb-4 text-gray-800">8K</span>
                  <h4 className="text-lg font-serif font-bold mb-1">
                    {t("common:about-customer-box-title")}
                  </h4>
                  <p className="mb-0 opacity-90 leading-7">{t("common:about-customers-box-text")}</p>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <Image width={920} height={750} src="/about-us.jpg" alt="logo" />
            </div>
          </div>
          <div className="mt-10 lg:mt-16 text-base opacity-90 leading-7">
            <p>{t("common:about-section-top-paragraph3")}</p>

            <p>{t("common:about-section-top-paragraph4")}</p>
          </div>
          <div className="mt-10 lg:mt-12 flex flex-col sm:grid gap-4">
            <Image
              width={1920}
              height={570}
              src="/about-banner.jpg"
              alt="logo"
              className="block rounded-lg"
            />
          </div>
        </div>
        <div className="bg-gray-50 lg:py-20 py-10">
          <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
            <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-8">
              <div className="max-w-2xl">
                <h3 className="text-xl lg:text-3xl mb-2 font-serif font-semibold">
                  {t("common:about-our-founder-title")}
                </h3>
                <p className="mt-2 md:mt-3 font-normal block text-base">
                  {t("common:about-our-founder-paragraph")}
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-6 xl:gap-x-8">
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src="/team/team-1.jpg"
                  alt="logo"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold font-serif">Niamh Shea</h5>
                  <span className="opacity-75 text-sm">{t("common:co-founder-executive")}</span>
                </div>
              </div>
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src="/team/team-2.jpg"
                  alt="logo"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold font-serif">Orla Dwyer</h5>
                  <span className="opacity-75 text-sm"> {t("common:chief-executive")}</span>
                </div>
              </div>
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src="/team/team-3.jpg"
                  alt="logo"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold font-serif">Danien James</h5>
                  <span className="opacity-75 text-sm">{t("common:co-founder-chairman")}</span>
                </div>
              </div>
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src="/team/team-4.jpg"
                  alt="logo"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold font-serif">Dara Frazier</h5>
                  <span className="opacity-75 text-sm">{t("common:chief-strategy-officer")}</span>
                </div>
              </div>
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src="/team/team-5.jpg"
                  alt="logo"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold font-serif">Glenda Arvidson</h5>
                  <span className="opacity-75 text-sm"> {t("common:hr-officer")}</span>
                </div>
              </div>
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src="/team/team-6.jpg"
                  alt="logo"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold font-serif">Melvin Davis</h5>
                  <span className="opacity-75 text-sm">{t("common:lead-developer")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
