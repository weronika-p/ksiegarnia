import React from 'react';

export const emptyOrder = () => {
    return(
        <div className="confirmation">
            <div className="confirmation-header">
                <i class="fas fa-times-circle fa-5x icon-box"></i>
            </div>
            <div className="confirmation-body">
                <p className="confirmation-text">Błąd - brak zamówienia. Proszę się skontatkować z administratorem strony</p>
            </div>
        </div>
    )
}