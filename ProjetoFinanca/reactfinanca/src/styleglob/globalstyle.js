import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`

    svg{
        cursor: pointer;
    }

   body{
    background-color: #F0F0F0;
}

*{
    
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

#div{
    background-color: rgb(163, 163, 163);
    padding: 2rem;
    height: 21em;
    width: 16em;
    margin: 0 auto;
    border-radius: 6px;
    margin-top: 4em;
    display: grid
    
}

 .btn{
    display: flex;
    justify-content: center;
    justify-self: center;
    align-items: center;
    align-self: center;

    

}
.btn > button:hover{
    
    box-shadow: 12px 12px 16px 0px rgba(12, 0, 0, 0.24), 12px 17px 50px 0 rgba(19, 17, 17, 0.19);
    
}


.btn > button{
    border-radius: 3px;
    outline: none;
    border-style: none;
    padding: 0.5em;
    height: 3em;
    width: 10em;
    transition: 0.5s;


}  

a{
    text-decoration: none;
}




footer{
    background-color: rgb(204, 159, 35);
    height: 2.5em;
    position: fixed;
    width: 100%;
    bottom: 0;
}
header{
    background-color: rgb(204, 159, 35);
    height: 4em;
    
}

button:active{
    background-color: rgba(191, 198, 204, 0.705);
}
button{
    cursor: pointer;
}

`;

