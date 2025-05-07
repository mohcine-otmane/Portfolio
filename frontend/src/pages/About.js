import React from 'react';

const About = () => {
  const skills = [
    { name: 'React', level: '90%' },
    { name: 'JavaScript', level: '85%' },
    { name: 'Node.js', level: '80%' },
    { name: 'MongoDB', level: '75%' },
    { name: 'HTML/CSS', level: '95%' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
      <div className="relative mb-12 w-full flex flex-col items-center">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-full shadow-2xl">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
            />
          </div>
        </div>
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl border border-indigo-400/30 p-10 pt-20 w-full md:w-2/3 flex flex-col items-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl drop-shadow-lg mb-2">About Me</h2>
          <p className="mt-2 text-lg text-indigo-100 text-center max-w-2xl">I'm a passionate full-stack developer with a strong foundation in web technologies and a keen eye for creating intuitive user experiences.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mt-8">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl border border-indigo-400/30 p-10 hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white mb-6 drop-shadow">Skills</h3>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-indigo-100">{skill.name}</span>
                  <span className="text-sm font-medium text-indigo-100">{skill.level}</span>
                </div>
                <div className="w-full bg-gradient-to-r from-indigo-400/30 via-purple-400/30 to-pink-400/30 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-2.5 rounded-full" style={{ width: skill.level }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl border border-indigo-400/30 p-10 flex flex-col justify-center hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white mb-6 drop-shadow">Experience</h3>
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold text-white">Senior Developer</h4>
              <p className="text-indigo-200">Company Name • 2020 - Present</p>
              <p className="mt-2 text-indigo-100">Led development of multiple web applications using React and Node.js. Implemented CI/CD pipelines and improved application performance by 40%.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white">Full Stack Developer</h4>
              <p className="text-indigo-200">Previous Company • 2018 - 2020</p>
              <p className="mt-2 text-indigo-100">Developed and maintained web applications using modern JavaScript frameworks. Collaborated with design team to implement responsive UI components.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 