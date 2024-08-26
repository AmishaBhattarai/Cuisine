import React from "react";

export function DeliveryTimeline() {
  return (
    <div className="container bg-orange-50">
      <div className="relative wrap overflow-hidden h-full">
        <div
          className=" absolute border-opacity-20 border-gray-700 h-full border"
          style={{ left: "50%" }}
        ></div>
        <div className="mb-8 flex justify-between items-center w-full">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-green-600 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">
              1
            </h1>
          </div>
          <div className="order-1 bg-indigo-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">
              Already a driver on the Cuisine
              platform?
            </h3>
            <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
              You can start receiving delivery
              requests by going to the link send
              to your mail. Once you review and
              accept the delivery terms,
              you&apos;ll be ready to deliver. You
              can turn delivery requests on and
              off as you wish.
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-green-600 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">
              2
            </h1>
          </div>
          <div className="order-1 bg-orange-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">
              Log in
            </h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              When you&apos;re ready to start
              being a delivery driver, you can go
              online in the link that is being
              sent to your mail. Then app will
              show available food delivery
              requests near you. You can tap to
              accept.
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-green-600 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">
              3
            </h1>
          </div>
          <div className="order-1 bg-indigo-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">
              Deliver orders
            </h3>
            <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
              The app provides suggested
              navigation and information from
              restaurants and your customers to
              help your deliveries run smoothly.
              If you need more assistance, you can
              contact Support in the app, too.
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-green-600 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">
              4
            </h1>
          </div>
          <div className="order-1 bg-orange-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">
              Earn money
            </h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              You&apos;ll get paid for every
              pickup and dropoff you complete,
              plus a per-mile rate. In some
              cities, you&apos;ll also receive a
              per-minute rate. In addition,
              Cuisine Compass customers can tip
              you if they&apos;d like.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
