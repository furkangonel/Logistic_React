import { Formik, Form } from 'formik'
import React from 'react';
import * as Yup from "yup";
import { Button } from 'semantic-ui-react';
import AfgTextInput from '../utilities/customFormControls/AfgTextInput';
import VehicleService from '../services/vehicleService';

export default function vehicleAdd() {
    const initialValues = 
    {loadName: "", loadWeight: '', firstPoint: "", endPoint: "", price: '', advancePayment: '', typeName: "", trailer: "", typeId: ''}

    const schema = Yup.object({
  
        loadName: Yup.string().required("Zorunlu Alan"),
        loadWeight: Yup.number().required("Zorunlu Alan"),
        firstPoint: Yup.string().required("Zorunlu Alan"),
        endPoint: Yup.string().required("Zorunlu Alan"),
        price: Yup.number().required("Zorunlu Alan"),
        advancePayment: Yup.number().required("Zorunlu Alan"),
        typeName: Yup.string().required("Zorunlu Alan"),
        trailer: Yup.string().required("Zorunlu Alan"),
        typeId: Yup.number().required("Zorunlu Alan")
    });


    const handleSubmit = (values) => {
        const vehicleService = new VehicleService();
        vehicleService.addVehicle(values).then((response) => {
            console.log("başarıyla eklendi", response.data);
        })
        .catch((error) => {
            console.log("ekleme başarısız", error);
        });
        };
   


    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit = {handleSubmit}
            >
                <Form className='ui form' >
                    <AfgTextInput name="loadName" placeholder="Yük Adı" />
                    <AfgTextInput name="loadWeight" placeholder="Ağırlık" />
                    <AfgTextInput name="firstPoint" placeholder="Başlangıç Noktası" />
                    <AfgTextInput name="endPoint" placeholder="Bitiş Noktası" />
                    <AfgTextInput name="price" placeholder="Fiyat" />
                    <AfgTextInput name="advancePayment" placeholder="Avans" />
                    <AfgTextInput name="typeName" placeholder="Taşıma Türü" />
                    <AfgTextInput name="trailer" placeholder="Dorse Türü" />
                    <AfgTextInput name="typeId" placeholder="Tür ID" />
                    

                    <Button floated='left' color='grey' type='submit'>Yükü Ekle</Button>
                </Form>
                
            </Formik>
        </div>
    )
}
