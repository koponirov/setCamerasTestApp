import React from "react";
import {Form, Input, Button, Col, Row} from "antd";
import {Field, reduxForm} from "redux-form";
import {Form as FormRedux} from 'redux-form'

const FormItem = Form.Item;

const makeField = Component => ({input, meta, children, hasFeedback, label, ...rest}) => {

    const hasError = meta.touched && meta.invalid;

    return (
        <FormItem

            label={label}
            validateStatus={hasError ? "error" : "success"}
            hasFeedback={hasFeedback && hasError}
            help={hasError && meta.error}
        >
            <Component {...input} {...rest} children={children}/>
        </FormItem>
    );
};

const AInput = makeField(Input);

const DrawerForm = props => {

    const {handleSubmit, reset, removeMarker, toggleVisible, id} = props;

    const deleteMarker = () => {
        reset();
        removeMarker(id)
        toggleVisible()
    }

    return (
        <FormRedux onSubmit={handleSubmit}>

                <Row gutter={16}>
                    <Col span={12}>
                        <Field label="Координаты"
                               name="position"
                               component={AInput}
                               placeholder="широта, долгота"
                               />
                    </Col>
                </Row>

                <Row gutter={24}>
                    <Col span={8}>
                        <Field label="Направление" name="direction" component={AInput} placeholder="Направление"/>
                    </Col>
                    <Col span={8}>
                        <Field label="Угол обзора" name="angle" component={AInput} placeholder="Угол"/>
                    </Col>
                    <Col span={8}>
                        <Field label="Дальность обзора" name="range" value={'number'} component={AInput} placeholder="Дальность"/>
                    </Col>
                </Row>


                <FormItem>
                    <Button type="primary"
                            htmlType="submit"
                            style={{marginRight: "10px"}}
                    >
                        Сохранить
                    </Button>

                    <Button onClick={deleteMarker}>
                        Удалить
                    </Button>
                </FormItem>
        </FormRedux>
    );
};

export const DrawerFormRedux = reduxForm({
    form: "drawerForm", // a unique identifier for this form
    enableReinitialize: true
})(DrawerForm);
