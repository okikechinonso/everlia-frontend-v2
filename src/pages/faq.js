import React from 'react';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import useTranslation from "next-translate/useTranslation";
//internal import
import Layout from '@layout/Layout';
import PageHeader from '@component/header/PageHeader';

const Faq = () => {
  const {t}=useTranslation()
  return (
    <Layout title="FAQ" description="This is faq page">
      <PageHeader title="faq-title" />
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 py-10 lg:py-12">
          <div className="grid gap-4 lg:mb-8 items-center md:grid-cols-2 xl:grid-cols-2">
            <div className="pr-16">
              <Image width={720} height={550} src="/faq.svg" alt="logo" />
            </div>
            <div className="">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-emerald-500 bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{t("common:Faq-question1")}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180 text-emerald-500' : ''
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                    {t("common:Faq-question1-ans")}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-emerald-500 bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none">
                      <span> {t("common:Faq-question2")}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180 text-emerald-500' : ''
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                    {t("common:Faq-question2-ans")}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-emerald-500 bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none">
                      <span> {t("common:Faq-question3")}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180 text-emerald-500' : ''
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                    {t("common:Faq-question3-ans")}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-emerald-500 bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none">
                      <span> {t("common:Faq-question4")}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180 text-emerald-500' : ''
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                    {t("common:Faq-question4-ans")}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-emerald-500 bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none">
                      <span> {t("common:Faq-question5")}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180 text-emerald-500' : ''
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                    {t("common:Faq-question5-ans")}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-emerald-500 bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none">
                      <span>
                      {t("common:Faq-question6")}
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180 text-emerald-500' : ''
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                    {t("common:Faq-question6-ans")}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-emerald-500 bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span> {t("common:Faq-question7")}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180 text-emerald-500' : ''
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                    {t("common:Faq-question7-ans")}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-emerald-500 bg-gray-50 hover:bg-emerald-50 rounded-lg focus:outline-none">
                      <span>
                      {t("common:Faq-question8")}
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180 text-emerald-500' : ''
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                    {t("common:Faq-question8-ans")}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Faq;
