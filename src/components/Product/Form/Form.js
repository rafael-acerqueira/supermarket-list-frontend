import React from 'react'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { Form, Input, Button, Spin, Icon, message } from 'antd'

import './Form.css'

const ProductForm = props => {
  const antIcon = <Icon type="loading" spin />
  const { values, handleChange, handleSubmit, handleBlur, isSubmitting, errors, title } = props
  return (
    <>
    <div className='panel'>
      <div className='center-content'>
        <h1 className='page-title'>{`${title} de ${props.productCategory.name}`}</h1>
        <span className='page-info'>{`${props.pageInfo} os dados do produto abaixo`}</span>
      </div>
    </div>
    <div className='center-content wrapper-content'>
      <Form onSubmit={handleSubmit} className='form'>
        {isSubmitting && <Spin indicator={antIcon} />}
        <Form.Item
          label="Nome"
        >
          <Input name='name' autoFocus onChange={handleChange} onBlur={handleBlur} value={values.name} />
          {errors.name && <div className='ant-form-explain'>{errors.name}</div>}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={isSubmitting}>
            Salvar
          </Button>
        </Form.Item>
      </Form>
    </div>
    </>
  )
}

export default withFormik({
  mapPropsToValues: (props) => ({
    name: props.product ? props.product.name : ''
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required('Preencha o campo de nome')
  }),
  handleSubmit: (values, { props, setSubmitting, resetForm, setErrors }) => {
    props.handleSave(values, props.product._id)
    .then(() => {
      message.success(`Produto ${props.message} com sucesso.`)
      setSubmitting(false)
      resetForm({})
      props.history.push(`/product-categories/${props.productCategory._id}/products`)
    }, (err) => {
      message.error(`Erro ao ${props.message} o Produto.`)
      setSubmitting(false)
      setErrors({ message: err.message })
    })
  }
})(ProductForm)