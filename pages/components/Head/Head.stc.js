import styled from 'styled-components';
import { Nav } from 'reactstrap';

const HeaderStc = styled(Nav)`

    height: 100%;

    .inner-header {
        position: relative;
        z-index: 10;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo a {
            font-weight: 700;
            text-decoration: none;
            cursor: pointer;
            font-size: 0.8rem;
            color: black;
        }

        .menu {
            button {
                border: none;
                background: none;
                outline: none;
                cursor: pointer;
                font-size: 0.8rem;
                color: black;
            }
        }

        

        
    }

    `;

export default HeaderStc;