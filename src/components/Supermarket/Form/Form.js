import  React  from 'react'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { Form, Input, Button, Spin, Icon, message } from 'antd'
import './Form.css'

const SupermarketForm = props => {
  const antIcon = <Icon type="loading" spin />
  const { values, handleChange, handleSubmit, handleBlur, isSubmitting, errors, title } = props
  return (
    <Form onSubmit={handleSubmit}>
      <h1>{title}</h1>
      {isSubmitting && <Spin indicator={antIcon} />}
      <Form.Item
        label="Nome"
      >
        <Input name='name' onChange={handleChange} onBlur={handleBlur} value={values.name} />
        {errors.name && <div className='ant-form-explain'>{errors.name}</div>}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" disabled={isSubmitting}>
          {title}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default withFormik({
  mapPropsToValues: (props) => ({
    name: props.supermarket ? props.supermarket.name : ''
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required('Preencha o campo de nome')
  }),
  handleSubmit: (values, { props, setSubmitting, resetForm, setErrors }) => {
    props.handleSave(values, props.supermarket._id)
    .then(() => {
      message.success(`Supermercado ${props.message} com sucesso.`)
      setSubmitting(false)
      resetForm({})
      props.history.push('/supermarkets/list')
    }, (err) => {
      message.error(`Erro ao ${props.message} o Supermercado.`)
      setSubmitting(false)
      setErrors({ message: err.message })
    })
  }
})(SupermarketForm)