

//this function is defining the form fields
function CommonInput({ label, type, name, id, value, placeholder, onChange }) {
    return (
        <div style={{ marginBottom: "20px" }}>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={onChange} />
            <br/>
        </div>
    )
}
export default CommonInput;