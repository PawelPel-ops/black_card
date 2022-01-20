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

const Address = () => {
    return (
        <>
            <AdressHeader>Contact info</AdressHeader>
                        <AdressDes>Eu est aute sit sint ut dolor excepteur</AdressDes>
                        <IconContext.Provider value={{ style: { fontSize: '3.6rem' } }}>
                            <AdressBox>
                                <IconBox>
                                    <AiFillPhone />
                                </IconBox>
                                <IconDes>
                                    <IconName>Phone</IconName>
                                    <IconData>+10 1010 100 1001</IconData>
                                </IconDes>
                            </AdressBox>
                            <AdressBox>
                                <IconBox>
                                    <IoIosMail />
                                </IconBox>
                                <IconDes>
                                    <IconName>Phone</IconName>
                                    <IconData>+10 1010 100 1001</IconData>
                                </IconDes>
                            </AdressBox>
                            <AdressBox>
                                <IconBox>
                                    <IoLocationSharp />
                                </IconBox>
                                <IconDes>
                                    <IconName>Phone</IconName>
                                    <IconData>+10 1010 100 1001</IconData>
                                </IconDes>
                            </AdressBox>
                        </IconContext.Provider>
        </>
    )
}

export default Address
