

export default function DatePicker({register, name, id}){

    return (
        <input type="date" name={name} id={id} {...register}/>
    )
}