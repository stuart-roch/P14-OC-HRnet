import styled from 'styled-components'


export default function SelectMenu({options, name, id}){


    return (
        <select name={name} id={id}>
            {options.map(option => <option value={option.value}>{option.name}</option> )}
        </select>
    )
}


