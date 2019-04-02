import React from 'react'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { Form, Input, Button, Spin, Icon, message } from 'antd'

const ProductCategoryForm = props => {
  const antIcon = <Icon type="loading" spin />
  const { values, handleChange, handleSubmit, handleBlur, isSubmitting, errors } = props
  return (
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
  )
}

export default withFormik({
  mapPropsToValues: (props) => ({
    name: props.productCategory ? props.productCategory.name : ''
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required('Preencha o campo de nome')
  }),
  handleSubmit: (values, { props, setSubmitting, resetForm, setErrors }) => {
    props.handleSave(values, props.productCategory._id)
    .then(() => {
      message.success(`Categoria de Produto ${props.message} com sucesso.`)
      setSubmitting(false)
      resetForm({})
      props.history.push('/product-categories/list')
    }, (err) => {
      message.error(`Erro ao ${props.message} a Categoria de Produto.`)
      setSubmitting(false)
      setErrors({ message: err.message })
    })
  }
})(ProductCategoryForm)