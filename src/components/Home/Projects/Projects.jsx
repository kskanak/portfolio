import React from "react";
import { FiExternalLink } from "react-icons/fi";
import doctor from "../../../assets/doctors-portal.png";
import alike from "../../../assets/alike-new.PNG";
import interior from "../../../assets/interior.PNG";

const Projects = () => {
  return (
    <div id="projects">
      <section className="p-4 lg:p-8 bg-gray-800 text-gray-100">
        <h2 className="text-5xl font-semibold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">
          Projects
        </h2>
        <div className="container mx-auto space-y-12">
          {/* projects 1 */}
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={doctor}
              alt=""
              className="h-80 bg-gray-500 aspect-video transition hover:scale-110 duration-300"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
              <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                Doctors Portal
              </h1>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                Doctor's Appointment based website, Here user can book and
                cancel appointmnet. Dashboard panel for user and admin, Admin
                can delete user and Add doctor to the website. Stripe payment
                system, with firebase authentication.
              </p>
              <div className="technologies my-3">
                <span className="border py-1 px-1 rounded-md mr-3">React</span>
                <span className="border py-1 px-1 rounded-md mr-3">
                  Firebase
                </span>
                <span className="border py-1 px-1 rounded-md mr-3">
                  Mongodb
                </span>
                <span className="border py-1 px-1 rounded-md mr-3">
                  Express
                </span>
                <span className="border py-1 px-1 rounded-md mr-3">Jwt</span>
                <span className="border py-1 px-1 rounded-md">Tailwind</span>
              </div>
              <div className="links my-4 flex">
                <a
                  href="https://doctors-portal-a0261.web.app/"
                  target="_blank"
                  className="border py-1 px-1 rounded-md mr-3 flex items-center"
                >
                  Live Site{" "}
                  <FiExternalLink className="md:text-3xl font-semibold ml-2" />
                </a>
                <a
                  href=" https://github.com/kskanak/doctors-portal"
                  target="_blank"
                  className="border py-1 px-1 rounded-md mr-3 flex items-center"
                >
                  Client Github{" "}
                  <FiExternalLink className="md:text-3xl font-semibold ml-2" />
                </a>
                <a
                  href="https://github.com/kskanak/doctors-portal-server-side"
                  target="_blank"
                  className="border py-1 px-1 rounded-md mr-3 flex items-center"
                >
                  Server Github{" "}
                  <FiExternalLink className="md:text-3xl font-semibold ml-2" />
                </a>
              </div>
            </div>
          </div>

          {/* projects 2 */}

          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src={alike}
              alt=""
              className="h-80 bg-gray-500 aspect-video transition hover:scale-110 duration-300"
            />

            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
              <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                Alike New
              </h1>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                Basically this is used used Bike selling website . Here seller
                can sell their phone and buyer can purchase Bike .This website
                has firebase authentication with JWT security
              </p>
              <div className="technologies my-3">
                <span className="border py-1 px-1 rounded-md mr-3">React</span>
                <span className="border py-1 px-1 rounded-md mr-3">
                  Firebase
                </span>
                <span className="border py-1 px-1 rounded-md mr-3">
                  Mongodb
                </span>
                <span className="border py-1 px-1 rounded-md mr-3">
                  Express
                </span>
                <span className="border py-1 px-1 rounded-md mr-3">Jwt</span>
                <span className="border py-1 px-1 rounded-md">Tailwind</span>
              </div>
              <div className="links my-4 flex">
                <a
                  href="https://alike-new.web.app/"
                  target="_blank"
                  className="border py-1 px-1 rounded-md mr-3 flex items-center"
                >
                  Live Site{" "}
                  <FiExternalLink className="md:text-3xl font-semibold ml-2" />
                </a>
                <a
                  href="https://github.com/kskanak/alike-new-client-side"
                  target="_blank"
                  className="border py-1 px-1 rounded-md mr-3 flex items-center"
                >
                  Client Github{" "}
                  <FiExternalLink className="md:text-3xl font-semibold ml-2" />
                </a>
                <a
                  href="https://github.com/kskanak/alike-new-server-side"
                  target="_blank"
                  className="border py-1 px-1 rounded-md mr-3 flex items-center"
                >
                  Server Github{" "}
                  <FiExternalLink className="md:text-3xl font-semibold ml-2" />
                </a>
              </div>
            </div>
          </div>

          {/* projects 3 */}
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={interior}
              alt=""
              className="h-80 bg-gray-500 aspect-video transition hover:scale-110 duration-300"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
              <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                Ks Interior
              </h1>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                This is a service review website. Here user can review services
                and also update their review,
              </p>
              <div className="technologies my-3">
                <span className="border py-1 px-1 rounded-md mr-3">React</span>
                <span className="border py-1 px-1 rounded-md mr-3">
                  Firebase
                </span>
                <span className="border py-1 px-1 rounded-md mr-3">
                  Mongodb
                </span>
                <span className="border py-1 px-1 rounded-md mr-3">
                  Express
                </span>
                <span className="border py-1 px-1 rounded-md mr-3">Jwt</span>
                <span className="border py-1 px-1 rounded-md">Tailwind</span>
              </div>
              <div className="links my-4 flex">
                <a
                  href="https://ks-interior.firebaseapp.com/"
                  target="_blank"
                  className="border py-1 px-1 rounded-md mr-3 flex items-center"
                >
                  Live Site{" "}
                  <FiExternalLink className="md:text-3xl font-semibold ml-2" />
                </a>
                <a
                  href="https://github.com/kskanak/ks-interior"
                  target="_blank"
                  className="border py-1 px-1 rounded-md mr-3 flex items-center"
                >
                  Client Github{" "}
                  <FiExternalLink className="md:text-3xl font-semibold ml-2" />
                </a>
                <a
                  href="https://github.com/kskanak/ks-interior-server-side"
                  target="_blank"
                  className="border py-1 px-1 rounded-md mr-3 flex items-center"
                >
                  Server Github{" "}
                  <FiExternalLink className="md:text-3xl font-semibold ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
