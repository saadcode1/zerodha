import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
export default function Footer(){
    return(
        <div className="container-fluid p-5 border-top ">
            <div className="row " style={{marginLeft:"100px"}}>
                <div className="col-3">
                    <ul>
                    <img src="../src/utils/logo.svg" width="120"/>
                    <li style={{listStyle:"none"}} className='pt-3'>© 2010 - 2024, Zerodha Broking Ltd.<br/>All rights reserved</li>
                    <li style={{listStyle:"none"}} className='pt-3'><InstagramIcon/>&nbsp;&nbsp;&nbsp;&nbsp;<FacebookIcon/>&nbsp;&nbsp;&nbsp;&nbsp;<XIcon/>&nbsp;&nbsp;&nbsp;&nbsp;<LinkedInIcon/></li>
                    <li style={{listStyle:"none"}} className='pt-3'><YouTubeIcon/>&nbsp;&nbsp;&nbsp;&nbsp;<WhatsAppIcon/>&nbsp;&nbsp;&nbsp;&nbsp;<TelegramIcon/></li>
                    </ul>
                </div>
                <div className="col-3">
                    <ul>
                    <h4 className='text-muted'>Company</h4>
                    <li style={{listStyle:"none"}} className='pt-3'>About</li>
                    <li style={{listStyle:"none"}} className='pt-3'>Products</li>
                    <li style={{listStyle:"none"}} className='pt-3'>Pricing</li>
                    <li style={{listStyle:"none"}} className='pt-3'>Refferal programme</li>
                    <li style={{listStyle:"none"}} className='pt-3'>Careers</li>
                    <li style={{listStyle:"none"}} className='pt-3'>Zerodha.tech</li>
                    <li style={{listStyle:"none"}} className='pt-3'>Press & media</li>
                    <li style={{listStyle:"none"}} className='pt-3'>Zerodha Cares</li>
                    </ul>

                </div>

                <div className="col-3">
                    <ul>
                    <h4 className='text-muted'>Company</h4>
                    <li style={{listStyle:"none"}} className='pt-3'>About</li>
                    <li style={{listStyle:"none"}} className='pt-3'>Products</li>
                    <li style={{listStyle:"none"}} className='pt-3'>Pricing</li>
                    <li style={{listStyle:"none"}} className='pt-3'>Refferal programme</li>
                    <li style={{listStyle:"none"}} className='pt-3'>Careers</li>
                    <li style={{listStyle:"none"}} className='pt-3'>Zerodha.tech</li>
                    <li style={{listStyle:"none"}} className='pt-3'>Press & media</li>
                    <li style={{listStyle:"none"}} className='pt-3'>Zerodha Cares</li>
                    </ul>

                </div>

                <div className="col-3">
                    <ul>
                    <h4 className='text-muted'>Company</h4>
                    <li style={{listStyle:"none"}} className='pt-3'>About</li>
                    <li style={{listStyle:"none"}} className='pt-3'>Products</li>
                    
                    </ul>

                </div>
            </div>
        </div>
    )
}