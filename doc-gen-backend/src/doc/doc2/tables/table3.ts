import {
    Paragraph,
    Table,
    TableCell,
    TableRow,
    TextRun,
    WidthType,
} from "docx";

import { table3Data } from "../static/const";



const table3 = new Table({
    rows: [
        new TableRow({
            children: [
                new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "PCM Description (SAP Name, if applicable)", bold: true, size: 16 })] })],
                }),
                new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Material Number", bold: true, size: 16 })] })],
                }),
                new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Distance Along the Production Stream", bold: true, size: 16 })] })],
                }),
                new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Dilution Ratio (DR) / (SA:V)", bold: true, size: 16 })] })],
                }),
                new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Exposure Temperature (ET)", bold: true, size: 16 })] })],
                }),
                new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Exposure Duration (ED)", bold: true, size: 16 })] })],
                }),
                new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Process-fluid & Material Interaction (PFMI)", bold: true, size: 16 })] })],
                }),
                new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Risk Score", bold: true, size: 16 })] })],
                }),
                new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Risk Rating", bold: true, size: 16 })] })],
                }),
            ],
        }),

        ...table3Data.map((item) =>
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph(item.pcm_description_sap_name_if_applicable)] }),
                    new TableCell({ children: [new Paragraph(item.material_number)] }),
                    new TableCell({ children: [new Paragraph(item.distance_along_the_production_stream)] }),
                    new TableCell({ children: [new Paragraph(item.dilution_ratio_dr_sa_v)] }),
                    new TableCell({ children: [new Paragraph(item.exposure_temperature_et)] }),
                    new TableCell({ children: [new Paragraph(item.exposure_duration_ed)] }),
                    new TableCell({ children: [new Paragraph(item.process_fluid_and_material_interaction_pfmi)] }),
                    new TableCell({ children: [new Paragraph(item.risk_score)] }),
                    new TableCell({ children: [new Paragraph(item.risk_rating)] }),
                ],
            })
        ),
    ],
    width: {
        size: 10000,
        type: WidthType.DXA,
    },
    margins: {
        top: 50,
        bottom: 50,
        left: 100,
    },
    alignment: "center",
});

export default table3;
