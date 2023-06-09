import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import My_Toys_Tr from './My_Toys_Tr';
import Update_Toy from './Update_Toy';
import LoadSpinner from '../shared/LoadSpinner/LoadSpinner';
import useTitle from '../../../custom_hooks/useTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';

const My_Toys = () => {
    useTitle('My Toys')
    useEffect(() => {
        AOS.init()
    }, [])
    const { user } = useContext(AuthContext)
    const [myToys, setMayToys] = useState([])
    const [updateId, setUpdateId] = useState('')
    const [updated, setUpdated] = useState(true)
    const [sort, setSort] = useState('')

    useEffect(() => {
        if (user) {
            fetch(`https://edu-fun-emporium-server.vercel.app/myToys?email=${user?.email}&&sort=${sort}`)
                .then(res => res.json())
                .then(data => {
                    setMayToys(data);
                })
        }
    }, [user, updated, sort])

    if (!myToys) {
        return <LoadSpinner />
    }

    return (
        <section className='py-20'>
            <div className="container py-10">
                <div className='py-5 text-center'>
                    <h1 className='uppercase text-3xl font-black font-rancho text-animation'>{user?.displayName || 'My'} Toys</h1>
                    <p className='mb-3'>
                        Journey of Knowledge and Fun: Enlightening Young Minds with an Extensive Array of Educational Toys, <br /> Engaging Games, and Interactive Learning Resources at the Sparkling Stars Academy.
                    </p>
                    <p className='bg-primary border-dotted border-b-4 w-40 mx-auto mb-2'></p>
                    <p className='bg-secondary h-[2px] w-24 mx-auto'></p>
                </div>
                <div>
                    <div className='flex justify-end rounded-lg mb-5 '>
                        <div className="dropdown dropdown-bottom dropdown-end text-end">
                            <label tabIndex={0} className="btn btn-primary m-1 text-white font-rancho">Sort</label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 border-2 border-dotted">
                                <li><a onClick={() => setSort('ascending')}>Ascending</a></li>
                                <li><a onClick={() => setSort('descending')} >Descending</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="overflow-x-auto w-full">
                        <table className="w-full">
                            <thead className='bg-primary bg-opacity-30'>
                                <tr className='font-rancho text-left text-secondary border-y-2 border-primary'>
                                    <th className='sticky left-0 z-10 py-3'>
                                    </th>
                                    <th className='py-3' >Toy</th>
                                    <th className='py-3' >Seller</th>
                                    <th className='py-3' > Description</th>
                                    <th className='py-3' >Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myToys.map((toy, index) => <My_Toys_Tr key={toy._id} toy={toy} index={index} setUpdateId={setUpdateId} updated={updated} setUpdated={setUpdated} />)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <Update_Toy updateId={updateId} updated={updated} setUpdated={setUpdated} />
            </div>
        </section>
    );
};

export default My_Toys;