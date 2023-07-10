import { useField } from 'formik'
import { FormField, Label } from 'semantic-ui-react'


export default function AfgTextInput({...props}) {
    //console.log(props)
    const [field, meta] = useField(props)
    //console.log(field)
    //console.log(meta)
   


  return (
   <FormField width={8} error={meta.touched && !!meta.error}>
    <input {...field} {...props}/>
    {meta.touched && !!meta.error ? (
        <Label pointing basic color='red' content={meta.error}></Label>
    ):null}
   </FormField>
  )
}
  