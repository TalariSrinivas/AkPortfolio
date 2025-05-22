import React from 'react';

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 text-white bg-gradient-to-b from-gray-900 via-gray-950 to-black"
    >
      <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">
        About Me
      </h1>

      <p className="text-gray-300 text-lg leading-relaxed">
        Hello, I'm <strong className="text-white">Guguloth Akash</strong>, a passionate Software Engineer with a strong foundation in C, C++, Java, Python, and JavaScript. I have hands-on experience in full-stack web development using the MERN stack. I'm eager to contribute to real-world projects and grow through continuous learning and collaboration.
      </p>

      {/* Education */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-teal-400">🎓 Education</h2>
        <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
          <li><strong>B.Tech in CSE</strong>, RGUKT-Basar (2022 - Present), GPA: 7.6</li>
          <li><strong>Pre-University Course</strong>, RGUKT-Basar (2020 - 2022), GPA: 8.67</li>
        </ul>
      </section>

      {/* Skills */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-teal-400">🛠️ Skills & Expertise</h2>
        <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
          <li><strong>Languages:</strong> JAVA, C, PYTHON</li>
          <li><strong>Frameworks & Libraries:</strong> Pandas, Numpy, Matplotlib</li>
          <li><strong>Tools & Technologies:</strong> MySQL, Git, GitHub</li>
          <li><strong>Platforms:</strong> Jupyter Notebook, VS Code</li>
          <li><strong>Soft Skills:</strong> Problem Solving, Quick Learner, Time Management</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-teal-400">📁 Projects</h2>
        <p className="text-gray-300 mt-2">
          <strong>Eco Snap Reward System</strong> — A web platform where users upload nature-themed photos and earn credits after admin approval. Includes admin dashboard, credit withdrawal, and gamified awareness features.
        </p>
      </section>

      {/* Certifications */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-teal-400">📜 Certifications</h2>
        <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
          <li><strong>Programming in Python</strong> (Meta) — March 2024</li>
          <li><strong>Web Development for Beginners</strong> – freeCodeCamp — March 2025</li>
        </ul>
      </section>

      {/* Achievements */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-teal-400">🏆 Achievements</h2>
        <p className="text-gray-300 mt-2">
          Solving algorithmic challenges on <strong>GeeksforGeeks</strong> and <strong>LeetCode</strong> with a solid grip on DSA.
        </p>
      </section>

      {/* Mission */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-teal-400">🎯 Mission Statement</h2>
        <p className="text-gray-300 mt-2">
          My mission is to build meaningful software applications using problem-solving and full-stack skills. I aim to grow continuously and contribute effectively as a team player and creative thinker.
        </p>
      </section>
    </div>
  );
}

export default About;
