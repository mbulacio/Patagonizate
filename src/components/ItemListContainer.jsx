import '../sass/App.css';
import ItemList from './ItemList';

export function ItemListContainer(gretting){
    const titulares = [{provincia:'Neuquén', hotel: 'Paraiso', excursiones: 'Recorrido x'}, 
                        {provincia:'Río Negro', hotel: 'Invernal', excursiones: 'Recorrido r'},
                        {provincia:'Chubut', hotel: 'Fontela', excursiones: 'Recorrido f'},
                        {provincia:'Santa Cruz', hotel: 'Hilton', excursiones: 'Recorrido c'},
                        {provincia:'Tierra del Fuego', hotel: 'Brisas', excursiones: 'Recorrido n'}];

    return(
        <>
            <div id="itemListContainerContenedor"> 
                <div className="itemListContainer"> 
                    <ul>
                        <li className="grettingTitle">{gretting.title}</li>
                        <li>{titulares[0].provincia}</li>
                        <li>{titulares[1].provincia}</li>
                        <li>{titulares[2].provincia}</li>
                        <li>{titulares[3].provincia}</li>
                        <li>{titulares[4].provincia}</li>
                    </ul> 
                </div>
                <div className="itemListContainer"> 
                    <ul>
                        <li className="grettingTitle">{gretting.titleDos}</li>
                        <li>{titulares[0].hotel}</li>
                        <li>{titulares[1].hotel}</li>
                        <li>{titulares[2].hotel}</li>
                        <li>{titulares[3].hotel}</li>
                        <li>{titulares[4].hotel}</li>
                    </ul> 
                </div>
                <div className="itemListContainer"> 
                    <ul>
                        <li className="grettingTitle">{gretting.titleTres}</li>
                        <li>{titulares[0].excursiones}</li>
                        <li>{titulares[1].excursiones}</li>
                        <li>{titulares[2].excursiones}</li>
                        <li>{titulares[3].excursiones}</li>
                        <li>{titulares[4].excursiones}</li>
                    </ul> 
                </div>
            </div>
            <img src="patagonizate-logo.png" alt="Patagonizate logo" id="logo" />
            <ItemList/>
        </>
    );
}