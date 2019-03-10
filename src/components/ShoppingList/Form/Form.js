import locale from 'antd/lib/date-picker/locale/pt_BR'
import moment from 'moment'
import 'moment/locale/pt-br'
import  React  from 'react'
import ShoppingListItem from '../../ShoppinListItem/Form/Form'
import { withFormik, FieldArray } from 'formik'
import * as Yup from 'yup'
import { Row, Col, Form, DatePicker, Button, Select, Spin, Icon, Tooltip, message } from 'antd'

import './Form.css'

const Option = Select.Option

const ShoppingListForm = props => {
  const antIcon = <Icon type="loading" spin />
  const { values, handleSubmit, setFieldValue, isSubmitting, handleSearch, errors, title, dataSource } = props
  return (
    <div className='center-content wrapper-content'>
      <Form onSubmit={handleSubmit} className='form'>
        {isSubmitting && <Spin indicator={antIcon} />}
        <Row>
          <Col span={24} className='shopping-list-fields'>
            <Form.Item
              label="Data"
            >
              <DatePicker
                locale={locale}
                name='date'
                className='shopping-list-date'
                onChange={(_, dateString) => props.setFieldValue('date', moment(dateString, 'DD/MM/YYYY', true).format())}
                defaultValue={moment.utc(values.date)}
                format={'DD/MM/YYYY'}
              />
              {errors.date && <div className='ant-form-explain'>{errors.date}</div>}
            </Form.Item>
            <Form.Item
              label="Supermercado"
              className='shopping-list-supemarket'
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
          </Col>
        </Row>
        <Row>
          <Col span={24} className='shopping-list-items'>
            <Form.Item
              label="Itens">
              <FieldArray
                name='items'
                render={arrayHelpers => (
                  <div>
                    {values.items.map((item, index) => (
                      <div key={index}>
                        <ShoppingListItem
                          index={index}
                          arrayHelpers={arrayHelpers}
                          handleSearch={handleSearch}
                          dataSource={dataSource}
                          setFieldValue={setFieldValue}
                          values={values}
                        />
                      </div>
                  ))}

                  <Tooltip title="Adicionar">
                    <Button
                      type='primary'
                      onClick={() => arrayHelpers.push({product: '', quantity: '', value: 0})}
                      className='shopping-list-add'
                    >
                      Adicionar itens
                      <Icon type="plus" />
                    </Button>
                  </Tooltip>

                  </div>
                )}
              />
            </Form.Item>
          </Col>
        </Row>

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
    date: props.shoppingList ? props.shoppingList.date : moment().toString(),
    supermarket: props.shoppingList ? props.shoppingList.supermarket : '',
    items: props.shoppingList.items
  }),
  validationSchema: Yup.object().shape({
    date: Yup.date()
      .required('Preencha o campo de data'),
    items: Yup.array().of(
      Yup.object().shape({
        product: Yup.string().required('Preencha o campo de produto'),
        quantity: Yup.number().required('Preencha o campo de quantidade')
                              .min(1, 'A quantidade deve ser maior que zero')
      })
    ).required('Devem ter itens na lista').min(1, 'Mínimo de 1 item na lista')
  }),
  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    if (values['supermarket'] === '') delete values['supermarket']
    props.handleSave(values, props.shoppingList._id)
    .then(() => {
      message.success(`Lista de compras ${props.message} com sucesso.`)
      setSubmitting(false)
      props.history.push('/shopping-lists/list')
    }, (err) => {
      message.error(`Erro ao ${props.message} o Lista de compras.`)
      setSubmitting(false)
      setErrors({ message: err.message })
    })
  }
})(ShoppingListForm)