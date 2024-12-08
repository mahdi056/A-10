
const Footer = () => {
  return (
    <div>

<footer className="bg-gray-800 text-gray-300 py-8">
      <div className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
       
        <div>
          <h2 className="text-xl font-bold text-white">Visa Navigator Portal</h2>
          <p className="text-sm mt-2">
            Your one-stop solution for visa information and application guidance.
          </p>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li>Email: visanavigator@gmail.com</li>
            <li>Phone: +880 1707226784</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li>
              <a href="/home" className="hover:text-white">Home</a>
            </li>
            <li>
              <a href="/allvisas" className="hover:text-white">All Visas</a>
            </li>
            <li>
              <a href="/login" className="hover:text-white">Login</a>
            </li>
            <li>
              <a href="/registration" className="hover:text-white">Registration</a>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex mt-2 space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.733 0-1.325.593-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.118v-3.622h3.118v-2.672c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.916c-1.504 0-1.797.714-1.797 1.763v2.314h3.59l-.467 3.622h-3.123v9.293h6.126c.733 0 1.325-.593 1.325-1.326v-21.35c0-.733-.592-1.326-1.325-1.326z"/>
              </svg>
            </a>
            
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M24 4.557a9.92 9.92 0 01-2.828.775 4.92 4.92 0 002.165-2.724 9.86 9.86 0 01-3.127 1.196 4.905 4.905 0 00-8.356 4.467A13.897 13.897 0 011.675 3.149 4.904 4.904 0 003.18 9.722a4.902 4.902 0 01-2.22-.616v.062a4.907 4.907 0 003.934 4.816 4.902 4.902 0 01-2.212.084 4.908 4.908 0 004.588 3.416A9.856 9.856 0 010 19.539 13.897 13.897 0 007.548 21c9.05 0 14-7.498 14-14v-.637a9.937 9.937 0 002.452-2.543z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19.015 3h-14.03c-1.076 0-1.985.909-1.985 1.985v14.03c0 1.076.909 1.985 1.985 1.985h14.03c1.076 0 1.985-.909 1.985-1.985v-14.03c0-1.076-.909-1.985-1.985-1.985zm-10.538 16h-2.675v-8.685h2.675v8.685zm-1.335-9.842c-.91 0-1.645-.735-1.645-1.644 0-.91.735-1.645 1.645-1.645.909 0 1.644.735 1.644 1.645 0 .91-.735 1.644-1.644 1.644zm13.337 9.842h-2.675v-4.306c0-1.034-.02-2.368-1.444-2.368-1.445 0-1.667 1.13-1.667 2.294v4.38h-2.676v-8.685h2.57v1.187h.037c.357-.675 1.231-1.387 2.532-1.387 2.708 0 3.21 1.781 3.21 4.094v4.791z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>@ Visa Navigator Portal. All rights reserved.</p>
      </div>
    </footer>

    </div>
   
  );
};

export default Footer;
