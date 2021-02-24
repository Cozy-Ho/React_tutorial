import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "./Table1.css";
// import "../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

function rowClassNameFormat(row, rowIdx) {
    // row is whole row object
    // rowIdx is index of row
    console.log(row);
    return parseInt(row["score"]) > 50 ? "High-Score-Row" : "Low-Score-Row";
}

function showLang(cell, row) {
    return cell.lang;
}
function showDubbing(cell, row) {
    return cell.dubbing;
}
function showSubtitle(cell, row) {
    return cell.subtitle;
}

class Table1 extends Component {
    render() {
        const options = {
            page: 4,
            prePage: "⟵",
            nextPage: "⟶",
            firstPage: "⟸",
            lastPage: "⟹",
        };
        return (
            <div>
                <BootstrapTable
                    data={this.props.data.searchMovie}
                    trClassName={rowClassNameFormat}
                    pagination={true}
                    options={options}
                >
                    <TableHeaderColumn isKey dataField="id">
                        ID
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="title">Title</TableHeaderColumn>
                    <TableHeaderColumn dataField="score">Score</TableHeaderColumn>
                    <TableHeaderColumn dataField="desc">Desc</TableHeaderColumn>
                    <TableHeaderColumn dataField="info" dataFormat={showLang}>
                        Lang
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="info" dataFormat={showDubbing}>
                        Dubbing
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="info" dataFormat={showSubtitle}>
                        Subtitle
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="watched">Watched</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default Table1;
