import { ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { TextInput } from "../TextInput";
import { Button } from "../Button";
import { Select } from "../Select";
import { ListType } from "../../types/ListType";
import { DatePicker } from "../DatePicker";
import { SuggestInput } from "../SuggestInput";
import { DateRangeType } from "../../types/DateRangeType";

const list = [
  { id: 1, value: "Wade Cooper" },
  { id: 2, value: "Arlene Mccoy" },
  { id: 3, value: "Devon Webb" },
  { id: 4, value: "Tom Cook" },
  { id: 5, value: "Tanya Fox" },
  { id: 6, value: "Hellen Schmidt" },
];

type QuickQuoteProps = {
  peopleList: ListType[];
  transportationList: ListType[];
  onSubmit: () => void;
};

export function QuickQuoteActions() {
  function handleClick() {
    console.log("Clicked on Quick Quote action button");
  }

  return (
    <button type="button" onClick={handleClick}>
      <ArrowsPointingOutIcon className="w-6 h-6 text-gray-400" />
    </button>
  );
}

const FormSchema = z.object({
  from: z.string().min(1),
  destination: z.string().min(1),
  travelDate: z.object({
    startDate: z.string().min(1),
    endDate: z.string().min(1),
  }),
  people: z.number().min(1),
  transportation: z.number().min(1),
  name: z.string().min(1),
});

export type FormSchemaType = z.infer<typeof FormSchema>;

export function QuickQuote({
  peopleList,
  transportationList,
  onSubmit,
}: QuickQuoteProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<FormSchemaType>({
    defaultValues: {
      from: "",
      name: "",
      travelDate: {
        startDate: "",
        endDate: "",
      },
      people: 1,
      transportation: 1,
    },
    resolver: zodResolver(FormSchema),
  });

  function handleOnSubmit(data: any) {
    console.log(data);
  }

  return (
    <form className="p-4 grid grid-cols-2 gap-x-4 gap-y-6">
      <Controller
        name="from"
        control={control}
        render={({ field }) => (
          <SuggestInput
            label="From"
            {...field}
            error={!!errors.from}
            onChange={(value: string) => setValue("from", value)}
            list={list}
          />
        )}
      />
      <Controller
        name="destination"
        control={control}
        render={({ field }) => (
          <SuggestInput
            label="Destination"
            {...field}
            error={!!errors.from}
            onChange={(value: string) => setValue("destination", value)}
            list={list}
          />
        )}
      />

      <Controller
        name="travelDate"
        control={control}
        render={({ field }) => (
          <DatePicker
            label="Depart - Return Date"
            error={!!errors.from}
            className="col-span-2"
            onChange={(value: DateRangeType) => setValue("travelDate", value)}
          />
        )}
      />

      <Controller
        name="people"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            label="People"
            error={!!errors.people}
            onChange={(id: number) => setValue("people", id)}
            list={peopleList}
          />
        )}
      />

      <Controller
        name="transportation"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            label="Transportation"
            error={!!errors.people}
            onChange={(id: number) => setValue("transportation", id)}
            list={transportationList}
          />
        )}
      />

      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextInput label="Name" {...field} error={!!errors.name} />
        )}
      />

      <Button label="Create a quote" onClick={handleSubmit(handleOnSubmit)} />
    </form>
  );
}
