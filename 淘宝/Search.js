import { Button, SearchBar } from 'antd-mobile'
import React from 'react'
import './Search.css'
const Search = (props) => {
    console.log(props)
    return (
        <div>
            <div className="div1">
                <SearchBar showCancelButton
                onCancel = {()=>props.history.goBack()}
                > 
                </SearchBar>
                <Button style={{
                    width:'30px',
                    height:'30px',
                    marginLeft:'72.5%',
                    marginTop:'-36.5px',
                    backgroundColor:'#dbdbdb',
                    zIndex:'30000'
                }}>
                    <img src={require('./images/sousuo1.png')} style={{
                        width:'18px',
                        height:'18px'

                    }} ></img>
                </Button>
            </div>
           
        </div>
    )
}

export default Search
