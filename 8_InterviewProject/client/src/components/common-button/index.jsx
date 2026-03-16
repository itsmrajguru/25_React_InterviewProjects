import { Button } from "../ui/button";



function CommonButtonComponent({ type, buttonText, onClick, disabled }) {
    return (
        <div>
            <Button
                onClick={onClick || null}
                disabled={disabled || false}
                type={type || "submit"}
                className="flex h-11 justify-center items-center px-5 bg-black font-extrabold text-white border-none rounded hover:bg-black hover:text-white">
                {buttonText}
            </Button>
        </div>
    );
}

export default CommonButtonComponent;