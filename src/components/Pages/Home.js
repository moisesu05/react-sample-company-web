import React, {Component} from 'react'
import Header from '../Common/Header'
import image from '../assets/img/header-bg.jpg'

// Reusable components
import Services from '../Common/Services'
import Portfolio from '../Common/Portfolio'
import Timeline from '../Common/Timeline'
import Team from '../Common/Team'
import Clients from '../Common/Clients'
class Home extends Component{
    render(){
        return(
            <div>
                <Header 
                    title="Welcome To Our Studio!"
                    subtitle="It's Nice To Meet You"
                    showButton={true}
                    buttonText="Tell Me More"
                    link="/services"
                    image={image}
                />

                <Services />
                <Portfolio />
                <Timeline />
                <Team />
                <Clients />
            </div>
        );
    }
}

export default Home