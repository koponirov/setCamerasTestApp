import React from "react";
import {Form, Input, Button, Col, Row} from "antd";
import {Field, reduxForm} from "redux-form";
import {Form as FormRedux} from 'redux-form'


const FormItem = Form.Item;


const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 6}
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 14}
    }
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0
        },
        sm: {
            span: 14,
            offset: 6
        }
    }
};

const makeField = Component => ({input, meta, children, hasFeedback, label, ...rest}) => {
    const hasError = meta.touched && meta.invalid;
    return (
        <FormItem
            {...formItemLayout}
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
    const {handleSubmit, pristine, reset, submitting} = props;

    return (
        <FormRedux onSubmit={handleSubmit}>

                <Row gutter={16}>
                    <Col span={12}>
                        <Field label="Координаты" name="position" component={AInput} placeholder="широта, долгота"
                               hasFeedback/>
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
                        <Field label="Дальность обзора" name="range" component={AInput} placeholder="Дальность"/>
                    </Col>
                </Row>


                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" style={{marginRight: "10px"}}>
                        Сохранить
                    </Button>

                    <Button disabled={pristine || submitting} onClick={reset}>
                        Удалить
                    </Button>
                </FormItem>
        </FormRedux>
    );
};

const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = "Required";
    }

    return errors;
};

export const DrawerFormRedux = reduxForm({
    form: "drawerForm", // a unique identifier for this form

})(DrawerForm);
