import { Fragment, forwardRef, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { InputContainer } from "./InputContainer";
import { ListType } from "../types/ListType";

type SelectProps = {
  label: string;
  error: boolean;
  list: ListType[];
  value: number;
  className?: string;
  onChange: (id: number) => void;
};

export const Select = forwardRef(
  ({ label, error, list, value, className, onChange }: SelectProps, ref) => {
    const [selected, setSelected] = useState<ListType>(
      list.find((i) => i.id === value) ?? { id: 0, value: "" }
    );

    function handleChange(item: ListType) {
      setSelected(item);
      onChange(item.id);
    }

    return (
      <InputContainer label={label} className={className} error={error}>
        <Listbox value={selected} onChange={handleChange}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate text-gray-600">
                {selected.value}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                <ChevronDownIcon
                  className="h-7 w-7 text-custom-dark-green"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {list.map((item) => (
                  <Listbox.Option
                    key={item.id}
                    className={({ active }) =>
                      `relative cursor-default select-none p-4 ${
                        active
                          ? "bg-custom-dark-green text-white"
                          : "text-gray-600"
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
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </InputContainer>
    );
  }
);
