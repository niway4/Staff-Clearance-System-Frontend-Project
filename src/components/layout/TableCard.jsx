// import React from "react";

// const TableCard = ({ header, inputData, onRowClick }) => {

//    return (
//       <div>
//          <table className="w-full text-left border-black-300 border-2 border-gray-500">
//             <thead>
//                <tr className="bg-sideBarColor text-white text-lg font-semibold">
//                   {header.map((h, index) => (
//                      <th key={index} className="py-2 px-4">
//                         {h}
//                      </th>
//                   ))}
//                </tr>
//             </thead>
//             <tbody>
//                {inputData.map((inp) => (
//                   <tr
//                      key={inp.id}
//                      className="even:bg-evenTableRowColor  hover:bg-titleBarColor cursor-pointer"
//                      onClick={() => onRowClick(inp.id)}
//                   >
//                      {header.map((key, idx) => (
//                         <td key={idx} className="py-1 px-2">
//                            {inp[key.toLowerCase().replace(/\s+/g, "")]}
//                         </td>
//                      ))}
//                   </tr>
//                ))}
//             </tbody>
//          </table>
//       </div>
//    );
// };

// export default TableCard;
import React from "react";

const TableCard = ({ header, inputData, onRowClick }) => {
  return (
    <div>
      <table className="w-full text-left border-black-300 border-2 border-gray-500">
        <thead>
          <tr className="bg-sideBarColor text-white text-lg font-semibold">
            {header.map((h, index) => (
              <th key={index} className="py-2 px-4 whitespace-nowrap">
                {h.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {inputData.map((inp) => (
            <tr
              key={inp.id}
              className="even:bg-evenTableRowColor hover:bg-titleBarColor cursor-pointer"
              onClick={() => onRowClick(inp.id)}
            >
              {header.map((h, idx) => (
                <td key={idx} className="py-1 px-2">
                {h.render ? h.render(inp[h.key]) : inp[h.key]}
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
