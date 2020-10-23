import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFinishChoosen, setStartChoosen } from '../actions/choice';

const Card = ({ handleClick }) => {

    const dispatch = useDispatch();
    const [loadingImage, setLoadingImage] = useState(true);
    const [url, setUrl] = useState("");
    const { isChoosen } = useSelector(state => state.choice);


    const loadImagen = async () => {
        const imagen = await fetch("https://picsum.photos/450/400");
        setUrl(imagen.url);
        setLoadingImage(false);
    }

    useEffect(() => {
        loadImagen();
        dispatch(setFinishChoosen());
    }, [isChoosen, dispatch]);



    const handleChangeImage = () => {
        setLoadingImage(true);
        dispatch(setStartChoosen());
        handleClick(url);
    }

    const handleLoadingImage = () => {

    }

    return (
        <>
            <div className="column">
                <div className="ui segment">
                    <div className="card imagen center">
                        <div className="ui image image-size">
                            <img
                                src={url}
                                alt="Avatar"
                                onLoad={handleLoadingImage}
                            />
                            {/* {
                                (loadingImage)
                                    ?
                                    (
                                        <i className="fas fa-circle-notch fa-spin fa-10x"></i>
                                    )
                                    :
                                    (
                                        <img 
                                            src={url} 
                                            alt="Avatar"
                                            onLoad={ handleLoadingImage }
                                        />
                                    )
                            } */}
                        </div>
                    </div>
                </div>
                <button
                    disabled={loadingImage}
                    className="ui primary fluid button"
                    onClick={handleChangeImage}
                >Seleccionar</button>
            </div>
        </>
    )
}

export default Card;
