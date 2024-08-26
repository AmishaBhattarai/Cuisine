import React from "react";
import { MainContainer } from "../wrapper";
import { faqData } from "../data/faq";

export function FAQ() {
  return (
    <MainContainer className={"bg-orange-50"}>
      <div className="bg-inherit p-4 rounded-lg  py-8 mt-4">
        <h4 className="text-4xl font-bold text-orange-600 tracking-widest uppercase text-center">
          FAQ
        </h4>
        <p className="text-center text-gray-600 text-sm mt-2">
          Here are some of the frequently asked
          questions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-12 px-2 xl:px-12 mt-4">
          {faqData.map((f, i) => (
            <div
              key={i}
              className="flex space-x-8 mt-8"
            >
              <div>
                <h4 className="text-xl font-bold text-orange-600">
                  {f.question}
                </h4>
                <p className="text-gray-600 my-2">
                  {f.ans}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainContainer>
  );
}
