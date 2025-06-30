import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink dark:bg-darker text-white border-t-4 border-banana">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-banana border-2 border-white flex items-center justify-center">
                <span className="text-black font-display font-black text-sm">
                  P&P
                </span>
              </div>
              <span className="font-display font-bold text-lg text-white">
                Pickup & Play Games
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Creating fun, accessible games that bring people together. From
              quick party games to strategic adventures, we design experiences
              that are easy to learn and impossible to put down.
            </p>
          </div>

          {/* Games */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg text-banana">
              Our Games
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/bananarchy"
                  className="text-gray-300 hover:text-banana transition-colors duration-200 text-sm"
                >
                  Bananarchy
                </Link>
              </li>
              <li>
                <Link
                  href="/games"
                  className="text-gray-300 hover:text-banana transition-colors duration-200 text-sm"
                >
                  All Games
                </Link>
              </li>
              <li>
                <Link
                  href="/coming-soon"
                  className="text-gray-300 hover:text-banana transition-colors duration-200 text-sm"
                >
                  Coming Soon
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg text-banana">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-banana transition-colors duration-200 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-banana transition-colors duration-200 text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="text-gray-300 hover:text-banana transition-colors duration-200 text-sm"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg text-banana">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/pickupandplaygames"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-hot-pink transition-colors duration-200"
                aria-label="Follow us on Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/pickupandplaygames"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-hot-pink transition-colors duration-200"
                aria-label="Follow us on Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/pickupandplaygames"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-hot-pink transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.901 8.198 7.052 7.708 8.349 7.708s2.448.49 3.323 1.297c.896.896 1.386 2.047 1.386 3.344s-.49 2.448-1.386 3.344c-.875.807-2.026 1.297-3.323 1.297zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.896-.896-1.386-2.047-1.386-3.344s.49-2.448 1.386-3.344c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.896.896 1.386 2.047 1.386 3.344s-.49 2.448-1.386 3.344c-.875.807-2.026 1.297-3.323 1.297z" />
                </svg>
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">
                Subscribe to our newsletter for game updates and exclusive
                content!
              </p>
              <Link
                href="/newsletter"
                className="inline-block bg-banana hover:bg-banana/90 text-black font-bold px-4 py-2 rounded-lg text-sm transition-colors duration-200"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Pickup & Play Games. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-banana transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-banana transition-colors duration-200 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
