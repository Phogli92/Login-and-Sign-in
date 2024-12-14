import 'react'
import './App.css'
import { getProducts } from './requests/requests'
import { Input , Button, Form} from "antd";
import { useForm , SubmitHandler, Controller} from 'react-hook-form';
import { useState } from 'react';


function App() {
    getProducts()
    const result = JSON.parse(sessionStorage.getItem("data"))
    interface UserInf {
        login?: string;
        password?: string|number;
    }
    const {control, handleSubmit, reset, formState: { errors }} = useForm<UserInf>();
    const onSubmit: SubmitHandler<UserInf> = (data) => {
        console.log(data);
        reset();
      };
  return (
    <>
    <Form onSubmitCapture={handleSubmit(onSubmit)}>
    <Controller
          name="login"
          control={control}  // react-hook-form ning control obyektini uzatamiz
          defaultValue=""  // boshlang'ich qiymat
          rules={{ required: "Bu maydon majburiy",
            validate: value => value === result[0].username || "User notogri kiritildi qayta urinib koring"
          }}  // Validatsiya
          render={({ field }) => (
            <Input
            {...field}  // react-hook-formdan kerakli fieldni uzatish
            placeholder="Foydalanuvchi nomini kiriting"
            style={{ width: "100%" }}
          />
          )}
          />
          {errors.login && <p style={{ color: "red" }}>{errors.login.message}</p>}
    <Controller
          name="password"
          control={control}  // react-hook-form ning control obyektini uzatamiz
          defaultValue=""  // boshlang'ich qiymat
          rules={{ required: "Bu maydon majburiy",
            validate: value => value === result[0].username || "Parol notogri kiritildi qayta urinib koring"
           }}  // Validatsiya
          render={({ field }) => (
            <Input
            {...field}  // react-hook-formdan kerakli fieldni uzatish
            placeholder="Foydalanuvchi parolini kiriting"
            style={{ width: "100%" }}
          />
          )}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
    <button>Log In</button>
    </Form>
    <br />
    <p>Don't have an account yet?<Button type='link'>Sign In</Button></p>

    </>
  )
}

export default App
