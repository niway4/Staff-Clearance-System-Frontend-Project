import React from "react";
import Button from "../ui/Button";
import { LogOut } from "lucide-react";

const TitleBar = ({ title }) => {
   return (
      <div className="flex bg-titleBarColor py-2 px-6 rounded-lg justify-between items-center mb-4">
         <h3 className="font-serif text-3xl font-bold">{title}</h3>
         <Button variant="ghost" className="flex items-center gap-1 ">
            <LogOut size={25} /> Log Out
         </Button>
      </div>
   );
};

export default TitleBar;
