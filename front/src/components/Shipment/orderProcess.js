const orderProgress = () => {
    return (
        <div className="order-progress-bar">
            <ul className="order-progress">
                <li>
                    <span className="fa-stack fa-2x order" aria-label="Koszyk etap pierwszy">
                        <i className="fa fa-circle fa-stack-2x progress-active"></i>
                        <i className="fas fa-shopping-cart fa-stack-1x icon"></i>
                    </span><br />
                    <p className="name-active">Koszyk</p>
                </li>
                <li>
                    <span className="fa-stack fa-2x order" aria-label="Dostawa etap drugi">
                        <i className="fa fa-circle fa-stack-2x progress-active"></i>
                        <i className="fas fa-truck fa-stack-1x icon"></i>
                    </span><br />
                    <p className="name-active">Dostawa</p>
                </li>
                <li>
                    <span className="fa-stack fa-2x order" aria-label="Potwierdzenie etap ostatni">
                        <i className="fa fa-circle fa-stack-2x progress"></i>
                        <i className="fas fa-clipboard-check fa-stack-1x icon"></i>
                    </span><br />
                    <p className="name">Potwierdzenie</p>
                </li>
            </ul>
        </div> 
    )
}

export default orderProgress