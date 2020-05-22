import React from 'react';
import './App.css';
import MapComponent from "./components/Map";
import ContainerDimensions from "react-container-dimensions";
import DrawerForm from "./components/Drawer";

function App() {
    return (
        <div className='app_container'>
            <ContainerDimensions>
                {({width, height}) =>
                    <MapComponent width={width} height={height}/>
                }
            </ContainerDimensions>
            <DrawerForm/>
        </div>
    )
}

export default App;


