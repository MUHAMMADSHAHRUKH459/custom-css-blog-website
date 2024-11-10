// components/blog.tsx

import React from 'react';
import './blog.css';

const Blog: React.FC = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-title">All About JavaScript</h1>

      <section className="blog-section">
        <h2>Introduction to JavaScript</h2>
        <p>
          JavaScript is a versatile programming language used primarily for web development.
          It enables developers to create dynamic, interactive, and responsive websites and applications.
          JavaScript is often used alongside HTML and CSS to create modern, feature-rich web pages.
        </p>
      </section>

      <section className="blog-section">
        <h2>History of JavaScript</h2>
        <p>
          JavaScript was created by Brendan Eich in 1995 while working at Netscape Communications. Initially,
          it was called Mocha, then renamed to LiveScript, and finally became JavaScript.
          Over time, JavaScript has evolved from a small scripting language into a full-fledged programming language
          that powers the web.
        </p>
      </section>

      <section className="blog-section">
        <h2>Uses of JavaScript</h2>
        <p>
          JavaScript is used for a variety of tasks, including:
        </p>
        <ul>
          <li>Building interactive web pages with dynamic content.</li>
          <li>Creating web applications and single-page applications (SPAs).</li>
          <li>Enhancing the user experience with animations and interactive features.</li>
          <li>Building mobile apps (using frameworks like React Native).</li>
          <li>Server-side development with Node.js.</li>
        </ul>
      </section>

      <section className="blog-section">
        <h2>Why JavaScript is Popular</h2>
        <p>
          JavaScript is popularity can be attributed to several factors:
        </p>
        <ul>
          <li>It is supported by all modern web browsers without the need for plugins.</li>
          <li>JavaScript allows developers to build dynamic, real-time updates on websites.</li>
          <li>The language has a vast ecosystem with frameworks like React, Angular, and Vue.js.</li>
          <li>It has a large, active community that contributes to open-source projects and tools.</li>
        </ul>
      </section>

      <section className="blog-section">
        <h2>Future of JavaScript</h2>
        <p>
          JavaScript is constantly evolving, with new features being added regularly. With the rise of modern
          frameworks and tools, JavaScript will continue to play a central role in web development for the foreseeable future.
        </p>
      </section>
    </div>
  );
};

export default Blog;
