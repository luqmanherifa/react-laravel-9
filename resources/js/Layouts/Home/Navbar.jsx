import Button from "@/Components/Button";
import { Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import savoraGreen from "../../../../public/images/savoragreen.png";

const Navbar = ({ homeColor, recommendationsColor, auth }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div>
            <div className="border-b border-gray-300">
                <div className="mx-auto flex h-[3.5rem] justify-between text-gray-50 max-w-7xl">
                    <div className="flex flex-row gap-10">
                        <div className="flex items-center">
                            <a href="/" className="flex items-center gap-3">
                                <img
                                    src={savoraGreen}
                                    alt=""
                                    className="w-6 rounded-full"
                                />
                                <p className="text-lg font-bold text-gray-800 hover:text-darkgreen">
                                    Savora
                                </p>
                            </a>
                        </div>

                        <nav className="items-center gap-5 text-sm font-semibold text-gray-800 flex">
                            <div>
                                <a
                                    href="/"
                                    className={`text-left text-sm font-semibold text-gray-700 hover:text-red-600 ${homeColor}`}
                                >
                                    Home
                                </a>
                            </div>
                            <div>
                                <a
                                    href="/recommendations"
                                    className={`text-left text-sm font-semibold text-gray-700 hover:text-red-600 ${recommendationsColor}`}
                                >
                                    Recommendations
                                </a>
                            </div>
                        </nav>
                    </div>

                    <div className="flex flex-row gap-5">
                        <div className="flex items-center">
                            <label htmlFor="simple-search" className="sr-only">
                                Search
                            </label>
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    id="simple-search"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full ps-5 p-2.5"
                                    placeholder="Search restaurant..."
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="p-2.5 ms-2 text-sm font-medium text-darkgreen bg-lightgreen rounded-full hover:bg-lightgreenhover"
                            >
                                <svg
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>

                        <div className="justify-end flex w-40">
                            {auth?.user ? (
                                <div>
                                    <div className="mt-2 flex justify-end">
                                        <button
                                            id="dropdownInformationButton"
                                            data-dropdown-toggle="dropdownInformation"
                                            className="inline-flex items-center rounded-2xl bg-lightgreen px-5 py-2.5 text-center text-sm font-medium text-darkgreen hover:bg-lightgreenhover"
                                            type="button"
                                            onClick={toggleDropdown}
                                        >
                                            <span className="line-clamp-1">
                                                {auth.user.name}
                                            </span>
                                            <svg
                                                className="ml-2.5 h-2.5 w-2.5"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 10 6"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="m1 1 4 4 4-4"
                                                />
                                            </svg>
                                        </button>
                                    </div>

                                    {isDropdownOpen && (
                                        <div
                                            id="dropdownInformation"
                                            className="relative z-10 mt-2 w-44 divide-y divide-gray-100 rounded-lg border border-gray-300 bg-white"
                                        >
                                            <div className="px-4 py-3 text-sm text-gray-900">
                                                <div className="flex gap-2">
                                                    <span className="line-clamp-1 font-semibold">
                                                        {auth.user.name}{" "}
                                                    </span>
                                                </div>
                                            </div>
                                            <ul
                                                className="py-1 text-sm text-gray-700"
                                                aria-labelledby="dropdownInformationButton"
                                            >
                                                <li>
                                                    <a
                                                        href="/dashboard"
                                                        className="block px-4 py-2 hover:bg-gray-100"
                                                    >
                                                        Dashboard
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="py-1">
                                                <Link
                                                    method="post"
                                                    href={route("logout")}
                                                    as="button"
                                                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    Log out
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="flex items-center">
                                    <Button
                                        text="Log in/Sign up"
                                        link="/login"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;