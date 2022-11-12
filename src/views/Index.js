
import { useEffect, useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import { API_GET_OVERVIEW } from "utils/const";
import axios from "axios";
import { API_OVERVIEW_MONTHLY_EARNING } from "utils/const";
import { API_OVERVIEW_MONTHLY_HIRED } from "utils/const";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { API_OVERVIEW_TIME_PRODUCT_HIRED } from "utils/const";
import moment from "moment";


const columns = [
  { id: 'id', label: 'Id', minWidth: 170 },
  { id: 'name', label: 'Tên trụ', minWidth: 100 },
  {
    id: 'description',
    label: 'Mô tả',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'price',
    label: 'Giá',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}
const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = async (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
    if (index === 2) {
      console.log('week');
      const response = await axios.get(API_OVERVIEW_MONTHLY_EARNING + '5&type=week')
      if (response) {
        setDataMonth(response.data)
      }
    } else {
      console.log('month');
      const response = await axios.get(API_OVERVIEW_MONTHLY_EARNING + '5&type=month')
      if (response) {
        setDataMonth(response.data)
      }
    }
  };

  const [dataOverview, setDataOverview] = useState([])
  const [dataOverviewOrderEachMonth, setDataOverviewOrderEachMonth] = useState([])


  const overview = async (e) => {
    const response = await axios.get(API_GET_OVERVIEW)
    if (response) {
      setDataOverview(response.data)
    }
  }

  const dataMapEachMonth = new Map(Object.entries(dataOverviewOrderEachMonth));


  let monthEach = []
  let totalEach = []
  dataMapEachMonth.forEach(function (value, key) {
    monthEach.push(key)
  })
  dataMapEachMonth.forEach(function (value, key) {
    totalEach.push(value)
  })


  // data month earning
  const [dataMonth, setDataMonth] = useState([])
  const dataMap = new Map(Object.entries(dataMonth));

  let month = []
  let total = []
  dataMap.forEach(function (value, key) {
    month.push(key)
  })
  dataMap.forEach(function (value, key) {
    total.push(value)
  })

  const data = {
    labels: month,
    datasets: [
      {
        label: "Performance",
        data: total
      }
    ]
  };

  // const data2 = {
  //   labels: month,
  //   datasets: [
  //     {
  //       label: "Performance",
  //       data: total
  //     }
  //   ]
  // }

  //GET API TIME_PRODUCT_HIRED
  let d = new Date();
  let date2Input = d.getFullYear() + '/' + d.getMonth() + '/' + d.getDate()


  const [dataTimeOverview, setDataTimeOverview] = useState([])
  const [page, setPage] = useState(0);
  const [dateAPI1, setDateAPI1] = useState(date2Input);
  const [dateAPI2, setDateAPI2] = useState(moment().format('YYYY/MM/DD'));
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const handleChangePage = async (event, newPage) => {
    const response = await axios.get(API_OVERVIEW_TIME_PRODUCT_HIRED + '?dataPerPage=' + rowsPerPage + ' &date1=' + date2Input + '&date2=' + moment().format('YYYY/MM/DD') + '&page=' + (newPage + 1) + '&sort=desc')
    if (response) {
      setPage(newPage);
      setDataTimeOverview(response.data.map)
    }
  };

  const handleChangeRowsPerPage = async (event) => {
    const response = await axios.get(API_OVERVIEW_TIME_PRODUCT_HIRED + '?dataPerPage=' + event.target.value + ' &date1=' + date2Input + '&date2=' + moment().format('YYYY/MM/DD') + '&page=' + 1 + '&sort=desc')
    if (response) {
      setDataTimeOverview(response.data.map)
      setPage(0);
      setRowsPerPage(+event.target.value);
    }
  };

  const timeOverview = async (e) => {
    const response = await axios.get(API_OVERVIEW_TIME_PRODUCT_HIRED + '?dataPerPage=' + rowsPerPage + ' &date1=' + date2Input + '&date2=' + moment().format('YYYY/MM/DD') + '&page=' + page + 1 + '&sort=desc')
    if (response) {
      setDataTimeOverview(response.data.map)
      setTotalPages(response.data.totalProduct)
    }
  }

  const submitDate = async (e) => {
    const response = await axios.get(API_OVERVIEW_TIME_PRODUCT_HIRED + '?dataPerPage=' + rowsPerPage + ' &date1=' + dateAPI1.replace(/-/g, '/') + '&date2=' + dateAPI2.replace(/-/g, '/') + '&page=' + page + 1 + '&sort=desc')
    if (response) {
      setDataTimeOverview(response.data.map)
      setTotalPages(response.data.totalProduct)
    }
  }
  const arr = []
  const arr2 = []
  const dataArr = []

  const obj = Object.entries(dataTimeOverview)
  obj.forEach(function (value, key) {
    arr.push(value)
  })

  const obj2 = Object.entries(arr)
  obj2.forEach(function (value, key) {
    arr2.push(value[1])
  })
  arr2.forEach(function (value, key) {
    dataArr.push(JSON.parse(value[0]))
  })

  useEffect(() => {

    //set default value input date
    var date = new Date();
    var day = date.getDate();
    var month2 = date.getMonth() + 1;
    var month3 = date.getMonth();
    var year = date.getFullYear();
    if (month2 < 10) month2 = "0" + month2;
    if (day < 10) day = "0" + day;
    var today1 = year + "-" + month2 + "-" + day;
    var today2 = year + "-" + month3 + "-" + day;

    document.getElementById("date1").value = today2;
    document.getElementById("date2").value = today1;
    overview()
    const onchangeHired = async (e) => {
      const response = await axios.get(API_OVERVIEW_MONTHLY_HIRED)
      if (response) {
        setDataOverviewOrderEachMonth(response.data)
      }
    }
    const overviewMonth = async (e) => {
      const response = await axios.get(API_OVERVIEW_MONTHLY_EARNING + '&type=month')
      if (response) {
        setDataMonth(response.data)
      }
    }
    overviewMonth()
    onchangeHired()
    timeOverview()
  }, [])
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row className="mb-4">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Thu nhập hàng tháng
                    </h6>
                    <h2 className="text-white mb-0">Thu nhập {new Date().getFullYear()}{" "}</h2>
                  </div>
                  {/* <p className="mt-3">
                    <NavLink>
                      <span className="d-none d-md-block"> <input type="date" /></span>
                    </NavLink>
                  </p> */}
                  {/* <span style={{color:'white', fontSize: '1.5em',fontWeight: '600'}}> -</span> */}
                  <p className="mt-3">
                    <NavLink>
                      <span className="d-none d-md-block">  </span>
                    </NavLink>
                  </p>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1
                          })}
                          style={{ cursor: 'pointer' }}
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Tháng</span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2
                          })}
                          data-toggle="tab"
                          style={{ cursor: 'pointer' }}
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                          <span className="d-none d-md-block">Tuần</span>
                          <span className="d-md-none">W</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Line
                    data={data}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Số trụ được thuê hàng tháng
                    </h6>
                    {/* <h2 className="mb-0">{new Date().getMonth()}{"/"}{new Date().getFullYear()}{" "}</h2> */}
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Bar
                    data={{
                      labels: monthEach,
                      datasets: [
                        {
                          label: "Thu nhâp",
                          data: totalEach,
                          maxBarThickness: 10
                        }
                      ]
                    }}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5 mb-4">
          <Col className="mb-5 mb-xl-0" style={{ width: '100%' }}>
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <span className="mb-0 mr-3" style={{ color: 'black', fontWeight: '600' }}>Các trụ được thuê từ thời gian từ:</span>
                    <input name="date1" style={{ padding: "5px 10px", borderRadius: "8px" }} className="mr-3" id='date1' onChange={e => setDateAPI1(e.target.value)} type="date" />
                    <span className="mb-0 mr-3" style={{ color: 'black', fontWeight: '600' }}>đến</span>
                    <input style={{ padding: "5px 10px", borderRadius: "8px" }} className="mr-3" id='date2' onChange={e => setDateAPI2(e.target.value)} type="date" />
                    <Button
                      color="primary"
                      onClick={submitDate}
                      size="sm"
                    >
                      Tìm kiếm
                    </Button>
                  </div>

                </Row>
              </CardHeader>
              <TableContainer sx={{ height: 588 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          sx={{ color: 'black', fontWeight: '600', fontSize: '1em' }}
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {dataArr
                      .map((row) => {
                        return (
                          <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[]}
                component="div"
                count={totalPages}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Card>
          </Col>
        </Row>
        {/* <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Page visits</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Page name</th>
                    <th scope="col">Visitors</th>
                    <th scope="col">Unique users</th>
                    <th scope="col">Bounce rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">/argon/</th>
                    <td>4,569</td>
                    <td>340</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/index.html</th>
                    <td>3,985</td>
                    <td>319</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                      46,53%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/charts.html</th>
                    <td>3,513</td>
                    <td>294</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                      36,49%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/tables.html</th>
                    <td>2,050</td>
                    <td>147</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 50,87%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/profile.html</th>
                    <td>1,795</td>
                    <td>190</td>
                    <td>
                      <i className="fas fa-arrow-down text-danger mr-3" />{" "}
                      46,53%
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Social traffic</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>

            </Card>
          </Col>
        </Row> */}
      </Container>
    </>
  );
};

export default Index;
