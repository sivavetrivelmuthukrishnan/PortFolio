import React from 'react'
import '../App.css'

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex justify-center items-center bg-primery text-white px-5 py-20"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold border-b-4 border-white mb-5 inline-block">
          Contact
        </h1>

        <p className="pb-5">
          If you want to discuss more in detail, please contact me
        </p>

        <p className="py-2">
          <span className="font-bold">Email : </span>
          <a
            href="mailto:Sivavetrivel07502@gmail.com"
            className="hover:underline"
          >
            Sivavetrivel07502@gmail.com
          </a>
        </p>

        <p className="py-2">
          <span className="font-bold">Phone : </span>
          <a href="tel:+919790250108" className="hover:underline">
            +91 9790250108
          </a>
        </p>
      </div>
    </section>
  )
}

export default Contact
