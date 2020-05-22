import React from "react";
import {Drawer, Form, Button, Col, Row, Input, Select} from 'antd';
import 'antd/dist/antd.css'
import {connect} from "react-redux";
import {toggleVisible} from "../redux/reducers/drawerReducer";

const {Option} = Select;

const DrawerForm = ({visible, toggleVisible}) => {

    const showDrawer = () => {
        toggleVisible()
    };

    const onClose = () => {
        toggleVisible()
    };

    return (
        <>
            <Drawer
                width={540}
                onClose={onClose}
                visible={visible}
                bodyStyle={{paddingBottom: 80}}
                maskStyle={{backgroundColor: 'inherit'}}
                footer={
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Button onClick={onClose} type="primary">
                            СОХРАНИТЬ
                        </Button>
                        <Button onClick={onClose} style={{marginRight: 8}}>
                            УДАЛИТЬ
                        </Button>
                    </div>
                }
            >
                <Form layout="vertical" hideRequiredMark>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="coordinates"
                                label="Координаты"
                                rules={[{required: true, message: 'Please enter user name'}]}
                            >
                                <Input placeholder="широта, долгота"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={8}>
                            <Form.Item
                                name="direction"
                                label="Направление"
                                rules={[{required: true, message: 'Please select an owner'}]}
                            >
                                <Select placeholder="Направление">
                                    <Option value="xiao">Туда</Option>
                                    <Option value="mao">Сюда</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                name="angle"
                                label="Угол обзора"
                                rules={[{required: true, message: 'Please choose the type'}]}
                            >
                                <Input placeholder="Угол"/>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                name="range"
                                label="Дальность обзора"
                                rules={[{required: true, message: 'Please choose the type'}]}
                            >
                                <Input placeholder="Дальность"/>
                            </Form.Item>
                        </Col>
                    </Row>

                </Form>
            </Drawer>
        </>
    );
};


const mapStateToProps = (state) => {

    return {
        visible: state.drawer.visible
    }
};

export default connect(mapStateToProps, {toggleVisible})(DrawerForm);