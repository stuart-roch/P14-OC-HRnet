import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import LOGO from '../../assets/images/logo.png'

export default function Header(){

    return (
        <StyledHeader>
            <img src={LOGO} alt="" />
            <nav>
                <NavLink to="/" className="nav-item">
                    <i className="fa fa-user-plus"></i>
                    New
                </NavLink>
                <NavLink to="/employees" className="nav-item">
                    <i className="fa fa-list-ul"></i>
                    Employees
                </NavLink>
            </nav>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 0;
    
    img{

        height: 100px;

    }

    nav{

        display: flex;
        justify-content: space-between;
        align-items: center;
    
    }

    .nav-item{

        text-decoration: none;
        margin-right:15px;
        color: #77D4FC;
        font-size: 1.3rem;

    }

    .nav-item:hover{
        text-decoration: underline;
        font-weight: bold;
    }

    .fa{

        margin-right:5px;
        font-size: 1.5rem;
        
    }

    .active{

        color: #0074d9;

    }


`