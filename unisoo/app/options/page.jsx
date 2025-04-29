"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const options = [
  {
    title: "Join Community",
    description: "Connect with like-minded individuals.",
    href: "/community",
  },
  {
    title: "Explore Events",
    description: "Discover upcoming events and activities.",
    href: "/events",
  },
  {
    title: "Find Internship",
    description: "Kickstart your career with internships.",
    href: "/internships",
  },
  {
    title: "Discussion Forums",
    description: "Engage in meaningful discussions.",
    href: "/forums",
  },
];

export default function OptionsPage() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden"
      style={{
        backgroundImage: "url('/images/optionbg.jpg')", // Replace with the correct path to your image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-pink-500 rounded-full opacity-30 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{ top: "10%", left: "10%" }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] bg-purple-500 rounded-full opacity-30 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        style={{ bottom: "10%", right: "10%" }}
      />

      {/* Page Title */}
      <motion.h1
        className="text-6xl sm:text-7xl font-extrabold text-white mb-16 text-center drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        What’s Your Next Move?
      </motion.h1>

      {/* Cards in Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-6xl">
        {options.map((option, index) => (
          <Link key={index} href={option.href}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                scale: 1.1,
                rotate: 1,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer bg-gradient-to-br from-[#6EE7B7] to-[#3B82F6] text-white p-8 rounded-3xl shadow-2xl transition-all duration-300 hover:shadow-[0_10px_50px_rgba(59,130,246,0.5)]"
            >
              <h2 className="text-4xl font-extrabold mb-4">{option.title}</h2>
              <p className="text-lg opacity-90">{option.description}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
