import locale from 'antd/lib/date-picker/locale/pt_BR'
import moment from 'moment'
import 'moment/locale/pt-br'
import  React  from 'react'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { Form, DatePicker, Button, Select, Spin, Icon, message } from 'antd'
const Option = Select.Option

const ShoppingListForm = props => {
  const antIcon = <Icon type="loading" spin />
  const { values, handleSubmit, isSubmitting, errors, title } = props
  return (
    <>
    <div className='panel'>
      <div className='center-content'>
        <h1 className='page-title'>{title}</h1>
        <span className='page-info'>{`${props.pageInfo} os dados da da lista de compras abaixo`}</span>
      </div>
    </div>
    <div className='center-content wrapper-content'>
      <Form onSubmit={handleSubmit} className='form'>
        {isSubmitting && <Spin indicator={antIcon} />}
        <Form.Item
          label="Data"
        >
          <DatePicker
            locale={locale}
            name='date'
            onChange={(_, dateString) => props.setFieldValue('date', moment(dateString, 'DD/MM/YYYY', true).format())}
            defaultValue={moment.utc(values.date)}
            format={'DD/MM/YYYY'}
          />
          {errors.date && <div className='ant-form-explain'>{errors.date}</div>}
        </Form.Item>
        <Form.Item
          label="Supermercado"
        >
          <Select
            name='supermarket'
            defaultValue={values.supermarket}
            onChange={(supermarket) => props.setFieldValue('supermarket', supermarket)}
          >
            {props.supermarkets.map( supermarket => (
              <Option key={supermarket._id} value={supermarket._id}>{supermarket.name}</Option>
            ))}

          </Select>
          {errors.supermarket && <div className='ant-form-explain'>{errors.supermarket}</div>}
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
    date: props.shoppingList ? props.shoppingList.date : moment().toString(),
    supermarket: props.shoppingList ? props.shoppingList.supermarket : ''
  }),
  validationSchema: Yup.object().shape({
    date: Yup.date()
      .required('Preencha o campo de data')
  }),
  handleSubmit: (values, { props, setSubmitting, resetForm, setErrors }) => {
    if (values['supermarket'] === '') delete values['supermarket']
    props.handleSave(values, props.shoppingList._id)
    .then(() => {
      message.success(`Lista de compras ${props.message} com sucesso.`)
      setSubmitting(false)
      resetForm({})
      props.history.push('/shopping-lists/list')
    }, (err) => {
      message.error(`Erro ao ${props.message} o Lista de compras.`)
      setSubmitting(false)
      setErrors({ message: err.message })
    })
  }
})(ShoppingListForm)