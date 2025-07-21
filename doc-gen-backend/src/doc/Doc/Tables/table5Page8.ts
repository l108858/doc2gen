import { Table,TableRow,TableCell, Paragraph, TextRun,WidthType } from "docx";


const table5 = new Table({
    rows:[
        new TableRow({
            children:[
                new TableCell({
                    children:[
                        new Paragraph({
                            children:[new TextRun({text:"PCM Tested"})]
                        })
                    ]
                }),
                new TableCell({
                    children:[
                        new Paragraph({
                            children:[new TextRun({text:"Study Name"})]
                        })
                    ]
                }),
                new TableCell({
                    children:[
                        new Paragraph({
                            children:[new TextRun({text:"Study Reference"})]
                        })
                    ]
                }),
            ]
        }),
        new TableRow({
            children:[
                new TableCell({
                    children:[
                        new Paragraph({
                            children:[new TextRun({text:""})]
                        })
                    ]
                }),
                new TableCell({
                    children:[
                        new Paragraph({
                            children:[new TextRun({text:""})]
                        })
                    ]
                }),
                new TableCell({
                    children:[
                        new Paragraph({
                            children:[new TextRun({text:""})]
                        })
                    ]
                }),
            ]
        })
    ],
    width: {
        size: 10000,
        type: WidthType.DXA,
    },
    margins: {
                top: 200,
                bottom: 200,
                left: 100,
    },
})


export default table5;