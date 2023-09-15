import DataTable from "react-data-table-component"
import { columnsTable } from "../../utils/variables";
import { useSelector } from "react-redux"
import styled from "styled-components"

export default function ListEmployee(){

    const datas = useSelector(state => state.employee.employee)

    return (
        <Container>
            <DataTable columns={columnsTable} data={datas} pagination={true} title="Current Employee "/>
        </Container>
        
    )
}

const Container = styled.div`

    .rdt_TableHeader{
        text-align: center;
    }
`