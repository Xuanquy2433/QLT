import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from "reactstrap";
import { toast } from "react-toastify";
import axios from "axios";
import {
  API_ADD_ADDRESS_POINT, API_DELETE_ADDRESS_POINT,
  API_GET_ADDRESS_POINT_BY_ID,
  API_PRODUCT_ADD, API_UPDATE_ADDRESS_POINT
} from "../../utils/const";
import Map from "./MapTest";
import { DirectionsService } from "@react-google-maps/api";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1400,
  height: 750,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function AddressPointBox({ openDetail, closeDetail, addressId }) {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [updatingItem, setUpdatingItem] = useState({});
  const [name, setName] = useState("");
  const [updateId, setUpdateId] = useState(null);
  const [input, setInput] = useState({
    addressId: addressId,
    lat: 0,
    lng: 0,
    name: ""
  }
  );
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [random, setRandom] = useState(0);
  const [updating, setUpdating] = useState(false);

  const fetchData = async (id) => {
    const response = await axios.get(API_GET_ADDRESS_POINT_BY_ID + id)
    if (response) {
      setData(response.data)
    }
  };

  useEffect(() => {
    if (updatingStatus === false) {
      if (openDetail === true) {
        fetchData(addressId);
        setOpen(true);
      }
    }
  }, [openDetail, random]);

  useEffect(() => {
    if (updatingStatus === false) {
      fetchData(addressId)
    }
  }, [random]);

  useEffect(() => {

    setInput({
      ...input,
      addressId: addressId,
      lat: lat,
      lng: lng
    })


  }, [lat, lng]);


  const addAddressPoint = async (addressId) => {
    try {
      const response = await axios.put(API_ADD_ADDRESS_POINT, JSON.stringify(input), {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      if (response.status === 200) {
        setRandom(Math.random());
        clear();
        toast.success("Thêm thành công", { autoClose: 1500 })
      }

    } catch (error) {
      if (error.response.data.message) {
        toast.error(`${error.response.data.message}`, {
          autoClose: 2000
        })
      }
    }
  }


  const addAddressPointBehind = async (addressId, pointId) => {
    try {
      if (data.name === " ") {
        toast.error("Không được để trống địa chỉ", { autoClose: "1500" })
      } else {

        const response = await axios.put(API_ADD_ADDRESS_POINT + '?addressPointId=' + pointId, JSON.stringify(input), {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        if (response.status === 200) {
          setRandom(Math.random());
          clear();
          toast.success("Thêm thành công", { autoClose: 1500 })
        }
      }
    } catch (error) {
      if (error.response.data.message) {
        toast.error(`${error.response.data.message}`, {
          autoClose: 2000
        })
      }
    }
  }

  const deletePoint = async (pointId) => {
    try {
      if (data.name === " ") {
        toast.error("Không được để trống địa chỉ", { autoClose: "1500" })
      } else {
        const response = await axios.delete(API_DELETE_ADDRESS_POINT + pointId, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        if (response.status === 200) {
          setRandom(Math.random());
          toast.success("xoá thành công", { autoClose: 1500 })
        }
      }
    } catch (error) {
      if (error.response.data.message) {
        toast.error(`${error.response.data.message}`, {
          autoClose: 2000
        })
      }
    }
  }


  function handleChange(e) {
    setName(e.target.value);
    setInput({
      ...input,
      addressId: addressId,
      lat: lat,
      lng: lng,
      name: name
    })
  }


  function updatePoint(data) {
    setUpdating(true);
    console.log("updating")
    setLat(data.lat);
    setLng(data.lng);
    setName(data.name);
    setUpdateId(data.id);
    setInput({
      ...input,
      addressId: addressId,
      lat: lat,
      lng: lng,
      name: name
    })
  }

  const onUpdatePoint = async (updateId, item) => {
    try {
      if (data.name === " ") {
        toast.error("Không được để trống địa chỉ", { autoClose: "1500" })
      } else {
        const response = await axios.put(API_UPDATE_ADDRESS_POINT + updateId, JSON.stringify(item), {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        if (response.status === 200) {
          setRandom(Math.random());
          onCancelUpdate()
          toast.success("Update thành công", { autoClose: 1500 })
        }
      }
    } catch (error) {
      if (error.response.data.message) {
        toast.error(`${error.response.data.message}`, {
          autoClose: 2000
        })
      }
    }

  }
  function clear() {
    setName("");
    setLat(0);
    setLng(0);

  }
  function onCancelUpdate() {
    clear();
    setUpdateId(null);
    setUpdating(false);

  }

  useEffect(() => {
    if (updatingStatus === true) {
      console.log("updating")
      onUpdatePoint(updatingItem.id, updatingItem)
      setUpdatingStatus(false)
    }
  }, [updatingStatus, updatingItem]);

  const StyledTableCell = styled(TableCell)({
    padding: '4px 16px',
  })
  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={closeDetail}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
<>
  <Box  sx={style}>
    <div onClick={() => closeDetail()}
         style={{ position: 'absolute',color: 'red',cursor: 'pointer'
           ,fontWeight: '700',fontSize:'1.2em',top:'0',left:"98.5%" }}>X</div>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>

      <TableContainer sx={{ height: '700px' }}>
        <Table aria-label="sticky table" sx={{height: '30%'}}>
          <TableHead sx={{borderBottom: '2px solid black'}}>
            <StyledTableCell>
              {updating ? updateId  : null}
            </StyledTableCell>
            <StyledTableCell>
              name:
              <input type="text" value={name} onChange={handleChange} />
            </StyledTableCell>
            <StyledTableCell>
              lat:
              <input type="text" value={lat} />
            </StyledTableCell>
            <StyledTableCell>
              lng:
              <input type="text" value={lng} />
            </StyledTableCell>

            {updating ? <>
                  <StyledTableCell/>
                  <StyledTableCell/>
                  <StyledTableCell>
                    <Button onClick={() => { onUpdatePoint(updateId, input) }}>Update</Button>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Button onClick={() => { onCancelUpdate() }}>X</Button>
                  </StyledTableCell>
                </>
                :  data.length < 2 ?
                    <>
                      <StyledTableCell/>
                      <StyledTableCell> <button onClick={() => addAddressPoint(addressId)}>Thêm</button></StyledTableCell>
                    </>
                    : null }
          </TableHead>
          <TableBody>
            {data.map((column) => (
                <TableRow>
                  <StyledTableCell>
                    {column.id}
                  </StyledTableCell>
                  <StyledTableCell>
                    {column.name}
                  </StyledTableCell>
                  <StyledTableCell>
                    {column.lng}
                  </StyledTableCell>
                  <StyledTableCell>
                    {column.lat}
                  </StyledTableCell>
                  <StyledTableCell>
                    {column.number}
                  </StyledTableCell>
                  <StyledTableCell>
                    <Button onClick={() => addAddressPointBehind(addressId, column.id)} sx={{ height: '3.2em', width: "15%" }} variant="contained" color="success">
                      Thêm
                    </Button>
                  </StyledTableCell>

                  <StyledTableCell>
                    <Button onClick={() => {updatePoint(column)
                    }

                    } sx={{ height: '3.2em', width: "15%" }} variant="contained" color="success">
                      Update
                    </Button>
                  </StyledTableCell>

                  <StyledTableCell>
                    <Button onClick={() => deletePoint(column.id)} sx={{ height: '3.2em', width: "15%" }} variant="contained" color="warning">
                      X
                    </Button>
                  </StyledTableCell>
                </TableRow>
            ))
            }
          </TableBody>

        </Table>
        <Map
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `70%`, margin: `auto`, border: '2px solid black' }} />}
            mapElement={<div style={{ height: `100%` }} />}
            setLatMap={setLat}
            setLngMap={setLng}
            data={data}
            setUpdatingItem={setUpdatingItem}
            setUpdatingStatus={setUpdatingStatus}
            finish={setUpdatingStatus}
        />
      </TableContainer>

    </Paper>

  </Box>
</>

      </Modal>

    </React.Fragment >
  )
}

export default AddressPointBox