import React from "react";

function commentform() {
  return (
    <div>
      <div class=" h-auto dark:bg-gray-900 m-8">
        <div class="max-w-7xl dark:bg-gray-950 dark:text-white">
          <form class=" w-full p-4" action="/submit-comment" method="post">
            <h2 class="text-3xl mb-4 tracking-wider font-bold font-sans text-gray-900 dark:text-gray-200">
              Leave a Comment
            </h2>
            <p class="text-gray-500 mb-6 text-lg">
              You must be logged in to post a comment.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div class="mb-4 col-span-1 md:col-span-3">
                <textarea
                  id="comment"
                  name="comment"
                  class="w-full px-3 py-2 dark:bg-gray-900 rounded-md border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-2 focus:border-black resize-none"
                  placeholder="Type Comment...*"
                  rows="5"
                  required
                ></textarea>
              </div>

              <div class="mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="w-full px-3 py-2 dark:bg-gray-900 rounded-md border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-2 focus:border-black"
                  placeholder="Name*"
                  required
                />
              </div>
              <div class="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full px-3 py-2 dark:bg-gray-900 rounded-md border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-2 focus:border-black"
                  placeholder="Email*"
                  required
                />
              </div>
              <div class="mb-4">
                <input
                  type="text"
                  id="website"
                  name="website"
                  class="w-full px-3 py-2 dark:bg-gray-900 rounded-md border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-2 focus:border-black"
                  placeholder="Website"
                />
              </div>
            </div>
            <div class="flex justify-start mt-6">
              <button
                type="submit"
                class="border-2 border-black font-sans font-semi-bold font-bold duration-500 px-8 py-3 rounded-full hover:text-white hover:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800"
              >
                Post Comment →
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default commentform;
