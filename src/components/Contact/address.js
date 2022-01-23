import React from 'react'
import {
    AdressHeader,
    AdressDes,
    AdressBox,
    IconBox,
    IconDes,
    IconName,
    IconData
} from './ContactE'
import { IconContext } from "react-icons";
import { AiFillPhone } from 'react-icons/ai'
import { IoLocationSharp } from 'react-icons/io5'
import { IoIosMail } from 'react-icons/io'

const adress_data = [
    {
        icon: <AiFillPhone />,
        name: 'Phone',
        data: '+10 1010 100 1001'
    },
    {
        icon: <IoIosMail />,
        name: 'Email',
        data: 'lorem@ipsum.com'
    },
    {
        icon: <IoLocationSharp />,
        name: 'Address',
        data: 'Beverly Lorem, 34 Ipsum'
    }
]

const Address = () => {
    return (
        <>
            <AdressHeader>Contact info</AdressHeader>
                        <AdressDes>Eu est aute sit sint ut dolor excepteur</AdressDes>
                        <IconContext.Provider value={{ style: { fontSize: '3.6rem' } }}>
                            {adress_data.map((obj, index) => {
                                return (
                                    <AdressBox key={index}>
                                        <IconBox>
                                            {obj.icon}
                                        </IconBox>
                                        <IconDes>
                                            <IconName>{obj.name}</IconName>
                                            <IconData>{obj.data}</IconData>
                                        </IconDes>
                                    </AdressBox>
                                )
                            })}
                        </IconContext.Provider>
        </>
    )
}

export default Address
