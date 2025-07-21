import { Paragraph, Footer, TextRun, Table, TableRow, TableCell, WidthType, PageNumber, Header, HeadingLevel } from "docx";
import { constants } from "../static/const";

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

    headers:{
        default: new Header({
            children:[
                new Paragraph({
                    children: [new TextRun({ children: ["TS /MS Technical Assessment	                                                                                     Confidential"],italics:true })],
                    alignment: "center"
                })          
            ]
        })
    },

    footers: {
        default: new Footer({
            children: [
                new Paragraph({
                    children: [new TextRun({ children: ["Eli Lilly & Company - Confidential		            Page ", PageNumber.CURRENT, " of ", PageNumber.TOTAL_PAGES],italics:true })],
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
                            new Paragraph({ children: [new TextRun({ text: "The information in this document is confidential.  It is the property of Eli Lilly and Company or its subsidiaries and should not be copied by or distributed to external persons, unless such persons are bound by a confidentiality agreement with Eli Lilly and Company or its subsidiaries.  ", size: 20 })], spacing: { after: 200 } }),

                            ]
                        })
                    ],
                }),
            ],
            width: {
                size: 9935,
                type: WidthType.DXA,
            },
            alignment: "center"
        }),

        new Paragraph({
            children:[new TextRun({text:"Technical Assessment",size:20})],
            alignment:'center',
            spacing:{before:2000,after:200}
        }),

        new Paragraph({
            children:[new TextRun({text:` ${constants.molecule} for ${constants.site} Process Contact Material Extractables and Leachables Risk Assessment Summary Report`,bold:true,size:24})],
            alignment:'center'
        }),

        new Paragraph({
            children:[
                new TextRun({text:constants.documentAuthor,size:20}),
            ],
            alignment:'center',
            spacing:{before:200,after:1200}
        }),

        new Paragraph({
            children:[new TextRun({text:"Abstract",size:28,bold:true})],
            spacing:{after:200},
            alignment:'center',
            heading:HeadingLevel.HEADING_1
        }),

        new Paragraph({
            children:[new TextRun({text:`A review of risk assessments for extractables and  potential leachables for process contact materials (PCM) used for ${constants.brand} (${constants.molecule}) ${constants.drugSubstanceOrDrugProduct} manufactured in ${constants.building} ${constants.site} was performed in accordance with the requirements in LQP-230-8.  Based on information summarized throughout this document, the materials used in the process have been adequately assessed, meet appropriate standards, and are manufactured with materials that are safe for the intended use.  `,size:20})],
            spacing:{after:2000}
        }),
        new Paragraph({
            children:[new TextRun({text:"Keywords",size:20,bold:true})],
            spacing:{after:700},
            alignment:'center'
        }),

        new Paragraph({
            children:[new TextRun({text:`${constants.brand}, ${constants.molecule}, Extractables, Leachables, Risk Assessment, Consumables, Process Contact Material, PCM, ${constants.site}, ${constants.building}, LQP-230-8`})]
        }),


    ],
}


export default page1;