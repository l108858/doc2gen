import { Paragraph, Footer, TextRun, Table, TableRow, TableCell, WidthType, PageNumber } from "docx";

const page1 = {
    properties: {

        page: {
            margin: {
                top: 720,
                bottom: 720,
                left: 720,
                right: 720,

            }
        },
    },

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
            spacing: {
                after: 800
            }
        }),

        new Table({
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            width: {
                                size: 3905,
                                type: WidthType.DXA,
                            },

                            margins: {
                                top: 200,
                                bottom: 200,
                                left: 100,
                            },
                            children: [new Paragraph({ children: [new TextRun({ text: "Confidential Information", bold: true, size: 28 })], alignment: "center", spacing: { after: 200 } }),
                            new Paragraph({ children: [new TextRun({ text: "The information contained in this document is confidential. It is the property of Eli Lilly and Company or its subsidiaries and should not be copied by or distributed to external persons, unless such persons are bound by a confidentiality agreement with Eli Lilly and Company or its subsidiaries.", size: 24 })], spacing: { after: 200 } }),
                            ]
                        })
                    ],
                }),
            ],
            width: {
                size: 6935,
                type: WidthType.DXA,
            },
            alignment: "center"
        }),
        new Paragraph({
            children: [
                new TextRun({
                    text: "Assessment of Potential Leachables: Single-Use Systems for",
                    bold: true,
                    size: 32
                }),
                new TextRun({
                    text: "_site_name_",
                    highlight: "yellow",
                    bold: true,
                    size: 32
                }),
                new TextRun({
                    text: " \n Manufacturing >",
                    size: 32,
                    bold: true
                }),
                new TextRun({
                    text: "_min_batch_size_",
                    highlight: "yellow",
                    size: 32,
                    bold: true
                }),
                new TextRun({
                    text: "L for",
                    size: 32,
                    bold: true
                }),
                new TextRun({
                    text: "_drug_product_ (_item_code_ \n parental_container)",
                    highlight: "yellow",
                    size: 32,
                    bold: true
                }),

            ],
            alignment: 'center'
            ,
        }),

        new Paragraph({ children: [new TextRun({ text: "_input_author_name_1_", highlight: "yellow", size: 24 })], alignment: "center", spacing: { before: 1000, after: 1000 } }),
        new Paragraph({ children: [new TextRun({ text: "Parenteral Network/ TSMS", size: 24 })], alignment: "center", spacing: { after: 1000 } }),

        new Paragraph({ children: [new TextRun({ text: "Eli Lilly and Company", size: 24 })], alignment: "center", spacing: { after: 1000 } }),

        new Paragraph({
            children: [new TextRun({ text: "Keywords: ", size: 24, bold: true }),
            new TextRun({ text: " _site_name_,", highlight: "yellow", size: 24 }),
            new TextRun({ text: "SUS, SUDS, ICH Q3D,", size: 24 }),
            new TextRun({ text: "_drug_product_, _item_code_, parental_container", highlight: "yellow", size: 24 }),

            ],
            spacing: { after: 400 }
        }),

        new Paragraph({ children: [new TextRun({ text: "QualityDocs Name: ", bold: true, size: 24 })] }),
    ],
}


export default page1;