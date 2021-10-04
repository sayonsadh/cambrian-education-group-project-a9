import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]); 

    // fatching data 

    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    const allServices = services.slice(0, 4);
    return (
        <div className='custom-grid mb-5'>
            {
                allServices.map(service => <Service
                    key={service.id}
                    service={service}>
                </Service>)
            
            }
           <Link to='/service'>
           Click here for more details...
           </Link>

        </div>
    );
};

export default Home;