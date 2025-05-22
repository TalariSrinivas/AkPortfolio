import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/ajjegnla", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16 bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white">
      <h1 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">Contact Me</h1>
      <p className="text-center text-gray-400 mb-8">Feel free to reach out through socials or the form below.</p>

      <div className="flex flex-wrap justify-center gap-6 mb-14">
        <a href="https://www.linkedin.com/in/g-akash-4b1b40256/" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 hover:scale-105 transition duration-300">
            <img src="/linkedin.png" alt="LinkedIn" className="w-12 h-12 rounded-full border border-blue-500" />
            <p className="ml-4 text-blue-400 text-lg underline">g-akash</p>
          </div>
        </a>

        <a href="https://github.com/google-akash" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 hover:scale-105 transition duration-300">
            <img src="/github.png" alt="GitHub" className="w-12 h-12 rounded-full border border-white" />
            <p className="ml-4 text-gray-300 text-lg underline">google-akash</p>
          </div>
        </a>

        <a href="mailto:gakash81062@gmail.com" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 hover:scale-105 transition duration-300">
            <img src="/mail.png" alt="Email" className="w-12 h-12 rounded-full border border-yellow-300" />
            <p className="ml-4 text-yellow-300 text-lg underline break-words">gakash81062@gmail.com</p>
          </div>
        </a>
      </div>

      <div className="flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 border border-gray-700 p-8 rounded-2xl w-full max-w-md text-white shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Send a Message</h2>

          <div className="mb-4">
            <label className="block mb-1 text-gray-300">Full Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-teal-400"
              placeholder="Your full name"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">This field is required</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-gray-300">Email Address</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-teal-400"
              placeholder="Your email address"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">This field is required</p>}
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-gray-300">Message</label>
            <textarea
              {...register("message", { required: true })}
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-teal-400"
              placeholder="Type your message here..."
              rows={4}
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">This field is required</p>}
          </div>

          <button type="submit" className="w-full bg-gradient-to-r from-teal-500 to-green-500 hover:from-green-600 hover:to-teal-600 text-white py-2 rounded-xl font-semibold transition duration-200">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
