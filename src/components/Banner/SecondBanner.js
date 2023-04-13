import React from 'react';

const SecondBanner = () => {
    return (
        <section className="md:flex justify-evenly items-center mt-20 mx-5">
        {/* section left part  */}
        <div >
          <h1 className="text-white text-5xl font-semibold mb-6">
            You do the business, <br /> we’ll handle the money.
          </h1>
          <p className="text-slate-400 text-lg">
            With the right credit card, you can improve your financial life{" "}
            <br /> by building credit, earning rewards and saving money. But{" "}
            <br /> with hundreds of credit cards on the market.
          </p>
          <button className="bg-btnbg px-6 py-3 rounded-xl font-medium text-lg mt-16">Get Started</button>
        </div>
        {/* section right part  */}
        <div className='mt-10'>
          <div className=" md:w-96 w-full flex justify-center items-center gap-5 py-4">
            <span>
              <svg
                width="44"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="32"
                  cy="32"
                  r="32"
                  fill="#09977C"
                  fill-opacity="0.1"
                />
                <path
                  d="M41.4692 35.7122C41.0548 36.1138 40.8644 36.6946 40.9588 37.2642L42.3812 45.1362C42.5012 45.8034 42.2196 46.4786 41.6612 46.8642C41.114 47.2642 40.386 47.3122 39.7892 46.9922L32.7028 43.2962C32.4564 43.165 32.1828 43.0946 31.9028 43.0866H31.4692C31.3188 43.109 31.1716 43.157 31.0372 43.2306L23.9492 46.9442C23.5988 47.1202 23.202 47.1826 22.8132 47.1202C21.866 46.941 21.234 46.0386 21.3892 45.0866L22.8132 37.2146C22.9076 36.6402 22.7172 36.0562 22.3028 35.6482L16.5252 30.0482C16.042 29.5794 15.874 28.8754 16.0948 28.2402C16.3092 27.6066 16.8564 27.1442 17.5172 27.0402L25.4692 25.8866C26.074 25.8242 26.6052 25.4562 26.8772 24.9122L30.3812 17.7282C30.4644 17.5682 30.5716 17.421 30.7012 17.2962L30.8452 17.1842C30.9204 17.101 31.0068 17.0322 31.1028 16.9762L31.2772 16.9122L31.5492 16.8002H32.2228C32.8244 16.8626 33.354 17.2226 33.6308 17.7602L37.1812 24.9122C37.4372 25.4354 37.9348 25.7986 38.5092 25.8866L46.4612 27.0402C47.1332 27.1362 47.6948 27.6002 47.9172 28.2402C48.1268 28.8818 47.946 29.5858 47.4532 30.0482L41.4692 35.7122Z"
                  fill="#00F6FF"
                />
              </svg>
            </span>
            <div>
            <h1 className="text-white font-semibold text-lg">Rewards</h1>
              <p className="text-slate-400 text-sm">
                The best credit cards offer some tantalizing <br /> combinations
                of promotions and prizes
              </p>
            </div>
          </div>
          <div className="bg-bg2 md:w-96 w-full flex justify-center items-center gap-5 rounded-lg my-9 py-4">
            <span>
              <svg
                width="44"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="32"
                  cy="32"
                  r="32"
                  fill="#09977C"
                  fill-opacity="0.1"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M31.5649 47.8619C31.7421 47.9544 31.9402 48.0015 32.1383 47.9999C32.3364 47.9984 32.533 47.9497 32.7118 47.8556L38.4204 44.8039C40.0392 43.941 41.3069 42.9761 42.2959 41.8527C44.4463 39.4051 45.6206 36.2813 45.5996 33.0602L45.532 22.4352C45.5255 21.2114 44.7217 20.1194 43.533 19.7224L32.9131 16.1593C32.2736 15.9428 31.5729 15.9475 30.9447 16.1703L20.3651 19.8605C19.1828 20.2731 18.3935 21.373 18.4 22.5983L18.4676 33.2155C18.4886 36.4413 19.7031 39.551 21.8889 41.9735C22.8876 43.0812 24.1666 44.032 25.8031 44.8808L31.5649 47.8619ZM30.0537 35.3743C30.2921 35.6034 30.6013 35.7163 30.9106 35.7132C31.2199 35.7116 31.5275 35.5955 31.7627 35.3633L38.0013 29.213C38.47 28.7501 38.4652 28.0064 37.9916 27.5498C37.5164 27.0933 36.7513 27.0964 36.2825 27.5593L30.8929 32.8718L28.6861 30.7505C28.2109 30.294 27.4474 30.2987 26.9771 30.7615C26.5083 31.2244 26.5132 31.9681 26.9883 32.4246L30.0537 35.3743Z"
                  fill="#00F6FF"
                />
              </svg>
            </span>
            <div>
              <h1 className="text-white font-semibold text-lg">100% Secured</h1>
              <p className="text-slate-400 text-sm">
              We take proactive steps make sure your <br /> information and transactions are secure.
              </p>
            </div>
          </div>
          <div className=" md:w-96 w-full flex justify-center items-center gap-5 py-4">
            <span>
              <svg
                width="44"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="32"
                  cy="32"
                  r="32"
                  fill="#09977C"
                  fill-opacity="0.1"
                />
                <path
                  d="M45.497 16.9312C44.6967 16.1098 43.5122 15.8037 42.4077 16.1259L16.6532 23.6152C15.4879 23.939 14.662 24.8683 14.4395 26.0489C14.2122 27.2504 15.0061 28.7757 16.0433 29.4135L24.0962 34.3629C24.9222 34.8702 25.9882 34.743 26.6717 34.0537L35.8931 24.7749C36.3573 24.2917 37.1256 24.2917 37.5898 24.7749C38.0539 25.242 38.0539 25.999 37.5898 26.4821L28.3524 35.7625C27.6673 36.4503 27.5392 37.5213 28.0434 38.3524L32.9639 46.486C33.5401 47.4524 34.5325 48 35.621 48C35.749 48 35.8931 48 36.0211 47.9839C37.2696 47.8228 38.262 46.9692 38.6302 45.7612L46.2653 20.0397C46.6014 18.9444 46.2973 17.7526 45.497 16.9312Z"
                  fill="#00F6FF"
                />
              </svg>
            </span>
            <div>
                <h1 className="text-white font-semibold text-lg">Balance Transfer</h1>
                <p className="text-slate-400 text-sm">A balance transfer credit card can save <br /> you a lot of money in interest charges.</p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default SecondBanner;