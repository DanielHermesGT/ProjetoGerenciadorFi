import styled from "styled-components";
 
export const Ped = styled.div`

    .ger{

        margin-top: 2em;    
        

    }
    
    p{
        padding-top: 2em;
        width: 20em;
        border-radius: 2em;
        height: 5em;
        background-color: rgb(39, 204, 119);
        margin: 0 auto;
        color: #000;
        text-align: center;
    }    
    .aviso{
        color: green;
    }

`


export const DIV = styled.div`

input:focus::placeholder{
    color: transparent;
}
svg{
    margin-left: 1em;
}

.gasto{
    color: red;
}
.res{
    color: green;
}

.regis{
    display: flex;
    justify-content: center;

}
a{
    color: inherit;
}

input, button{
    border-radius: 3px;
    outline: none;
    border-style: none;
    padding: 0.5em;
    text-align: center;
    width: 20em;
    
}
form{
    width: 20em;
    margin: 0 auto;
    margin-top:0.5em;
    border-radius: 2em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-self: center;
    flex-direction: column;
    padding: 0.5em;
    background: rgb(163, 163, 163)
    
}

form > input, button{
    margin-left: 0.5em;
    margin-right: 0.5em;
    margin-bottom: 2em;
    margin-top: 2em;
}


button:active{
    background-color: rgba(191, 198, 204, 0.705);
}
button{
    border-radius: 3px;
    outline: none;
    border-style: none;
    padding: 0.5em;
    height: 2.5em;
    width: 5em;
    transition: 0.5s;
    margin-left: 0em;
    margin-right: 0em;

}

.env{
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    
}





` 