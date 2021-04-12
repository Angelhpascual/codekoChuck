import React from "react";

const Contact = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-yellow-500">
      <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div className="flex justify-center md:justify-end -mt-16">
          <img
            className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            src="https://avatars.githubusercontent.com/u/15203307?v=4"
            alt="Me"
          />
        </div>
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">Github Repo</h2>
          <p className="mt-2 text-gray-600">
            This is a technical React test for Codeko.com
          </p>
        </div>
        <div className="flex justify-end mt-4">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Angelhpascual/codekoChuck"
            className="text-xl font-medium text-indigo-500"
          >
            Angelhpascual
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
