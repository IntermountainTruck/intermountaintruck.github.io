import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import moment from "moment";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  section: {
    marginLeft: 50,
    padding: 10,
    flexGrow: 1,
    fontSize: 12,
  },
});

export default function QuotePdf(props) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={{ marginTop: 40 }}>
          <Text style={{ textAlign: "center", fontSize: 20 }}>
            Intermountain Truck Rebuilders
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 14,
              marginTop: 10,
            }}
          >
            2927 S American Way Ogden, UT 84401
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 14,
              marginTop: 10,
            }}
          >
            800-950-9261
          </Text>
          <View style={styles.section}>
            <Text>Quote #: {props.quoteNum}</Text>
            <Text>Submitted to: {props.companyName}</Text>
            <Text>ATTN: {props.customerName}</Text>
            <Text>Date: {moment().format("MM/DD/YYYY")}</Text>
            <Text
              style={{
                width: "80vw",
                borderBottom: 1.5,
                marginTop: 20,
                marginBottom: 30,
              }}
            ></Text>
            <Text style={{ marginBottom: 10 }}>
              We are pleased to provide you with the following quote:
            </Text>
            <Text
              style={{
                textDecoration: "underline",
                // textAlign: "center",
                margin: 10,
              }}
            >
              Description
            </Text>
            <Text>{props.cabinet}</Text>
            <Text>{props.tank}</Text>
            <Text>{props.pump}</Text>
            <Text>{props.meter}</Text>
            <Text>{props.power}</Text>
            <Text>{props.eStop}</Text>
            <Text>{props.scale}</Text>
            <Text>{props.shipping}</Text>
            <Text>{props.purger}</Text>
            <Text>{props.plumbingKit}</Text>
            <Text style={{ textDecoration: "underline", margin: 10 }}>
              Adapter(s)
            </Text>
            <Text>{props.none}</Text>
            <Text>{props.euroStyle}</Text>
            <Text>{props.forklift}</Text>
            <Text>{props.hanson}</Text>
            <Text>{props.pol}</Text>
            <Text>{props.rv}</Text>
            <Text>{props.highCapacity}</Text>
            <Text
              style={{
                textAlign: "right",
                marginTop: 20,
                marginBottom: 20,
                marginRight: 70,
                fontSize: 14,
              }}
            >
              Total......{props.price}
            </Text>
            <Text style={{ maxWidth: "60vw", fontSize: 12 }}>
              This bid does not include any taxes, licenses, permits or
              electrical. All work guaranteed to be installed to NFPA 58 2017.
              Warranty parts for 12 months.
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 30,
              }}
            >
              <Text>Acceptance of Proposal</Text>
              <Text style={{ marginLeft: 100 }}>
                Prepared By {props.yourName}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 40,
                maxWidth: "30vw",
                borderTop: 1,
              }}
            >
              <Text>
                The above prices, specifications terms and conditions are hereby
                accepted, and you are authorized to do the work as quoted.
              </Text>
              <Text style={{ marginLeft: 50, width: 200, borderTop: 1 }}>
                Terms: Quote valid for 90 days. {"          "}Taxes: Federal,
                state and local
                {"  "}taxes not included. Shipping not included.
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
