import React from "react";

const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/3021314/pexels-photo-3021314.jpeg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold">
              🎓 Welcome to StudyCamp!
            </h1>
            <p>
              Challenge your knowledge. Track your progress. Climb the
              leaderboard.
            </p>
            <p className="mb-5">
              At StudyCamp, learning becomes a game! Take quizzes on a wide
              range of subjects, test your skills, and earn points with every
              correct answer. Whether you're brushing up on your basics or
              mastering advanced topics, StudyCamp helps you stay sharp and
              competitive.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
