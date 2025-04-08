
import React from "react";
import Button from "../ui/Button"; // Adjust the path if necessary
import { useNavigate } from "react-router-dom";

const TableCard = ({ header, inputData }) => {
  const navigate = useNavigate();

  return (
    <div>
      <table className="w-full text-left border-black-300 border-2 border-gray-500">
        <thead>
          <tr className="bg-sideBarColor text-white text-lg font-semibold">
            {header.map((h, index) => (
              <th key={index} className="py-2 px-4">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {inputData.map((inp, index) => (
            <tr key={index} className="even:bg-evenTableRowColor">
              {header.map((key, idx) => (
                <td key={idx} className="py-1 px-2">
                  {key === "Action" ? (
                    <Button
                      onClick={() => { navigate('/debtorsprofile'); }}
                      className="bg-gold hover:bg-yellow-500 text-white px-4 py-1 rounded"
                    >
                      {inp[key.toLowerCase()]}
                    </Button>
                  ) : (
                    inp[key.toLowerCase().replace(/\s+/g, "")]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCard;