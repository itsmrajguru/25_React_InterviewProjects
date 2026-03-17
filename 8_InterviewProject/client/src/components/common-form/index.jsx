// import CommonButton from "../common-button";
// import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
// import { Input } from "../ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../ui/select";

// function CommonForm({ formControls = [], handleSubmit, form, btnText }) {
//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(handleSubmit)}>

//         {/* fetchting the Form Controls from config ana uploading in the box */}
        
//         {formControls?.length > 0
//           ? formControls.map((controlItem) => (
//               <FormField
//                 control={form.control}
//                 name={controlItem.id}
//                 render={({ field }) => {
//                   return (
//                     <FormItem>
//                       <FormLabel>{controlItem.label}</FormLabel>
//                       {controlItem.componentType === "input" ? (
//                         <FormControl>
//                           <Input
//                             placeholder={controlItem.placeholder}
//                             type={controlItem.type}
//                             {...field}
//                             value={field.value}
//                             className="w-full rounded h-[50px] border-none text-black bg-gray-200 text-[16px] outline-none drop-shadow-sm transition-all duration-300 ease-in-out focus:bg-gray-100 focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
//                           />
//                         </FormControl>
//                       ) : controlItem.componentType === "select" ? (
//                         <Select
//                           value={field.value}
//                           onValueChange={field.onChange}
//                         >
//                           <FormControl>
//                             <SelectTrigger className="w-full rounded h-[50px] border-none text-black bg-gray-200 text-[16px] outline-none drop-shadow-sm transition-all duration-300 ease-in-out focus:bg-gray-100 focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
//                               {field.value ? (
//                                 <SelectValue
//                                   className="text-black focus:text-black"
//                                   placeholder={controlItem.placeholder}
//                                 />
//                               ) : (
//                                 "Select"
//                               )}
//                             </SelectTrigger>
//                           </FormControl>
//                           <SelectContent className="bg-white">
//                             {controlItem.options.map((optionItem) => (
//                               <SelectItem
//                                 value={optionItem.id}
//                                 className="text-black cursor-pointer focus:text-black"
//                               >
//                                 {optionItem.label}
//                               </SelectItem>
//                             ))}
//                           </SelectContent>
//                         </Select>
//                       ) : null}
//                     </FormItem>
//                   );
//                 }}
//               />
//             ))
//           : null}
//         <div className="flex justify-center mt-4 items-center">
//           <CommonButton type={"submit"} buttonText={btnText} />
//         </div>
//       </form>
//     </Form>
//   );
// }

// export default CommonForm;

// CommonForm.jsx
import { useState } from "react";
import { Eye, EyeOff, ChevronDown, Loader2 } from "lucide-react";

const inputStyle = {
    width: "100%",
    height: "48px",
    borderRadius: "8px",
    padding: "0 14px",
    fontSize: "15px",
    fontFamily: "var(--sans)",
    color: "var(--text-h)",
    background: "var(--code-bg)",
    border: "1px solid var(--border)",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s, box-shadow 0.2s",
};

function PasswordInput({ field, placeholder }) {
    const [show, setShow] = useState(false);
    const [focused, setFocused] = useState(false);

    return (
        <div style={{ position: "relative" }}>
            <input
                {...field}
                type={show ? "text" : "password"}
                placeholder={placeholder}
                style={{
                    ...inputStyle,
                    paddingRight: "44px",
                    borderColor: focused ? "var(--brand-border)" : "var(--border)",
                    boxShadow: focused ? `0 0 0 3px var(--brand-bg)` : "none",
                }}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
            <button
                type="button"
                onClick={() => setShow(s => !s)}
                tabIndex={-1}
                style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    color: "var(--text)",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {show ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
        </div>
    );
}

function CustomSelect({ field, placeholder, options }) {
    const [open, setOpen] = useState(false);
    const selected = options.find(o => o.id === field.value);

    return (
        <div style={{ position: "relative" }}>
            <button
                type="button"
                onClick={() => setOpen(o => !o)}
                style={{
                    ...inputStyle,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    color: selected ? "var(--text-h)" : "var(--text)",
                    borderColor: open ? "var(--brand-border)" : "var(--border)",
                    boxShadow: open ? `0 0 0 3px var(--brand-bg)` : "none",
                }}
            >
                <span>{selected ? selected.label : placeholder || "Select"}</span>
                <ChevronDown
                    size={15}
                    style={{
                        color: "var(--text)",
                        transition: "transform 0.2s",
                        transform: open ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                />
            </button>

            {open && (
                <div style={{
                    position: "absolute",
                    zIndex: 50,
                    top: "calc(100% + 6px)",
                    left: 0,
                    right: 0,
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "10px",
                    boxShadow: "var(--shadow)",
                    overflow: "hidden",
                }}>
                    {options.map(opt => (
                        <button
                            key={opt.id}
                            type="button"
                            onClick={() => { field.onChange(opt.id); setOpen(false); }}
                            style={{
                                width: "100%",
                                textAlign: "left",
                                padding: "10px 14px",
                                fontSize: "15px",
                                fontFamily: "var(--sans)",
                                background: field.value === opt.id ? "var(--brand-bg)" : "none",
                                color: field.value === opt.id ? "var(--brand)" : "var(--text-h)",
                                border: "none",
                                cursor: "pointer",
                                transition: "background 0.15s",
                            }}
                            onMouseEnter={e => {
                                if (field.value !== opt.id)
                                    e.currentTarget.style.background = "var(--code-bg)";
                            }}
                            onMouseLeave={e => {
                                if (field.value !== opt.id)
                                    e.currentTarget.style.background = "none";
                            }}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

function FieldWrapper({ label, error, children }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{
                fontSize: "12px",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--text)",
            }}>
                {label}
            </label>
            {children}
            {error && (
                <span style={{ fontSize: "12px", color: "#e53e3e" }}>{error}</span>
            )}
        </div>
    );
}

function CommonForm({ formControls = [], handleSubmit, form, btnText }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { formState: { errors } } = form;

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            await handleSubmit(data);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

                {formControls.map((controlItem) => {
                    const fieldError = errors?.[controlItem.id]?.message;
                    const registration = form.register(controlItem.id);

                    return (
                        <FieldWrapper
                            key={controlItem.id}
                            label={controlItem.label}
                            error={fieldError}
                        >
                            {controlItem.componentType === "input" && controlItem.type === "password" ? (
                                <PasswordInput
                                    field={registration}
                                    placeholder={controlItem.placeholder}
                                />
                            ) : controlItem.componentType === "input" ? (
                                <FocusInput
                                    registration={registration}
                                    controlItem={controlItem}
                                    hasError={!!fieldError}
                                />
                            ) : controlItem.componentType === "select" ? (
                                <CustomSelect
                                    field={{
                                        value: form.watch(controlItem.id),
                                        onChange: (val) => form.setValue(controlItem.id, val),
                                    }}
                                    placeholder={controlItem.placeholder}
                                    options={controlItem.options}
                                />
                            ) : null}
                        </FieldWrapper>
                    );
                })}

                {/* Submit button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                        width: "100%",
                        height: "48px",
                        marginTop: "0.25rem",
                        borderRadius: "8px",
                        background: "var(--brand)",
                        color: "#fff",
                        fontFamily: "var(--sans)",
                        fontSize: "15px",
                        fontWeight: 500,
                        border: "none",
                        cursor: isSubmitting ? "not-allowed" : "pointer",
                        opacity: isSubmitting ? 0.65 : 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        transition: "opacity 0.2s, transform 0.15s",
                        letterSpacing: "0.01em",
                    }}
                    onMouseEnter={e => { if (!isSubmitting) e.currentTarget.style.opacity = "0.88"; }}
                    onMouseLeave={e => { if (!isSubmitting) e.currentTarget.style.opacity = "1"; }}
                    onMouseDown={e => { if (!isSubmitting) e.currentTarget.style.transform = "scale(0.98)"; }}
                    onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />
                            <span>Please wait...</span>
                        </>
                    ) : btnText}
                </button>

            </div>
        </form>
    );
}

// Separate component to cleanly handle focus state on regular inputs
function FocusInput({ registration, controlItem, hasError }) {
    const [focused, setFocused] = useState(false);
    return (
        <input
            {...registration}
            type={controlItem.type || "text"}
            placeholder={controlItem.placeholder}
            style={{
                ...inputStyle,
                borderColor: hasError
                    ? "#e53e3e"
                    : focused ? "var(--brand-border)" : "var(--border)",
                boxShadow: hasError
                    ? "0 0 0 3px rgba(229,62,62,0.1)"
                    : focused ? "0 0 0 3px var(--brand-bg)" : "none",
            }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
        />
    );
}

export default CommonForm;