import React from "react";
import { StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";

const Table = ({ regExpDate, insExpDate, nextOilChang, currentOdometer }) => {
  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>Vehicle maintenance information</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>Registration Expiry Date</DataTable.Cell>
        <DataTable.Cell>
          {regExpDate}
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Insurance Expiry Date</DataTable.Cell>
        <DataTable.Cell>
          {insExpDate}
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Current Odometer</DataTable.Cell>
        <DataTable.Cell>
          {currentOdometer}
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell textStyle={{ color: "red" }}>
          Next Oil Change
        </DataTable.Cell>
        <DataTable.Cell>
          {nextOilChang}
        </DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

export default Table;

const styles = StyleSheet.create({
  container: { borderRadius: 3, borderWidth: 0.2 },
  tableHeader: {
    backgroundColor: "#DCDCDC"
  }
});
