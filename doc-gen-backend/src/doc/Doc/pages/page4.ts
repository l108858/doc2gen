
import { Paragraph, Footer, TextRun, PageNumber, HeadingLevel } from "docx";
import table1 from "../Tables/table1Page4";

const page4 = {
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
                    text: "1. Introduction",
                    size:28,
                    bold:true,
                    color:"000000"
                })
            ],
            heading: HeadingLevel.HEADING_1,
            pageBreakBefore: true
        }),

        new Paragraph({
            children: [
                new TextRun({
                    text: "The purpose of this document is to provide a human health risk assessment of the maximum potential leachables from the single-use items used in the manufacturing process. See Table below for assessment parameters. This risk assessment may be leveraged to support other _Molecule_ _Container_ manufacturing processes that use the same single use items, as needed.   ",
                    size:24
                })
            ],
            spacing: {
                before: 400
            }
        }),

        new Paragraph({
            children: [
                new TextRun({
                    text: "Table 1. Assessment Parameters of Single Use Items1,2",
                    size:24,
                    color:"000000"
                })
            ],
            heading:HeadingLevel.HEADING_3,
            spacing: {
                before: 400,
                after: 200
            }
        }),
        table1

    ]
}

export default page4;