import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import styled from "styled-components"

export default function Error404(){

    useEffect(() => {
        document.title = "404 - HRNet"
    },[])

    return (
        <Container className='error404_container'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </Container>
    )
}

const Container = styled.div`

    text-align: center;
    color: #0074d9;

    h1{
        font-size: 288px;
        margin:0;
    }

    p{
        font-size: 36px;
    }

    a{
        display: block;
        text-decoration: underline;
        font-size: 18px;
        margin-top:5rem;
        margin-bottom: 3rem;
    }
`