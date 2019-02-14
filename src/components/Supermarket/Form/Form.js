import  React  from 'react'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { Form, Input, Button, Spin, Icon, message } from 'antd'
import api from '../../../api'
import './Form.css'

const SupermarketForm = props => {
  const antIcon = <Icon type="loading" spin />
  const { values, handleChange, handleSubmit, handleBlur, isSubmitting, errors } = props
  return (
    <Form onSubmit={handleSubmit}>
      {isSubmitting && <Spin indicator={antIcon} />}
      <Form.Item
        label="Nome"
      >
        <Input name='name' onChange={handleChange} onBlur={handleBlur} value={values.name} />
        {errors.name && <div className='ant-form-explain'>{errors.name}</div>}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" disabled={isSubmitting}>
          Cadastrar
        </Button>
      </Form.Item>
    </Form>
  )
}

export default withFormik({
  mapPropsToValues: () => ({ name: '' }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required('Preencha o campo de nome')
  }),
  handleSubmit: (values, { setSubmitting, resetForm, setErrors }) => {
    api('post','/supermarkets', values)
    .then(() => message.success('Supermercado cadastrado com sucesso.'))
    .then(
      setSubmitting(false),
      resetForm({})
    )
    .catch(err => {
      message.error('Erro ao casdastrar o Supermercado.')
      setSubmitting(false)
      setErrors({ message: err.message })
    })
  }
})(SupermarketForm)