import styled from "styled-components";

export const Ped = styled.div`

    .ger{

        margin-top: 2em;    
                

    }
    
    p{
        padding-top: 2em;
        width: 40em;
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

form{
    
    width: 40em;
    margin: 0 auto;
    
    border-radius: 2em;

}

form {
    margin-top:0.5em;
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
    margin-top: 3em;
}
input, button{
    border-radius: 3px;
    outline: none;
    border-style: none;
    padding: 0.5em;
    text-align: center;
    width: 20em;
    
}
button:active{
    background-color: rgba(191, 198, 204, 0.705);
}


input:focus::placeholder{
    color: transparent;
}
`

export const Menu = styled.div`

.menu{
    display: flex;
    justify-content: center;
    justify-self: start;
    align-items: center;
    align-self: center;
    

}

.menu > button{
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



header > p{
    position: relative;
    top: 2em;
    width: 100%;
    text-align: center;
}
header{
    background-color: rgb(204, 159, 35);
    padding: 1.5rem;
    height: 4em;
    
    margin: 0 auto;
    border-radius: 0 0 5px;
    width: 0 auto;
    display: grid
}



`