import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../Content/Images/Logo.png";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute w-[800px] h-[800px] bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-[#03c39a] via-[#04668d] to-black rounded-full blur-3xl opacity-20 -z-10 top-[-200px] right-[-200px]" />

      <motion.img
        src={Logo}
        alt="Logo"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-24 h-24 mb-8"
      />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-4"
      >
        Freelance Without Borders
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-gray-300 text-center max-w-xl text-lg mb-10"
      >
        Connect with the world’s top talent or start your freelance journey today. Innovative, secure, and built for the future.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Link
          to="/login"
          className="px-8 py-4 bg-[#03c39a] hover:bg-[#04668d] text-black font-semibold rounded-2xl transition shadow-lg"
        >
          ورود / ثبت‌نام
        </Link>
      </motion.div>
    </div>
  );
}