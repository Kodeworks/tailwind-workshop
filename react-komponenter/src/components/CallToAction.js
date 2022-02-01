const CallToAction = () => {
  return (
    <div className="m-4 bg-white dark:bg-gray-800">
      <div className="z-20 mx-auto w-full py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span className="block">Vil du style komponenter?</span>
          <span className="block text-indigo-500">Today is a good day</span>
        </h2>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className=" inline-flex rounded-md shadow">
            <button
              type="button"
              className="w-full rounded-lg  bg-indigo-600 py-4 px-6 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  focus:ring-offset-indigo-200 "
            >
              Jeg har ingen funksjonalitet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
