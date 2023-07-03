import { BiCheck } from "react-icons/bi";
const Pricing = () => {
  return (
    <div className="w-full container mx-auto ">
      <div className="flex items-center justify-center flex-col place-items-center mt-8 " >
        <div className="">
          <p className="font-inter text-base text-gray-600 text-center">Pricing</p>
          <h1 className="font-inter text-4xl text-center">Pricing plans for you</h1>
          <h3 className="font-inter text-base text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>

        </div>
        <div className="flex lg:flex-row justify-center items-center sm:flex-col mt-10 ">
          <div className="flex flex-col gap-2 border py-20 pl-7 shadow-md">
            <h3 className="text-lg font-inter">Basic</h3>
            <p className="text-md text-gray-600 max-w-[80%]">The essentials to provide your best work for clients.</p>
            <h2 className="text-2xl text-blue-700 font-bold">$0.0<span className="text-sm font-normal text-gray-600">/month</span></h2>
            <div>
              <p className="font-satoshi font-normal"> <BiCheck className="inline text-blue-700" /> 5 products</p>
              <p className="font-satoshi font-normal"> <BiCheck className="inline text-blue-700" /> Up to 1,000 subscribers</p>
              <p className="font-satoshi font-normal"> <BiCheck className="inline text-blue-700" /> Basic analytics</p>
            </div>
            <div className="mt-6">
              <button className="w-[90%] font-normal py-2 border border-blue-700 text-blue-700 rounded-md">
                Buy Plan
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 border py-24 pl-7 shadow-lg" >
            <h3 className="text-lg font-inter">Pro</h3>
            <p className="text-md text-gray-600 max-w-[80%]">A plan that scales with your rapidly growing business.</p>
            <h2 className="text-2xl text-blue-700 font-bold">$3.0<span className="text-sm font-normal text-gray-600">/month</span></h2>
            <div>
              <p className="font-satoshi font-normal"> <BiCheck className="inline text-blue-700" /> 5 products</p>
              <p className="font-satoshi font-normal"> <BiCheck className="inline text-blue-700" /> Up to 1,000 subscribers</p>
              <p className="font-satoshi font-normal"> <BiCheck className="inline text-blue-700" /> Basic analytics</p>

            </div>
            <div className="mt-6">
              <button className="w-[90%] bg-blue-600 font-normal py-2 text-white rounded-md">
                Buy Plan
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 border py-20 pl-7 shadow-md">
            <h3 className="text-lg font-inter">Premium</h3>
            <p className="text-md text-gray-600 max-w-[80%]">Dedicated support and infrastructure for your company.</p>
            <h2 className="text-2xl text-blue-700 font-bold">$5.0<span className="text-sm font-normal text-gray-600">/month</span></h2>
            <div>
              <p className="font-satoshi font-normal"> <BiCheck className="inline text-blue-700" /> 5 products</p>
              <p className="font-satoshi font-normal"> <BiCheck className="inline text-blue-700" /> Up to 1,000 subscribers</p>
              <p className="font-satoshi font-normal"> <BiCheck className="inline text-blue-700" /> Basic analytics</p>

            </div>
            <div className="mt-6">
              <button className="w-[90%] font-normal py-2 border border-blue-700 text-blue-700 rounded-md">
                Buy Plan
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Pricing