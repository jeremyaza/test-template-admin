import { CBadge, CButton, CCardBody, CCollapse, CDataTable } from "@coreui/react";
import React, { useState } from "react";

const Prepadawan = () => {

  const usersData = [
    { id: 0, nombre: 'John Doe', registro: '2018/01/01', rol: 'Guest', estado: 'Pending' },
    { id: 1, nombre: 'Samppa Nori', registro: '2018/01/01', rol: 'Member', estado: 'Active' },
    { id: 2, nombre: 'Estavan Lykos', registro: '2018/02/01', rol: 'Staff', estado: 'Banned' },
    { id: 3, nombre: 'Chetan Mohamed', registro: '2018/02/01', rol: 'Admin', estado: 'Inactive' },
    { id: 4, nombre: 'Derick Maximinus', registro: '2018/03/01', rol: 'Member', estado: 'Pending' },
    { id: 5, nombre: 'Friderik Dávid', registro: '2018/01/21', rol: 'Staff', estado: 'Active' },
    { id: 6, nombre: 'Yiorgos Avraamu', registro: '2018/01/01', rol: 'Member', estado: 'Active' },
    { id: 7, nombre: 'Avram Tarasios', registro: '2018/02/01', rol: 'Staff', estado: 'Banned' },
    { id: 8, nombre: 'Quintin Ed', registro: '2018/02/01', rol: 'Admin', estado: 'Inactive' },
    { id: 9, nombre: 'Enéas Kwadwo', registro: '2018/03/01', rol: 'Member', estado: 'Pending' },
    { id: 10, nombre: 'Agapetus Tadeáš', registro: '2018/01/21', rol: 'Staff', estado: 'Active' },
  ];

  const [details, setDetails] = useState([]);

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
    { key: 'nombre', _style: { width: '40%' } },
    'registro',
    { key: 'rol', _style: { width: '20%' } },
    { key: 'estado', _style: { width: '20%' } },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      sorter: false,
      filter: false
    }
  ]

  const getBadge = (estado) => {
    switch (estado) {
      case 'Active': return 'success'
      case 'Inactive': return 'secondary'
      case 'Pending': return 'warning'
      case 'Banned': return 'danger'
      default: return 'primary'
    }
  }

  return (
    <>
      <h2 className="mb-3">Prepadawans</h2>
      <CDataTable
        items={usersData}
        fields={fields}
        columnFilter
        tableFilter
        footer
        itemsPerPageSelect
        itemsPerPage={5}
        hover
        sorter
        pagination
        scopedSlots={{
          'estado':
            (item) => (
              <td>
                <CBadge color={getBadge(item.estado)}>
                  {item.estado}
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
                      {item.username}
                    </h4>
                    <p className="text-muted">Inscrito Desde: {item.registered}</p>
                    <CButton size="sm" color="info">
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

    </>
  );
};

export default Prepadawan;
