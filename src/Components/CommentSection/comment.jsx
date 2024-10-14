import React, { useState } from "react";

const commentsData = [
  {
    id: 1,
    name: "Michael Gough",
    date: "Feb. 8, 2022",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    content:
      "Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
  },
  {
    id: 2,
    name: "Jese Leos",
    date: "Feb. 12, 2022",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    content: "Much appreciated! Glad you liked it ☺️",
  },
  {
    id: 3,
    name: "Bonnie Green",
    date: "Mar. 12, 2022",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    content:
      "The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.",
  },
  {
    id: 4,
    name: "Helene Engels",
    date: "Jun. 23, 2022",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    content:
      "Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.",
  },
];

const Comment = () => {
  const [comments, setComments] = useState(commentsData);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle comment submission
  };

  return (
    <section className="bg-white dark:bg-gray-900 pt-8 lg:pt-8 antialiased">
      <div className="max-w-4xl m-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Comments ({comments.length})
          </h2>
        </div>
        {comments.map((comment) => (
          <article
            key={comment.id}
            className="p-6 text-base bg-white dark:bg-gray-900 mb-3 border-t border-gray-200 dark:border-gray-700"
          >
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                  <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src={comment.avatar}
                    alt={comment.name}
                  />
                  {comment.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <time pubdate dateTime={comment.date} title={comment.date}>
                    {comment.date}
                  </time>
                </p>
              </div>
              <button
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
                <span className="sr-only">Comment settings</span>
              </button>
            </footer>
            <p className="text-gray-500 dark:text-gray-400">
              {comment.content}
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <button
                type="button"
                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
              >
                <svg
                  className="mr-1.5 w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                  />
                </svg>
                Reply
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Comment;
