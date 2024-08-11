import React from "react";

const CustomInput = ({ form, name, label, placeholder }) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-ful flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type="password"
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
