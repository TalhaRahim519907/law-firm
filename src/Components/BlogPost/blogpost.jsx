import React from "react";
import CommentSection from "../CommentSection/comment.jsx";
import CommentForm from "../CommentForm/commentform.jsx";

function blogpost() {
  return (
    <div className="py-4 md:m-8 sm:m-2 h-auto">
      <div className="flex justify-end mr-10">
        <button className=" mt-8 border-2 border-black font-sans font-semi-bold font-bold duration-500 px-10 py-3 rounded-full hover:text-white hover:bg-stone-900">
          Close
        </button>
      </div>
      <div className="blog px-8">
        <div className="heading">
          <h1 className="font-bold font-sans text-3xl py-8">
            7 Questions to Find Out What Clients Really Want
          </h1>
          <p className="text-gray-500 text-lg">
            by John Doe | August 28, 2018 | Web Design | 1 Comments
          </p>
        </div>
        <div className="lg:h-96 md:h-72 sm:h-96 mt-8 ">
          <img
            src="src/assets/Images/blog-01.png"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="text mt-6">
          <p className="leading-7 text-lg text-gray-500 font-sans pb-7 text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
            eligendi animi placeat neque, sequi dolores tenetur! Nesciunt sit
            omnis rerum consequatur, hic explicabo expedita! Veniam et fugit
            delectus, quo consequuntur sapiente eaque atque at qui ipsam,
            ducimus nobis. Ratione sunt, incidunt suscipit dolorum commodi porro
            libero repudiandae reiciendis fugiat et! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Tenetur sed rerum praesentium. Aliquid
            consequuntur repellat distinctio sed qui earum laudantium vel,
            quisquam reprehenderit veritatis dolor voluptas similique tempora
            dignissimos numquam reiciendis ex perferendis? Maxime adipisci ipsum
            repudiandae accusantium at, fugiat praesentium rem illum dignissimos
            facilis? Fuga nesciunt velit inventore repudiandae.
          </p>
          <div class="flex flex-col items-start border-l-4 lg:h-20 md:h-28 sm:h-auto border-gray-300 pl-4">
            <p class="text-lg font-sans text-gray-600 py-2 text-justify">
              Cras auctor bibendum lorem vel sodales. Nulla commodo velit ac
              turpis ullamcorper placerat.
            </p>
            <span class="text-lg font-sans text-gray-500">
              NAVEED AHMAD, PLOMX
            </span>
          </div>
          <p className="leading-7 text-lg text-gray-500 font-sans py-6 text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
            eligendi animi placeat neque, sequi dolores tenetur! Nesciunt sit
            omnis rerum consequatur, hic explicabo expedita! Veniam et fugit
            delectus, quo consequuntur sapiente eaque atque at qui ipsam,
            ducimus nobis. Ratione sunt, incidunt suscipit dolorum commodi porro
            libero repudiandae reiciendis fugiat et! Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
          <div className="flex flex-row lg:justify-start md:justify-center gap-4 pt-5">
            <button className="border-2 border-gray-300 py-2 px-4 rounded-md text-gray-400 hover:text-black">
              Website
            </button>
            <button className="border-2 border-gray-300 py-2 px-4 rounded-md text-gray-400 hover:text-black">
              One Page
            </button>
            <button className="border-2 border-gray-300 py-2 px-4 rounded-md text-gray-400 hover:text-black">
              Professional
            </button>
          </div>
          <div className="bg-gray-100 mt-12 p-8 rounded-sm">
            <div className="avatar w-full flex lg:flex-row sm:flex-col gap-6">
              <img
                src="src/assets/Images/avatar-01.png"
                alt=""
                className="w-32 h-auto rounded-full shadow-lg inline-block"
              />
              <div className="flex flex-col">
                <h1 className="font-bold font-sans text-2xl py-3 text-gray-800">
                  Naveed Ahmad
                </h1>
                <p className="font-sans text-lg text-gray-600">
                  Fusce interdum lorem quis sodales porttitor. Cras nulla massa,
                  dictum sit amet metus ac, convallis posuere tortor. Donec non
                  mi sit amet odio maximus commodo a mattis enim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CommentSection />
      <CommentForm />
    </div>
  );
}

export default blogpost;
