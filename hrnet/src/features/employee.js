import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = []


export const addEmployeeAction = createAction("employee/add")

export const employeeReducer = createReducer(initialState, (builder) =>
    builder
    .addCase(addEmployeeAction, (state, action) => {
        return [...state, action.payload]
    })
)