import React from "react";
import { Drawer } from 'antd';
import 'antd/dist/antd.css'
import { connect } from "react-redux";
import { toggleVisible } from "../redux/reducers/drawerReducer";
import { DrawerFormRedux } from "./DrawerForm";
import {removeMarker, setMarkerData} from "../redux/reducers/mapReducer";


const DrawerComponent = ({ visible, toggleVisible, setMarkerData, removeMarker, currentMarker }) => {

    const onClose = () => {
        toggleVisible()
    };

    const onSubmit = (formData) => {

        let id = currentMarker.id;
        //перестало срабатывать задаваемое значение типа в форме value="number"
        let range = parseInt(formData.range,10)
        setMarkerData(id, range);
        toggleVisible()
    };

    return (

        <Drawer
            width={540}
            onClose={onClose}
            visible={visible}
            bodyStyle={{paddingBottom: 80}}
            maskStyle={{display: 'none'}}
        >
            <DrawerFormRedux onSubmit={onSubmit}
                             initialValues={currentMarker}
                             removeMarker={removeMarker}
                             toggleVisible={toggleVisible}
                             id={currentMarker ? currentMarker.id : 0}
            />
        </Drawer>

    );
}

const mapStateToProps = (state) => {
    return {
        visible: state.drawer.visible,
        markers: state.map.markers,
        currentMarker: state.map.currentMarker
    }
}

export default connect(mapStateToProps,
    {toggleVisible, setMarkerData , removeMarker})(DrawerComponent)