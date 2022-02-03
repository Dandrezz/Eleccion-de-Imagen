import React, { useEffect, useState } from 'react';
import Card from './Card';

const ChooseApp = () => {

    const [imagenUno, setImagenUno] = useState("")
    const [imagenDos, setImagenDos] = useState("")

    const handleClick = (url) => {
        fetch('https://picsum.photos/450/400').then(resp=>setImagenUno(resp.url))
        fetch('https://picsum.photos/450/400').then(resp=>setImagenDos(resp.url))
        console.log(url.match(/[0-9]+/)[0]);
    }

    useEffect(() => {
        fetch('https://picsum.photos/450/400').then(resp=>setImagenUno(resp.url))
        fetch('https://picsum.photos/450/400').then(resp=>setImagenDos(resp.url))
    }, [])

    return (
        <div className="all">
            <div>
                <div className="top-header">
                    <div className="div-hiddin" />
                    <div className="ui sizer vertical segment fontSize">
                        <div className="ui huge header header-custom">¿Qué prefieres?</div>
                    </div>
                    <div className="div-hiddin" />
                </div>
                <div className="ui middle aligned two column centered grid centered custom-animation">
                    <Card image={imagenUno} handleChangeImage={handleClick} />
                    <Card image={imagenDos} handleChangeImage={handleClick} />
                </div>
            </div>
        </div>
    )
}

export default ChooseApp;
