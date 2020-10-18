import React, { useEffect, useState } from 'react'

const Card = ({ handleClick }) => {

    const [loadingImage, setLoadingImage] = useState(true);
    const [url, setUrl] = useState("");

    const loadImagen = async () => {
        const imagen = await fetch("https://picsum.photos/450/400");
        setUrl(imagen.url);
        setLoadingImage(false);
    }

    useEffect(() => {
        loadImagen();
    }, []);

    const handleChangeImage = () => {
        setLoadingImage(true);
        loadImagen();
        handleClick( url );
    }

    return (
        <>
            <div className="column">
                <div className="ui segment">
                    <div className="card imagen center">
                        <div className="ui image">
                            {
                                (loadingImage)
                                ?
                                (
                                    <i className="fas fa-circle-notch fa-spin fa-10x"></i>
                                )
                                :
                                (<img src={url} className="imagen" alt="Avatar" />)

                            }
                        </div>
                    </div>
                </div>
                <button
                    disabled={ loadingImage }
                    className="ui primary fluid button"
                    onClick={handleChangeImage}
                >Seleccionar</button>
            </div>
        </>
    )
}

export default Card;
