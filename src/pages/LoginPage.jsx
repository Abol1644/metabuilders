import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#04668d] to-[#03c39a] flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
      >
        <Dialog as="div" open={true} onClose={() => {}} className="space-y-6">
          <Dialog.Title className="text-2xl font-bold text-center text-gray-800">
            ورود به حساب کاربری
          </Dialog.Title>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="ایمیل"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#03c39a]"
            />
            <input
              type="password"
              placeholder="رمز عبور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#03c39a]"
            />
            <button
              className="w-full py-3 bg-[#04668d] text-white rounded-xl hover:bg-[#03c39a] transition"
            >
              ورود
            </button>
          </div>
        </Dialog>
      </motion.div>
    </div>
  );
}
