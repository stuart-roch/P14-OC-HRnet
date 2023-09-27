export default function SelectMenu({options, name, id, register}){


    return (
        <select name={name} id={id} {...register}>
            {options?.map(option => <option key={option?.name} value={option.value === undefined ? option.name : option.value}>{option?.name}</option> )}
        </select>
    )
}


