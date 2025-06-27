// "use client";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@radix-ui/react-select";
// import { useRouter } from "next/router";

// const MONTH_OPTIONS = [
//   { value: "01", label: "Janeiro" },
//   { value: "02", label: "Fevereiro" },
//   { value: "03", label: "Março" },
//   { value: "04", label: "Abril" },
//   { value: "05", label: "Maio" },
//   { value: "06", label: "Junho" },
//   { value: "07", label: "Julho" },
//   { value: "08", label: "Agosto" },
//   { value: "09", label: "Setembro" },
//   { value: "10", label: "Outubro" },
//   { value: "11", label: "Novembro" },
//   { value: "12", label: "Dezembro" },
// ];

// const TimeSelect = () => {
//   const { push } = useRouter();

//   const handleMonthChange = (month: string) => {
//     push(`/?month=${month}`);
//   };

//   return (
//     <Select onValueChange={(value) => handleMonthChange(value)}>
//       <SelectTrigger className="w-[150px] rounded-full">
//         <SelectValue placeholder="Mês" />
//       </SelectTrigger>
//       <SelectContent>
//         {MONTH_OPTIONS.map((option) => (
//           <SelectItem key={option.value} value={option.value}>
//             {option.label}
//           </SelectItem>
//         ))}
//       </SelectContent>
//     </Select>
//   );
// };

// export default TimeSelect;
"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

const MONTH_OPTIONS = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

const TimeSelect = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const month = searchParams.get("month");
  const handleMonthChange = (month: string) => {
    push(`/?month=${month}`);
  };
  return (
    <Select
      onValueChange={(value) => handleMonthChange(value)}
      defaultValue={month ?? ""}
    >
      <SelectTrigger className="w-[150px] rounded-full">
        <SelectValue placeholder="Mês" />
      </SelectTrigger>
      <SelectContent>
        {MONTH_OPTIONS.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default TimeSelect;
