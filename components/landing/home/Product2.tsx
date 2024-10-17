"use client";
import React from 'react';
import { Card } from '@/components/ui/card';
import { motion } from "framer-motion";

const products = [
  {
    title: "Loan Packaging products",
    description: "AIBuildIQ's AI-driven platform automates the loan packaging process, ensuring that all documentation meets secondary market requirements.",
    image: "/assets/product2/1.jpg"
  },
  {
    title: "Risk Assessment and Financial Projections",
    description: "With AIBuildsIQ's real-time financial modeling tools, borrowers can assess risk and project loan performance over time.",
    image: "/assets/product2/2.jpg"
  },
  {
    title: "Access to Preferred Equity and 2nd Position Loans",
    description: "AIBuildIQ connects borrowers with flexible financing options, including perferred equity and second-position loans.",
    image: "/assets/product2/3.jpg"
  },

];

const Products = () => {
  return (
    <motion.section
      className="py-16 bg-gray-50 dark:bg-gray-800"
      id="products"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-[#0256c5] text-lg font-semibold mb-2">
          PRODUCT LINE
          </p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          For Borrowers:
          </h2>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
            >
              <Card index={index} service={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Products;
