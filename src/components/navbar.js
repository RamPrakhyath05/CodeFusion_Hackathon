"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="main-div">
      <h2 className="heading cursor-pointer">GovAgent</h2>
      <div className="sub-div">
        <button className="nav-button">Home</button>
        <button className="nav-button">About</button>
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="nav-button">Documents</button>
          {isDropdownOpen && (
            <div className="absolute bg-white shadow-lg mt-1 rounded-xl p-2">
              <ul className="flex flex-col">
                <li className="py-1 hover:bg-gray-200 cursor-pointer">
                  <button
                    onClick={() => router.push("/documents/Aadhar%20Card")}
                  >
                    Aadhar Card
                  </button>
                </li>
                <li className="py-1 hover:bg-gray-200 cursor-pointer">
                  <button onClick={() => router.push("/documents/PAN%20Card")}>
                    PAN Card
                  </button>
                </li>
                <li className="py-1 hover:bg-gray-200 cursor-pointer">
                  <button
                    onClick={() => router.push("/documents/Driving%20License")}
                  >
                    Driving License
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="sub-div">
        <button className="login-button">Login/Sign Up</button>
      </div>
    </div>
  );
}
