import { Fragment, useState, forwardRef } from "react";
import { Combobox, Transition } from "@headlessui/react";

import { InputContainer } from "./InputContainer";
import { ListType } from "../types/ListType";

type SuggestInputProps = {
  label: string;
  error: boolean;
  value: string;
  className?: string;
  onChange: (value: string) => void;
  list: ListType[];
};

export const SuggestInput = forwardRef(
  (
    {
      label,
      className,
      error,
      value,
      onChange,
      list,
      ...rest
    }: SuggestInputProps,
    ref
  ) => {
    const [selected, setSelected] = useState<ListType>({ id: 0, value: "" });
    const [query, setQuery] = useState("");

    function handleChange(item: ListType) {
      setSelected(item);
      if (onChange) onChange(item.value);
    }

    const filteredList =
      query === ""
        ? list
        : list.filter((item) =>
            item.value
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.toLowerCase().replace(/\s+/g, ""))
          );

    return (
      <InputContainer label={label} className={className} error={error}>
        <Combobox value={selected} onChange={handleChange}>
          <div className="relative mt-1">
            <div className="relative w-full cursor-default overflow-hidden text-left focus:outline-none sm:text-sm">
              <Combobox.Input
                className="w-full border-none text-sm leading-5  bg-transparent focus:ring-0 focus:outline-none text-gray-600"
                displayValue={(item: any) => (item ? item.value : "")}
                onChange={(event) => setQuery(event.target.value)}
                {...rest}
              />
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options className="absolute mt-1 max-h-60 w-full z-50 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredList.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-400">
                    Nothing found
                  </div>
                ) : (
                  filteredList.map((item) => (
                    <Combobox.Option
                      key={item.id}
                      className={({ active }) =>
                        `relative cursor-default select-none p-4 ${
                          active
                            ? "bg-custom-dark-green text-white"
                            : "text-gray-900"
                        }`
                      }
                      value={item}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {item.value}
                          </span>
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </InputContainer>
    );
  }
);
