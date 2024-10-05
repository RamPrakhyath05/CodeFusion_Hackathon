"use client"
import Navbar from "@/components/navbar";
import { useState } from "react";

export default function Home() {
  // State to track the selected proof and current step
  const [selectedProof, setSelectedProof] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");

  // Handle the proof selection and move to the next step
  const handleProofSelection = (event) => {
    setSelectedProof(event.target.value);
    setError(""); // Clear any error when selecting a valid proof
  };

  // Handle continue button click
  const handleContinue = () => {
    if (!selectedProof) {
      setError("Please select a proof of identity to continue.");
    } else {
      setStep(2);
    }
  };

  // Details for each identity proof
  const getDetails = () => {
    switch (selectedProof) {
      case "Aadhaar":
        return {
          description:
            "Aadhaar is a unique identification number issued by the Government of India to residents. It is essential for various government schemes and services.",
          requiredDocuments: [
            "Proof of Identity (Passport, PAN Card, etc.)",
            "Proof of Address (Utility Bill, Bank Statement, etc.)",
            "Proof of Date of Birth (Birth Certificate, School Certificate, etc.)",
          ],
          possibleDocuments: [
            "Voter ID",
            "Driving License",
            "Ration Card",
            "NREGA Job Card",
            "Bank Passbook",
          ],
        };
      case "PAN":
        return {
          description:
            "PAN (Permanent Account Number) is a unique 10-character alphanumeric identity issued to all taxpayers in India. It is essential for financial transactions.",
          requiredDocuments: [
            "Proof of Identity (Voter ID, Passport, Aadhaar Card, etc.)",
            "Proof of Address (Utility Bill, Driving License, etc.)",
            "Recent Passport-sized Photograph",
          ],
          possibleDocuments: [
            "Bank Account Statement",
            "Employer Certificate",
            "Rental Agreement",
            "Electricity Bill",
            "Landline Telephone Bill",
          ],
        };
      case "Driving License":
        return {
          description:
            "A Driving License is an official document that authorizes an individual to operate one or more types of vehicles. It is issued by the Regional Transport Office (RTO).",
          requiredDocuments: [
            "Proof of Identity (Aadhaar Card, Passport, etc.)",
            "Proof of Address (Utility Bill, Rent Agreement, etc.)",
            "Proof of Age (Birth Certificate, School Certificate, etc.)",
            "Medical Certificate (for some categories of license)",
          ],
          possibleDocuments: [
            "Voter ID",
            "PAN Card",
            "Bank Passbook",
            "Ration Card",
            "Passport",
          ],
        };
      default:
        return null;
    }
  };

  const details = getDetails();

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-100 to-gray-300 overflow-hidden">
        {step === 1 && (
          <div className="p-4 bg-white rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Choose Proof of Identity</h2>

            <div className="flex flex-col space-y-4">
              <label>
                <input
                  type="radio"
                  value="Aadhaar"
                  checked={selectedProof === "Aadhaar"}
                  onChange={handleProofSelection}
                  className="mr-2"
                />
                Aadhaar Card
              </label>

              <label>
                <input
                  type="radio"
                  value="PAN"
                  checked={selectedProof === "PAN"}
                  onChange={handleProofSelection}
                  className="mr-2"
                />
                PAN Card
              </label>

              <label>
                <input
                  type="radio"
                  value="Driving License"
                  checked={selectedProof === "Driving License"}
                  onChange={handleProofSelection}
                  className="mr-2"
                />
                Driving License
              </label>
            </div>

            {error && <p className="text-red-500 mt-4">{error}</p>}

            <button
              className="bg-blue-500 text-white py-2 px-4 rounded mt-6"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        )}

        {step === 2 && details && (
          <div className="p-4 bg-white rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">{selectedProof} Details</h2>
            <p className="mb-4">{details.description}</p>

            {/* Display minimum required documents */}
            <h3 className="text-lg font-semibold mb-2">Minimum Required Documents (Mandatory):</h3>
            <p className="mb-2">These documents must be provided to apply for {selectedProof}.</p>
            <ul className="list-disc list-inside">
              {details.requiredDocuments.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>

            {/* Display all possible documents */}
            <h3 className="text-lg font-semibold mb-4 mt-6">Additional Possible Documents (Optional):</h3>
            <p className="mb-2">You can also provide any of these additional documents for quicker processing or validation.</p>
            <ul className="list-disc list-inside">
              {details.possibleDocuments.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>

            <button
              className="bg-green-500 text-white py-2 px-4 rounded mt-6"
              onClick={() => alert(`You can now apply for ${selectedProof}!`)}
            >
              Apply Now
            </button>
          </div>
        )}
      </div>
    </>
  );
}
