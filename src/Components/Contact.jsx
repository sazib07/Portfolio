import React from 'react'

const Contact = () => {
  return (
    <div>
      <section id="Contact" className="px-3 sm:px-4 md:px-6">
        <div className="py-8 sm:py-10 md:py-14 lg:py-16 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center sm:text-left">
            Contact Me
          </h2>

          <form action="#" className="space-y-6 sm:space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 sm:p-2.5 md:p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="@Enter your email"
                required=""
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block w-full text-xs sm:text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm p-2 sm:p-2.5 md:p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Let us know how can i help you"
                required=""
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={5}
                className="block w-full text-xs sm:text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 p-2 sm:p-2.5 md:p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Leave a Message..."
                defaultValue={""}
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-fit py-2.5 sm:py-3 px-4 sm:px-5 text-xs sm:text-sm font-medium text-white rounded-lg bg-blue-500 hover:bg-blue-600 transition mx-auto flex justify-center"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact