import React from 'react';
import { Table } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <div className='bg-secondary bg-opacity-25 p-3 mb-5'>
            <h4>BSB-CAMBRIAN EDUCATION GROUP.</h4>
            <h6>One stop solution of different type of educational program.</h6>
            <p>We give different type of service. We provide 101 support for a student.</p>
            </div>

                <Table striped bordered hover className='mb-5'>
                    <thead>
                        <tr>
                        <th>serial</th>
                        <th>Program Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Abroad education</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Cultural program</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Debating</td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td>Dancing</td>
                        </tr>
                        <tr>
                        <td>5</td>
                        <td>Sports</td>
                        </tr>
                        <tr>
                        <td>6</td>
                        <td>Karate</td>
                        </tr>
                        <tr>
                        <td>7</td>
                        <td>Aeronautical enginearing</td>
                        </tr>
                        <tr>
                        <td>8</td>
                        <td>student learn play to hsc</td>
                        </tr>
                        <tr>
                        <td>9</td>
                        <td>Digital practical lab</td>
                        </tr>
                        <tr>
                        <td>10</td>
                        <td>Marketing etc</td>
                        </tr>
                    </tbody>
                    </Table>
        </div>
    );
};

export default About;