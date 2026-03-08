
import './styles.css'
function ModalPopup({id,header,body,footer}) {
    return (
        <div id={id ||"modal"}className="modal">
            <div className="modal-content">
                <div className="header">
                    <span className="close-modal-icon">&times;</span>
                    <h2>{header?header:"Header"}</h2>
                </div>
                <div className="body">
                    {
                        body?body:<div>
                            <h2>This is Body Page</h2>
                        </div>
                    }
                </div>
                <div className="footer">
                    {
                        footer?footer:<div>
                            <h2>Footer Page</h2>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default ModalPopup;