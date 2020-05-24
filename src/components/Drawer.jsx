import React from "react";
import { Drawer } from 'antd';
import 'antd/dist/antd.css'
import { connect } from "react-redux";
import { toggleVisible } from "../redux/reducers/drawerReducer";
import { DrawerFormRedux } from "./DrawerForm";
import {removeMarker, setMarkerData} from "../redux/reducers/mapReducer";


const DrawerComponent = ({ visible, toggleVisible, markers, setMarkerData, removeMarker }) => {

    const onClose = () => {
        toggleVisible()
    };

    const onSubmit = (formData) => {
        debugger
        let id = 1;
        let range = parseInt(formData.range,10);
        setMarkerData(id, range)
    }

    const values = {
        range: 10,
    }

    return (

        <Drawer
            width={540}
            onClose={onClose}
            visible={visible}
            bodyStyle={{paddingBottom: 80}}
            maskStyle={{display: 'none'}}
        >
            <DrawerFormRedux onSubmit={onSubmit}
                             initialValues={values}
                             removeMarker={removeMarker}
                             toggleVisible={toggleVisible}
            />
        </Drawer>

    );
}

const mapStateToProps = (state) => {
    return {
        visible: state.drawer.visible,
        markers: state.map.markers
    }
}

export default connect(mapStateToProps,
    {toggleVisible, setMarkerData , removeMarker})(DrawerComponent)