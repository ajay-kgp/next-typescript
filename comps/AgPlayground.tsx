import React, { useState, useEffect, useRef } from 'react';
import { Button } from "antd";
import { Content } from "antd/lib/layout/layout";
import { Typography } from 'antd';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

type Props = {};

// yet to throw my typescript skills here XD

const AgPlayground = (props: Props) => {
    
    const { Title } = Typography;
    
    const [rowData, setRowData] = useState([]);
    const [selectedRows, setSelectedRows] = useState("");
    const gridRef = useRef(null);
    const onButtonClick = (e: any) => {
        const selectedNodes = gridRef.current.api.getSelectedNodes()
        const selectedData = selectedNodes.map( (node:any) => node.data )
        const selectedDataStringPresentation = selectedData.map( (node:any) => `${node.make} ${node.model}`).join(', ')
        setSelectedRows(selectedDataStringPresentation)
    }
    useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/row-data.json')
        .then(result => result.json())
        .then(rowData => setRowData(rowData))
    }, []);
    
    return <>
    <Content style={{ padding: '50px 10px' }}>
      <div className="site-layout-content">
        <Title>Ag-grid Data Visualization</Title>
        <Button onClick={onButtonClick} type="primary">Get Selected Row Data</Button>
      </div>
      {
          selectedRows ? 
            <span>
                Selected Rows: {selectedRows}
            </span>
            :
            <span>
                Select some rows and click on the button to load them.
            </span>
    }
      <div className="ag-theme-alpine" style={{height: '100%', width: '45%', marginTop:'2rem'}}>
            <AgGridReact
            defaultColDef={{
            enableRowGroup: true,
            enablePivot: true,
            enableValue: true,
            sortable: true,
            filter: true,
            resizable: true,
          }}
            domLayout='autoHeight'
              ref={gridRef}
              rowData={rowData}
              rowSelection="multiple">
            <AgGridColumn field="make" sortable={true} filter={true} checkboxSelection={true}></AgGridColumn>
               <AgGridColumn field="model" sortable={true}></AgGridColumn>
               <AgGridColumn field="price" sortable={true} filter={true}></AgGridColumn>
            </AgGridReact>
      </div>
    </Content>
  </>
};

export default AgPlayground;