import orderProgress from "./orderProcess";

export const confirmation = (firstName, lastName) => {
    return(
        <>
        {orderProgress()}
        <div className="confirmation">
            <div className="confirmation-header">
                <i class="fas fa-check-circle fa-5x icon-box"></i>
                <h4>{`${firstName} ${lastName}`}</h4>
            </div>
            <div className="confirmation-body">
                <p className="confirmation-text">Dziękujemy za złożenie zamówienia</p>
            </div>
        </div>
        </>
    )
}