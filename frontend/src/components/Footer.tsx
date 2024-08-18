import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
     <>
     <footer className="bg-black text-white py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-bold mb-4">Abstract | Help</h4>
          <p>
            YourApp is the all-in-one solution for productivity and team
            collaboration.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-gray-300">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Contact Us</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-gray-300">
                support@yourapp.com
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                +91-555-123-4567
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-blue-400">
              <i className="fab fa-facebook fa-lg" />
            </Link>
            <Link href="#" className="hover:text-blue-400">
              <i className="fab fa-twitter fa-lg" />
            </Link>
            <Link href="#" className="hover:text-pink-500">
              <i className="fab fa-instagram fa-lg" />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>© 2024 Abstract|Help. All rights reserved.</p>
      </div>
    </div>
  </footer>
     </>

  )
}

export default Footer