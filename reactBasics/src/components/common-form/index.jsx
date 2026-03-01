import CommonInput from "../common-input";



const FormTypes = {
    INPUT: 'input',
    SELECT: 'select',
    TEXTAREA: 'TextArea'
}

function CommonForm({ formFieldValues = [], formData, setFormData,ButtonText,OnHandleSubmit}) {
    function renderFormElement(field) {
        switch (field.componentType) {
            case FormTypes.INPUT:
                return (
                    <CommonInput
                        key={field.id} // Added key for React list rendering
                        label={field.label}
                        name={field.name}
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                [event.target.name]: event.target.value,
                            })
                        }
                    />
                );

            default:
                return (
                    <CommonInput
                        key={field.id} // Added key for React list rendering
                        label={field.label}
                        name={field.name}
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                [event.target.name]: event.target.value,
                            })
                        }
                    />
                );
        }
    }

    return (
        <form  onSubmit={OnHandleSubmit}> 
            {formFieldValues?.length > 0 ?
                formFieldValues.map((field) =>
                    renderFormElement(field)
                ) : null}

            <div style={{marginTop:"15px"}}>
                <button type="submit">{ButtonText || "Submit"}</button>
            </div>

        </form>
    )
}

export default CommonForm;
