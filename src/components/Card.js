import React from 'react'

const Card = ({ image, handleChangeImage }) => {

    return (
        <>
            <div className="column">
                <div className="ui segment">
                    <div className="card imagen center">
                        <div className="ui image image-size">
                            <img
                                src={image}
                                alt="Cargando..."
                            />
                        </div>
                    </div>
                </div>
                <button
                    className="ui primary fluid button"
                    onClick={()=>handleChangeImage(image)}
                >Seleccionar</button>
            </div>
        </>
    )
}

export default Card;
