import React from 'react';
import './Table.css';

const Table = ({ nameTitle, savedPositions, handleUsePosition, handleDeletePosition, setShowModal }) => {
    return (
        <div className="saved-position-list">
            <div className="modal-header">
                <h2>{nameTitle}</h2>
                <button className="btn-close" onClick={() => setShowModal(false)}>×</button>
            </div>
            {savedPositions.map((position) => (
                <div key={position.id} className="saved-position-item">
                    <div className="position-title">{position.name}</div>
                    <div className="position-coordinates">
                        {Object.entries(position.coordinates).map(([key, value]) => (
                            <div key={key} className="coordinate-item">
                                <span>{key}:</span>
                                <span>{value}</span>
                            </div>
                        ))}
                        <div className="position-actions">
                        <button 
                            className="btn-use"
                            onClick={() => handleUsePosition(position)}
                        >
                            Use
                        </button>
                        <button 
                            className="btn-delete"
                            onClick={() => handleDeletePosition(position)}
                        >
                            Delete
                        </button>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Table;
