import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function HeroHome() {
  useEffect(() => {
    AOS.init({
      once: true, // Animations trigger only once
      duration: 700, // Animation duration in milliseconds
      easing: "ease-out-cubic", // Easing function
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="text-center px-4 sm:px-6">
        {/* Hero content */}
        <div>
          {/* Section header */}
          <div
            className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/80%),transparent)1]"
            data-aos="zoom-y-out"
          ></div>
          <h1
            className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-gray-900 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/80%),transparent)1]"
            data-aos="zoom-y-out"
            data-aos-delay="150"
          >
            AI Sentinel
            <br />
            Safety Incident Tracker.
          </h1>
          <div
            className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/80%),transparent)1]"
            data-aos="zoom-y-out"
          ></div>
          <div className="mx-auto max-w-3xl">
            <p
              className="mb-8 text-base text-gray-700 md:text-lg"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              Monitor, Report, and Safeguard — AI Sentinel is your trusted
              dashboard to track, report, and analyze AI-related safety
              incidents.
            </p>
          </div>
        </div>
        <div
            className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/80%),transparent)1]"
            data-aos="zoom-y-out"
          ></div>

      </div>
    </section>
  );
}

export default HeroHome;