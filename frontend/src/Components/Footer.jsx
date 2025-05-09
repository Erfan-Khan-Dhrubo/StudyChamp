const Footer = () => {
  return (
    <footer className="bg-gray-300 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-4">
      
        <div className="flex items-center space-x-4 justify-center">
          <img
            className="w-10 h-10"
            src="https://i.ibb.co.com/Y73sLNQy/book-icon.png"
            alt="StudyChamp Logo"
          />
          <h2 className="text-2xl font-bold text-black">
            Study<span className="text-blue-900">Champ</span>
          </h2>
        </div>

        {/* Links */}
        <div className="text-black font-semibold mx-auto">
          <ul className="space-y-1 flex flex-row gap-5">
            <li><a href="/" className="hover:text-blue-300">Home</a></li>
            <li><a href="/courses" className="hover:text-blue-300">Courses</a></li>
            <li><a href="/leaderboard" className="hover:text-blue-300">Leaderboard</a></li>
            <li><a href="/admin" className="hover:text-blue-300">Admin</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="mx-auto">
          <h3 className="font-semibold text-lg mb-2 text-black">Connect With Us</h3>
          <div className="flex flex-row justify-center gap-5 mt-5">
            <a href="#" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current hover:text-blue-300"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.825 9.825 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0016.616 3c-2.717 0-4.92 2.203-4.92 4.917 0 .386.045.762.127 1.122C7.728 8.822 4.1 6.865 1.671 3.885c-.423.727-.666 1.569-.666 2.475 0 1.708.869 3.216 2.188 4.099a4.904 4.904 0 01-2.228-.616c-.054 1.983 1.393 3.833 3.444 4.245a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.417A9.874 9.874 0 010 19.54 13.936 13.936 0 007.548 21c9.142 0 14.307-7.721 13.995-14.646A9.935 9.935 0 0024 4.557z" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current hover:text-red-400"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.489 3.45.03 5.804 0 12c.03 6.185.489 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM8 15.999v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current hover:text-blue-500"
                viewBox="0 0 24 24"
              >
                <path d="M9 8H6v4h3v12h5V12h3.642l.358-4H14V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-black text-sm mt-6 border-t border-blue-800 pt-4">
        © {new Date().getFullYear()} StudyChamp — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
