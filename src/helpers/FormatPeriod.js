import Moon from "../assets/svgs/icon-moon.svg"
import Sun from "../assets/svgs/icon-sun.svg"

export const FormartPeriod = (hour) => {
   if(hour >= 18){
      return {period: "PM", icon: Moon, salutation: "GOOD EVENING, IT'S CURRENTLY", }
   }
   else if(hour >= 12){
      return {period: "PM", icon: Sun, salutation: "GOOD AFTERNOON , IT'S CURRENTLY", }
   }
   else{
      return {period: "AM", icon: Moon, salutation: "GOOD MORNING, IT'S CURRENTLY", }
   }
};