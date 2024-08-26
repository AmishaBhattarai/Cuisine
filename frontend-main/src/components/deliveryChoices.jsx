import React from "react";

export function DeliveryChoices() {
  return (
    <section className=" bg-orange-50">
      <div className="py-10  sm:py-16 block relative bg-opacity-50 z-40">
        <div className="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 gap-2 mt-12 lg:grid-cols-3 lg:mt-20   ">
              <div className="transition-all  duration-1000 bg-white hover:bg-orange-500  hover:shadow-xl m-2 p-4 relative z-40 group  ">
                <div className=" absolute  bg-orange-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                <div className="py-2 px-9 relative  ">
                  <svg
                    className="w-16 h-16 fill-gray-400 group-hover:fill-orange-500"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_901_2863)">
                      <path
                        d="M21 1C22.1 1 23 1.9 23 3C23 4.1 22.1 5 21 5C19.9 5 19 4.1 19 3C19 1.9 19.9 1 21 1Z"
                        fill="#FFE6EA"
                      />
                      <path
                        d="M19.75 9.95024L19.69 10.0002C14.69 13.0002 13 17.1602 13 17.1602C11.67 16.1702 10.52 14.9702 11 14.0002C13 10.0002 16 8.00024 18 7.00024C18.45 8.13024 19.06 9.11024 19.75 9.95024Z"
                        fill="#668077"
                      />
                      <path
                        d="M25 19C28.31 19 31 21.69 31 25C31 28.31 28.31 31 25 31C21.69 31 19 28.31 19 25C19 21.69 21.69 19 25 19ZM10.3599 20C11.9499 21.08 12.9999 22.93 12.9999 25C12.9999 28.31 10.3099 31 6.99988 31C3.68988 31 0.999878 28.31 0.999878 25C0.999878 24.29 0.999878 22 2.99988 20H10.3599Z"
                        fill="#FFC44D"
                      />
                      <path
                        d="M16.0002 25V19C16.0002 19 10.0002 16 11.0002 14C13.0002 10 16.0002 8 18.0002 7C20.0002 12 25.0002 14 25.0002 14M8.00018 16H2.00018M7.00018 12H1.00018M1.34588 22.9893C1.12188 23.6183 0.999878 24.2953 0.999878 25.0003C0.999878 28.3133 3.68688 31.0003 6.99988 31.0003C10.3139 31.0003 12.9999 28.3133 12.9999 25.0003C12.9999 22.9283 11.9509 21.0783 10.3559 20.0003H2.99988M13.0002 17.1582C13.0002 17.1582 14.6872 13.0002 19.6872 10.0002M31.0002 25C31.0002 21.687 28.3132 19 25.0002 19C21.6872 19 19.0002 21.687 19.0002 25C19.0002 28.313 21.6872 31 25.0002 31C28.3132 31 31.0002 28.313 31.0002 25ZM23.0002 3C23.0002 1.896 22.1042 1 21.0002 1C19.8962 1 19.0002 1.896 19.0002 3C19.0002 4.104 19.8962 5 21.0002 5C22.1042 5 23.0002 4.104 23.0002 3Z"
                        stroke="#9ca3af"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_901_2863">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                    Your vehicle, your time
                  </h3>
                  <p className="mt-4 text-base text-gray-600 group-hover:text-white  ">
                    Grab your car, bike, or
                    scooter and be a delivery
                    driver whenever you want—for
                    an hour, a weekend, or
                    throughout the week. See below
                    to find the requirements for
                    each way of getting around.
                  </p>
                </div>
              </div>

              <div className="transition-all  duration-1000 bg-white hover:bg-orange-500  hover:shadow-xl m-2 p-4 relative z-40 group  ">
                <div className=" absolute  bg-orange-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                <div className="py-2 px-9 relative  ">
                  <svg
                    className="w-16 h-16 fill-gray-400 group-hover:fill-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.052 1.25H11.948C11.0495 1.24997 10.3003 1.24995 9.70552 1.32991C9.07773 1.41432 8.51093 1.59999 8.05546 2.05546C7.59999 2.51093 7.41432 3.07773 7.32991 3.70552C7.27259 4.13189 7.25637 5.15147 7.25179 6.02566C5.22954 6.09171 4.01536 6.32778 3.17157 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.17157 20.8284C4.34314 22 6.22876 22 9.99998 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14C22 10.2288 22 8.34315 20.8284 7.17157C19.9846 6.32778 18.7705 6.09171 16.7482 6.02566C16.7436 5.15147 16.7274 4.13189 16.6701 3.70552C16.5857 3.07773 16.4 2.51093 15.9445 2.05546C15.4891 1.59999 14.9223 1.41432 14.2945 1.32991C13.6997 1.24995 12.9505 1.24997 12.052 1.25ZM15.2479 6.00188C15.2434 5.15523 15.229 4.24407 15.1835 3.9054C15.1214 3.44393 15.0142 3.24644 14.8839 3.11612C14.7536 2.9858 14.5561 2.87858 14.0946 2.81654C13.6116 2.7516 12.964 2.75 12 2.75C11.036 2.75 10.3884 2.7516 9.90539 2.81654C9.44393 2.87858 9.24644 2.9858 9.11612 3.11612C8.9858 3.24644 8.87858 3.44393 8.81654 3.9054C8.771 4.24407 8.75661 5.15523 8.75208 6.00188C9.1435 6 9.55885 6 10 6H14C14.4412 6 14.8565 6 15.2479 6.00188ZM12 9.25C12.4142 9.25 12.75 9.58579 12.75 10V10.0102C13.8388 10.2845 14.75 11.143 14.75 12.3333C14.75 12.7475 14.4142 13.0833 14 13.0833C13.5858 13.0833 13.25 12.7475 13.25 12.3333C13.25 11.9493 12.8242 11.4167 12 11.4167C11.1758 11.4167 10.75 11.9493 10.75 12.3333C10.75 12.7174 11.1758 13.25 12 13.25C13.3849 13.25 14.75 14.2098 14.75 15.6667C14.75 16.857 13.8388 17.7155 12.75 17.9898V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V17.9898C10.1612 17.7155 9.25 16.857 9.25 15.6667C9.25 15.2525 9.58579 14.9167 10 14.9167C10.4142 14.9167 10.75 15.2525 10.75 15.6667C10.75 16.0507 11.1758 16.5833 12 16.5833C12.8242 16.5833 13.25 16.0507 13.25 15.6667C13.25 15.2826 12.8242 14.75 12 14.75C10.6151 14.75 9.25 13.7903 9.25 12.3333C9.25 11.143 10.1612 10.2845 11.25 10.0102V10C11.25 9.58579 11.5858 9.25 12 9.25Z"
                      fill="#9ca3af"
                    />
                  </svg>

                  <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                    Get paid quickly
                  </h3>
                  <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                    When you get paid to deliver
                    using Uber, your earnings are
                    automatically transferred to
                    your bank account every week.
                    Plus, with Instant Pay, food
                    delivery drivers can cash out
                    up to 5 times a day.
                  </p>
                </div>
              </div>

              <div className="transition-all  duration-1000 bg-white hover:bg-orange-500  hover:shadow-xl m-2 p-4 relative z-40 group  ">
                <div className=" absolute  bg-orange-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                <div className="py-2 px-9 relative  ">
                  <svg
                    className="w-16 h-16 fill-gray-400 group-hover:fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="engine"
                  >
                    <path d="M60,34H56a1,1,0,0,0-1,1v3H52V28a1,1,0,0,0-1-1H47.51l-4.7-6.58A1,1,0,0,0,42,20H35V17h3a1,1,0,0,0,1-1V12a1,1,0,0,0-1-1H26a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h3v3H24a1,1,0,0,0-.81.42L18.49,27H13a1,1,0,0,0-1,1V38H9V35a1,1,0,0,0-1-1H4a1,1,0,0,0-1,1V47a1,1,0,0,0,1,1H8a1,1,0,0,0,1-1V44h3v5a1,1,0,0,0,1,1H24.59l2.7,2.71A1,1,0,0,0,28,53H48a1,1,0,0,0,.71-.29l3-3A1,1,0,0,0,52,49V44h3v3a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V35A1,1,0,0,0,60,34ZM35.77,37.64l-5,6A1,1,0,0,1,30,44a1,1,0,0,1-.64-.23,1,1,0,0,1-.13-1.41L32.87,38H29a1,1,0,0,1-.77-1.64l5-6a1,1,0,0,1,1.54,1.28L31.13,36H35a1,1,0,0,1,.77,1.64Z"></path>
                  </svg>
                  <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                    Track your earnings
                  </h3>
                  <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                    Before you accept any order,
                    you’ll be able to see how much
                    you’ll get paid to deliver it.
                    In addition, customers have
                    the option to tip in-app, and
                    100% of tips are yours to
                    keep.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
