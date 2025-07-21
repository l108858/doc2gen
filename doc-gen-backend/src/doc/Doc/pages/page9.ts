import { Paragraph, Footer, TextRun, HeadingLevel, PageNumber } from "docx";
import table6 from "../Tables/table6Page9";
import table7 from "../Tables/table7Page9";
import table8 from "../Tables/table8Page9";

const page9 = {
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
            children: [new TextRun({ text: "5  Potential Organic Leachables" ,size:28,bold:true,color:"000000"})],
            heading: HeadingLevel.HEADING_1,
            spacing: {
                after: 200
            }
        }),
        new Paragraph({
            children: [new TextRun({ text: "5.1	Organic Extractables as Potential Leachables (to be repeated as needed)", bold: true, size: 24,italics:true,color:"000000" })],
            spacing: {
                after: 200
            },
            heading:HeadingLevel.HEADING_2
        }),
        new Paragraph({
            children: [new TextRun({ text: "Table 6: Extractables as Potential Leachables ≤AET for the _drug_product_ Drug Product[reference]", bold: true, size: 24 ,color:"000000"})],
            spacing: {
                after: 200
            },
            heading:HeadingLevel.HEADING_3
        }),
        table6,
        new Paragraph({
            children: [new TextRun({ text: "Potential Leachables are calculated by multiplying the Maximum reported extractables concentration (µg/cm2) by the vessel surface area (_vessel_surface_area cm2) and then diving by the minimum batch size (_min_batch_size_  mL). " })],
            spacing: {
                before: 200,
                after: 200
            }
        }),
        new Paragraph({
            children: [new TextRun({ text: "Table X", highlight: "yellow", bold: true })
                , new TextRun({ text: "summarizes the SUV organic extractables with potential exposure concentrations above the AET (_AET_  mcg/mL) for the _drug_product_  product." })],
            spacing: {
                before: 200,
                after: 200
            }
        }),
        new Paragraph({
            children: [new TextRun({ text: "Table 7: Extractables as Potential Leachables >AET for the _drug_product_ Drug Product[reference]", bold: true,color:"000000" })],
            spacing: {
                before: 200,
                after: 200
            },
             heading:HeadingLevel.HEADING_3
        }),
        table7,
        new Paragraph({
            children: [
                new TextRun({ text: "* *Potential Leachables are calculated by multiplying the Maximum reported extractables concentration (µg/cm2) by the vessel surface area (_vessel_surface_area cm2) and then diving by the minimum batch size (min_batch_size mL). " })
            ],
            spacing: {
                before: 200,
                after: 400
            }
        }),
        new Paragraph({
            children: [new TextRun({ text: "5.2 Cumulative - Organic Extractables as Potential Leachables", bold: true, size: 24,color:"000000" })],
            spacing: {
                after: 200
            },
            heading:HeadingLevel.HEADING_2
        }),
        new Paragraph({
            children: [new TextRun({ text: "Table 8: Potential Leachables >AET for the _drug_product_ Drug Product[reference]", bold: true, size: 24,color:"000000" })],
            spacing: {
                after: 200
            },
             heading:HeadingLevel.HEADING_3
        }),
        table8,
        new Paragraph({
            children: [
                new TextRun({ text: "* *Potential Leachables are calculated by multiplying the Maximum reported extractables concentration (µg/cm2) by the vessel surface area (_vessel_surface_area cm2) and then diving by the minimum batch size (min_batch_size mL). " })
            ],
            spacing: {
                before: 200,
                after: 400
            }
        }),


    ]
}


export default page9;