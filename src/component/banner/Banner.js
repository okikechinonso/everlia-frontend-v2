import Link from 'next/link';
import React from 'react';
import useTranslation from "next-translate/useTranslation";
const Banner = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-serif text-xl">
            <span className="text-emerald-600 font-bold">
            {t("common:Banner-title-span-text")}
            </span>{' '}
            {t("common:Banner-title-text")}
          </h1>

          <p className="text-gray-500">
          {t("common:Banner-paragraph-text")}
            <Link href="#discount">
              <a className="text-emerald-600 ml-1"> {t("common:Banner-link-text")}</a>
            </Link>
          </p>
        </div>
        <Link href="/search?Category=organic-food">
          <a className="text-sm font-serif font-medium px-6 py-2 bg-emerald-500 text-center rounded-full text-white hover:bg-emerald-700">
          {t("common:Banner-btn-text")}
          </a>
        </Link>
      </div>
    </>
  );
};

export default Banner;
