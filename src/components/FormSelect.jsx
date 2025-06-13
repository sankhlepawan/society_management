import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Label,
} from "@/components/ui";
import { Controller } from "react-hook-form";

export const FormSelect = ({
  control,
  loading,
  options,
  errors,
  label,
  rules,
  name,
  placeholder,
  disabled = false,
}) => {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Controller
        disabled={disabled}
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <Select
            value={field.value}
            onValueChange={(val) => field.onChange(val)}
            disabled={disabled}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {loading
                  ? "Loading..."
                  : options.map((item) => (
                      <SelectItem key={item.key} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      />
      {errors && errors[name] && (
        <p className="text-red-500 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
};
