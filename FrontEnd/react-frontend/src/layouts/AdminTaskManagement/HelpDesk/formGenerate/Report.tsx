import React from "react";
import { Page, Text, Image, Document, StyleSheet, View } from "@react-pdf/renderer";
import logo from "../../../../images/Asset 3.png"
import { title } from "process";
import { text } from "stream/consumers";
import TicketResponseModel from "../../../../Model/TicketResponseModel";

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    text: {
        margin: 12,
        fontSize: 14,
        color: "black",
        textAlign: "justify",
        fontFamily: "Times-Roman"
    },
    header: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
        fontWeight: "bold"
    },
    pagenumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
        borderTopColor: 'black',
        borderTopWidth: 1,
        marginVertical: 10

    },
    ticketdetails: {
        fontSize: 14,
        color: "black",
        textAlign: "left",
        fontFamily: "Times-Roman"
    },
    horizontalLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
    ticketdescription: {
        fontSize: 14,
        color: "purple",
        textAlign: "justify",
        fontFamily: "Times-Roman"
    },
    responsedescription: {
        fontSize: 14,
        color: "black",
        textAlign: "justify",
        fontFamily: "Times-Roman",
        margin: 12,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginVertical: 10,
        borderBottomStyle: 'dotted'
    }


});

export const Report: React.FC<{ ticketdata: any, ticketresponse?: TicketResponseModel[] }> = (props) => {
    return (
        <Document>
            <Page style={styles.body}>
                <Image src={logo} style={{ width: 100, height: 100 }} />
                <Text style={styles.header} fixed>
                    Ticket ID: {props.ticketdata.id} {'\n'}
                    {props.ticketdata.subject}
                </Text>
                <Text style={styles.ticketdetails}>
                    Ticket related to: {props.ticketdata.relatedTo} {'\n'}
                    Ticket raised date : {props.ticketdata.createdTime}
                </Text>
                <View style={styles.horizontalLine} />
                {/* user ticket description */}
                <Text style={styles.ticketdetails}>
                    User name : {props.ticketdata.user.userName}
                </Text>
                <Text style={styles.ticketdescription}>
                    {props.ticketdata.description}
                </Text>
                <View style={styles.horizontalLine} />
                {/* ticket response */}
                <Text style={styles.ticketdetails}>
                    Admin Response: {'\n'}
                </Text>
                {props.ticketresponse ? (
                    props.ticketresponse.map((response, index) => (
                        <View key={index}>
                            <Text style={styles.responsedescription}>
                                Date: {response.createdTime.toString()} {'\n'}
                                Response: {response.response} {'\n'}
                            </Text>
                        </View>
                    ))
                ) : (
                    <Text style={styles.responsedescription}>
                        No responses
                    </Text>
                )}


                <Text style={styles.pagenumber}
                    render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
                    fixed />
            </Page>
        </Document>
    );
}