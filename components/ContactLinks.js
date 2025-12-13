"use client";
import { motion } from "framer-motion";
import { PROFILE } from "../data/profile";

export default function ContactLinks() {
  const links = [
    {
      label: "Email",
      value: PROFILE.email,
      href: `mailto:${PROFILE.email}`,
      icon: "📧",
      isImage: false,
    },
    {
      label: "Phone",
      value: PROFILE.phone,
      href: `tel:${PROFILE.phone}`,
      icon: "📱",
      isImage: false,
    },
    {
      label: "LinkedIn",
      value: "Connect with me",
      href: PROFILE.socials.linkedin,
      icon: "/assets/linkedin-logo.png",
      isImage: true,
    },
    {
      label: "GitHub",
      value: "View my code",
      href: PROFILE.socials.github,
      icon: "💻",
      isImage: false,
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
      {links.map((link, idx) => (
        <motion.a
          key={idx}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : "_self"}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
          className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all border border-gray-300 dark:border-gray-700"
          whileHover={{ scale: 1.05, y: -5 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
        >
          {link.isImage ? (
            <img
              src={link.icon}
              alt={link.label}
              className="h-16 w-16 mx-auto mb-3 object-contain"
            />
          ) : (
            <div className="text-4xl mb-3">{link.icon}</div>
          )}
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
            {link.label}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            {link.value}
          </p>
        </motion.a>
      ))}
    </div>
  );
}
