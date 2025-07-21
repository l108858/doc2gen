import { HeadingLevel, Paragraph, TextRun } from "docx"
import table1 from "../tables/table1"
import table2 from "../tables/table2"

const page8 = {

    children: [

        new Paragraph({

            children: [
                new TextRun({
                    text: "Determining PCM E&L Risk",
                    size: 28,
                    bold: true,
                    underline: { type: "single" }

                }),
            ],
            heading:HeadingLevel.HEADING_1,
            spacing:{after:200}
        }),

        new Paragraph({
            children:[
                new TextRun({
                    text:"To determine the process contact material E&L risk score, the “Risk Assessment of Extractables as Potential Leachables” table from LQP-230-8 is utilized to rate the applicable PCM on risk (i.e., low, medium, or high). 1 This table is represented as Table 1, below, for reference",size:20
                })
            ],
            spacing:{after:200}
        }),
        new Paragraph({
            children:[
                new TextRun({
                    text:"Table 1: Overview of Risk Scores for Extractable as Potential Leachables Assessment1",
                    size:20,
                    bold:true
                })
            ],
            heading:HeadingLevel.HEADING_2,
            alignment:"center",
            spacing:{after:200}
        }),
        table1,

        new Paragraph({
            children:[
                new TextRun({
                    text:'To calculate the E&L risk score, multiply the Rating from each Risk Factor with the respective E&L Weight from Table 1.  This is represented as follows:'
                })
            ],
            spacing:{
                before:200,
                after:200
            }
        }),

        new Paragraph({
            children:[
                new TextRun({
                    text:"Risk Score = DAS*Weight (0.40) + DR*weight (0.15) + ET*weight (0.15) + ED*weight (0.15) + PFMI*weight (0.15)",
                    italics:true
                })
            ]
        }),

        new Paragraph({
            children:[
                new TextRun({
                    text:"Table 2, below, summarizes the E&L risk rating levels (out of a possible range 1.0 to 7.2) from LQP-230-8:"
                })
            ],
            spacing:{after:200}
        }),

        new Paragraph({
            children:[
                new TextRun({
                    text:"Table 2:  Risk Score Category Rankings1",
                    size:20,
                    bold:true
                }),
            ],
            heading:HeadingLevel.HEADING_2,
            alignment:"center",
            spacing:{after:200}
        }),

        table2

    ]

}

export default page8