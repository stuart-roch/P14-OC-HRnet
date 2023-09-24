import DataTable from "react-data-table-component"
import { columnsTable } from "../../utils/variables";
import { useSelector } from "react-redux"
import styled from "styled-components"
import { useState } from "react";

export default function ListEmployee(){

    const datas = useSelector(state => state.employee.employee)
    const [data, setData] = useState(datas)

    const onChange = (e) => {
        setData(datas.filter((data) => data?.firstName?.toLowerCase().includes(e.target.value.toLowerCase()) || 
        data?.lastName?.toLowerCase().includes(e.target.value.toLowerCase()) || 
        data?.startDate?.toLowerCase().includes(e.target.value.toLowerCase()) || 
        data?.department?.toLowerCase().includes(e.target.value.toLowerCase()) || 
        data?.dateOfBirth?.toLowerCase().includes(e.target.value.toLowerCase()) || 
        data?.street?.toLowerCase().includes(e.target.value.toLowerCase()) || 
        data?.city?.toLowerCase().includes(e.target.value.toLowerCase()) || 
        data?.state?.toLowerCase().includes(e.target.value.toLowerCase()) || 
        data?.zipCode?.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    return (
        <Container>
            <div className="search-wrapper">
                <input type="text" className="search-input" placeholder="Search" onChange={onChange}/>
            </div>
            <DataTable columns={columnsTable} data={data} pagination={true} title="Current Employee "/>
        </Container>
        
    )
}

const Container = styled.div`

    margin: 50px;
    display: flex;
    flex-direction: column;

    .search-wrapper{
        align-self: end;
    }

    .rdt_TableHeader{
        text-align: center;
    }

`