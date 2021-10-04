import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './SingleServices.css'

const SingleServices = () => {
    const [services, setServices] = useState([]) 

    //data fatching...
    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (

        <div className="custom-grid mb-5">
            {
                services.map((service) => <Service service={service}></Service>)
            }
        </div>

    );
};

export default SingleServices;