import React from "react";
import { Drawer } from 'antd';
import 'antd/dist/antd.css'
import { connect } from "react-redux";
import { toggleVisible } from "../redux/reducers/drawerReducer";
import { DrawerFormRedux } from "./DrawerForm";


const DrawerComponent = ({ visible, toggleVisible, markers }) => {

    const onClose = () => {
        toggleVisible()
    };

    const onSubmit = (formData) => {
        debugger
        console.log(formData)
    }

    return (

        <Drawer
            width={720}
            onClose={onClose}
            visible={visible}
            bodyStyle={{paddingBottom: 80}}
            maskStyle={{display: 'none'}}
        >
            <DrawerFormRedux onSubmit={onSubmit} initialValues={markers[0]}/>
        </Drawer>

    );
}

const mapStateToProps = (state) => {
    return {
        visible: state.drawer.visible,
        markers: state.map.markers
    }
}

export default connect(mapStateToProps, {toggleVisible})(DrawerComponent)