import React from 'react';
import useResources from './useResources';

const  ResourceList = () => {
    const resources = useResources();

    const formatDate = (string) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }

    const translateColor = colorSpanish => {
        let colorEnglish = "";

        switch (colorSpanish) {
            case "rojo":
                colorEnglish = "red";
                break;
            case "naranja":
                colorEnglish = "orange";
                break;
            case "amarillo":
                colorEnglish = "yellow";
                break;
            case "verde":
                colorEnglish = "green";
                break;
            case "azul":
                colorEnglish = "blue";
                break;
            case "violeta":
                colorEnglish = "violet";
                break;
            case "rosa":
                colorEnglish = "pink";
                break;
            case "negro":
                colorEnglish = "black";
                break;
            default:
                colorEnglish = "blue"
        }

        return colorEnglish;
    }

    return (
        <div>
            {
                Object.entries(resources)
                .map( ([key, value]) =>
                <div  key={key}>
                    <div className="ui container">
                        <div className="ui relaxed divided items">
                            <div className="item">
                                <div className="content">
                                    <br />
                                    <div className="header">Hoy No Circula</div>
                                    <div className="meta">MEX</div>
                                    <div className="description">
                                        Aplicación para Integrar Twitter, Kafka, Python y React
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="content">
                                    <span>Fecha: {formatDate(value.date)}</span>
                                    <br />
                                    <span>
                                        Color: <br />
                                        <div className={`ui ${translateColor(value.message.color)} horizontal label`}>{value.message.color}</div>
                                    </span>
                                    <br /> <br />
                                    <span>Placas: <br /> {value.message.placas.map(placa => <div class="ui label">{placa}</div>)}</span>
                                    <br /> <br />
                                    <span>Hologramas: <br />
                                        {value.message.hologramas.map(holograma => <div class="ui label">{holograma}</div>)}
                                    </span>
                                </div>
                            </div>
                            <div className="item">
                                <div className="extra content">
                                    <span className="right floated created">
                                        <span className="friends">
                                            @Powered by Alex, Juan, Nelson
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
         </div>         

    );
}

export default ResourceList;
