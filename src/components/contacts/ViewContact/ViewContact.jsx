import React from 'react';
import { Link } from 'react-router-dom';
let ViewContact = () =>
{
    return(
        <div>
           <section className='view-contact p-3'>
              <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <p className='h3 text-primary'>View Contact</p>
                    </div>
                </div>
              </div>
            </section> 
            <section className='view-contact mt-3'>
                <div className='container'>
                    <div className='row' align-items-center>
                        <div className='col-md-4'>
                            <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="img2" className='img-fluid contact-img'/>
                        </div>
                        <div className='col-md-8'>
                        <ul className='list-group'>
                                            <li className='list-group-item list-group-item-action'>
                                                Name : <span className='fw-bold'>Deepika</span>
                                            </li>

                                            <li className='list-group-item list-group-item-action'>
                                                Mobile : <span className='fw-bold'>9500996640</span>
                                            </li>

                                            <li className='list-group-item list-group-item-action'>
                                                Email : <span className='fw-bold'>deepika@gmail.com</span>
                                            </li>

                                            <li className='list-group-item list-group-item-action'>
                                                Company : <span className='fw-bold'>Zoho</span>
                                            </li>

                                            <li className='list-group-item list-group-item-action'>
                                                Group : <span className='fw-bold'>Family</span>
                                            </li>

                                            <li className='list-group-item list-group-item-action'>
                                                Email : <span className='fw-bold'>deepika@gmail.com</span>
                                            </li>
                                        </ul>
                                        <div className='mb-2'>
                                    
                                    <Link to ={'/contacts/list'} className='btn btn-dark' ms-2>BACK</Link>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
  

        </div>
    )
};
export default ViewContact;