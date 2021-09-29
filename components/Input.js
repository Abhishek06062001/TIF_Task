import React,{useEffect,useState} from 'react'
import styled from "styled-components";
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { style } from 'styled-system';

function Input() {
    const [input,setInput] = useState('')
   const [data,setData] = useState(null)
   const [error,setError] = useState(null);
    const [text,setText] = useState('Copy')
    const submitData = async() => {
        setText('Copy')
        if(! input){
            setError('Please input text');
            setData(null)
            return
        }
        setData('')
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${input}`)
        setData(await response.json())
        setError(null)
        console.log(data);} 
    return (
        <OuterContainer>
        <Container>
          <Image>
            <img src='/images/bg-boost-desktop.svg' alt='adselect' />
          </Image>
          <Text>
            <input placeholder="Enter URL" type='text' onChange={(e)=>{setInput(e.target.value)}}/>
             
            <button type='submit' onClick={submitData}>Shorten it!</button>
          </Text>
            {error && (
                <>
                {error}
                </>
            )}
        </Container>
        {data && (
            <>
            <Clip>
            <Original >{data.result.original_link}</Original>
            <Wrap>
            
            <Short>{data.result.full_short_link2}</Short>
            <CopyToClipboard text={data.result.full_short_link2}><button onClick={()=>{setText('Copied ')}}>{text}</button></CopyToClipboard>
            
            </Wrap>
      </Clip>
            </>
        )}
       
        </OuterContainer>
    )
}

export default Input

const OuterContainer = styled.div`
background-color:#9e9aa7;
font-family: 'Poppins', sans-serif;

font-weight:700;
`
 
const Container = styled.div`
transform: translate(20px,-50px);
width:90vw;
margin-left:2.5vw;
background-color: #3b3054;
border-radius:8px;

position: relative;
  text-align: center;
  color: white;

  @media (max-width: 768px){
    margin-left:0;
  }
`

const Image = styled.div`
img{
    width: 100%;
    border-radius:8px;
    height: 100px;
}
@media (max-width: 768px) {
    img{
        height: 150px;
    }
  }
`

const Text = styled.div`
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  input{
     margin: 0px auto;
padding:15px 20vw;
font-weight:700;
font-size:18px;
  }
  button{
    padding: 10px 20px;
    margin-left:25px;
    border:none;
    border-radius:10px;
    background-color:#4FFFB0;
    font-family: 'Poppins', sans-serif;
    color:white;
    font-weight:700;
    font-size:18px;
  }


  @media (max-width: 768px) {
    flex-direction:column;
    input{
        padding:15px 10vw;
        margin: auto 0px;
    }
    button{
        margin-top:20px;
    }
  }
`

const Clip = styled.div`
width:90vw;
display:flex;
margin-left:5vw;
background-color:white;
border-radius:10px;
padding:10px 0;
justify-content:space-between;
@media (max-width: 768px){
    flex-direction:column;
    text-align:center;
}

`
const Original = styled.div`
font-size:18px;
font-weight:700;
margin-left:20px;
`
const Wrap = styled.div`
display:flex;
margin-right:20px;
align-items:center;
button{
    padding: 5px 10px;
    background-color:#4FFFB0;
    color:white;
    border:none;
    border-radius:10px;
    font-size:18px;
    font-weight:700;
}
@media (max-width: 768px){
    flex-direction:column;
    text-align:center;
    button{
        margin:0 10vw;
    }
}

`

const Short = styled.div`
margin-right:20px;
color:#4FFFB0;
font-size:18px;
font-weight:700;
`