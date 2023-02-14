import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { InputContainer } from "./InputContainer";
import { DateRangeType } from "../types/DateRangeType";

type DatePickerProps = {
  label: string;
  error: boolean;
  className?: string;
  onChange: (value: DateRangeType) => void;
};

export function DatePicker({
  label,
  className,
  error,
  onChange,
}: DatePickerProps) {
  const [selected, setSelected] = useState<DateRangeType>({
    startDate: "",
    endDate: "",
  });

  const handleValueChange = (newValue: any) => {
    setSelected(newValue);
    onChange(newValue);
  };

  return (
    <InputContainer label={label} className={className} error={error}>
      <Datepicker
        value={selected}
        onChange={handleValueChange}
        placeholder=" "
        displayFormat={"MM/DD/YYYY"}
        separator="to"
        primaryColor={"teal"}
        inputClassName="bg-transparent pl-0 pr-0 py-1 transition-none focus:outline-none focus:ring-0 focus:border-0 text-gray-600"
      />
    </InputContainer>
  );
}
