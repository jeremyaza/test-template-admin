import React, { useEffect, useState } from "react";
import { CBadge, CButton, CCardBody, CCol, CCollapse, CContainer, CDataTable, CForm, CFormGroup, CInput, CLabel, CModal, CModalBody, CModalFooter, CModalHeader, CRow, CSelect } from "@coreui/react";

// Importando Axios
// import clienteAxios from '../../config/config';

import axios from 'axios';


const Batch = () => {


    const usersData = [
        { id: 0, name: 'John Doe', startDate: '2018/01/01', finishDate: '2018/01/01', status: 'Cerrado' },
        { id: 1, name: 'Samppa Nori', startDate: '2018/01/01', finishDate: '2018/01/01', status: 'Abierto' },
        { id: 2, name: 'Estavan Lykos', startDate: '2018/02/01', finishDate: '2018/01/01', status: 'Cerrado' },
        { id: 3, name: 'Chetan Mohamed', startDate: '2018/02/01', finishDate: '2018/01/01', status: 'Cerrado' },
        { id: 4, name: 'Derick Maximinus', startDate: '2018/03/01', finishDate: '2018/01/01', status: 'Abierto' },
        { id: 5, name: 'Friderik Dávid', startDate: '2018/01/21', finishDate: '2018/01/01', status: 'Abierto' },
        { id: 6, name: 'Yiorgos Avraamu', startDate: '2018/01/01', finishDate: '2018/01/01', status: 'Abierto' },
        { id: 7, name: 'Avram Tarasios', startDate: '2018/02/01', finishDate: '2018/01/01', status: 'Abierto' },
        { id: 8, name: 'Quintin Ed', startDate: '2018/02/01', finishDate: '2018/01/01', status: 'Cerrado' },
        { id: 9, name: 'Enéas Kwadwo', startDate: '2018/03/01', finishDate: '2018/01/01', status: 'Cerrado' },
        { id: 10, name: 'Agapetus Tadeáš', startDate: '2018/01/21', finishDate: '2018/01/01', status: 'Abierto' },
    ];

    const [batchs, setBatchs] = useState([]);

    const [batch, setBatch] = useState({
        name: '',
        startDate: '',
        finishDate: '',
        status: false,
        statusDelete: false
    });

    const [details, setDetails] = useState([]);

    const [modalCreate, setModalCreate] = useState(false);

    const [modalUpdate, setModalUpdate] = useState(false);

    useEffect(() => {

        getBatchs();

    }, [])


    const getBatchs = async () => {
        try {
            const result = await axios.get(`https://api.admin.hackademy.lat/api/camino/batch`);
            console.log(result.data);
        } catch (error) {
            console.error('Hubo un Error Tratando De Acceder a la Info')
        }
    }

    const openCloseModalCreate = () => {
        setModalCreate(!modalCreate);
    }

    const openCloseModalUpdate = () => {
        setModalUpdate(!modalUpdate);
    }


    // const [items, setItems] = useState(usersData);

    const toggleDetails = (index) => {
        const position = details.indexOf(index)
        let newDetails = details.slice()
        if (position !== -1) {
            newDetails.splice(position, 1)
        } else {
            newDetails = [...details, index]
        }
        setDetails(newDetails)
    }

    const fields = [
        { key: 'name', label: 'Nombre del Batch', _style: { width: '40%' } },
        { key: 'startDate', label: 'Fecha Inicio', _style: { width: '20%' } },
        { key: 'finishDate', label: 'Fecha Fin', _style: { width: '20%' } },
        { key: 'status', label: 'Estado', _style: { width: '20%' } },
        {
            key: 'show_details',
            label: '',
            _style: { width: '1%' },
            sorter: false,
            filter: false
        }
    ]

    const getBadge = (status) => {
        switch (status) {
            case 'Abierto': return 'success'
            case 'Cerrado': return 'danger'
            default: return 'primary'
        }
    }

    return (
        <>
            <CContainer >
                <CRow >
                    <CButton
                        onClick={openCloseModalCreate}
                        size='sm'
                        shape='square'
                        color='success'
                        className="m-2"
                    >
                        Nuevo Batch
                    </CButton>
                </CRow>
                <CRow >
                    <h2 className="mb-3 text-dark m-2">Batchs</h2>
                </CRow>
                <CDataTable
                    items={usersData}
                    fields={fields}
                    columnFilter
                    tableFilter
                    itemsPerPageSelect
                    itemsPerPage={5}
                    hover
                    sorter
                    pagination
                    scopedSlots={{
                        'status':
                            (item) => (
                                <td>
                                    <CBadge
                                        color={getBadge(item.status)}>
                                        {item.status}
                                    </CBadge>
                                </td>
                            ),
                        'show_details':
                            (item, index) => {
                                return (
                                    <td className="py-2">
                                        <CButton
                                            color="primary"
                                            variant="outline"
                                            shape="square"
                                            size="sm"
                                            onClick={() => { toggleDetails(index) }}
                                        >
                                            {details.includes(index) ? 'Ocultar' : 'Detalle'}
                                        </CButton>
                                    </td>
                                )
                            },
                        'details':
                            (item, index) => {
                                return (
                                    <CCollapse show={details.includes(index)}>
                                        <CCardBody>
                                            <h4>
                                                {item.name}
                                            </h4>
                                            <p className="text-muted">
                                                <strong>Estado:</strong> {item.status}
                                            </p>
                                            <p className="text-muted">
                                                <strong>Inicia:</strong> {item.startDate}
                                            </p>
                                            <p className="text-muted">
                                                <strong>Cierra:</strong> {item.finishDate}
                                            </p>
                                            <CButton
                                                onClick={() => openCloseModalUpdate()}
                                                size="sm" color="info"
                                            >
                                                Modificar
                                            </CButton>
                                            <CButton size="sm" color="danger" className="ml-1">
                                                Eliminar
                                            </CButton>
                                        </CCardBody>
                                    </CCollapse>
                                )
                            }
                    }}
                />

                {/* Modal Crear */}
                <CModal
                    show={modalCreate}
                    onClose={openCloseModalCreate}
                    centered={true}
                >
                    <CModalHeader closeButton><h4>Agregar Nuevo Batch</h4></CModalHeader>

                    <CModalBody>
                        <CContainer fluid>
                            <CRow>
                                <CCol sm="12">
                                    <CForm action="" method="post">
                                        <CFormGroup>
                                            <CLabel htmlFor="nf-name">Nombre del Batch</CLabel>
                                            <CInput
                                                type="name"
                                                id="name"
                                                name="name"
                                                placeholder="Batch #2"
                                            />
                                        </CFormGroup>

                                        <CFormGroup>
                                            <CLabel htmlFor="date-input">Fecha de Inicio</CLabel>
                                            <CInput
                                                type="date"
                                                id="date-input"
                                                name="nf-name"
                                                placeholder="date"
                                            />
                                        </CFormGroup>

                                        <CFormGroup>
                                            <CLabel htmlFor="date-input">Fecha Final</CLabel>
                                            <CInput
                                                type="date"
                                                id="date-input"
                                                name="nf-name"
                                                placeholder="date"
                                            />
                                        </CFormGroup>

                                        <CFormGroup>
                                            <CLabel htmlFor="date-input">Estado</CLabel>
                                            <CSelect custom size="md" name="selectLg" id="selectLg">
                                                <option value="0">Abierto</option>
                                                <option value="1">Cerrado</option>
                                            </CSelect>
                                        </CFormGroup>

                                    </CForm>
                                </CCol>
                            </CRow>
                        </CContainer>
                    </CModalBody>

                    <CModalFooter>
                        <CButton color="primary">Crear</CButton>{' '}
                        <CButton
                            color="secondary"
                            onClick={() => openCloseModalCreate()}
                        >Cancelar</CButton>
                    </CModalFooter>
                </CModal>

                {/* Modal Update */}
                <CModal
                    show={modalUpdate}
                    onClose={openCloseModalUpdate}
                    centered={true}
                >
                    <CModalHeader closeButton><h4>Editar Batch</h4></CModalHeader>

                    <CModalBody>
                        <CContainer fluid>
                            <CRow>
                                <CCol sm="12">
                                    <CForm action="" method="post">
                                        <CFormGroup>
                                            <CLabel htmlFor="nf-name">Nombre del Batch</CLabel>
                                            <CInput
                                                type="name"
                                                id="name"
                                                name="name"
                                                placeholder="Batch #2"
                                            />
                                        </CFormGroup>

                                        <CFormGroup>
                                            <CLabel htmlFor="date-input">Fecha de Inicio</CLabel>
                                            <CInput
                                                type="date"
                                                id="date-input"
                                                name="nf-name"
                                                placeholder="date"
                                            />
                                        </CFormGroup>

                                        <CFormGroup>
                                            <CLabel htmlFor="date-input">Fecha Final</CLabel>
                                            <CInput
                                                type="date"
                                                id="date-input"
                                                name="nf-name"
                                                placeholder="date"
                                            />
                                        </CFormGroup>

                                        <CFormGroup>
                                            <CLabel htmlFor="date-input">Estado</CLabel>
                                            <CSelect custom size="md" name="selectLg" id="selectLg">
                                                <option value="0">Abierto</option>
                                                <option value="1">Cerrado</option>
                                            </CSelect>
                                        </CFormGroup>

                                    </CForm>
                                </CCol>
                            </CRow>
                        </CContainer>
                    </CModalBody>

                    <CModalFooter>
                        <CButton color="primary">Guardar</CButton>{' '}
                        <CButton
                            color="secondary"
                            onClick={openCloseModalUpdate}
                        >Cancelar</CButton>
                    </CModalFooter>
                </CModal>
            </CContainer>
        </>
    )
}

export default Batch
