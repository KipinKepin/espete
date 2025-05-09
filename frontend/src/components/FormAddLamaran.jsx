import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormAddLamaran = () => {
    const [name, setName] = useState("");
    const [posisi, setPosisi] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [pengalaman, setPengalaman] = useState("");
    const [msg, setMsg] = useState("");

    const navigate = useNavigate();

    const saveLamarans = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/lamarans', {
                name: name,
                posisi: posisi,
                deskripsi: deskripsi,
                pengalaman: pengalaman
            });
            navigate("/lamarans")
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

    return (
        <div>
            <h1 className='title'>Lamaran</h1>
            <h2 className='subtitle'>Add New Lamaran</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={saveLamarans}>
                            <p className="has-text-centered">{msg}</p>
                            <div className="field">
                                <label htmlFor='name' className="label">Name</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        id='name'
                                        className='input'
                                        placeholder='Name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label htmlFor='pos' className="label">Posisi</label>
                                <div className="control">
                                    <select
                                        value={posisi}
                                        onChange={(e) => setPosisi(e.target.value)}>
                                        <option value="Choose One" disabled>Choose One</option>
                                        <option value="Dosen">Dosen</option>
                                        <option value="Teaching Assisstant">Teaching Assisstant</option>
                                        <option value="Security">Security</option>
                                        <option value="Cleaning Service">Cleaning Service</option>
                                        <option value="Canteen Staff">Canteen Staff</option>
                                        <option value="Gardener">Gardener</option>
                                    </select>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label" htmlFor='des'>Deskripsi</label>
                                <div className="control">
                                    <textarea id="des" cols="30" rows="10"
                                        value={deskripsi}
                                        onChange={(e) => setDeskripsi(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label" htmlFor='pengalaman'>Pengalaman (tahun)</label>
                                <div className="control">
                                    <input
                                        type="number"
                                        id='pengalaman'
                                        className='input'
                                        placeholder='minimal 1'
                                        value={pengalaman}
                                        onChange={(e) => setPengalaman(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button type='submit' className="button is-success">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormAddLamaran;