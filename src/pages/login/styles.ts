import styled from "styled-components";
import { IColumn } from "../feed/types";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
    max-width: 300px;

`

export const Column = styled.div<IColumn>`
 flex: ${({flex}) => flex};
`

export const Row = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 margin-top: 20px;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 500px;
    margin-bottom: 20px;
    line-height: 44px
    color: #FFF;
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubTitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px
`

export const ForgetText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #E5E055;
`

export const CreateText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #E23DD7;
    transition: filter .3s ease-int-out;

    &:hover {
        filter: brightness(1.5);
        cursor: pointer;
    }
`

