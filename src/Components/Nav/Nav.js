import { imageOverlay } from 'leaflet'
import React, {useState} from 'react'
import { Menu, Dropdown} from 'semantic-ui-react'
import {provinces} from '../Api/Api'
import './nav.css'
import {Link} from 'react-router-dom'

function Nav() {

    const [data] = useState(provinces)

    const dropdownOptions = data.map((province)=>({
        key: province.Code,
        text: province.Name,
        value: province.Code
    }))
    
    return (
        <Menu stackable inverted>
            <Menu.Item>
                <Link to='/'>  
                    <i class="fas fa-shield-virus" style={{fontSize:'3rem'}}></i> 
                </Link>         
            </Menu.Item>

            <Menu.Item position='right'>
                    <Dropdown 
                        className="nav__dropdown" 
                        placeholder="Canada" 
                        search 
                        selection 
                        options={dropdownOptions}
                        onChange={()=>console.log(dropdownOptions.map(m=>m.value))}
                        />
            </Menu.Item>         
      </Menu>
    )
}

export default Nav

