import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import DatePicker from '../../Components/DatePicker'
import SelectMenu from '../../Components/SelectMenu'
import { departmentOptions, statesOptions } from "../../utils/variables"
import { useDispatch } from 'react-redux'
import { addEmployeeAction } from '../../features/employee'
import Modal from "@stuart.roch/modal-component-library"

export default function CreateEmployee(){

    const {register, handleSubmit } = useForm()
    const [openModal, setOpenModal] = useState(false)
    const dispatch = useDispatch()    

    useEffect(() => {
        document.title = "Create Employee - HRnet"
    }, [])
    
    const onSubmit = (data) => {
        setOpenModal(true)
        dispatch(addEmployeeAction({...data, id: uuidv4()}))
    }
    
    return (
        <>
            <Container $openModal={openModal}>
                <div className="form-wrapper">
                    <div className="form-header">
                        <h2>Create an employee</h2>
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
            <StyledModal 
            modalState={[openModal, setOpenModal]} 
            className="modal" 
            hasCloseButton={false}
            > 
                <div className="modal-content">
                    <button className='modal-close-button' onClick={() => setOpenModal(false)}>
                        <i className='fa fa-times'></i>
                    </button>
                    <div className='modal-text'>Employee Created</div>
                </div>
            </StyledModal>
        </>
        
        
    )
}   

const Container = styled.main`

    position: relative;
    background-color: #0074d9;
    flex: 1;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: ${(props) => props.$openModal ? 0.3 : 1};
    

    .form-wrapper{
        background-color: white;
        border-radius: 20px;
        width: 60%;
        margin: 0 auto;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 2px 2px 10px #D9D9D9;
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
        justify-content:space-around;
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
const StyledModal = styled(Modal)`

    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    text-align: center;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    &::before{
        content: "";
        display: inline-block;
        height: 100%;
        vertical-align: middle;
        margin-right: -0.05em;
    }

    .modal-content{
        position: relative;
        display: inline-block;
        border-radius: 20px;
        width: 20%;
        padding: 5px 10px;
        box-shadow: 0 0 10px #0074d9;
        z-index: 2;
        background-color: #0074d9;
        color: white;
    }

    
    
    .modal-close-button{
        position: absolute;
        top: -9px;
        right: 0;
        border:none;
        background-color: transparent;
        font-size: 1rem;   
        color: black;     
    }
`