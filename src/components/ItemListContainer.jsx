import '../sass/App.css';
import ItemCount from './ItemCount';

export function ItemListContainer(gretting){
    const productos = [{provincia:'Neuquén', hotel: 'Paraiso', excursiones: 'Recorrido x'}, 
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
                        <li>{productos[0].provincia}</li>
                        <li>{productos[1].provincia}</li>
                        <li>{productos[2].provincia}</li>
                        <li>{productos[3].provincia}</li>
                        <li>{productos[4].provincia}</li>
                    </ul> 
                </div>
                <div className="itemListContainer"> 
                    <ul>
                        <li className="grettingTitle">{gretting.titleDos}</li>
                        <li>{productos[0].hotel}</li>
                        <li>{productos[1].hotel}</li>
                        <li>{productos[2].hotel}</li>
                        <li>{productos[3].hotel}</li>
                        <li>{productos[4].hotel}</li>
                    </ul> 
                </div>
                <div className="itemListContainer"> 
                    <ul>
                        <li className="grettingTitle">{gretting.titleTres}</li>
                        <li>{productos[0].excursiones}</li>
                        <li>{productos[1].excursiones}</li>
                        <li>{productos[2].excursiones}</li>
                        <li>{productos[3].excursiones}</li>
                        <li>{productos[4].excursiones}</li>
                    </ul> 
                </div>
            </div>
            <ItemCount/>
        </>
    );
}