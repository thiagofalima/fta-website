
import styled from "styled-components"

const HeaderWrapper = styled.header`
    width: 100vw;
    color: white;
    padding: 16px;
    background-color: #09456c;

    h1 {
        font-size: 1.25em;
        text-align: center;
        font-weight: 500;
        letter-spacing: 2px;
    }
`

export const Header = () => {
    return (
        <HeaderWrapper>
            <h1>RTA Soluções</h1>
        </HeaderWrapper>
    )
}