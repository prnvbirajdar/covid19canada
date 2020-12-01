import { imageOverlay } from 'leaflet'
import React, {useState} from 'react'
import { Menu, Dropdown} from 'semantic-ui-react'
import {provinces} from '../Api/Api'
import './nav.css'

function Nav() {

    

    const dropdownOptions = provinces.map((p)=><p className="nav__options" key={p.i}>{p.Name}</p>)
    const dropdownCode = provinces.map((p)=><div className="nav__options" key={p.i}>{p.Code}</div>)

    return (
        <Menu stackable>
            <Menu.Item>
                <img alt="logo"/>
            </Menu.Item>

            <Menu.Item
            name='features'>
                <Dropdown className="nav__dropdown" value={dropdownCode} placeholder="Canada" search selection options={dropdownOptions} />
            </Menu.Item>
      </Menu>
    )
}

export default Nav

