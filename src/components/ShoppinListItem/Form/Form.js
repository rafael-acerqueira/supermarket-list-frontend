import React from 'react'
import { ErrorMessage, Field } from 'formik'
import { Input, AutoComplete, Icon, Tooltip } from 'antd'
import './Form.css'

const Form = props => {
  const { index, values, setFieldValue, arrayHelpers, handleSearch, dataSource } = props
  const Option = AutoComplete.Option
  const autoCompleteChildren = dataSource.map(product => <Option key={product._id}>{product.name}</Option>)
  return (
    <>
      <Field
        name={`items.${index}.product`}
        render={() => (
          <AutoComplete
            className='item-fields item-fields-product'
            onChange={(value) => setFieldValue(`items.${index}.product`, value)}
            onSearch={handleSearch}
            placeholder="Nome do produto"
            value={values.items[index].product}
          >
            {autoCompleteChildren}
          </AutoComplete>
        )}
      />
      <ErrorMessage name={`items.${index}.product`} />

      <Field
        name={`items.${index}.quantity`}
        render={({ field }) => (
          <Input
            {...field}
            className='item-fields item-fields-quantity'
            type='number'
            placeholder="Quantidade"
          />
        )}
      />
      <ErrorMessage name={`items.${index}.quantity`} />
      <Tooltip title="Remover">
        <button className='delete-button' onClick={() => arrayHelpers.remove(index)}>
          <Icon type="delete" />
        </button>
      </Tooltip>

    </>
  )
}

export default Form

