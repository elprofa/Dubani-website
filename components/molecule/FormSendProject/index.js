import React, { useState } from 'react'
import FormSendProjectStc from './FormSendProject.stc';
import {Row,Col} from "reactstrap";

 const FormSendProject=()=>{
    const [name, setName] = useState('')
    const [firstname, setFirstname] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [type, setType] = useState('')
    const [libelle, setLibelle] = useState('')
    const [resume, setResume] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Sending')
        // let data = {
        //     name,
        //     firstname,
        //     email,
        //     telephone,
        //     type,
        //     libelle,
        //     resume,
        // }

        // fetch('/api/embaucher', {
        //     method: 'POST',
        //     headers: {
        //       'Accept': 'application/json, text/plain, */*',
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        //   }).then((res) => {
        //     console.log('Response received')
        //     if (res.status === 200) {
        //       console.log('Response succeeded!')
        //       setSubmitted(true)
        //       setName('')
        //       setEmail('')
        //       setBody('')
        //     }
        //   })


      }

    return (
        <FormSendProjectStc>
            <form>
                <Row>
                    <Col md={6}>
                        <label>Nom *</label>
                        <input className="form-control" name="name" onChange={(e)=>{setName(e.target.value)}} type="text" required placeholder="Saisir ici" />
                    </Col>
                    <Col md={6}>
                        <label>Prénom *</label>
                        <input className="form-control" type="text"  name="firstname" onChange={(e)=>{setFirstname(e.target.value)}} required placeholder="Saisir ici" />
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <label>Email * </label>
                        <input className="form-control" type="email"  name="email" onChange={(e)=>{setEmail(e.target.value)}} required placeholder="Saisir ici" />
                    </Col>
                    <Col md={6}>
                        <label>Téléphone </label>
                        <input className="form-control" type="text"  name="telephone" onChange={(e)=>{setTelephone(e.target.value)}} required placeholder="Saisir ici" />
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <label>Type de service </label>
                        <select className="form-control"  name="type" onChange={(e)=>{setType(e.target.value)}} required>
                            <option>---- Veuillez choisr ici ------</option>
                            <option>Web developpement</option>
                            <option>Mobile developpement</option>
                            <option>Referencement</option>
                            <option>Digital marketing</option>
                        </select>
                    </Col>
                    <Col md={6}>
                        <label>Intitulé de votre projet </label>
                        <input className="form-control" type="text"  name="libelle" onChange={(e)=>{setLibelle(e.target.value)}}  required placeholder="Saisir ici" />
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <label>Résumé du projet </label>
                        <textarea className="form-control" row="8"  name="resume" onChange={(e)=>{setResume(e.target.value)}}></textarea>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <button type="submit" onClick={handleSubmit} className="btn btn-primary btn_submit">Envoyez</button>
                    </Col>
                </Row>
            </form>
        </FormSendProjectStc>
    )
}   

export default FormSendProject;