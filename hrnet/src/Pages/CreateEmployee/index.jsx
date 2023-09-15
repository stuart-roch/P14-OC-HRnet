import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import DatePicker from '../../Components/DatePicker'
import SelectMenu from '../../Components/SelectMenu'
import { departmentOptions, statesOptions } from "../../utils/variables"
import { useDispatch } from 'react-redux'
import { addEmployeeAction } from '../../features/employee'
import Modal from '@stuart.roch/modal-component-library'

export default function CreateEmployee(){

    const {register, handleSubmit, formState: { errors } } = useForm()
    const [openModal, setOpenModal] = useState(false)
    const [countEmployeeCreated, setCountEmployeeCreated] = useState(0)
    const dispatch = useDispatch()

    const onSubmit = (data) => {
        setOpenModal(true)
        dispatch(addEmployeeAction({...data, id: countEmployeeCreated}))
        setCountEmployeeCreated(countEmployeeCreated + 1)
    }

    return (
        <>
        <Container>
            <div className="form-wrapper">
                <div className="form-header">
                    <h2>Create an employee</h2>
                    <i className="fa fa-user-plus"></i>
                </div>
                
                <form action="#" id="create-employee" onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-inputs'>
                        <div className="employee-base-informations">
                            <div className="input-wrapper">
                                <label htmlFor="first-name">First Name</label>
                                <input type="text" id="first-name" name="first-name" {...register("firstName")}/>
                            </div>

                            <div className="input-wrapper">
                                <label htmlFor="last-name">Last Name</label>
                                <input type="text" id="last-name" name="last-name" {...register("lastName")}/>
                            </div>
                            
                            <div className="input-wrapper">
                                <label htmlFor="date-of-birth">Date of Birth</label>
                                <DatePicker name="date-of-birth" id="date-of-birth" register = {register("dateOfBirth")}/>
                            </div>                    
                        </div>

                        <div className="employee-address">
                            <div className="input-wrapper">
                                <label htmlFor="street">Street</label>
                                <input id="street" name="street" type="text" {...register("street")}/>
                            </div>
                            
                            <div className="input-wrapper">
                                <label htmlFor="city">City</label>
                                <input id="city" name="city" type="text" {...register("city")}/>
                            </div>
                            
                            <div className="select-wrapper">
                                <label htmlFor="state">State</label>
                                <SelectMenu options={statesOptions} id="state" name="state" register={register("state")}/>
                            </div>
                            
                            <div className="input-wrapper">
                                <label htmlFor="zip-code">Zip Code</label>
                                <input id="zip-code" name="zip-code" type="number" {...register("zipCode")}/>
                            </div>
                            
                        </div>

                        <div className="employee-enterprise-information">
                            <div className="select-wrapper">
                                <label htmlFor="department">Department</label>
                                <SelectMenu options={departmentOptions} id="department" name="department" register={register("department")}/>
                            </div>
                                       

                            <div className="input-wrapper">
                                <label htmlFor="start-date">Start Date</label>
                                <DatePicker name="start-date" id="start-date" register={register("startDate")}/>
                            </div>
                        </div>
                    </div>
                    
                    <div><button type='submit' className='button-create-employee'>Save</button></div>
                    
                </form>
            </div>
            
        </Container>
        <Modal modalState={[openModal, setOpenModal]}></Modal>
        </>
    )
}   

const Container = styled.main`

    background-color: #0074d9;
    flex: 1;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .form-wrapper{
        background-color: white;
        border-radius: 20px;
        width: 80%;
        margin: 0 auto;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .form-header{
        text-align:center;
        margin-bottom: 50px;

        h2{
            font-size:3rem;
            margin:0;
        }
    }

    .fa-user-plus{
        font-size:3rem;
    }

    form{
        display:flex;
        flex-direction: column;
        justify-content:space-between;
        align-items:center;
        width:100%; 
    }
    
    .form-inputs{
        display:flex;
        justify-content:space-between;
        width:100%;
    }

    .button-create-employee{

        border: 1px solid #77D4FC;
        border-radius: 100px;
        background-color: #77D4FC;
        padding: 5px 20px;
        margin-top: 25px;
        font-size: 1rem;

    }

    .button-create-employee:hover{
        background-color: #0074d9;
        border: 1px solid #0074d9;
        color: white;
        font-weight: bold;
    }

    .input-wrapper, .select-wrapper{
        display: flex;
        flex-direction: column;
    }
`