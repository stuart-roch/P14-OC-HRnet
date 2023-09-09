import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
//import Modal from '@stuart.roch/modal-component-library'
import { useSelector } from 'react-redux'


export default function CreateEmployee(){

    const {register, handleSubmit, formState: { errors } } = useForm()
    const [openModal, setOpenModal] = useState(false)

    const onSave = (e) => {
        e.preventDefault()
        setOpenModal(true)
        
    }

    return (
        <Container>
            <div className="form-wrapper">
                <div className="form-header">
                    <h2>Create an employee</h2>
                    <i className="fa fa-user-plus"></i>
                </div>
                
                <form action="#" id="create-employee">
                    <div className="employee-base-informations">
                        <div className="input-wrapper">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" />
                        </div>

                        <div className="input-wrapper">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" />
                        </div>
                        
                        <div className="input-wrapper">
                            <label htmlFor="date-of-birth">Date of Birth</label>
                            <input id="date-of-birth" type="text" />
                        </div>                    
                    </div>

                    <div className="employee-address">
                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" />

                        <label htmlFor="state">State</label>
                        <select name="state" id="state"></select>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </div>

                    <div className="employee-enterprise-information">
                        <label htmlFor="department">Department</label>
                        <select name="department" id="department">
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Engineering</option>
                            <option>Human Resources</option>
                            <option>Legal</option>
                        </select>

                        <div className="input-wrapper">
                            <label htmlFor="start-date">Start Date</label>
                            <input id="start-date" type="text" />
                        </div>
                    </div>
                </form>

                <button onClick={onSave}>Save</button>
            </div>
            
        </Container>
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
        justify-content:space-between;
        align-items:center;
    }
`