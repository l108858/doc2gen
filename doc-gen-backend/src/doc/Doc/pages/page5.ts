import { Paragraph, Footer, TextRun, PageNumber, HeadingLevel } from "docx";
import table2 from "../Tables/table2Page5";


const page5 = {
    footers: {
        default: new Footer({
            children: [
                new Paragraph({
                    children: [new TextRun({ children: ["Proprietary & Confidential - Eli Lilly & Company		            Page ", PageNumber.CURRENT, " of ", PageNumber.TOTAL_PAGES] })],
                    alignment: "center"
                })
            ]
        })
    },

    children: [

        new Paragraph({
            children: [
                new TextRun({
                    text: "2   Assessment Strategy  ",
                    size:28,
                    bold:true,
                    color:"000000"
                })
            ],
            heading: HeadingLevel.HEADING_1
        }),

        new Paragraph({
            children: [
                new TextRun({
                    text: "The human health risk assessment strategy, material risk score, and single use item selection criteria for this assessment are detailed in LQP-230-8 . See Table below for a list of single use items assessed in this report. ", break: 1,
                    size:24,
                })
            ],
        }),

        new Paragraph({
            spacing: {
                after: 400
            }
        }),
        new Paragraph({
            children: [
                new TextRun({
                    text: "Table 2. Process Contact Materials Assessed from DS Manufacturing ", bold: true, size: 24,color:"000000"
                })
            ],
            spacing: {
                after: 200
            },
            heading:HeadingLevel.HEADING_3
        }),

        table2,

        new Paragraph({
            children: [new TextRun({ text: "1  LQP Reference", break: 1, highlight: "yellow" }), new TextRun({ text: "2  [Material List Reference(s) #] Reference Title", highlight: "yellow", break: 1 })],
            spacing: {
                before: 8000
            }
        })
    ]
}

export default page5;