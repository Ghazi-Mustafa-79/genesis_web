import React from "react";

const ErrorPage = ({ status = 500 }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 text-center px-4">
      {/* Big Status Code */}
      <h1 className="text-[80px] font-bold tracking-tight text-gray-900">
        {status}
      </h1>

      {/* Title */}
      <h2 className="text-2xl font-semibold mt-2">
        {status === 404
          ? "This page could not be found."
          : "This site is currently experiencing an issue."}
      </h2>

      {/* System-like Explanation */}
      <p className="mt-4 text-gray-600 max-w-md">
        The server returned a <b>{status}</b> error. This might be temporary —
        please try refreshing the page. If the issue continues, contact the site
        administrator.
      </p>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition"
        >
          Refresh
        </button>
        <a
          href="/"
          className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
        >
          Go to Home
        </a>
      </div>

      {/* Footer-like small text */}
      <p className="mt-10 text-xs text-gray-400">
        Reference Code: ERR-{status}-X1 | Powered by React App
      </p>
    </div>
  );
};

export default ErrorPage;
